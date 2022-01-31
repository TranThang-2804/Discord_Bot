module.exports = {
       name: 'leave',
       description: 'Bot leave voice channel',
       execute: async (client, message, args, Discord) => {
              client.distube.voices.leave(message)
       }
}