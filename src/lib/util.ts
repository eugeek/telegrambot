import { Markup, session } from 'telegraf';

export const infoHandler = async (ctx) => {
    const name = ctx.session.name || 'Друг'

    await ctx.reply(`${name}, ты изучил ${ctx.session.learned || 0} слов`)
    
    ctx.deleteMessage()
}


export const menuHandler = async (ctx) => {
    const name = ctx.session.name || 'друг'
    await ctx.reply(`Добро пожаловать, ${name}! Выбери, что бы ты хотел сделать:`, Markup.inlineKeyboard([
        [
            Markup.button.callback('Начать урок 👨‍🏫', 'start_lesson'),
            Markup.button.callback('Мои уроки 📖', 'my_lessons'),
        ],
        [  
            Markup.button.callback('Статистика 👀', 'stats'),
            Markup.button.callback('Поддержка 🔍', 'about')
        ]
    ]))
    ctx.deleteMessage()
}

export const aboutHandler = async (ctx) => {
    await ctx.reply(`Я разработан моим создателем @eugeek\nЕсли ты заметишь проблему, пожалуйста, напиши ему!`)
    await ctx.replyWithSticker('https://tlgrm.eu/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/192/19.webp')
    
    ctx.deleteMessage()
}