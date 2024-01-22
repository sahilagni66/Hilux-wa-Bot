const { SUDO, HANDLERS, WORK_TYPE } = require('../config.js');
const { serialize } = require('./serialize.js');
const { commands } = require('./plugins.js');
  module.exports = MsgHandler = async ( client , message) => {
  if (message.type !== "notify") return;
            let m = serialize(JSON.parse(JSON.stringify(message.messages[0])), client)
            let text = m.body
  // console.log(`ᴀᴛ : ${m.jid}\nғʀᴏᴍ : ${m.pushName}\nᴍᴇssᴀɢᴇ : ${m.body}` );
        commands.map(async (cmd) => {
              
if (cmd.fromMe && !( SUDO.split(",").includes(m.sender.split("@")[0]) || m.isSelf )) {
return;
     }
                let comman = m.text
                ? m.body[0].toLowerCase() + m.body.slice(1).trim(): "";

         /* if (HANDLERS === '^') return m.prefix = "noprefix"
          else m.prefix = new RegExp(HANDLERS).test(comman) ? comman[0].toLowerCase(): ",";
*/
                let args;

                switch (true) {
                    
                    case cmd.name && cmd.name.test(comman):
                      args = m.body.replace(new RegExp(cmd.name, "i"), "").trim();
                        cmd.function({
                            m, args, client 
                        });
                        break;

                    case m.body && cmd.on === "text":
                        args = m.body
                        cmd.function({
                            m, args, client
                        });
                        break;
                    case cmd.on === "image" || cmd.on === "photo":
                        if (m.type === "imageMessage") {
                            cmd.function({
                                m, client 
                            });

                        }
                        break;

                    case cmd.on === "sticker":
                        if (m.type === "stickerMessage") {
                            cmd.function({
                                m, client
                            });
                        }
                        break;
                    case cmd.on === "video":
                        if (m.type === "videoMessage") {
                            cmd.function({
                                m, client 
                            });
                        }
                        break;

                    default:
                        break;
                }

            })
                          }
