const { Telegraf, Context } = require("telegraf");
var axios = require('axios');
const bot = new Telegraf("5588110119:AAFe2hNNNC_sYUvZtIeh58LqDpzF78aJwhI");
bot.start(ctx => {
    console.log(ctx.message.from);
    ctx.reply("Hi");
})









bot.on("message", ctx => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd').then(response => {
        function search(input) {
            if (input.id === ctx.message.text) {
                return input.current_price;
            }
        }

        ctx.reply(response.data.find(search).current_price);
    }).catch(error => {
        console.log(error);
    });
});
bot.launch();