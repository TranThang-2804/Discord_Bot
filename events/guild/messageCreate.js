module.exports = (client, Discord, message) => {
       if(!message.content.startsWith(client.Prefix) || message.author.bot) return;

       const args = message.content.slice(client.Prefix.length).split(/ +/);
       const cmd = args.shift().toLowerCase();
       
       const command = client.commands.get(cmd);

       if(command) command.execute(client, message, args, Discord);

}