import { infoHandler, aboutHandler } from './../lib/util';
import { IBotContext } from '../context/context.interface';
import { Telegraf } from 'telegraf';
import { Command } from "./command.class";
import { menuHandler } from '../lib/util';

export class MenuCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }

    handle(): void {
        this.bot.hears('/menu', menuHandler)

        this.bot.action('stats', infoHandler)
        this.bot.action('start_lesson', infoHandler)
        this.bot.action('my_lessons', infoHandler)
        this.bot.action('about', aboutHandler)
    }
}