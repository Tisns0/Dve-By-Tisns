function _0xdf9f(){const _0x4fdbf2=['setMaxValues','setCustomId','channel','\x20in\x20**','user','../utils/getLocalizedMessage','permissionsFor','has','2016552mNfoEz','members','error','1244032ZqkPXM','tag','40002DsmzFh','**.','customId','editReply','discord.js','🎉\x20You\x27ve\x20been\x20added\x20to\x20the\x20channel\x20','config','toString','exports','addUser.alreadyInChannel','Error\x20sending\x20DM\x20to\x20added\x20user:','7YCzweG','setMinValues','locale','3710JFIUBU','626870ZuJUvg','deferReply','addUser.userNotFound','permissionOverwrites','40878wUBqcp','Error\x20adding\x20user\x20to\x20channel:','32roLYPq','values','ViewChannel','reply','1898634Ojdzpy','addUser.addFailed','addUser.selectUserPrompt','Flags','guild','addUser.addedSuccessfully','catch','addComponents','addUser','2125705qZupFG','get'];_0xdf9f=function(){return _0x4fdbf2;};return _0xdf9f();}function _0x2478(_0x241f2a,_0x17fd5a){const _0xdf9ffb=_0xdf9f();return _0x2478=function(_0x2478df,_0x3e5191){_0x2478df=_0x2478df-0xef;let _0x2444d4=_0xdf9ffb[_0x2478df];return _0x2444d4;},_0x2478(_0x241f2a,_0x17fd5a);}const _0x4d8529=_0x2478;(function(_0x2dec4e,_0x26e916){const _0x20c54f=_0x2478,_0x4eafce=_0x2dec4e();while(!![]){try{const _0x5d36f8=-parseInt(_0x20c54f(0xf0))/0x1+parseInt(_0x20c54f(0xf6))/0x2*(-parseInt(_0x20c54f(0x112))/0x3)+parseInt(_0x20c54f(0x10d))/0x4+-parseInt(_0x20c54f(0x103))/0x5+-parseInt(_0x20c54f(0xfa))/0x6*(parseInt(_0x20c54f(0x11d))/0x7)+-parseInt(_0x20c54f(0x110))/0x8+-parseInt(_0x20c54f(0xf4))/0x9*(-parseInt(_0x20c54f(0xef))/0xa);if(_0x5d36f8===_0x26e916)break;else _0x4eafce['push'](_0x4eafce['shift']());}catch(_0x25a8fa){_0x4eafce['push'](_0x4eafce['shift']());}}}(_0xdf9f,0x6e552));const {ActionRowBuilder,UserSelectMenuBuilder,PermissionsBitField}=require(_0x4d8529(0x116)),{QuickDB}=require('quick.db'),db=new QuickDB(),getLocalizedMessage=require(_0x4d8529(0x10a));module[_0x4d8529(0x11a)]={'name':_0x4d8529(0x102),async 'execute'(_0x393cd2,_0xf9f6b8){const _0x270578=_0x4d8529,_0x19ca5c=_0x393cd2[_0x270578(0x11f)][_0x270578(0x104)](_0x393cd2[_0x270578(0x118)]['language'])||_0x393cd2[_0x270578(0x11f)][_0x270578(0x104)]('en');if(_0xf9f6b8['isUserSelectMenu']()&&_0xf9f6b8[_0x270578(0x114)]===_0x270578(0x102)){await _0xf9f6b8[_0x270578(0xf1)]({'ephemeral':!![]});const _0x3c601d=_0xf9f6b8[_0x270578(0xf7)][0x0];if(!_0x3c601d){await _0xf9f6b8['editReply']({'content':getLocalizedMessage(_0x19ca5c,'addUser.userNotSelected'),'ephemeral':!![]});return;}const _0x333afc=await _0xf9f6b8['guild'][_0x270578(0x10e)]['fetch'](_0x3c601d)[_0x270578(0x100)](()=>null);if(!_0x333afc){await _0xf9f6b8[_0x270578(0x115)]({'content':getLocalizedMessage(_0x19ca5c,_0x270578(0xf2)),'ephemeral':!![]});return;}const _0x36ad16=_0xf9f6b8[_0x270578(0x107)],_0x4c3f6d=_0x36ad16[_0x270578(0x10b)](_0x333afc);if(_0x4c3f6d&&_0x4c3f6d[_0x270578(0x10c)](PermissionsBitField[_0x270578(0xfd)][_0x270578(0xf8)])){await _0xf9f6b8[_0x270578(0x115)]({'content':getLocalizedMessage(_0x19ca5c,_0x270578(0x11b)),'ephemeral':!![]});return;}try{await _0x36ad16[_0x270578(0xf3)]['edit'](_0x333afc['id'],{'ViewChannel':!![],'SendMessages':!![],'ReadMessageHistory':!![]}),await _0xf9f6b8[_0x270578(0x115)]({'content':getLocalizedMessage(_0x19ca5c,_0x270578(0xff),{'user':_0x333afc['user'][_0x270578(0x111)]}),'ephemeral':!![]});try{await _0x333afc['send']({'content':getLocalizedMessage(_0x19ca5c,'addUser.dmNotification',{'user':_0x333afc[_0x270578(0x109)]['username'],'channel':_0x36ad16[_0x270578(0x119)](),'guild':_0xf9f6b8[_0x270578(0xfe)]['name']})||_0x270578(0x117)+_0x36ad16['toString']()+_0x270578(0x108)+_0xf9f6b8[_0x270578(0xfe)]['name']+_0x270578(0x113)});}catch(_0x622222){console[_0x270578(0x10f)](_0x270578(0x11c),_0x622222);}}catch(_0x319445){console[_0x270578(0x10f)](_0x270578(0xf5),_0x319445),await _0xf9f6b8['editReply']({'content':getLocalizedMessage(_0x19ca5c,_0x270578(0xfb)),'ephemeral':!![]});}}else{const _0x530e1c=new UserSelectMenuBuilder()[_0x270578(0x106)](_0x270578(0x102))['setPlaceholder'](getLocalizedMessage(_0x19ca5c,'addUser.selectUserPlaceholder'))[_0x270578(0x11e)](0x1)[_0x270578(0x105)](0x1),_0x5310c9=new ActionRowBuilder()[_0x270578(0x101)](_0x530e1c);await _0xf9f6b8[_0x270578(0xf9)]({'content':getLocalizedMessage(_0x19ca5c,_0x270578(0xfc)),'components':[_0x5310c9],'ephemeral':!![]});}}};