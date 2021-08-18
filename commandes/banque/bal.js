const { Command } = require('discord.js-commando');

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
            msg.say(`Bonjour, je suis ${this.client.user.tag} (\`${this.client.user.id}\`)`);
	}
};
