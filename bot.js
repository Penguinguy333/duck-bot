const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('quacks', 'Quacks');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NDU2NjQ5MDM3MDg1NTQwMzYy.DgNoDg.VNwppI38pHmo9NHqsNF3EyeRoe4');
