const dotenv = require('dotenv');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

dotenv.config();

console.log(client.uptime/1000);

client.login(process.env.MONDAY_TOKEN);
