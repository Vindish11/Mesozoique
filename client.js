const { CommandoClient } = require('discord.js-commando');

const client = new CommandoClient({
	commandPrefix: '?', // Préfixe des commandes (ex: ?help)
	owner: 'VOTRE_ID_UTILISATEUR', // ID de l'owner du bot, peut également etre un tableau d'id pour plusieurs owners, ex: ['ID1', 'ID2']
        disableMentions: 'everyone' // Désactive, par sécurité, l'utilisation du everyone par le bot
});

client.registry
    .registerDefaultTypes()
    .registerGroups([])
;
