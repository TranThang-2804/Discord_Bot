module.exports = {
       name: 'queue',
       aliases: ['q'],
       description: 'Show the music queue',
       execute: async (client, message, args, Discord) => {
         const queue = client.distube.getQueue(message)
         if (!queue) return message.channel.send(`😭 Too bad | There is nothing playing!`)
         const q = queue.songs
           .map((song, i) => `${i === 0 ? 'PLAYING:' : `${i}.  `} *** \`${song.name}\` *** - \`${song.formattedDuration}\``)
           .join('\n')
         message.channel.send(`❥ Enjoy your time | **Server Queue:**\n${q}`)
       }
     }