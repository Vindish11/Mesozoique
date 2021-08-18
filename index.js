const CommandoClient = require('./client'); // Chargement du client de Discord Commando
const path = require('path') // on ajoute la librairie path
const fs = require('fs')
const dotenv = require('dotenv')

const envConfig = dotenv.parse(fs.readFileSync('.env'))
for (const k in envConfig) {
    process.env[k] = envConfig[k]
}

const client = new CommandoClient({
	commandPrefix: '-', // Préfixe des commandes (ex: ?help)
	owner: process.env.BOT_OWNER_ID, // ID de l'owner du bot, peut également être un tableau d'id pour plusieurs owners, ex: ['ID1', 'ID2']
        disableMentions: 'none' // Désactive, par sécurité, l'utilisation du everyone par le bot
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['divers', 'Divers'], // la première valeur correspond à la section 'group' de votre commande, la deuxième valeur sera utilisée pour l'affichage du nom du groupe, dans l'aide par exemple.
	['banque', 'Banque'],
	['bot', 'Bot'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commandes'))
;

client.once('ready', () => {
    console.log(`Je suis là !`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  db.set('userInfo', { bal: 0 })
})

client.on('error', console.error); // Afficher les erreurs

client.login(process.env.BOT_TOKEN);
