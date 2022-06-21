const { MessageEmbed } = require("discord.js");
const util = require("minecraft-server-util");

module.exports = {
    name: "status",
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute(client, message, args) {

        util.status("stormymc.com").then(response => {
            const embed = new MessageEmbed()
                .setColor("AQUA")
                .setTitle("**StormyMC status ⚡**")
                .addFields(
                    { name: "IP", value: "StormyMC.com", inline: true },
                    { name: "Online Players", value: `${response.players.online}/${response.players.max}`, inline: true }
                )
                .setThumbnail("https://cdn.discordapp.com/attachments/793342647556112384/945742410334478397/StormyMC.png")
                .setFooter({ text: `Requested by: ${message.author.tag}` })
                .setTimestamp();

            message.channel.send({ embeds: [embed] });
        })

            .catch((error) => {
                message.channel.send("There was an error finding this server!");
                throw error;
            });
    }

}