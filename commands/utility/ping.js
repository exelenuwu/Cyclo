const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config.json");
const vars = require("../../variables.json");

module.exports = {
  config: {
    name: "ping",
    description: "PONG! Displays the api & bot latency",
    usage: "c!ping",
    category: "miscellaneous",
    accessableby: "Members"
  },
  run: async (client, message, args) => {

    let loading = new Discord.RichEmbed()
    .setDescription(`Loading, please wait`)
    .setColor(vars.unknown)

    let response = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription(`Command Latency: **${new Date().getTime() -
      message.createdTimestamp}ms**\nAPI Latency: **${Math.round(
      client.ping
    )}ms**`)
    .setTimestamp()
    .setColor(vars.good)
    const msg = await message.channel.send(loading)

    setTimeout(function() {
      msg.edit(ping)
    }, 500);
  }
};
