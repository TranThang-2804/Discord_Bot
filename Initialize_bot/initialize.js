module.exports = (client, Discord) => {

       client.distube.on("searchNoResult", (message, query) => {
              message.channel.send(`No result found for ${query}!`)
       });

       client.distube.on("error", (channel, error) => {
              channel.send('There is some unexpected error 😵');
              console.log(error);
       });

       client.distube.on("addSong", (queue, song) => {
              queue.textChannel.send(
                     `👉 ADDED 🎶${song.name}🎶 - \`${song.formattedDuration}\` to the queue by ${song.user}.`
              )
       });

       client.distube.on("playSong", (queue, song) => {
              let msg = `:thumbsup: Now Playing 🎶 ***\`${song.name}\` *** 🎶 - \`${song.formattedDuration}\``
              if (song.playlist) msg = `Playlist: ${song.playlist.name}\n${msg}`
              queue.textChannel.send(msg)
       });

       client.distube.on("finish", queue => {
              queue.textChannel.send("No more song in queue 😓 so I'm leaving ...")
       });

       client.distube.on("empty", queue => {
              queue.textChannel.send("Channel is empty 😓. Good bye ...")
       });

       // client.distube.on("disconnect", queue => {
       //        queue.textChannel.send("I'm leaving 😢");
       // });
}