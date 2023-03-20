import { IBotContext } from './../context/context.interface';
import { Telegraf } from 'telegraf';

export class Lesson {
    bot: Telegraf<IBotContext>
    constructor(bot: Telegraf<IBotContext>) {
        this.bot = bot
    }

    async startLesson() {
        this.bot.on('text', (ctx) => {
            
        })
    }
}