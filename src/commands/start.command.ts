import { menuHandler } from './../lib/util';
import { IBotContext } from '../context/context.interface';
import { Telegraf, Markup } from 'telegraf';
import { Command } from "./command.class";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }

    handle(): void {
        this.bot.start(async (ctx) => {
            ctx.session.name = ctx.message.from.first_name || 'Юзер'
            await ctx.replyWithSticker('https://tlgrm.eu/_/stickers/ffb/53d/ffb53d6e-399a-48f2-b798-586605cbb536/6.webp')
            await ctx.reply(`Привет, ${ctx.message.from.first_name || 'май фрэнд'}! Меня зовут Лёрнер! Я помогу тебе выучить много новых английских слов!`, Markup.keyboard([Markup.button.callback('Меню 🎓', 'menu')]))
        })

        this.bot.hears('Меню 🎓', menuHandler)
    }
}