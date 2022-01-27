const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
       name: 'play',
       description: 'Joins and plays music from video from youtube',
       async execute(client, message, args, Discord) {
              const voiceChannel = message.member.voice.channel;

              if(!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');

              const permissions = voiceChannel.permissionsFor(message.client.user);

              if(!permissions.has('CONNECT')) return message.channel.send('You dont have the fucking correct permission');
              if(!permissions.has('SPEAK')) return message.channel.send('You dont have the fucking correct permission');

              if(!args.length) return message.channel.send("You forgot the name of the audio you fucking idiot!");


              const validURL = (str) => {
                     var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([w#!:.?+=&%!\-\/]))?/;
                     if(!regex.test(str)) {
                            return false;
                     } else {
                            return true;
                     }
              }

              if(validURL(args[0])) {
                     const connection = await voiceChannel.join();
                     const stream = ytdl(args[0], {filter: 'audioonly'});

                     connection.play(stream, {seek: 0, volumn: 1})
                     .on('finish', () =>{
                            voiceChannel.leave();
                     });

                     await message.reply(`:thumbsup: Now Playing ***${args[0]}***`);

                     return;
              }

              const { joinVoiceChannel } = require('@discordjs/voice');


              const connection = joinVoiceChannel({
                     channelId: message.member.voice.channel.id,
                     guildId: message.channel.guild.id,
                     adapterCreator: message.channel.guild.voiceAdapterCreator,
              });
              
              const { createAudioPlayer, NoSubscriberBehavior, createAudioResource, AudioPlayerStatus} = require('@discordjs/voice');

              const player = createAudioPlayer();

              const videoFinder = async(query) => {
                     const videoResult = await ytSearch(query);
                     return (videoResult.videos.length >1 ) ? videoResult.videos[0] : null;
              }

              const video = await videoFinder(args.join(' '));
              
              if (video) {
                     const stream = ytdl(video.url, { filter: format => format.container === 'mp4' });
                     const resource = createAudioResource(stream);
                     
                     player.play(resource);
                     
                     // Subscribe the connection to the audio player (will play audio on the voice connection)
                     connection.subscribe(player);

                     // player.on(AudioPlayerStatus.Idle, () => {
                     //        player.play(getNextResource());
                     // });

                     await message.reply(`:thumbsup: Now Playing ***${video.title}***`);
              } else {
                     message.channel.send('No video results found');
              }
       }
}