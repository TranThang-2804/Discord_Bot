module.exports = {
       app: {
           playing: 'by MONDAY '
       },
   
       opt: {
           DJ: {
               enabled: false,
               roleName: 'DJ',
               commands: []
           },
           maxVol: 100,
           loopMessage: false,
           discordPlayer: {
               ytdlOptions: {
                   quality: 'highestaudio',
                   highWaterMark: 1 << 25
               }
           }
       }
   };
   