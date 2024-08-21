const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
Alive_img: process.env.Alive_IMG ||"https://telegra.ph/file/7d7c08be87ecdca85f537.jpg"
Alive_msg: process.env.Alive_msg ||"Hellow,I am Tharusha sandipa i am alive now",
};
