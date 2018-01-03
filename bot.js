const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('quacks', 'Quacks');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('Mzk3NTg3NzczMjA2NDI5Njk3.DS3nyg.JB1TOfHU5Tc91x61YFn7_9jfIOw');
