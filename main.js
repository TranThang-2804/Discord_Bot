const Discord = require('discord.js');
const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

const dotenv = require('dotenv');

dotenv.config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

global.player = new Player(client);

['command_handler.js', 'event_handler.js'].forEach(handler => {
       require(`./handlers/${handler}`)(client, Discord)
});

client.login(process.env.MONDAY_TOKEN);
