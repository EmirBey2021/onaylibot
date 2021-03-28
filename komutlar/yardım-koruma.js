const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**HATIRLATMA!**`)
.setDescription(`**\`v!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**

<a:goldsettings:803229873577000960> **\`Sunucu Koruma\`**
<a:dcworker:761160023141122048>  **\`${prefix}anti-raid\`: Sunucuyu Patlamadan Korur.**
<a:dcworker:761160023141122048>  **\`${prefix}kanal-koruma\`: Sunucu Kanallarını Korur.**
<a:dcworker:761160023141122048>  **\`${prefix}rol-koruma\`: Sunucu Rollerini Korur.**
<a:dcworker:761160023141122048>  **\`${prefix}bot-izni ver/kaldır\`: Botun Sunucuya Giriş İznini Ayarlar.**
`)


.setImage("https://cdn.discordapp.com/attachments/803207183926820924/803238824490303508/Vexien.gif")
.setFooter(`Vexien Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["koruma"], 
  permLevel: 0
};

exports.help = {
  name: "yardımkoruma",
  description: 'Koruma Yardım Menüsü',
  usage: 'v!koruma'
};
