const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const db = require('quick.db');

module.exports = class ReplyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'add',
			memberName: 'add',
			group: 'banque',
			description: 'add.',
			clientPermissions: ['SEND_MESSAGES'], // le bot doit avoir la permission d'envoyer des messages
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
	                args: [
			        {
			                key: 'text',
			                prompt: 'Quel texte voulez-vous que le bot répondre ?',
			                type: 'number',
			        },
	                ],
		});
	}
  db.add(msg.author.id + '.bal', ${text});
	async run(msg, { text }) {
		msg.say(`Votre texte est: ${text}`);
	}
};
