const commando = require('discord.js-commando');

class Quack extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'sans',
            group: 'sanss',
            memberName: 'sans',
            description: 'sanss'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("sans undertale");
    }
}

module.exports = sans;
