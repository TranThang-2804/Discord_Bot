module.exports = {
       name: 'ping',
       description: 'test response',
       execute(client, message, args, Discord){
              message.channel.send('pong!');
       }
}