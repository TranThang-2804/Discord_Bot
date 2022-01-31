module.exports = (client, message, args, Discord) => {
       client.user.setPresence({ activities: [{ name: 'with TranThang ❤️' }], status: 'online' });
       console.log('MONDAY is online');
}