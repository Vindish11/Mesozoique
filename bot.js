const { Client, Intents } = require('discord.js'); // Chargement de la librairie discord.js
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Je suis prêt !`); // On affiche un message de log dans la console (ligne de commande), lorsque le bot est démarré
});

client.on('error', console.error); // Afficher les erreurs

// Lancement du bot, avec le token spécifié (que vous avez généré précédemment)
client.login('ODczNTk0NTg5ODk2OTIxMTg4.YQ6sXA.JQIfhuxIxZXXqsBYlfPEdCv5pxo');