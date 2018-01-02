var Discordie = require("Discordie");
var client = new Discordie();

client.connect({
	token: "Mzk3NTg3NzczMjA2NDI5Njk3.DS1qHA.7yRns-azBIjmygWf4DrsBay-VB4"
});

client.Dispatcher.on("GATEWAY_READY", e => {
	console.log("(Yes it works) Username: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	if (e.message.content === "!quak") {
        e.message.channel.sendMessage("quak!");
    } else if (e.message.content === "!meme") {
        e.message.channel.sendMessage("dank");
    } else if (e.message.content === "!help") {
        e.message.channel.sendMessage("!quak - quak");
		e.message.channel.sendMessage("!meme - dank");
	}
});