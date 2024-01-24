const {
    SUDO
} = require('../config.js');
const {
    toAudio
} = require("../lib/functions.js");
 cmd({
    on: "text",
    fromMe: isPublic,
},
    async({
        m, client, args
    })=> {

        let sudo = SUDO.split(",")
        var audios = ["https://i.imgur.com/vY8CfI7.mp4"]

        for (any in sudo)
            if (args.includes(sudo[any])) {

            const audio = audios[Math.floor(Math.random() * audios.length)]
            const Audio = await (await fetch(audio)).buffer()
            let image1 = await (await fetch('https://avatars.githubusercontent.com/u/88338865?v=4')).buffer()
            var res = await toAudio(Audio, 'mp4')
            client.sendMessage(m.jid, {
                audio: res,
                mimetype: 'audio/mpeg',
                ptt: true,
                waveform: [00, 99, 00, 99, 00, 99, 00, 99, 00, 99, 00, 99, 00, 99, 00, 99, 00, 99, 00, 99, 00, 99, 00, 99, 00],
                contextInfo: {
                    externalAdReply: {
                        title: "         バイパー💗",
                        body: "         バリッシュ💗",
                        mediaType: 2,
                        thumbnail: image1,
                        mediaUrl: '',
                        sourceUrl: '',
                        showAdAttribution: true
                    }
                }
            }, {
                quoted: false
            })

        }

    })
