const CommandoClient = require('./client'); // Chargement du client de Discord Commando
const path = require('path') // on ajoute la librairie path

const client = new CommandoClient({
	commandPrefix: '-', // Préfixe des commandes (ex: ?help)
	owner: process.env.BOT_OWNER_ID, // ID de l'owner du bot, peut également être un tableau d'id pour plusieurs owners, ex: ['ID1', 'ID2']
        disableMentions: 'none' // Désactive, par sécurité, l'utilisation du everyone par le bot
});

client.registry
    .registerDefaultTypes()
    .registerGroups([])
    .registerCommandsIn(path.join(__dirname, 'commandes'))
;

client.once('ready', () => {
    console.log(`Je suis là !`);
});

client.on('error', console.error); // Afficher les erreurs

client.login(process.env.BOT_TOKEN);