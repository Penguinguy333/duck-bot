const commando = require('discord.js-commando');

class Quak extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'san',
            group: 'sanss',
            memberName: 'san',
            description: 'sans'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("i dont like black people");
    }
}

module.exports = Quak;
