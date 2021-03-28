const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**HATIRLATMA!**`)
.setDescription(`**\`v!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**

<a:goldsettings:803229873577000960> **\`Genel Komutlar\`**
<a:yildiz:761160027125055491> **\`${prefix}kullanıcı-bilgi\`: Etiketlediğin/Kendi Profilin Hakkında Bilgi Verir.**
<a:yildiz:761160027125055491> **\`${prefix}sunucu-bilgi\`: Sunucu Hakkında Bilgi Verir.**
<a:yildiz:761160027125055491> **\`${prefix}yetkilerim\`: Sunucuda Olan Yetkilerinizi Gösterir.**
<a:yildiz:761160027125055491> **\`${prefix}kurallar\`: Hazır Kurallar Metni Atar.**
<a:yildiz:761160027125055491> **\`${prefix}sunucupp\`: Sunucunun PPsini Atar.**
<a:yildiz:761160027125055491> **\`${prefix}avatar\`: Avatarınızı Atar.**
`)

.setImage("https://cdn.discordapp.com/attachments/803207183926820924/803238824490303508/Vexien.gif")
.setFooter(`Vexien Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["genel"], 
  permLevel: 0
};

exports.help = {
  name: "yardımgenel",
  description: 'Genel Yardım Menüsü',
  usage: 'v!genel'
};
