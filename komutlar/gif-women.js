const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://cdn.discordapp.com/attachments/694694493525377035/737302021295833109/GIF-200727_113742.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737302739444301824/wqeqw.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737303378173886554/a_14254a7b0842b2a7f32a19cb34028da4.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737302765520551946/a_dfda87717edc3a1ee1057aec5304f082.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737310262906060810/image0.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737310178180989009/image0.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737310007929864252/image0.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737300958031380549/a_e052cc1eb09b212fa6b4c3644450b154.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif",  
    "https://cdn.discordapp.com/attachments/694694493525377035/737301817615974471/GIF.5.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737301870971846687/gif_346.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737301916379381790/gif_335.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737021018333249546/Lorie10.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737021142547693618/a_3a35e998e21a471ca9999b2e78051d53.gif",
    "https://cdn.discordapp.com/attachments/694694493525377035/737036899612360774/a_0edcde786dca1aa7cb3caf12af732bc5.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793083928851251240/a_e32b8b1a19c97350eb601e91baefbd45.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793084062377705482/a_ed6303efaf519f8fcb8cced19796e278.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793083388507455498/a_c52a9e62d57ae4b3ee378bc8c18d86b3.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793082763963793438/image0.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793081002071162890/image0-27-1.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793080947574308904/image0_3.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793080916385202206/image0-32_198637907205627-1.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793080913353375765/image0.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793080932079894538/image0_2.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793080866645082122/a_717c02cfbbdc97a5f53934f39f18b1be.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793079493627215872/a_0f184ea4499c5adfca69abba0151c2de.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793089278640914452/Zeyrox_19.gif",
    "https://cdn.discordapp.com/attachments/768913443839148082/793112096870891543/a_6e7345af013d989edfeb03bdb3be2849.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793466170246299648/4783.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793466029459374100/a_18e180164f274382b6cecae725c26350.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793466474584735744/image0_1.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793465365618622484/image1-3.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793466427063271424/790.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793466666557767690/a_3a2decc11272c8af46cb138596c464e5.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793460066451193907/1.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793460085820489768/2.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793460105143517204/4.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793460165693014027/karambit.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793460462285094932/1.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793460584439873546/image0.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793460675586424872/image0.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793460877990690816/a_983a0ec9b8127e4263e64964f306f883.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793461075987005452/image0.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793461640783069264/gif1467.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793463134614061077/image0.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793463191844683786/a_555205c1ab34286b6c06b8145f5be727.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793463238897565696/a_3fce2eee654ffb8b8cff94724150afb8.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793464422621904906/galatasaray.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793464449557594142/6874741.GIF",
    "https://cdn.discordapp.com/attachments/608711473652563968/793464485758369812/Arda191_1.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793464513928101908/11.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793466045914284072/Zeyrox_1.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793466046237507584/image0_3.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793466138582974514/image1.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793785324613664798/a_7c31b9024c8b3e7f7ceb73e63d0b0d9f.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793786158684307477/image8.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793785034929733632/19_1.gif",
    "https://cdn.discordapp.com/attachments/608711473652563968/793784907364040775/Zeyrox_24.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505991374241832/1-3.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505990296043540/403.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505976383930388/504.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505937565384724/38F9EDE6-D371-4C3C-8623-38F204562921.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505926677233674/12.gif"
  
  ];

  let result = Math.floor(Math.random() * replies.length);

  let gifembed = new Discord.MessageEmbed()

    .setTitle("Woman Gif ;")

    .setColor("BLUE")

    .setFooter(`${message.author.tag} `, message.author.avatarURL())

    .setImage(replies[result]);

  message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["gif-woman", "woman-gif", "gifwoman", "womangif"],

  permLevel: 0
};

exports.help = {
  name: "woman",

  description: "Rastgele Kadın GIF'i Atar",

  usage: "v!woman"
};
