function _0x4036(_0x41c3f3,_0x79601e){const _0x484d70=_0x484d();return _0x4036=function(_0x403627,_0x4e713e){_0x403627=_0x403627-0x12a;let _0x3e300d=_0x484d70[_0x403627];return _0x3e300d;},_0x4036(_0x41c3f3,_0x79601e);}const _0x3f0ea5=_0x4036;(function(_0x48d843,_0x3c3e50){const _0x78ff17=_0x4036,_0x5bdb79=_0x48d843();while(!![]){try{const _0x17628d=parseInt(_0x78ff17(0x133))/0x1*(-parseInt(_0x78ff17(0x144))/0x2)+-parseInt(_0x78ff17(0x12a))/0x3*(parseInt(_0x78ff17(0x140))/0x4)+parseInt(_0x78ff17(0x13d))/0x5+-parseInt(_0x78ff17(0x13c))/0x6*(-parseInt(_0x78ff17(0x134))/0x7)+parseInt(_0x78ff17(0x12d))/0x8*(-parseInt(_0x78ff17(0x130))/0x9)+parseInt(_0x78ff17(0x14a))/0xa+parseInt(_0x78ff17(0x137))/0xb;if(_0x17628d===_0x3c3e50)break;else _0x5bdb79['push'](_0x5bdb79['shift']());}catch(_0x5872e4){_0x5bdb79['push'](_0x5bdb79['shift']());}}}(_0x484d,0x51bee));const {cmd,commands,isPublic}=require(_0x3f0ea5(0x139)),{existsSync,mkdirSync,writeFileSync,readFileSync,createWriteStream}=require('fs'),fetch=require(_0x3f0ea5(0x142)),yts=require(_0x3f0ea5(0x13b)),ytdl=require(_0x3f0ea5(0x12e)),NodeID3=require(_0x3f0ea5(0x149)),sleep=_0xf2ee4=>new Promise(_0x5a9e56=>setTimeout(_0x5a9e56,_0xf2ee4)),axios=require('axios'),{AddMp3Meta}=require(_0x3f0ea5(0x12f));cmd({'name':'yt','fromMe':isPublic,'category':_0x3f0ea5(0x135),'desc':_0x3f0ea5(0x143)},async({m:_0xf2a9bc,client:_0x4bc97b,args:_0x4d597a})=>{const _0x46b7bf=_0x3f0ea5;if(!_0x4d597a)return _0xf2a9bc[_0x46b7bf(0x141)](_0x46b7bf(0x12c));let _0xd121b=await _0x4bc97b[_0x46b7bf(0x147)](_0xf2a9bc[_0x46b7bf(0x146)],{'text':_0x46b7bf(0x13e)},{'quoted':_0xf2a9bc}),_0xe9a3be=_0x46b7bf(0x14b),_0x319d5a=await yts(''+_0x4d597a),_0x587d28=_0x319d5a[_0x46b7bf(0x148)];for(let _0x3693a8=0x1;_0x3693a8<0xb;_0x3693a8++){_0xe9a3be+='_'+_0x3693a8+'\x20.'+_0x587d28[_0x3693a8]['title']+'_\x0a';}return _0x4bc97b['sendMessage'](_0xf2a9bc['jid'],{'text':''+_0xe9a3be,'edit':_0xd121b['key']});}),cmd({'name':'song','fromMe':isPublic,'category':_0x3f0ea5(0x135),'desc':'To\x20download\x20song'},async({m:_0x4b565e,client:_0x22bc20,args:_0x1f55c3})=>{const _0x5b3927=_0x3f0ea5;if(!_0x1f55c3)return _0x4b565e[_0x5b3927(0x141)]('_Enter\x20Query\x20!_');let _0xfae803=await _0x22bc20[_0x5b3927(0x147)](_0x4b565e['jid'],{'text':'_Searching..._'},{'quoted':_0x4b565e});const _0x3d01e2=await axios['get'](_0x5b3927(0x132)+_0x1f55c3);let _0x4e4c1b=await _0x3d01e2[_0x5b3927(0x138)],_0x292f6c=await(await fetch(''+_0x4e4c1b['data'][_0x5b3927(0x145)]))['buffer']();_0x22bc20[_0x5b3927(0x147)](_0x4b565e[_0x5b3927(0x146)],{'text':_0x5b3927(0x13f)+_0x4e4c1b[_0x5b3927(0x138)]['title']+'_','edit':_0xfae803['key']});const _0x3c4b25=await(await fetch(''+_0x4e4c1b[_0x5b3927(0x138)][_0x5b3927(0x12b)]))[_0x5b3927(0x13a)](),_0x2e967f=await AddMp3Meta(_0x3c4b25,_0x292f6c,{'title':_0x4e4c1b['data'][_0x5b3927(0x136)],'artist':_0x4e4c1b[_0x5b3927(0x138)]['channel'][_0x5b3927(0x131)]});return await _0x22bc20['sendMessage'](_0x4b565e[_0x5b3927(0x146)],{'audio':_0x2e967f,'mimetype':'audio/mpeg'},{'quoted':_0x4b565e});});function _0x484d(){const _0x1f5b7e=['https://api-viper-x.koyeb.app/api/song?name=','50737wGCacY','677761oXuTGA','downloader','title','12070289AqpqEx','data','../lib/plugins.js','buffer','yt-search','12KaMTwm','1966860ZtcoLa','_Searching..._','_Downloading\x20:\x20','4khXaUV','reply','node-fetch','To\x20download\x20yt\x20vid/aud','8wFVqKM','thumbnail','jid','sendMessage','all','node-id3','56630SRKHTj','_Youtube\x20Downloader_\x0a\x0a','1743429MPQRQj','downloadUrl','_Enter\x20Query\x20!_','42696FUYOUl','youtubedl-core','../lib/functions.js','963iKqBZv','name'];_0x484d=function(){return _0x1f5b7e;};return _0x484d();}
