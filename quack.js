const commando = require('discord.js-commando');

class Quack extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'quack',
            group: 'quacks',
            memberName: 'quack',
            description: 'quacks'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("quack");
    }
}

module.exports = Quack;
