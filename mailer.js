const TelegramApi = require('node-telegram-bot-api')

class Mailer {
  token = '1828560214:AAFIqXEpgfqvlWFOTt5eEmhCCCW1LbEYxcM'
  chatId = 471177922
  bot = new TelegramApi(this.token, { polling: true })

  sendOrder(flavor, comment) {
    this.bot.sendMessage(
      this.chatId,
      `Поступил заказ \n\n ${flavor} \n\n ${comment ? comment : ''}`
    )
  }s
}

module.exports = new Mailer()