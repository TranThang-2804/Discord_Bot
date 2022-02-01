module.exports = {
       name: 'leave',
       description: 'Bot leave voice channel',
       execute: async (client, message, args, Discord) => {
              message.channel.send("Alright I know I know. I'm leaving oke ...");
              client.distube.voices.leave(message)
       }
}