require("dotenv/config");

const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});

client.commands = new Collection();
client.events = new Collection();

["commands", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login();