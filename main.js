const Discord = require('discord.js');
const { DisTube } = require('distube')
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

const dotenv = require('dotenv');

const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')

dotenv.config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.distube = new DisTube(client, {
       leaveOnStop: false,
       emitNewSongOnly: true,
       emitAddSongWhenCreatingQueue: false,
       emitAddListWhenCreatingQueue: false,
       plugins: [
         new SpotifyPlugin({
           emitEventsAfterFetching: true
         }),
         new SoundCloudPlugin()
       ]
     });

require('./Initialize_bot/initialize')(client, Discord);


['command_handler.js', 'event_handler.js'].forEach(handler => {
       require(`./handlers/${handler}`)(client, Discord)
});

client.login(process.env.MONDAY_TOKEN);
