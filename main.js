const DISCORD = require('discord.js');

const CLIENT = new DISCORD.Client({ intents: [DISCORD.Intents.FLAGS.GUILDS] });

const dotenv = require('dotenv');

dotenv.config();


CLIENT.once('ready', () => {
       console.log('MONDAY is online');
})

CLIENT.login(process.env.MONDAY_TOKEN);