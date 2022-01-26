const FS = require('fs');

module.exports = (client, Discord) => {
       const command_files = FS.readdirSync('./commands/').filter(file => file.endsWith('.js'));

       for(const file of command_files) {
              const command = require(`../commands/${file}`)
              if(command.name) {
                     client.commands.set(command.name, command);
              } else {
                     continue;
              }
       }
}