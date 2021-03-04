const Discord = require('discord.js');
const uwu = require('uwu-js');
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {
    const word = '*';
    const userID = process.env.ID;

    if(msg.author.id === userID && msg.content.includes(word)) {
            msg.delete();
            msg.channel.send(uwu(msg.content).split(word)); 
    }
    else return;
}); 

client.login(process.env.TOKEN);  