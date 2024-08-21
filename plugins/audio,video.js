const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts =require('yts-search')


cmd({
    pattern: "audio",
    desc: "audio download",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me a url or sub title")  
const search = await yts(q)
const data = search,videos[0];
const url = data.url

let desc =`
Tharusha md song downloader

title;${data.title}
description; ${data.description}
time;${data.timestemp}
ago;${data.ago}
views;${data.views}

MADE BY CYBER THARU💚
`
await conn.sendMassage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download  audio

let down = await fg.yta(url)
let downloadurl =down.dl_url

  //send audio massage
  await conn.sendMessage(from,{audio: {url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek})


}catch(e){
  console.log(e)
  reply('${e}')
}
})
