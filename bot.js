const Discord = require("discord.js");
const axios = require("axios");
const client = new Discord.Client();
client.login(process.env.DISCORD_TOKEN);
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: 'available',
        activity: {
            name: 'with Kim Kardashian',
            type: 'PLAYING',
            url: 'https://discord.com'
        }
    });
 });

client.on("message", msg => {
  if (msg.content === "!quote") {
    axios
      .get("https://api.kanye.rest/")
      .then(function(response) {
        msg.reply(response.data.quote);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});
