const fs = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Commands");
table.setHeading("Command", "Load Status");

module.exports = client => {
    fs.readdirSync("./commands").forEach(folder => {
        const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith(".js"));
        for (file of commandFiles) {
            const command = require(`../commands/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
                table.addRow(file, "✅");
            } else {
                table.addRow(file, "❌");
            }
        }
    });
    console.log(table.toString());
}