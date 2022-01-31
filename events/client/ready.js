module.exports = (client, message, args, Discord) => {
       client.user.setPresence({ activities: [{ name: 'from TranThang ❤️' }], status: 'online' });
       console.log('MONDAY is online');
}