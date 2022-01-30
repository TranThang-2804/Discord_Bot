module.exports = {
       name: 'leave',
       description: 'bot leave voice channel',
       execute: async (client, message, args, Discord) => {
              client.distube.voices.leave(message)
              const queue = client.distube.getQueue(message)
       }
}