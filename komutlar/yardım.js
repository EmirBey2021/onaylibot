const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('GOLD')
.setTitle(`**HATIRLATMA!**`)
.setDescription(`**\`v!botbilgi\` Yazarak Botun Bilgilerine ve Linklerine Ulaşabilirsiniz.**`)
.addField(`<a:goldsettings:803229873577000960>__Moderasyon Komutları__`,`<a:registerbook:761160025506185248> \`${prefix}moderasyon\` `,true)

.addField(`<a:goldsettings:803229873577000960>__Kayıt Komutları__`,`<a:registerbook:761160025506185248> \`${prefix}kayıt\` **BETA**`,true)

.addField(`<a:goldsettings:803229873577000960>__Koruma Komutları__`,`<a:registerbook:761160025506185248> \`${prefix}koruma\` `,true)

.addField(`<a:ayarlar:761160028081094666>__Genel Komutlar__`,`<a:registerbook:761160025506185248> \`${prefix}genel\` `,true)

.addField(`<a:ayarlar:761160028081094666>__GIF Komutlar__`,`<a:registerbook:761160025506185248> \`${prefix}gif\` `,true)

.addField(`<a:ayarlar:761160028081094666>__Davet Komutlar__`,`<a:registerbook:761160025506185248> \`${prefix}davet\` **YAKINDA**`,true)

.setImage("https://cdn.discordapp.com/attachments/803207183926820924/803238824490303508/Vexien.gif")
.setFooter(`Vexien Bot ©2021 Tüm Hakları Saklıdır`)
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Yardım Menüsü',
  usage: 'v!yardım'
};
