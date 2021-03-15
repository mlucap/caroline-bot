const Discord = require('discord.js');
const uwu = require('uwu-js');
const chalk = require('chalk');
require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
	console.log(chalk.green.bold(`Logged in as ${client.user.tag}!`));
});

client.on('message', (msg) => {
	const word = process.env.PREFIX;
	const userID = process.env.ID;

	if (msg.author.id === userID && msg.content.includes(word)) {
		try {
			msg.delete();
			msg.channel.send(uwu(msg.content).split(word));
		} catch {
			console.log(chalk.red.bold('Something went wrong when deleting'));
		}
	} else return;
});

client.login(process.env.TOKEN);
