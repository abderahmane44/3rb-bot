const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


     client.on("message", message => {
      if (message.content === "$help") {
       const embed = new Discord.RichEmbed() 
           .setThumbnail(message.author.avatarURL)
           .setColor("#FF0000")
           .setDescription(`**    :sleuth_or_spy::skin-tone-1: اوامر الأداره :sleuth_or_spy::skin-tone-1:**
**============ **

  ** $role @user <rank> | لأعطاء رتبة لعضو معين**:large_orange_diamond: 

  ** $roleremove @user <rank> | لازالة الرتبة من شخص معين** :orange_book: 

  ** $role humans <rank> | لأعطاء رتبة للاشخاص فقط **:man: , :woman: 

  ** $role bots <rank> | لأعطاء رتبة لجميع البوتات**:robot: 

  ** $show | اضهار الشات المخفية**:blush: 

  ** $hide | اخفاء الشات**:arrow_heading_down: 

  ** $clear <numbr> | مسح الشات بعدد**:information_source: 

  ** $mute @user <reason> | اعطاء العضو ميوت لازم رتبة <Muted>**:mute:

  ** $unmute @user | لفك الميوت عن الشخص ** :loud_sound:

  ** $kick @user <reason> | طرد الشخص من السيرفر**  :outbox_tray:

  ** $ban @user <reason> | حضر الشخص من السيرفر** :no_entry:

  ** $lock | تقفيل الشات**:no_entry:

  ** $unlock | فتح الشات**:on:   

  ** $new |فتح تيكيت ** :tickets: 
 
  ** $close |لقفل التيكيت** :x:

  ** $date |لمعرفة الوقت**:date: 
 
  ** $id |لمعرفة معلوماتك**:id:

  ** $server |معرفة كل شي عن السيرفر**:information_source: 

  ** $bot | لمعرفة معلومات البوت**:robot: 

  ** $avatar |لعرض صورتك**:frame_photo: 

  ** $member |معرفة كم عضو و الحالات**:person_frowning: 

  ** $ping |كم سرعة الانترنت**:satellite:
 
  ** $invite |لدعوة البوت:robot: 

  ** invite link**:** https://discordapp.com/api/oauth2/authorize?client_id=532604442785349642&permissions=0&scope=bot**
  **Support 3rb bot link**:** https://discord.gg/YD4eaUf**
**             __~~3rb bot~~__ By: Wolf Gamer#3068             **
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`)
     message.author.sendEmbed(embed)
     
     }
     });









client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});


client.on('message', message => {
         if(message.content === prefix + "lock") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                });
                  }
      if(message.content === prefix + "unlock") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__:white_check_mark:**")
                });
      }
         
});



var prefix = "$"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});



var prefix = "$"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});



client.on('message', async message =>{
  var prefix = "$";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});



client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on("message", msg => {
    var prefix = "$";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField("🌪  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField("🆔  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField('🕵  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField('🛰   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField('🎖  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField('🤖  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});

client.on('message', message => {
    if (message.content === ('$bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@ايدي حقك>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})




client.on('message', message => {
   if (message.content.startsWith ("$id")) {
       if(!message.channel.guild) return message.reply('** This command only for servers **');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
      message.guild.fetchInvites()
       .then(invites =>{
 if(!invites.find(invite => invite.inviter.id === `${mentionavatar.id}`)) {
     let embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**" + `${mentionavatar.id}` + "**", true)
  .addField("Create At:", "**" + `${mentionavatar.createdAt}` + "**", true)
  .addField("Invites:", `**0**` ,true)
     .setFooter(`©  Dream™ `)
      message.channel.sendEmbed(embed);
 }else{
   let embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**" + `${mentionavatar.id}` + "**", true)
  .addField("Create At:", "**" + `${mentionavatar.createdAt}` + "**", true)

  .addField("Invites:", `**${invites.find(invite => invite.inviter.id === `${mentionavatar.id}`).uses}**` ,true)
    .setFooter(`©  Dream™ `)

  message.channel.sendEmbed(embed);
 }
 
       })
    }
});

client.on('message' , message => {

  if (message.author.bot) return;
    if(message.content.startsWith( "$invite")) {
 
const embed = new Discord.RichEmbed()
  .setFooter(`©  Dream™ `)
     .setColor(0xd3d0c4)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(':arrow_right: Click Here Invite Link اضغط هنا')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=532604442785349642&permissions=0&scope=bot')

message.channel.sendEmbed(embed);

}
});



client.on('message', message => {
    if(message.content == '$member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
             .setColor(0xd3d0c4)
            .setFooter(`©  Dream™ `)
         message.channel.send({embed});
    }
  });


client.on('message', message => {
    if (message.content === "$server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('ffffff')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: Server Id :',`${message.guild.id}`,true)
         .addField(':date: Create Date: ',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: Server Owner:',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: Members : ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: Channels:' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: Region:',message.guild.region)
         .addField(':ribbon: Server Emojis :',`${message.guild.emojis.size}`,true)
         .addField(':construction: VerificationLevel:',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: Roles Count : '+message.guild.roles.size+' ','Type`-roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });
	
	
	client.on('message', message => {
   
      if(message.content === prefix + "hide") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('**Channel Hided Successfully ! :white_check_mark:  **')            
 }
});


client.on('message', message => {
   
      if(message.content === prefix + "show") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**Channel Showed Successfully ! :white_check_mark:  **')            
 }
});
	
	client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        if(!message.member.hasPermission('MANAGE_ROLES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_ROLES`' );
    let member = message.mentions.users.first();
    let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
    console.log(role);
    if(member) {
         if(role.startsWith('>')) {
           let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
           console.log(roleRe);
           let role1 = message.guild.roles.find('name', roleRe);
           console.log(`hi`);
    const ee =new Discord.RichEmbed()
    .setDescription('**:x: I can’t find the role.**')
    .setFooter('Requested By '+message.author.username,message.author.avatarURL)
    if(!role1) return message.channel.send(ee);                message.guild.member(member).removeRole(role1.id);
   
                const e = new Discord.RichEmbed()
   
            .setDescription(':white_check_mark:** Changed Roles For **'+member+'**,** '+'**'+'-'+role1.name+'**')
           .setFooter('Requested By '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.channel.send(e)
       } else if(!role.startsWith('>')) {
           let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
           let role1 = message.guild.roles.find('name', roleRe);
    const ee =new Discord.RichEmbed()
    .setDescription('**:x: I can’t find the role.**')
    .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
    if(!role1) return message.channel.send(ee);                message.guild.member(member).addRole(role1);
           const e = new Discord.RichEmbed()
   
           .setDescription(':white_check_mark:** Changed Roles For **'+member+'**,** '+'**'+'+'+role1.name+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.channel.send(e)
       } else {
           message.reply(`يجب عليك كتابة اسم الرتبة`);
       }
    }
    else if(args[0] == 'all') {
    if(role.startsWith('>')) {
    let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
    let role1 = message.guild.roles.find('name', roleRe);
              message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
      message.guild.members.forEach(m => {
       message.guild.member(m).removeRole(role1.id);
    });
    msg.edit(`** :white_check_mark:   Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
    }
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return;
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
    message.guild.members.forEach(m => {
       message.guild.member(m).addRole(role1);
    });
    msg.edit(`** :white_check_mark:   Done...\n**` +  role1.name+`** Has Given To __${message.guild.members.size}__ Members **`);
    });
    }
    } else if(args[0] == 'humans') {
    if(role.startsWith('>')) {
    let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
    let role1 = message.guild.roles.find('name', roleRe);
              message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
      message.guild.members.forEach(m => {
       message.guild.member(m).removeRole(role1.id);
    });
    msg.edit(`** :white_check_mark:   Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
    }
   
    if(role) {
    let role1 = message.guild.roles.find('name', role);
   
    const ee =new Discord.RichEmbed()
    .setDescription('I Cann’t Find This Role')
    .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
    if(!role1) return message.channel.send(ee);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
       message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
           message.guild.member(m).addRole(role1);
       });
    msg.edit(`** :white_check_mark:   Done...**`);
    });
    }
    } else if(args[0] == 'bots') {
    if(role.startsWith('>')) {
    let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
    let role1 = message.guild.roles.find('name', roleRe);
              message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
      message.guild.members.forEach(m => {
       message.guild.member(m).removeRole(role1.id);
    });
    msg.edit(`** :white_check_mark:  Done...**`);
    });
    }
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    const ee =new Discord.RichEmbed()
    .setDescription('I Cann’t Find This Role')
    .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
    if(!role1) return message.channel.send(ee);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
       message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
           message.guild.member(m).addRole(role1);
       });
    msg.edit(`** :white_check_mark:  Done...\n**` +role1.name+`** Has Given To __${message.guild.members.size}__ Member**`);
    });
    }
    }
    }
    });
client.on("message", (message) => {
    /// DREAM
var prefix = '$';//البرفكس
//ملاحظ يجب عليك ان تسوي رتبة باْسم//
//Support Team//
   if (message.content.startsWith(prefix + "new")) {     /// DREAM
        const reason = message.content.split(" ").slice(1).join(" ");     /// DREAM
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `تم فتح تذكرة الرجاء انتظار الى حين يأتي مشرف ويقوم بلرد عليك`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب $confirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '$confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    /// DREAM
                   .then((collected) => {
                       message.channel.delete();
                   })    /// DREAM
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});


client.on('message' , message => {
  var prefix = "$";//البرفكس
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//حقوق دايموند كودز
 })
  }  
 });

client.on('guildMemberAdd', Sal => { //By Salto7#4595
    var embed = new Discord.RichEmbed()
    .setAuthor(Sal.user.username, Sal.user.avatarURL)
    .setThumbnail(Sal.user.avatarURL)
    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png') //هنا حط الصوره الي تبيها
    .setTitle('عضو جديد!')
    .setDescription('مرحبا بك بالسيرفر')
    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)
    .addField('``تاق العضو``', Sal.user.discriminator, true)
    .addField('``تم الانشاء في``', Sal.user.createdAt, true)
    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)
    .setColor('RANDOM')
    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)
    var channel =Sal.guild.channels.find('name', 'welcome') // هنا حط اسم الروم الي تبيه يكتب فيه
    if (!channel) return;
    channel.send({embed : embed});
    });








	
client.login(process.env.BOT_TOKEN);
	
	
	
	
	
	
	
	
	
