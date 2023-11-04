const kb = require('./keyboard-buttons')

module.exports = {
    home: [
        [kb.home.subscribe, kb.home.payment],
        [kb.home.help, kb.home.app]
    ],
    pay: [
        [kb.pay.online],
        [kb.back]
    ]
}