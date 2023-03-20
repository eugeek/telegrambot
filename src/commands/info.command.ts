import { IBotContext } from '../context/context.interface';
import { Telegraf } from 'telegraf';
import { Command } from "./command.class";
import { infoHandler } from '../lib/util';

export class InfoCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }

    handle(): void {
        this.bot.hears('/info', infoHandler)
    }
}