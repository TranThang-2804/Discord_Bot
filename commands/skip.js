module.exports = {
       name: 'skip',
       description: 'skip song in queue',
       inVoiceChannel: true,
       execute: async (client, message, args, Discord) => {
              const queue = client.distube.getQueue(message);
              if (!queue) return message.channel.send(`| There is nothing in the queue right now!`);
              try {
                     const song = await queue.skip();
                     message.channel.send(`\`Skipped!\``);
              } catch (e) {
              message.channel.send(`😵 OOPS there is some error :(`);
              }
       }
}