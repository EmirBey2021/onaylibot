const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`Kayıtçı Rolü Vereceğiniz Kullanıcıyı Belirtiniz ! `)

member.roles.remove(kayıtçı)

const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Kayıtçı Rolü Verildi `)
.setColor('PURPLE')
.setDescription(`${member} Adlı Kullanıcıdan Kayıtçı Rolü Alındı ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
 db.delete(`kayıtsayı_${member.id}`) 
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçıal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-al',
  description: 'Kayıtçı Rolünü Alır',
  usage: '!kayıtçı-al @kullanıcı'
}