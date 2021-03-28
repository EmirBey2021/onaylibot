const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737219065977765888/a_cb483fd9bfa2068e5b57aa6cf973986e.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106443932532796/gif_200.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106458080051330/gif_201.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737050698293968976/a_a873a018a2751ecaf654d116ae15c261.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737105973155463259/gif_180.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106004977647726/gif_182.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106176541589544/gif_187.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106247643562004/gif_191.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106368158367804/gif_196.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737013649058824252/a_ee0eab432a8d1eb6521c1a932dd04e22.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737038327672340541/a_2df0464c0f0e4dabf60385103b18addd.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737038499043213332/a_b4cad593a04df36fae504536a7971825.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039041022787624/image0.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039232065077269/image0-70.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039292832153640/kaan.gif.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737219065977765888/a_cb483fd9bfa2068e5b57aa6cf973986e.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106443932532796/gif_200.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106458080051330/gif_201.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737050698293968976/a_a873a018a2751ecaf654d116ae15c261.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737105973155463259/gif_180.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106004977647726/gif_182.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106176541589544/gif_187.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106247643562004/gif_191.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106368158367804/gif_196.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737013649058824252/a_ee0eab432a8d1eb6521c1a932dd04e22.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737038327672340541/a_2df0464c0f0e4dabf60385103b18addd.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737038499043213332/a_b4cad593a04df36fae504536a7971825.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039041022787624/image0.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039232065077269/image0-70.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039292832153640/kaan.gif.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif",

   "https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737219065977765888/a_cb483fd9bfa2068e5b57aa6cf973986e.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106443932532796/gif_200.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106458080051330/gif_201.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737050698293968976/a_a873a018a2751ecaf654d116ae15c261.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737105973155463259/gif_180.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106004977647726/gif_182.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106176541589544/gif_187.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106247643562004/gif_191.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737106368158367804/gif_196.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737013649058824252/a_ee0eab432a8d1eb6521c1a932dd04e22.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737038327672340541/a_2df0464c0f0e4dabf60385103b18addd.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737038499043213332/a_b4cad593a04df36fae504536a7971825.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039041022787624/image0.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039232065077269/image0-70.gif",
    "https://cdn.discordapp.com/attachments/694693923486171177/737039292832153640/kaan.gif.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793090149826166785/Zeyrox_13.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793090145901477938/Zeyrox_12.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793090140804218880/Zeyrox_11.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793093432015847454/tenor_4.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793093432884854784/a_d5d6cc843b1d6aee3467b3c39217ecd5.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793093433455017994/a_c68d894c472abef6a5df6919d2e4feeb.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793093434340540486/df97a18e7bcefd1db93a9c0d34b01a64.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793451255594876958/a_20010c9d56b6b0ad58b1cbb4647665ec.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793451248175022100/a_c37c3e8444419fc09d1d90edc19cf226.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793450934151544852/a_79a692441db08723a7eeb9f95b501c1b.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793451174694223882/image0_4.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793450932297007134/235423.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793449568313933834/a_59dd3dc529b0bd87f528542f723f2c3c.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793449367096262666/Maskeli_gangsert_gif.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793449524277411840/a_d5d999d6372016c4ef73c1cd633496a7.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793449365061894144/a_fe2fcf7473d179c5b18668d9fd9d679f.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793449334279766016/a_59b0a1609efc893ce2e0d83df3706835.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793449348368171018/a_82c024760e61a3a3f0f67845b8b13fec.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793443459439788082/Derin.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793443143017824256/CAMOMILE_Vinnie_Hacker.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793443078371147807/cimeriesgif22.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793442965157969940/What_the_title_saysSMUT_IMAGINES_PREFRENCES_I....gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793442350982365234/s___ss_x_s_s_-_1.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793442067979567124/TiktokPayton_Moormeier.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793441311084511272/8759c572-b4cd-450e-9da1-122ec23e3a0e.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793440731804074025/Broken_LipsB_G.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793440665248858142/Chase_Hudson_Lil_Huddy_GIF_-_ChaseHudson_LilHuddy_-_Discover__Share_GIFs.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793440250046447636/Noen_Eubanks_Dreamingbluee_GIF_-_NoenEubanks_Dreamingbluee_Noen_-_Discover__Share_GIFs.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793435871532679178/a_b948beb46e5106445841b43d0fa5c258.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793432633832767538/cimeriesgif11.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793432628833419274/cimeriesgif23.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793432619806490644/cimeriesgif20.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793432617763864586/cimeriesgif15.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793432593273061386/cimeriesgif8.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793432591129772042/cimeriesgif22.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793781038769897492/man_11.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793780630370254868/Kapson_ckaran_airpods.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793780611953066004/a_e5111cc31a9b7342af971a562581bd0c.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793780579208134696/Vesly_124-1.gif",
    "https://cdn.discordapp.com/attachments/608711476219478045/793777290084352020/image5.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505133581008916/a_b0d6d5339c94c457ec4018a086be964d.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505164043845642/a_f9ffa0493a8aef48e7e9f91d54343152.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505164043845642/a_f9ffa0493a8aef48e7e9f91d54343152.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505168355065876/a_f7f1166b9a3f415c8cdba39572aaf23e.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505582882848768/4621ec164a48c6d10331f8cd53c9fe25.gif",
    "https://cdn.discordapp.com/attachments/784338494629609512/794505665326481428/image0_3.gif",
  
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

  aliases: ["gif-man", "man-gif", "gifman", "mangif"],

  permLevel: 0
};

exports.help = {
  name: "man",

  description: "Rastgele Erkek GIF'i Atar",

  usage: "v!man"
};
