const TelegramApi = require('node-telegram-bot-api')
const axios = require('axios');




const token = '6736531227:AAHrUVtCwO76Pd4O57Ewm0lx0y2ja7nkv5E'
// const token = '5971034672:AAF1yrc_2IZjjOyqbfjalyD6wBlAsoF7RsA'
// const webAppUrl = 'https://labirintlc.uz/'
// const webAppTestUrl = 'https://labirintlc.uz/test'
const bot = new TelegramApi(token, {polling: true})

const keyboard = require('./keyboard')
const kb = require('./keyboard-buttons')

const start = async () => {
    bot.setMyCommands([
        {command: '/start', description: 'Main menu'},
        {command: '/help', description: 'Help'},
    ])

    bot.on('message', async msg => {
        console.log(msg);
        const text = msg.text;
        const chatId = msg.chat.id;
        
        try {
            if (text === '/start') {
                await bot.sendMessage(chatId, "🏠 Asosiy menyu", {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: '🔎 Mening obunalarim', callback_data: 'subscribe'
                                }
                            ],
                            [
                                {
                                    text: '💵 Obuna to\'lovi', callback_data: 'pay'
                                }
                            ],
                            [
                                {
                                    text: '❓ Yordam', callback_data: 'help'
                                }
                            ]
                        ]
                    }
                })
                return
            }
            if (text === "/help") {
                return bot.sendMessage(chatId, "Foydalanish shartlari ✅ - https://telegra.ph/Foydalanish-shartlari-10-25 \n\nSizda savollar bo\'lsa va to\'lovni amalga oshirish uchun: @MANAGERCryptohalal \n\nMa\'muriyat bilan bog\'lanish uchun: @Islamic_projects_UZ_bot");
                // return setTimeout(function() {
                //      bot.sendMessage(chatId, 'test');
                // }, 1500)
            }
            return bot.sendMessage(chatId, 'Men sizni tushunmayapman, qaytadan urinib k\'ring!)');
        } catch (e) {
            return bot.sendMessage(chatId, 'Qandaydur xatolik yuz berdi!)');
        }

    })

    bot.on('callback_query', async msg => {
        console.log(msg);
        // const data = msg.data;
        // const chatId = msg.message.chat.id;
        // let pass = await bot.getChatMember('@lesscodeacademy', chatId)

        // if (msg.data === 'subscribe') {
        //     if (pass.status === 'left' || pass.status === 'creator') {
        //         await bot.editMessageText('⭕️ Siz guruhga a\'zo emassiz', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        //     } else if (pass.status === 'member') {
        //         await bot.editMessageText('Siz guruhga a\'zosiz!', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        //     }
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: 'Orqaga', callback_data: 'home'
        //                 }
        //             ]
        //         ]                
        //     }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        // }
        if (msg.data === 'home') {
            await bot.editMessageText('🏠 Asosiy menyu', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '🔎 Mening obunalarim', callback_data: 'subscribe'
                        }
                    ],
                    [
                        {
                            text: '💵 Obuna to\'lovi', callback_data: 'pay'
                        }
                    ],
                    [
                        {
                            text: '❓ Yordam', callback_data: 'help'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            
        }
        if (msg.data === 'pay') {
            await bot.editMessageText('Sizga ma\'qul kelgan kursni tanlang 👇', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'CryptoSalam 💎', callback_data: 'categoryone'
                        }
                    ],
                    [
                        {
                            text: 'Orqaga', callback_data: 'home'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'help') {
            await bot.editMessageText('Foydalanish shartlari ✅ - https://telegra.ph/Foydalanish-shartlari-10-25 \n\nSizda savollar bo\'lsa va to\'lovni amalga oshirish uchun: @MANAGERCryptohalal \n\nMa\'muriyat bilan bog\'lanish uchun: @Islamic_projects_UZ_bot', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'Назад', callback_data: 'home'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'categoryone') {
            await bot.editMessageText('"CryptoSalam" kursida siz turli imkoniyatlarga ega tariflar ichidan o\'zingizga munosibini tanlab olishingiz mumkin! 👇', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'Tariflar 📜', callback_data: 'categoryonetarif'
                        }
                    ],
                    [
                        {
                            text: 'Orqaga', callback_data: 'pay'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'categoryonetarif') {
            await bot.editMessageText('Amaldagi tariflar: \n\n🔰 Tarif "1 Oylik" Narx: 69$ \n\n🔰 Tarif "3 Oylik" Narx: 170$ (-16%) \n\n🔰 Tarif "6 Oylik" Narx: 299$ (-24%) \n\n🔰 Tarif "Chegirmasiz" Tarif: 800$ \n\nTariflardan birini tanlang va yanada to\'liqroq ma\'lumot oling', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '1 OYLIK ', callback_data: 'paymethonemonth'
                        }
                    ],
                    [
                        {
                            text: '3 OYLIK', callback_data: 'paymeththreemonth'
                        }
                    ],
                    [
                        {
                            text: '6 OYLIK', callback_data: 'paymethsixmonth'
                        }
                    ],
                    [
                        {
                            text: 'CHEGIRMASIZ', callback_data: 'paymethnotsale'
                        }
                    ],
                    [
                        {
                            text: 'Orqaga', callback_data: 'categoryone'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'paymethonemonth') {
            await bot.editMessageText('1 oylik 🔰 69$ \n CryptoSalam asosiy kanali, muhokama guruhi, efirlar', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '💲 To\'lov uslublari', callback_data: 'paycategory'
                        }
                    ],
                    [
                        {
                            text: '📝 Promocode kiriting', callback_data: 'promocode'
                        }
                    ],
                    [
                        {
                            text: 'Orqaga', callback_data: 'categoryonetarif'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'paymeththreemonth') {
            await bot.editMessageText('3 oylik 🔰 170$ (-16%) \n CryptoSalam asosiy kanali, muhokama guruhi, efirlar', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '💲 To\'lov uslublari', callback_data: 'paycategory'
                        }
                    ],
                    [
                        {
                            text: '📝 Promocode kiriting', callback_data: 'promocode'
                        }
                    ],
                    [
                        {
                            text: 'Orqaga', callback_data: 'categoryonetarif'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'paymethsixmonth') {
            await bot.editMessageText('6 oylik 🔰 299$ (-24%) \n CryptoSalam asosiy kanali, muhokama guruhi, efirlar', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '💲 To\'lov uslublari', callback_data: 'paycategory'
                        }
                    ],
                    [
                        {
                            text: '📝 Promocode kiriting', callback_data: 'promocode'
                        }
                    ],
                    [
                        {
                            text: 'Orqaga', callback_data: 'categoryonetarif'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'paymethnotsale') {
            await bot.editMessageText('Chegirmasiz 💠 800$ \n CryptoSalam barcha resurslari va adminlar bilan doimiy aloqa', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '💲 To\'lov uslublari', callback_data: 'paycategory'
                        }
                    ],
                    [
                        {
                            text: '📝 Promocode kiriting', callback_data: 'promocode'
                        }
                    ],
                    [
                        {
                            text: 'Orqaga', callback_data: 'categoryonetarif'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'paycategory') {
            await bot.editMessageText('To\'lov amalga oshirish uchun o\'zingizga mos usulni tanlang!', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '💳 Crypto orqali (USDT)', callback_data: 'cryptopay'
                        }
                    ],
                    // [
                    //     {
                    //         text: '🔁 Boshqa usullar', callback_data: 'promocode'
                    //     }
                    // ],
                    [
                        {
                            text: 'Orqaga', callback_data: 'categoryonetarif'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'cryptopay') {
            await bot.editMessageText('Crypto orqali to\'lov amalga oshirish ularning turlari:', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'USDT (🔴TRC20)', callback_data: 'trc20'
                        }
                    ],
                    [
                        {
                            text: 'USDT (🔵Arbitrum)', callback_data: 'arbitrum'
                        }
                    ],
                    [
                        {
                            text: 'USDT (🟣Polygon)', callback_data: 'polygon'
                        }
                    ],
                    [
                        {
                            text: 'Orqaga', callback_data: 'paycategory'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'trc20') {
            await bot.editMessageText('USDT (🔴TRC20) \nTEoo4PJ2YKN6Wz2BqYTqQcWW3q8ANYpKc9', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'Orqaga', callback_data: 'cryptopay'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'arbitrum') {
            await bot.editMessageText('USDT (🔵Arbitrum) \n0xb13cCD3E207980C1F1B2546dAEff6d28A7B97052', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'Orqaga', callback_data: 'cryptopay'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
        if (msg.data === 'polygon') {
            await bot.editMessageText('USDT (🟣Polygon) \n0xb13cCD3E207980C1F1B2546dAEff6d28A7B97052', {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'Orqaga', callback_data: 'cryptopay'
                        }
                    ]
                ]                
            }, {message_id: msg.message.message_id, chat_id: msg.message.chat.id})
        }
    })
}

start()




// const TOKEN = "5336070499:AAFrn3cc5vInWMLnqbqHB7uC9BZRuxXk7dE";
// const CHAT_ID = "-1001792646372";
// const URI_API = `https://api.telegram.org/bot5336070499:AAFrn3cc5vInWMLnqbqHB7uC9BZRuxXk7dE/sendMessage`;


//   axios
//     .post(this.URI_API, {
//         chat_id: this.CHAT_ID,
//         parse_mode: "html",
//         text: `<b>Name:</b>\n<b>Surname:</b>\n<b>Phone:</b>`,
        
//     })
//     .then(() => {
//         console.log('then');
//     });
//     setTimeout(() => console.log('setTimeOut'), 1000)

