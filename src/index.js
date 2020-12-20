require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('new_chat_members', async (msg) => {
  await bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name} welcome!`);
});

bot.on('sticker', async (msg) => {
  await bot.sendMessage(msg.chat.id, 'Hello!');
})

bot.onText(/\/hello/, async (msg) => {
  await bot.sendMessage(msg.chat.id, 'Hello my friend');
});
