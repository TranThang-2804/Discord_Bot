const { MessageEmbed } = require('discord.js');

module.exports = {
       name: 'help',
       aliases: ['h', 'cmd', 'command'],
       description: 'show help',
       execute: async (client, message, args, Discord) => {
              const embed = new MessageEmbed();

              embed.setColor('RED');
              embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));
      
              const commands = client.commands.filter(x => x.showHelp !== false);
      
              embed.setDescription('This code comes from Tran Thang GitHub project \n https://github.com/TranThang-2804/Discord_BOT.git');
              embed.addField(`Enabled - ${commands.size}`, client.commands.map(cmd => `\`${cmd.name}:\` ${cmd.description}`).join('\n'));
              embed.setTimestamp();
              embed.setFooter('Music comes first - MONDAY always with you ❤️', message.author.avatarURL({ dynamic: true }));
      
              message.channel.send({ embeds: [embed] });
       }
}
