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

  //send audio + document massage
await conn.sendMessage(from,{audio: {url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadurl},mimetype:"audio/mpeg",fileName;data.title + ".mp3",caption:"MADE BY CYBER THARU"},{quoted:mek})

}catch(e){
  console.log(e)
  reply('${e}')
}
})

//===========video-dl==========

cmd({
    pattern: "video",
    desc: "video download",
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
Tharusha md video downloader

title;${data.title}
description; ${data.description}
time;${data.timestemp}
ago;${data.ago}
views;${data.views}

MADE BY CYBER THARU💚
`
await conn.sendMassage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download  video

let down = await fg.ytv(url)
let downloadurl =down.dl_url

  //send video + document massage
await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadurl},mimetype:"video/mp4",fileName;data.title + ".mp4",caption:"MADE BY CYBER THARUSHA"},{quoted:mek})



}catch(e){
  console.log(e)
  reply('${e}')
}
})
