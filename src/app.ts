import { InfoCommand } from './commands/info.command';
import { StartCommand } from './commands/start.command';
import { IBotContext } from './context/context.interface';
import { Telegraf, session } from 'telegraf'
import { IConfigService } from './config/config.inteface';
import { ConfigService } from './config/config.service';
import { Command } from './commands/command.class';
import PostgresSession from 'telegraf-postgres-session'

class Bot {
    bot: Telegraf<IBotContext>
    commands: Command[] = []

    constructor(private readonly ConfigService: IConfigService) {
        this.bot = new Telegraf<IBotContext>(this.ConfigService.get('TOKEN'))
        this.bot.use((new PostgresSession({
            connectionString: this.ConfigService.get('DB_LINK'),
                ssl: false
        })).middleware())
    }

    init() {
        this.commands = [
            new StartCommand(this.bot),
            new InfoCommand(this.bot)
        ]
        for (const command of this.commands) {
            command.handle()
        }
        this.bot.launch()
    }
}

const bot = new Bot(new ConfigService())
bot.init()