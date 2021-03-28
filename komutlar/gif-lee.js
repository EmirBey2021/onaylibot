const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://cdn.discordapp.com/attachments/609151097726173199/803756060107210752/tumblr_8b4f5d733d3283fcd72657e443e54274_fc7db73a_400_1.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804030762336387133/-Goblin-lee-dong-wook-40110500-268-194.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804030762977591394/-Goblin-lee-dong-wook-40110495-268-194.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804030763224793158/tumblr_pzoyrdPswp1qaz1b4o2_r4_500.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804030764458573885/tumblr_f442b291a2b17affad5596a029059622_a1fd84b5_500.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804030764911820840/24e19328ad1c0ec6be95cfe18f73a689.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804030765250641930/tumblr_794495f84701bfcf288afa6f67fd3d57_3374a65a_540.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804031011670589460/tumblr_85ed09307aa73ca4036772e22bc14ee5_aca0e50b_500.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804031012223844352/2e9714d9deb8ae97e74e359e9c2491d9.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804031013068079114/tumblr_ba29a77223f251ca715e195bd47f3ace_f1df4a87_400.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804031013717934090/tumblr_7249520fc74720876c519cc7d7b9193a_a5682548_500.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804031013935513660/tumblr_5f01f4c0dd000a5931fc76df1026e364_8fefe91c_500.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804031014220988519/tumblr_bac7f6e5acddda389d53456060c1287c_f80d1e82_500.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804031014606209085/tenor_6.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804031014938607646/tale_of_the_nine_tailed_1.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804031015525154856/lee-dongwook-the-tale-of-nine-tailed-cover.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804033735846264842/tumblr_6272523a98f040e10cca3de50eeed15a_7a10830e_400.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804033736433729556/tumblr_df74d3643c8dbe28e75864b6b6f83695_b4ee8477_540.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804033736433729556/tumblr_df74d3643c8dbe28e75864b6b6f83695_b4ee8477_540.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804033737376792626/bc03720dedfe3ea1c53aae8f95eebaa3.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804033737985490955/3a9a707c5efecf8346c9ed3782397a2b.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804033738689347694/tenor.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804034110230233169/08e28fae9b10ce6f3a074f082ebb15fb.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804034110606540831/b8600ee2159e4e85574cbdb753ed92bd.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804034111550652426/1581061655751-0.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804034111785271296/tumblr_45322c809ddd695864694e2c77a001dd_449ef35d_400.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804034112083591178/tumblr_inline_ox56o0DdbC1tlqojs_400.gif",
  "https://cdn.discordapp.com/attachments/609151097726173199/804034112384925764/VmjWyO.gif" 
  ];

  let result = Math.floor(Math.random() * replies.length);

  let gifembed = new Discord.MessageEmbed()

    .setTitle("Man Gif ;")

    .setColor("BLUE")

    .setFooter(`${message.author.tag} `, message.author.avatarURL())

    .setImage(replies[result]);

  message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0
};

exports.help = {
  name: "leedongwook",

  description: "Rastgele Lee Dong Wook GIF'i Atar",

  usage: "v!leedongwook"
};