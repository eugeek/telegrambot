import dotenv from 'dotenv'
dotenv.config()
import { AppDataSource } from './data-source';
import { MenuCommand } from './commands/menu.command';
import { InfoCommand } from './commands/info.command';
import { StartCommand } from './commands/start.command';
import { IBotContext } from './context/context.interface';
import { Telegraf } from 'telegraf'
import { Command } from './commands/command.class';
import PostgresSession from 'telegraf-postgres-session'

const postgresURL = `postgres://${process.env.PG_USER}:${process.env.PG_PASS}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB}`
class Bot {
    bot: Telegraf<IBotContext>
    commands: Command[] = []

    constructor() {
        this.bot = new Telegraf<IBotContext>(process.env.TOKEN || '')
        this.bot.use((new PostgresSession({
            connectionString: postgresURL,
                ssl: false
        })).middleware())
    }

    init() {
        this.commands = [
            new StartCommand(this.bot),
            new InfoCommand(this.bot),
            new MenuCommand(this.bot)
        ]
        for (const command of this.commands) {
            command.handle()
        }
        this.bot.launch()
    }
}

async function StartProject() {
    const { isConnected } = await AppDataSource.initialize()
    if(!isConnected) return new Error('Database error!')
    const bot = new Bot()
    bot.init()
}

StartProject()