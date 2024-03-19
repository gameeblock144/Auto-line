const express = require('express')
const app = express();
const port = 3000
app.get('/',(req, res) => res.send('ready'))

app.listen(port,() =>
console.log('ready')
); 

const { Client, Intents, Collection } = require('discord.js');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES
  ]
});




client.on("ready", ()=> {
 client.user.setActivity("Awamᵀᴹ")
  console.log(`Logged in ${client.user.tag}`)
})


client.on('messageCreate' , (ilyass)=>{
  if(ilyass.author.bot)return;
    if(ilyass.channel.id === '997636635258785882')//ايدي روم
    {
    ilyass.channel.send('https://media.discordapp.net/attachments/997636635258785882/1009872843917508719/channels4_profile.jpg')//رابط خط
    }
})




client.login(process.env.token);
