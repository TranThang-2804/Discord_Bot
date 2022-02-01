const initialize = require("../Initialize_bot/initialize");

module.exports = {
       name: 'insert',
       aliases: ['p'],
       description: 'Insert audio into the queue',
       inVoiceChannel: true,
       execute: async (client, message, args, Discord) => {
              const voiceChannel = message.member.voice.channel;
              // const permissions = voiceChannel.permissionsFor(message.client.user);
              // if(!permissions.has('CONNECT')) return message.channel.send('You dont have the fucking correct permission');
              // if(!permissions.has('SPEAK')) return message.channel.send('You dont have the fucking correct permission');
              // if(!args.length) return message.channel.send("You forgot the name of the audio you fucking idiot!");

              if(!voiceChannel) return message.channel.send('😵 You need to be in a channel to execute this command!');

              else {
                     const string = args.join(' ');
                     if (!string) return message.channel.send(`😵 | Please enter a song url or query to search.`);

                     client.distube.play(message.member.voice.channel, string, {
                            member: message.member,
                            textChannel: message.channel,
                            message
                     });
              }
       }
}