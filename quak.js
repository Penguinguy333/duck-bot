const commando = require('discord.js-commando');

class Quak extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'quak',
            group: 'quacks',
            memberName: 'quak',
            description: 'quaks'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("quak");
    }
}

module.exports = Quak;
