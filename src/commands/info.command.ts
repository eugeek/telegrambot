import { IBotContext } from '../context/context.interface';
import {  Telegraf } from 'telegraf';
import { Command } from "./command.class";

export class InfoCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }

    handle(): void {
        this.bot.hears('/info',(ctx) => {
            const name = ctx.update.message.from.first_name
            ctx.reply(`${name}, вы изучили ${ctx.session.learned || 0} слов`)
        })
    }
}