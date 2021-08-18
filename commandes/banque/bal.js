const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bal',
			memberName: 'bal',
			group: 'banque',
			aliases: ['money'],
			description: 'Give your money balance.',
	                guildOnly: false,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}

	async run(msg) {
		if (typeof(db.get(msg.author.id + '.bal')) === 'number') {
     msg.channel.send('Your current balance is ' + db.get(msg.author.id + '.bal') + '.');
    }else{
     db.add(msg.author.id + '.bal', 0);
     msg.channel.send('Your current balance is 0.');
    }
  }
};
