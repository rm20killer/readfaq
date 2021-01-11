/* eslint-disable no-inline-comments */
const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config");
const prefixl = config.prefix


let FAQwords =["can't join",'cant join', 'cannot join','unknown host','server be released','is the server is started','servers ip','what version','is server bedrock','what ip','join on bedrock','resolve hostname','TLauncher','server ip','server cracked','server bedrock','server bedrock edition','join server','join the server',' bedrock edition server','server release','have cracked account','can i play on','server going to be bedrock','can cracked']
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("you Type", { type: "WATCHING"})
    //client.user.setPresence({ game: { name: 'Videos' , type: 'WATCHING' }, status: 'idle' })
    .then(console.log)
    .catch(console.error);
    console.log(FAQwords.length)
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefixl)) return;
    const args = msg.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefixl.length).toLowerCase();

    if(cmd === 'ping') {
        msg.reply('pong, ' + `${Date.now() - msg.createdTimestamp}` + ' ms');
    }

});

client.on('message', message => {
    try
    {
        var channelname = message.channel.parent.name
    }
    catch{
        console.log("message not sent in catoragy")
    }

    if (channelname =='💬 | Community') {
        for (var i = 0; i < FAQwords.length; i++) {
            if (message.content.includes(FAQwords[i])) {
                message.reply(`read <#795824501555855380>`);
            break;
            }
        }
    }
    if(channelname =='📄 | Support Tickets') {
        for (var i = 0; i < FAQwords.length; i++) {
            if (message.content.includes(FAQwords[i])) {
                message.reply(`read <#795824501555855380>`);
            break;
            }
        }
    }   
});

// client.login(process.env.token);
client.login(config.BotToken);