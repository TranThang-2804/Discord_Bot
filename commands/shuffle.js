module.exports = {
       name: 'shuffle',
       description: 'Shuffle the queue',
       inVoiceChannel: true,
       execute: async (client, message, args, Discord)  => {
              const queue = client.distube.getQueue(message);
              if (!queue) return message.channel.send(`😭 | There is nothing in the queue right now!`);
              queue.shuffle();
              message.channel.send('😉 Shuffled songs in the queue 😉');
       }
     }