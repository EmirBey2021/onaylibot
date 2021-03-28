const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**HATIRLATMA!**`)
.setDescription(`**\`v!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**

<a:goldsettings:803229873577000960> **\`Erkek Rol Komutları\`**
<a:bluestar:761160042132537344> **\`${prefix}erkek-rol @rol\`: Erkek Rolünü Ayarlar.**
<a:bluestar:761160042132537344> **\`${prefix}erkek-rol sıfırla\`: Erkek Rolünü Sıfırlar.**
<a:bluestar:761160042132537344> **\`${prefix}erkek @kullanıcı isim yaş\`: Erkek Olarak Kayıt Edersiniz.**

<a:goldsettings:803229873577000960> **\`Kız Rol Komutları\`**
<a:redstar:761160040760868864> **\`${prefix}kız-rol @rol\`: Kız Rolünü Ayarlar.**
<a:redstar:761160040760868864> **\`${prefix}kız-rol sıfırla\`: Kız Rolünü Sıfırlar.**
<a:redstar:761160040760868864> **\`${prefix}kız @kullanıcı isim yaş\`: Kız Olarak Kayıt Edersiniz.**

<a:goldsettings:803229873577000960> **\`Alınacak Rol Komutları\`**
<a:purplediamond:761160026181730315> **\`${prefix}alınacak-rol @rol\`: Kayıt Olunca Alınacak Rolü Ayarlar.**
<a:purplediamond:761160026181730315> **\`${prefix}alınacak-rol sıfırla\`: Kayıt Olunca Alınacak Rolü Sıfırlar.**

<a:goldsettings:803229873577000960> **\`Kayıtçı Rol Komutları\`**
<a:bluediamond:761160022365306890> **\`${prefix}kayıtçı-rol @rol\`: Kayıtçı Rolünü Ayarlar.**
<a:bluediamond:761160022365306890> **\`${prefix}kayıtçı-rol sıfırla\`: Kayıtçı Rolünü Sıfırlar.**
<a:bluediamond:761160022365306890> **\`${prefix}kayıtçı-ver @kullanıcı\`: Belirttiğiniz Kullanıya Kayıtçı Rolü Verir.**
<a:bluediamond:761160022365306890> **\`${prefix}kayıtçı-al @kullanıcı\`: Belirttiğiniz Kullanıcıdan Kayıtçı Rolünü Alır.**

<a:goldsettings:803229873577000960> **\`Kayıt Kanal Komutları\`**
<a:registerbook:761160025506185248> **\`${prefix}kayıt-kanal #kanal\`: Kayıt Kanalını Ayarlar.**
<a:registerbook:761160025506185248> **\`${prefix}kayıt-kanal sıfırla\`: Kayıt Kanalını Sıfırlar.**

`)


.setImage("https://cdn.discordapp.com/attachments/803207183926820924/803238824490303508/Vexien.gif")
.setFooter(`Vexien Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["kayıt"], 
  permLevel: 0
};

exports.help = {
  name: "yardımkayıt",
  description: 'Kayıt Yardım Menüsü',
  usage: 'v!kayıt'
};

  

    
