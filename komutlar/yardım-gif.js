const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**HATIRLATMA!**`)
.setDescription(`**\`v!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**

<a:goldsettings:803229873577000960> **\`GIF Komutları\`**
<a:yildiz:761160027125055491> **\`${prefix}couple\`: Sevgili Gif i Atar.**
<a:yildiz:761160027125055491> **\`${prefix}woman\`: Kadın Gif i Atar.**
<a:yildiz:761160027125055491> **\`${prefix}man\`: Adam Gif i Atar.**
<a:yildiz:761160027125055491> **\`${prefix}baby\`: Bebek Gif i Atar.**
<a:yildiz:761160027125055491> **\`${prefix}leedongwook\`: (İstek Üzerine Eklendi) Lee Dong Wook Gif i Atar.**
`)

.setImage("https://cdn.discordapp.com/attachments/803207183926820924/803238824490303508/Vexien.gif")
.setFooter(`Vexien Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["gif"], 
  permLevel: 0
};

exports.help = {
  name: "yardımgif",
  description: 'GIF Yardım Menüsü',
  usage: 'v!gif'
};
