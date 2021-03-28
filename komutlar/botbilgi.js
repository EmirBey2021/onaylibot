const Discord = require("discord.js");

exports.run = (client, message) => {
  let levi = new Discord.MessageEmbed()

    .setAuthor("İSTATİSTİKLERİM")
    .addField(
      "<a:ayarlar:761160028081094666> Veriler",
      `> Toplam Sunucu: **${
        client.guilds.cache.size
      }** \n> Toplam Kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> Toplam Kanal: **${
        client.channels.cache.size
      }** \n> Toplam Komut: **${client.commands.size}**`
    )
    .addField(
      "<a:developer_2:803897479358709781> Geliştiricilerim",
      `> <@546463891970981913> \n> <@285381019106803712>`
    )
    .addField(
      "<:javascript:803244009328738304> Sürümler",
      `> Discord.js Sürümü: **v${Discord.version}** \n> Node.js Sürümü: **${process.version}**`
    )
    .addField(
      "<a:dcworker:761160023141122048> Gecikmeler",
      `> Bot Pingi: **${
        client.ws.ping
      }** \n> Mesaj Gecikmesi: **${new Date().getTime() -
        message.createdTimestamp}**`
    )

    .addField(
      "<a:partner:761193205432582164> Davet Linklerim",
      "> [Beni Sunucuna Ekle](https://discord.com/api/oauth2/authorize?client_id=803917452101812274&permissions=8&scope=bot) \n > [Destek Sunucum](https://discord.gg/gwsAUBXQPn)"
    )
    .setFooter(`Vexien Bot ©2021 Tüm Hakları Saklıdır`)

    .setTimestamp()
    .setColor("GOLD");
  message.channel.send(levi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i", "botbilgi"]
};

exports.help = {
  name: "istatistik",
  description: "Botun Bilgilerini Gösterir",
  usage: "v!botbilgi"
};
