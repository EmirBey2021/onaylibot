const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**HATIRLATMA!**`)
.setDescription(`**\`v!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**

<a:goldsettings:803229873577000960> **\`Moderasyon Komutları\`**
<a:dcworker:761160023141122048> **\`${prefix}modlog\`: Log Kanalını Ayarlarsınız.**
<a:dcworker:761160023141122048> **\`${prefix}ban <user>\`: Kişiyi Sunucudan Banlar.**
<a:dcworker:761160023141122048> **\`${prefix}unban <user>\`: Kişinin Banını Kaldırır.**
<a:dcworker:761160023141122048> **\`${prefix}nuke\`: Kanala Nuke Atar.**
<a:dcworker:761160023141122048> **\`${prefix}sohbet-aç/kapat\`: Sohbeti Açar/Kapatır.**
<a:dcworker:761160023141122048> **\`${prefix}reklam aç/kapat\`: Reklam Engellemeyi Açar/Kapatır.**
<a:dcworker:761160023141122048> **\`${prefix}küfür aç/kapat\`: Küfür Engellemeyi Açar/Kapatır.**
<a:dcworker:761160023141122048> **\`${prefix}temizle/sil <0-100>\`: Belirtilen Miktarda Mesajı Siler.**
<a:dcworker:761160023141122048> **\`${prefix}say\`: Üye Durum Grafiğini Gösterir.**

<a:goldsettings:803229873577000960> **\`Oto Rol Komutları(BAKIM)\`**
<a:dcworker:761160023141122048> **\`${prefix}otorol-ayarla\`: Coming Soon(Yakında).**
<a:dcworker:761160023141122048> **\`${prefix}otorol-kapat\`: Coming Soon(Yakında).**

<a:goldsettings:803229873577000960> **\`Jail Sistemi Komutları\`**
<a:dcworker:761160023141122048> **YAKINDA**

<a:goldsettings:803229873577000960> **\`Mute Sistemi Komutları\`**
<a:dcworker:761160023141122048> **YAKINDA**
`)








.setImage("https://cdn.discordapp.com/attachments/803207183926820924/803238824490303508/Vexien.gif")
.setFooter(`Vexien Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["moderasyon", "mod"], 
  permLevel: 0
};

exports.help = {
  name: "yardımmoderasyon",
  description: 'Moderasyon Yardım Menüsü',
  usage: 'v!moderasyon'
};
