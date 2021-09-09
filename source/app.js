const env = require('dotenv').config();

const Telegraf = require('telegraf');

const handler = new Telegraf(process.env.API_TOKEN);


handler.command('start', ctx => {
    console.log(ctx.from)
    handler.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})