module.exports = (client, Discord) => {
       client.distube.on("playSong", (queue, song) => {
              let msg = `:thumbsup: Now Playing ***\`${song.name}\` *** - \`${song.formattedDuration}\``
              if (song.playlist) msg = `Playlist: ${song.playlist.name}\n${msg}`
              queue.textChannel.send(msg)
       });

       client.distube.on("error", (channel, error) => {
              channel.send('There is some unexpected error');
              console.log(error);
       });

       client.initialized = false;
}