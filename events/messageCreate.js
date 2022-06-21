require("dotenv/config");
const { prefix } = require("../config");
const cooldowns = new Map();


module.exports = {
    name: "messageCreate",
    execute(message, client) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        try {
            if (!commandName) return;
            command.execute(client, message, args);
        } catch (error) {
            console.error(error);
            message.reply("There was an error trying to execute that command!");
        }
    }
}