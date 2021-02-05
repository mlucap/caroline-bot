const Discord = require('discord.js');
const uwu = require('uwu-js');
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {
    if (!msg.author.id === '365935903581143042') return;

    if(msg.author.id === '365935903581143042') {
        msg.channel.send(uwu(msg.content));
    }
});

client.login(process.env.TOKEN);