const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
 if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
  if (db.has(`antiraidK_${message.guild.id}`) === false) {
    return message.channel.send(
      "Anti-raid Açılmamış. Açmak İçin **v!anti-raid aç**"
    );
  }
  if (!args[1]) return message.reply("Lütfen Bir Bot IDsi girin");

  if (isNaN(args[1])) {
    return message.reply("803196868813258772");
  }
  if (args[0] == "ver") {
    client.users.cache.get(args[0]);
    db.set(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + " IDli Bota İzin Verildi");
  }
  if (args[0] == "kaldır") {
    db.delete(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + " IDli Botun İzni Kaldırıldı");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "bot-izni",
  description: 'Bot İznini Ayarlar',
  usage: 'v!botizin ver/kaldır'
};
