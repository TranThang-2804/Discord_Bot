module.exports = {
       name: 'customlol',
       aliases: [],
       utilisation: '{prefix}customlol',
       description: 'This is for spinning teams for lol custom game (prototype and havent being working yet)',
       async execute(client, message, args, Discord) {
              const embed = new Discord.MessageEmbed();

              embed.setColor('RED');
              embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

      
              embed.setDescription('This bot comes from Tran Thang GitHub project \n https://github.com/TranThang-2804/Discord_BOT.git (currently is private) \n ');
              embed.addFields({name: 'NOTE' , value: '***Click React To Be Counted As Attendance***'});
              embed.setTimestamp();
              embed.setFooter('Have fun with your friends - MONDAY always with you ❤️', message.author.avatarURL({ dynamic: true }));
      
              let messageEmbed = await message.channel.send({ embeds: [embed] });
              messageEmbed.react('👋');

              // client.on('messageReactionAdd', async (reaction, user) => {
              //        console.log('alo');
              //        client.events.forEach(event => {
              //               console.log('chao' , event);
              //        });
              //        if (reaction.message.partial) await reaction.message.fetch();
              //        if (reaction.partial) await reaction.fetch();
              //        if (user.bot) return;
              //        if (!reaction.message.guild) return;

              //        if(reaction.message.channel.id == message.channel) {
              //               if (reaction.emoji.name === '👋') {
              //                      console.log('player reacted');
              //               }
              //        } else {
              //               return;
              //        }

              // })
       },
};