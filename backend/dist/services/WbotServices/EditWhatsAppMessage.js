'use strict';const u=b,v=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x164;let h=e[f];return h;},b(c,d);}function a(){const y=['459OcyvTe','GVCsk','1677105fhBtjW','../../helpers/socketEmit','ticket','16506306lUiamh','quotedMsg','No\x20message\x20found\x20with\x20this\x20ID.','../../errors/AppError','tenantId','getTime','default','ERR_EDITING_WAPP_MSG','bPDQg','../../models/Ticket','4856MEsUxa','../../models/Message','4491410yjwxxX','xbHoV','findOne','349344UkUtRl','dataJson','parse','sendMessage','remoteJid','5831NCLGbY','key','edited','4191464APASok','createdAt','contact','update','5672PayDuW','sCGRS','__esModule'];a=function(){return y;};return a();}(function(c,d){const s=b,t=b,e=c();while(!![]){try{const f=parseInt(s(0x180))/0x1+parseInt(t(0x17b))/0x2*(-parseInt(t(0x17e))/0x3)+parseInt(s(0x177))/0x4+parseInt(s(0x16c))/0x5+parseInt(s(0x16f))/0x6+parseInt(s(0x174))/0x7*(-parseInt(t(0x16a))/0x8)+-parseInt(t(0x183))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdda80));var __importDefault=this&&this['__importDefault']||function(c){return c&&c['__esModule']?c:{'default':c};};Object['defineProperty'](exports,u(0x17d),{'value':!![]});const AppError_1=__importDefault(require(u(0x186))),GetTicketWbotBaileys_1=__importDefault(require('../../helpers/GetTicketWbotBaileys')),Message_1=__importDefault(require(u(0x16b))),Ticket_1=__importDefault(require(u(0x169))),socketEmit_1=__importDefault(require(v(0x181))),EditWhatsAppMessage=async({messageId:c,tenantId:d,body:e})=>{const w=u,x=v;let f;try{f=await Message_1[w(0x166)][w(0x16e)]({'where':{'messageId':c,'tenantId':d},'include':[{'model':Ticket_1[w(0x166)],'as':x(0x182),'include':[x(0x179)]}]});if(!f){if(w(0x168)===x(0x17f))throw new d['default'](w(0x167));else throw new AppError_1[(x(0x166))](x(0x185));}}catch(l){throw new AppError_1['default']('ERR_FINDING_MSG');}const {ticket:g}=f,h=await(0x0,GetTicketWbotBaileys_1[x(0x166)])(g),i=JSON[x(0x171)](f[x(0x170)]),j=i[x(0x175)][x(0x173)];try{await h[w(0x172)](j,{'text':e,'edit':i['key']},{});const m=(new Date()[x(0x165)]()-new Date(f[w(0x178)])[w(0x165)]())/0xea60;if(m>0xa){if(x(0x16d)!==x(0x16d))throw new d[(w(0x166))](w(0x185));else throw new AppError_1['default']('ERR_EDITING_WAPP_MSG');}if(f[x(0x176)]!==null){if('sCGRS'===w(0x17c))throw new AppError_1[(x(0x166))](w(0x167));else throw new d[(w(0x166))](x(0x167));}await f[x(0x17a)]({'edited':e});const {ticket:n}=f;(0x0,socketEmit_1[x(0x166)])({'tenantId':n[x(0x164)],'type':'chat:update','payload':f});const o=await Message_1[x(0x166)]['findOne']({'where':{'messageId':c,'tenantId':d},'include':[{'model':Ticket_1['default'],'as':'ticket','include':[x(0x179)]},{'model':Message_1['default'],'as':w(0x184),'include':[w(0x179)],'where':{'tenantId':d},'required':![]}]});return{'ticketId':o['ticketId'],'message':o};}catch(r){throw new AppError_1['default']('ERR_EDITING_WAPP_MSG');}};exports[u(0x166)]=EditWhatsAppMessage;