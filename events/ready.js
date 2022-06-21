const { } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}\n`);
        client.user.setPresence({ activities: [{ name: "StormyMC.com" }] });
    }
}