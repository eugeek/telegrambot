import { IBotContext } from '../context/context.interface';
import { Markup, Telegraf } from 'telegraf';
import { Command } from "./command.class";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }

    handle(): void {
        this.bot.start(async (ctx) => {
            await ctx.replyWithSticker('https://tlgrm.eu/_/stickers/ffb/53d/ffb53d6e-399a-48f2-b798-586605cbb536/6.webp')
            await ctx.reply('Привет мой фрэнд! Меня зовут Лёрнер! Я помогу тебе выучить много новых английских слов!', Markup.inlineKeyboard([
                Markup.button.callback('Начать урок 🧠', 'start_lesson'),
                Markup.button.callback('Моя статистика 👀', 'check_info')
            ]))
        })

        this.bot.action('start_lesson', ctx => {
           this.bot.inlineQuery('/home', ctx => console.log(ctx))
        })
    }
}