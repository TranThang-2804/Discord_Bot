const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');

global.AbortController = require("node-abort-controller").AbortController;

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

const dotenv = require('dotenv');

dotenv.config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler.js', 'event_handler.js'].forEach(handler => {
       require(`./handlers/${handler}`)(client, Discord)
});

client.login(process.env.MONDAY_TOKEN);
