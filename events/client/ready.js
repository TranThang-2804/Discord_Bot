module.exports = (client, message, args, Discord) => {
       client.user.setPresence({ activities: [{ name: 'with TranThang❤️', type: 'Playing' }], status: 'online' });
       console.log('MONDAY is online');
}