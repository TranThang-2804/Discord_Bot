const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',
    description: 'Monday shout out to you',
    execute(client, message, args, Discord) {
        message.channel.send(`Last heartbeat calculated ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago **${client.ws.ping}ms** 🛰️`);
    },
};