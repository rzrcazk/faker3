/*
new Env('getToken');

变量：
JD_TOKEN_INTERVAL   //获取接口403延迟等待时长（正整数），默认延迟 30s=30000ms
JD_NEWTOKEN_INTERVAL   //获取接口成功延迟等待时长（正整数），默认延迟 0s
JD_CACHE_INTERVAL   //缓存TOKEN时长（正整数），默认缓存 25 分钟
JD_PROXY_OPEN      // 代理启用变量，默认不开启（true/false）
JD_PROXY_TUNNRL      // 代理地址变量，默认不开启，仅支持代理池模式(auto-proxy-pool)，格式为：http://ip:port
JD_NO_PROXY      // 禁止走代理，默认 127.0.0.1,*.baidu.com 需要自行修改
JD_TOKEN_CUSTOM_CACHE      // 定义默认缓存文件路径 此文件默认存储在仓库 `function/cache` 目录下
根据自行需要设定，缓存文件数据通用，不再区分域名
*/

var version_='jsjiami.com.v7';const ili1iliI=iiii1iIl;(function(lI111IiI,IiIi1liI,IIil11Ii,I1iii1i1,IiII1l1,lil1IIil,iII11iI){return lI111IiI=lI111IiI>>0x1,lil1IIil='hs',iII11iI='hs',function(iIIiillI,i1IiI1II,il1IIl1I,I1illii1,i1i1iI1l){const il1l1I=iiii1iIl;I1illii1='tfi',lil1IIil=I1illii1+lil1IIil,i1i1iI1l='up',iII11iI+=i1i1iI1l,lil1IIil=il1IIl1I(lil1IIil),iII11iI=il1IIl1I(iII11iI),il1IIl1I=0x0;const iiII1l1i=iIIiillI();while(!![]&&--I1iii1i1+i1IiI1II){try{I1illii1=parseInt(il1l1I(0xe6,'B$iK'))/0x1*(parseInt(il1l1I(0x127,'pTlT'))/0x2)+-parseInt(il1l1I(0x110,'pTlT'))/0x3*(parseInt(il1l1I(0xef,'(7l!'))/0x4)+-parseInt(il1l1I(0xd4,')A1i'))/0x5*(parseInt(il1l1I(0xcf,'hJKt'))/0x6)+parseInt(il1l1I(0x13d,'(paH'))/0x7*(parseInt(il1l1I(0xe7,'yd1('))/0x8)+-parseInt(il1l1I(0x10f,'KB[%'))/0x9+parseInt(il1l1I(0x118,'UjFs'))/0xa+parseInt(il1l1I(0x131,'B$iK'))/0xb;}catch(I111iIii){I1illii1=il1IIl1I;}finally{i1i1iI1l=iiII1l1i[lil1IIil]();if(lI111IiI<=I1iii1i1)il1IIl1I?IiII1l1?I1illii1=i1i1iI1l:IiII1l1=i1i1iI1l:il1IIl1I=i1i1iI1l;else{if(il1IIl1I==IiII1l1['replace'](/[eENKMkHXJVfTwbnBuGARgS=]/g,'')){if(I1illii1===i1IiI1II){iiII1l1i['un'+lil1IIil](i1i1iI1l);break;}iiII1l1i[iII11iI](i1i1iI1l);}}}}}(IIil11Ii,IiIi1liI,function(lilli1i,lil1111I,lIIlll,ii1lll11,lIIilIIi,llIlIil,i1lli1il){return lil1111I='\x73\x70\x6c\x69\x74',lilli1i=arguments[0x0],lilli1i=lilli1i[lil1111I](''),lIIlll=`\x72\x65\x76\x65\x72\x73\x65`,lilli1i=lilli1i[lIIlll]('\x76'),ii1lll11=`\x6a\x6f\x69\x6e`,(0x1429c1,lilli1i[ii1lll11](''));});}(0x182,0xf14a8,IIilIll1,0xc3),IIilIll1)&&(version_=IIilIll1);const iIIiIIi=require(ili1iliI(0x160,'ifBc')),iI1lIlli=require('./krgetSign'),Il111Ili=process[ili1iliI(0x15a,'0ksP')]['JD_CACHE_INTERVAL']||'25';let ilII1lIi=parseInt(Il111Ili)*0x3c*0x3e8;const lIlIlI11=require('./cache/index'),II111il=new lIlIlI11(ilII1lIi,process[ili1iliI(0x14b,'PyeB')]['JD_TOKEN_CUSTOM_CACHE']||__dirname+ili1iliI(0x104,')A1i')),illI1I1i=[ili1iliI(0xcc,'544s'),ili1iliI(0xf8,'mHUp')],i1ii1I1l=illI1I1i[lII1i11i(0x0,illI1I1i[ili1iliI(0x148,'544s')])],IiiIll=i1ii1I1l,iilll1il=process[ili1iliI(0x15a,'0ksP')][ili1iliI(0x13e,'px6b')]||'',Iii1II11=process['env']['JD_PROXY_OPEN']===ili1iliI(0xd0,'Lq!p'),I1I1l1l=process[ili1iliI(0x13b,'fF!9')][ili1iliI(0x12c,'Z47p')]||'',I1i11li=process[ili1iliI(0x12a,'544s')][ili1iliI(0x10c,'FH44')]||ili1iliI(0x11c,'dS)6'),lIIl11ii=process[ili1iliI(0x122,'(paH')][ili1iliI(0x162,'lYwI')]||'30',i1Ill1lI=process[ili1iliI(0xe4,'Pd3F')]['JD_NEWTOKEN_INTERVAL']||'0';let I11IiiIl=![];if(Iii1II11){I11IiiIl=!![];try{require(ili1iliI(0x15d,'oxC)')),global['GLOBAL_AGENT'][ili1iliI(0x135,'MPiX')]=I1I1l1l||'',global['GLOBAL_AGENT']['NO_PROXY']=ili1iliI(0x142,'Pd3F')+I1i11li,I1I1l1l==''?(console[ili1iliI(0x12f,'Z47p')]('⚠\x20当前检测到已开启代理，但未填写代理地址变量'),console['log'](ili1iliI(0xf1,'MPiX')),console['log'](ili1iliI(0x139,'pAh*'))):(console['log']('☑️\x20代理已开启，建议设置Token等待时间为\x200\x20秒'),console[ili1iliI(0x12f,'Z47p')]('☑️\x20代理地址为：'+global[ili1iliI(0xdb,'%6&t')][ili1iliI(0xb4,'Z47p')]+'\x0a'));}catch(I1l1I1ll){console[ili1iliI(0xb6,'(paH')](ili1iliI(0xfd,')A1i'));}}else console['log'](ili1iliI(0xae,'yd1(')),console[ili1iliI(0x129,'Gw#X')](ili1iliI(0x144,'Z47p'));console[ili1iliI(0xd5,'Wt)e')](ili1iliI(0xb3,'Q#^A')+lIIl11ii+'\x20秒\x20|\x20成功等待\x20'+i1Ill1lI+'\x20秒\x20|\x20缓存时间\x20'+Il111Ili+'\x20分钟\x0a');function IIilIll1(){const IllIilIi=(function(){return[...[version_,'eGjnksuEjHiRamwib.cMowSGmg.nBvVV7XKNATJf==','cCkBW6u','W5e0qSoo','g8kvoCoiimkpWQSFwCkicCkDrSk9hLlcNhmMW58G','WOJcUSoNW4JdIq','edtcKtddSa','W4VcPe8','W5BdLwlcISoH','WQmsiCkjkG','WPhcImkc','W5qqav0E','rsm4rSoS','4PMvhEw9J+wjPUAJJ+A2R+wkGow1NUw9LUwqSEs6JEEsTE+9OUs8MEAFRUwIJEweVos7QUEqQ+wCVowFU+wnSEMfIa','dmkhW7tdICo3tSoEWPmFWQCoWP8y','uMXcFaFdJSoMvCoDWPVdM8ohza','eCoEyq','WQhcOmon','WO/cJ8o4','WPpdLN3cMdtdS2nrW7ldQmobW7BdRCkwWRdcPmox','d8kDWO/dO8kxsr8ezmkhg8o0W4tdMXu','W5RdLmkyxKO','4P+CfaVdGSkyW5zQWOlcGmoqW6hcJrtcHYVcPoE8HowVQEwKIoI3S8om4P6/WPe','kCk2WRC','8yYjPmkkW7xdPsRcQHHQlSo1CgddLrlORlFMS7lLPkxOT5a8','W4ddS8k2A3eqA3/dPG5LzWlcOa','WP7cQLXSva','W7zvW69iW7C','W5hdMSo4dHddRhtcVMNcJa','W6yDWPjpWQiRW6BdQmk5lq','WODUEJ5D','bSkBW6BdOW','W4BdHmo9zSor','4PIIzEwoR+MhHo+9QSkvW6tdQSoysNqdWONcH29gWQddKCozW4PJW6XIh8kRW7/dSSonW6Ttw8kYWRWFD8oZWQWdx8otW4WIW4NcQSkr5lQ85Aob55UI6l23W70','WQ8DxW','W7vAgG','ganlWOtdNW','W4pdLmodWRmqWRZdNCoQWRzFFq','W63cJ3C4FKJcISo+W5JdSHlcTum','pmkaW6JdGmoe','W6VcOeq4BW','W7pdG8kyB2ZcTtaZ','DK7cNbVdHHjsEmotWRZdJSkXW4G','4PMdW7/OR53NNQFMMO3KUiRNKylLN7ZLNlVKUl/MLBtMJkJKUjBNK6VMSzRMQ4hLVO/dG2yVymkTWR7dH2VcKw0Gwmk2WOGLW4ZdRW','4PULW7NLV5dLKPZKUkBNKidLJP/PHPlVVkhcTJBdISoLW7STeSoVW7rzW7HlWO3cPJaRBSo7WQuIWPnLW4brW7xcUXihoG','bGqnWOmykSkjW5pcVmkoW5xcPZe+','WPufWP95WQK','iI93WR/dHG','WOBcHmoGwCoMWQa','FSoOx8kRFq','WP5ObmkKW4/dIHbFedepdG','WQpdI3O','WRmhta','WQldT0BdL0i','WQZdQ2ldSXW','uJxcTCkNaq','gCo/DCkkaa','ksf3WRmP','kqWKh2JcP8kcx8oCWO0','W6rBb8ocWOi','lcTiWR3dRq','W7P2WPRcHmk5wua','W4PMgSkGW4RdLCkWjSobqYXhuG','W43dGCo9eYi','W7VdHmkgqMdcTa','c1bdWR3dIq','WPhdGMi'],...(function(){return[...['8kAjN8kIW6hdSfZdV8kpf8kJfmoqkXlcI+ISVEAYG+wNUUI0VSog4P67ySoLb8k1rrGBWQioW4hcLSohxWRcSq','WRu8WQPyWP0','WPCmkSkhaJ4lWP3cOIj5nWVcMmoryXlcOmooCSonia','W7P2WO7cGCkR','WPdcOmoFCmov','W5i6qG','W5S5WPDtWPm','aczqWRRdU8oBbHJcOWmhCmkWdSkUWOVcPa','kvf/WOhdTmooeHK','WRn7c8knW40','rde9uSoidxJcKa','WQqoy2uD','WQtdIMJdOq','WQJcT8opW7e','WR/cQSozW6ldRZdcJri','8yszPJ9tyaH+fSorACoiwmovlq7ORB3MSjNPL6BOR4VcLokEVfdNRANLKkdOJ7FLJRhLPj7OTPy','8yUkHbu7C17cNSkxFrvpWQpcGXtcL+ISHEAXNowMLoI2ItS','cbj6WQ3dHa','jG1O','rxyeWP/dJJ7dNW','lXCVh2xcUmkisq','WQ4aAa','W5C6uSow','WQCKfSk3fa','WONcJSk1W7em','4PMdW7/MO6RMTiNLVO3LIQtMQAxLV4pMNzhLV7RLKBtKU4RNK7pVV6hPU6lORytNMBtOVlxOV5FOOjy','wSoGxN1l','xSoPc0RdLSonWPVdMxqAu8kR','W7jBcmoE','ELNcTLH5','4PUK77IYph9GWO/dLCoc5AwN6ls756YN5BY2tG','dCknWOtdO8kAvHusy8kk','WP91bCk8','WPJcICkt','WR7cQxjnuG','4P+ozrbUbmkKW7pdSCosvIbXWQBcP1LL5QUt5z+j5yIH6l+U5Asn6lADf+kFJCof','WRb5W7NcGSk6W68E','W6RdUSonkJRdJ2xcNLxcSa','tSo8rW','WRnWrZXeW4hcRmkJW7fuA0dcGmkq','W5jaW4fqW78','exbtWQxdLmoRjdlcRJNcS8kzWQZdS8oJhr5IW7DIWOpdGmkjhq','4PMT77MJaos4QoErV+w2TUw/UUwtKE+/S+w4UUITGoITQoE9OLVdPa47W5NNR5/LV7pML6ZPLB/KU4xcOwhdM+EKIa','W5WSWQD7WOq','4PQu77IVWOpcJ8kfW4WfW70yWPBdOSkEWQJcTCo9pZlNVi/LRyVMI6lLIPm9','WPpcJsJdKcG','W6ZdGGlcPSotW69VEu7dKub6WRBdMmoIW5SMW6HRw8oddmkBWQddSmkpW7a9W4DvzXbOWPtcTmowsZ4XDryVDSkbeIni','W7xdOCol','WQFcLgDmFa','W5WSWRvVWPivW4FdGG','WPqWtq','W6/dPmks','W5XNW4iQW5PCWQqDcCoHWOajW5JcVG','WO8MxNK8','q8o8Dhnk','WOlcLCo6tSkOW6FdN8kOW7FdP8kso1K9xhKrWRddOmoMAaruW4JcRmk8gt0D','WOGKWObXWPW','Cmo3yv51','eqVdKZO8W4jmW69OWPeIrSk3','W6ddLmkzqG','W4eHnCk2baTi','W6NdQ8kqEmo8','W5Htc8oaWQO','WQVdS8oexCo+mSk1','n1TR','i8kwWPxdPCkp','gSouCG'],...(function(){return['W4iMWQe','r8kXWQVdNmkSAey','wCkGWRNdM8k4Fg7dK3jsASkWla','WR8tzCotWRlcQmozh8orCcbD','emkpWRVdOmkd','WPJcHmo9tSo9WQBcG8kS','W6S+WRddRxC','WQXLAh93','W7zuW6tcJ8kj','jWi2W6ldQG','WOW0B8oFWQS','WRpcVSkZW7X9','oq7cGq','WPdcK8oYeci','W4dcG8o2dcj8ma','W5xdPHWlWQNcHWVcRrW','B8kmWOJdPSkFsMldOG','4P2SWRnxxe4XW6ZdQcBcKCkfW4xcMxtdUIpMQiJLNRdLIylOVixLPRROTlddOUkFJ8kL','uSo2q0Lvc8oWW6y','W6BdPCkd','maxcMrxdNb0','W44Ug1GO','FGdcMmkpfW','W5VcScVcPKBcS3uIWRNdKmoFhCke','z8oFF3T7kCoCW4ieWRRdQ8od','4PIoAEISSEEFUUAARUs6MoEsSUwEL+wEOEs6SEAuK+AmMUs4IUErUoAXN+APSEw8NCk1DdpcICkfW49hcCo7cLhdT1iVWRldUSoq','y8oKfuBdKa','WOG4WOq','WO97d8kHW5tdGG','wNyhWOddJJRdNW','WPJdG3m','WQFcIZNdJq4','WOuIWOzUW5rgWR5gfSkRWQ02W7xcTuemW4JcVJpdMG7cPCo4W6RcGG','xSocFCks','8l6kI8kdWO/cHCombCo9gmkwW6lcNSk7WOddKowDVUwLHEEqMUIVPoAYSoAxUUMbSowkIUs4L+MuU+ISLW','WP/cUw1DAXTdh8od','mCkRWRNdNG','6k2P5AYJ6kgBumoicSkypueEWQbZW4dcTCoH5l2z6lEB77695OMT6ikt5zoQ55Ef5lMq55kz7728dW','WQRcKvWlWQC','6kYu5A2w6koVjCkYWOyMWQ0xW5C6tSkqWOno5l296lEw77+N5OMk6ikN5zc755EQ5lMW55kX77YyW7q','W4tcPeyDuN3cSmo0W6hdJa','caiRWPBdIthcVKldUYlcLrq','4PU777UUWQ7KU53NKPtLN7JLNRdKU7pVVP0','W4pdRCokdbK','WRhdICo/vmomamovkejyWQr6WOVcSCoMWQVdOW','WOFcG8ka','WO/cSe0','WOxcHrhdPa8','gGtdLZGYW4jkW7PRWPSzzmkW','WRBdHh7dQ3C','dtCx','FXxcRSkIfW','ASoxB3D1oSotW5emWQFdVa','WRPwlSkhW7RdOWXYpHeVlG','WOxdPNW','WQGJWRiPWOddPNjEWROHDCo8pr0','vXSYp3lcNCkf','WPqKywmt','wJSP','W5fNWOdcRSkj','WRFcImkgW4vG','8lklVHBdIeSyWOisW7xdKCkOuteWC+AoP+wpNoI/VEwyJUw9HUw6LCoL4P63W6e','WP3cRCoH','WRJcJCkyW5vW','W5xdUIWepu4AcSo+rCo3n8o/','W5/dUs0hnuuCpmoJq8oVe8ov'];}())];}())];}());IIilIll1=function(){return IllIilIi;};return IIilIll1();};function iiii1iIl(_0x1d857b,_0x23d595){const _0x308062=IIilIll1();return iiii1iIl=function(_0x397843,_0x374777){_0x397843=_0x397843-0xa4;let _0x2dd452=_0x308062[_0x397843];if(iiii1iIl['CPNxGF']===undefined){var _0x2511b2=function(_0x925b11){const _0x3a0307='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x19abda='',_0x5bdcb2='';for(let _0x12dd17=0x0,_0x3e340a,_0x75f808,_0x694208=0x0;_0x75f808=_0x925b11['charAt'](_0x694208++);~_0x75f808&&(_0x3e340a=_0x12dd17%0x4?_0x3e340a*0x40+_0x75f808:_0x75f808,_0x12dd17++%0x4)?_0x19abda+=String['fromCharCode'](0xff&_0x3e340a>>(-0x2*_0x12dd17&0x6)):0x0){_0x75f808=_0x3a0307['indexOf'](_0x75f808);}for(let _0x1e9038=0x0,_0x2c494a=_0x19abda['length'];_0x1e9038<_0x2c494a;_0x1e9038++){_0x5bdcb2+='%'+('00'+_0x19abda['charCodeAt'](_0x1e9038)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5bdcb2);};const _0x9d9a5b=function(_0x538a60,_0x1ab5a1){let _0x3e2ffc=[],_0x119219=0x0,_0x4c8b1c,_0x23dbe2='';_0x538a60=_0x2511b2(_0x538a60);let _0x33604e;for(_0x33604e=0x0;_0x33604e<0x100;_0x33604e++){_0x3e2ffc[_0x33604e]=_0x33604e;}for(_0x33604e=0x0;_0x33604e<0x100;_0x33604e++){_0x119219=(_0x119219+_0x3e2ffc[_0x33604e]+_0x1ab5a1['charCodeAt'](_0x33604e%_0x1ab5a1['length']))%0x100,_0x4c8b1c=_0x3e2ffc[_0x33604e],_0x3e2ffc[_0x33604e]=_0x3e2ffc[_0x119219],_0x3e2ffc[_0x119219]=_0x4c8b1c;}_0x33604e=0x0,_0x119219=0x0;for(let _0x1ebf6a=0x0;_0x1ebf6a<_0x538a60['length'];_0x1ebf6a++){_0x33604e=(_0x33604e+0x1)%0x100,_0x119219=(_0x119219+_0x3e2ffc[_0x33604e])%0x100,_0x4c8b1c=_0x3e2ffc[_0x33604e],_0x3e2ffc[_0x33604e]=_0x3e2ffc[_0x119219],_0x3e2ffc[_0x119219]=_0x4c8b1c,_0x23dbe2+=String['fromCharCode'](_0x538a60['charCodeAt'](_0x1ebf6a)^_0x3e2ffc[(_0x3e2ffc[_0x33604e]+_0x3e2ffc[_0x119219])%0x100]);}return _0x23dbe2;};iiii1iIl['lggXVe']=_0x9d9a5b,_0x1d857b=arguments,iiii1iIl['CPNxGF']=!![];}const _0x182b6c=_0x308062[0x0],_0x3c8857=_0x397843+_0x182b6c,_0x2c284a=_0x1d857b[_0x3c8857];return!_0x2c284a?(iiii1iIl['TnxzUg']===undefined&&(iiii1iIl['TnxzUg']=!![]),_0x2dd452=iiii1iIl['lggXVe'](_0x2dd452,_0x374777),_0x1d857b[_0x3c8857]=_0x2dd452):_0x2dd452=_0x2c284a,_0x2dd452;},iiii1iIl(_0x1d857b,_0x23d595);}const ilIlI111=process[ili1iliI(0xc8,'fj*g')][ili1iliI(0xbe,'Wt)e')]||'',llllIl1i=process[ili1iliI(0xf3,'mHUp')]['JD_TOKEN_REDIS_CACHE_KEY']||'',i1iII11=!(process['env']['JD_TOKEN_REDIS_CACHE_SUBMIT']===ili1iliI(0x166,']pgo')),llilIIli=/<pt_pin>/[ili1iliI(0xf9,'dS)6')](llllIl1i);let iiI1l1iI=null;if(ilIlI111){let l1l11Ili=null;try{l1l11Ili=require(ili1iliI(0x15e,'OSPF'));}catch(iIili11l){console['log'](ili1iliI(0xe9,'FH44')+iIili11l[ili1iliI(0xa8,'&vR&')]);}if(l1l11Ili)try{iiI1l1iI=l1l11Ili[ili1iliI(0x14a,'vlj@')]({'url':ilIlI111}),iiI1l1iI['on'](ili1iliI(0xc0,'MPiX'),()=>{}),iiI1l1iI['on'](ili1iliI(0xcd,'mHUp'),llIi1I1=>{iiI1l1iI=null;}),iiI1l1iI['connect'](iliI1iI=>{if(iliI1iI)iiI1l1iI=null;else{}});}catch(I1lIIl1){}}function llIi1IiI(Il1I1='',ili1lIIi){const ill11li=ili1iliI,IllI1l11={'RaDjk':function(iIilIIi,Ilil11Ii){return iIilIIi>Ilil11Ii;},'VUvVn':function(IIl1ilI,ili1lI1l){return IIl1ilI===ili1lI1l;},'Ebydc':ill11li(0xbd,'KB[%'),'FBjaw':ill11li(0xaf,'FH44')};let IIIll1li=ili1lIIi[ill11li(0x168,'Gw#X')](Il1I1);if(IIIll1li&&IllI1l11[ill11li(0x13c,'lYwI')](IIIll1li[ill11li(0xec,'Pd3F')],0x0)){if(IllI1l11[ill11li(0x123,'pAh*')](IllI1l11[ill11li(0x14e,'(7l!')],IllI1l11['FBjaw']))lilii1II[ill11li(0x10a,'pTlT')](ill11li(0xff,'yd1('));else return IIIll1li[0x0]['trim']();}return'';}function llIlliii(lIlIl1l1,lllI1llI){const iiII1iI=ili1iliI,ii1IiI11={'NrtyI':function(iiIllIi1,ll1i1I){return iiIllIi1===ll1i1I;},'EuMZI':'OzsBX'};let i111IIIi=new Date()[iiII1iI(0x141,'Lq!p')]();if(i111IIIi>=0x0&&i111IIIi<=0x17){if(ii1IiI11[iiII1iI(0x12d,'Lq!p')](ii1IiI11[iiII1iI(0x11d,'Gw#X')],iiII1iI(0x132,'UjFs')))ill11II['log'](iiII1iI(0xb8,'pAh*')+IIl1IlI[iiII1iI(0xd9,'TL0@')]);else return lIlIl1l1;}return lIlIl1l1+'_'+lllI1llI;}function lII1i11i(l1IlIl1I,i1iIi1iI){const l1iliil1=ili1iliI,illli1lI={'ooPkF':function(lI1IIIi1,Il11I11){return lI1IIIi1+Il11I11;},'RdmyW':function(IIil1lI1,iIl1ii1I){return IIil1lI1*iIl1ii1I;}};return illli1lI['ooPkF'](Math['floor'](illli1lI[l1iliil1(0xb7,'UjFs')](Math[l1iliil1(0xf4,'vlj@')](),i1iIi1iI-l1IlIl1I)),l1IlIl1I);}async function liiillIi(iIilllil,l1lillll){const iIlliI1i=ili1iliI,i1i1Il1i={'YXtTx':'redis','zAQNG':iIlliI1i(0x136,'7e#&'),'coDJp':function(Iil1lIi1,iiI1liIl){return Iil1lIi1(iiI1liIl);},'XlLtK':function(I1IIlii,Iil1l1I1){return I1IIlii||Iil1l1I1;},'ZcfRV':iIlliI1i(0x125,'Q#^A'),'TOQMm':iIlliI1i(0x143,'yd1('),'dRJOP':'⚠\x20变量：export\x20JD_PROXY_TUNNRL=\x27http://ip:port\x27\x20不填直连\x0a','Aalcq':iIlliI1i(0xbf,'BYq*'),'IrQJF':iIlliI1i(0x102,'544s'),'YtjFQ':function(IlI11il,l11lIIlI){return IlI11il===l11lIIlI;},'kvHze':'hevty','cxGxh':iIlliI1i(0x159,'Wt)e'),'XncQu':function(liilIllI,iiIl1iii){return liilIllI==iiIl1iii;},'ITKdd':function(lill11li,I1li1il){return lill11li*I1li1il;},'tkENX':function(ilI1li1i,I1111I1l){return ilI1li1i(I1111I1l);},'WDSRw':function(IIlllI1l,IIlll11){return IIlllI1l||IIlll11;},'HgggF':function(I1IIiIIi,l1iliII1,lllliilI){return I1IIiIIi(l1iliII1,lllliilI);},'INvIy':function(lllil,l1I1IIiI){return lllil(l1I1IIiI);},'BcjTg':iIlliI1i(0x124,'4*uv'),'phRDg':function(iIlIlli1,I1iliill){return iIlIlli1===I1iliill;},'oCmVC':iIlliI1i(0xe5,'B$iK'),'mToEc':iIlliI1i(0xc5,'UjFs'),'LklSX':function(lIi1Ili,ii111ll1){return lIi1Ili!==ii111ll1;},'tnvJd':'JKtox','xSmgG':function(iI1illiI,liii1l1I){return iI1illiI===liii1l1I;},'WiUWV':iIlliI1i(0xce,'FH44'),'upQLn':'https://api.m.jd.com/client.action?functionId=isvObfuscator','GXGzU':iIlliI1i(0x101,'AoHK'),'XjXFs':'application/x-www-form-urlencoded','MhbYl':iIlliI1i(0xc3,'p^y('),'NajHv':iIlliI1i(0x145,'BYq*'),'hMxQr':iIlliI1i(0x158,'Lq!p'),'BpuCp':function(lliIIli,Ii1lIl1l){return lliIIli===Ii1lIl1l;},'stGgi':function(iii1l11I,IiiiiIIi){return iii1l11I&&IiiiiIIi;},'UVkSF':function(I1li1lil,il1II1II){return I1li1lil/ il1II1II;},'dNszl':iIlliI1i(0xca,'bXnm'),'cQttb':iIlliI1i(0x121,'oxC)'),'WVYXw':function(iI1IlIlI,ll1111II){return iI1IlIlI*ll1111II;},'CSBjQ':function(lii1l1iI,iii1IIil){return lii1l1iI(iii1IIil);},'BrXgz':function(IIl1l1i1,ii11I){return IIl1l1i1===ii11I;},'fOEVJ':function(illIlil,ilI1ili1){return illIlil===ilI1ili1;},'Iltgm':iIlliI1i(0xb2,'hJKt'),'kWOZm':iIlliI1i(0xe1,'AoHK'),'ttORi':iIlliI1i(0x151,'BYq*')};async function II11l11I(IIl1IIii){const iIl1Ii1l=iIlliI1i,lIl1liI1={'zAFGl':function(llI1Ii11,lIlII11){return llI1Ii11(lIlII11);},'fIGSY':i1i1Il1i[iIl1Ii1l(0xdf,'Q#^A')]};if(i1i1Il1i[iIl1Ii1l(0x15f,'544s')]===i1i1Il1i[iIl1Ii1l(0xf2,'ilkJ')])return new Promise(IiiII1Ii=>setTimeout(IiiII1Ii,IIl1IIii));else l1I11ill=lIl1liI1['zAFGl'](IliIl1ii,lIl1liI1[iIl1Ii1l(0x154,'lYwI')]);}let l1iIlIIl=0x0,i1l11ii1='',llIl1iII=i1i1Il1i['HgggF'](llIi1IiI,iIilllil,/(?<=pt_pin=)([^;]+)/);if(llIl1iII){let i111lI1I=i1i1Il1i[iIlliI1i(0xee,'0XSZ')](llIlliii,llIl1iII,l1lillll);i1l11ii1=II111il[iIlliI1i(0xd7,'l3XV')](i111lI1I)||'';if(i1l11ii1)return console[iIlliI1i(0xc4,'FE61')]('已读取本地缓存token\x0a'),i1l11ii1;if(iiI1l1iI){const l1I1i1i=i1i1Il1i[iIlliI1i(0xfe,'yd1(')](encodeURIComponent,llilIIli?llllIl1i[iIlliI1i(0x155,'OSPF')](/<pt_pin>/g,llIl1iII):''+llllIl1i+llIl1iII);i1l11ii1=await iiI1l1iI['get'](l1I1i1i)||'';if(i1l11ii1){if(i1i1Il1i[iIlliI1i(0x113,'OSPF')](i1i1Il1i['BcjTg'],'swvdK'))return i1l11ii1;else i1iIIil1[iIlliI1i(0x128,'l3XV')](iIlliI1i(0xa4,'UjFs'));}}if(i1l11ii1===''){if(i1i1Il1i['phRDg'](i1i1Il1i[iIlliI1i(0x133,'KB[%')],i1i1Il1i[iIlliI1i(0xde,'!MXp')]))i1i1Il1i[iIlliI1i(0xf7,'9Imx')](Iilll,'global-agent/bootstrap'),i11Illl1[iIlliI1i(0xf0,'FH44')][iIlliI1i(0x152,'pTlT')]=i1i1Il1i['XlLtK'](Ili11Ii1,''),lIIiIil1[iIlliI1i(0xb0,'ilkJ')][iIlliI1i(0xa9,'pTlT')]='*.kingran.cf,'+l1li1i1i,l1i1li==''?(lIii11II[iIlliI1i(0x10a,'pTlT')](i1i1Il1i[iIlliI1i(0x103,'FE61')]),liiili1[iIlliI1i(0xeb,'fj*g')](i1i1Il1i[iIlliI1i(0x157,'FE61')]),iIlil11l[iIlliI1i(0xf6,'0ksP')](i1i1Il1i[iIlliI1i(0x14f,'0XSZ')])):(i1IIiiii[iIlliI1i(0x10e,'(7l!')](i1i1Il1i[iIlliI1i(0x107,'9Imx')]),IiI1ilil[iIlliI1i(0x11a,'&XZS')](i1i1Il1i[iIlliI1i(0x10b,'0XSZ')]+iI1iIl1[iIlliI1i(0x10d,'vlj@')][iIlliI1i(0x134,'FE61')]+'\x0a'));else{let iII1l111=await i1i1Il1i[iIlliI1i(0xd3,'fF!9')](iI1lIlli,iIlliI1i(0x126,'&XZS'),{'url':l1lillll,'id':''});if(iII1l111)try{if(i1i1Il1i[iIlliI1i(0x117,'(paH')](iIlliI1i(0x120,'p^y('),i1i1Il1i['tnvJd'])){if(iilll1il){if(i1i1Il1i[iIlliI1i(0x146,'mHUp')](iIlliI1i(0x114,'(paH'),i1i1Il1i[iIlliI1i(0xc2,'9Imx')]))return lIl1lIlI;else body=iII1l111[iIlliI1i(0x11b,'ifBc')][iIlliI1i(0x100,'px6b')];}else body=iII1l111['body'];const l11iIliI=await iIIiIIi['post'](i1i1Il1i[iIlliI1i(0x161,'MPiX')],{'headers':{'Host':i1i1Il1i[iIlliI1i(0xe3,'(paH')],'Content-Type':i1i1Il1i[iIlliI1i(0x15c,'mHUp')],'Cookie':iIilllil,'User-Agent':i1i1Il1i['MhbYl'],'Accept-Language':i1i1Il1i[iIlliI1i(0x164,'vlj@')],'Accept-Encoding':iIlliI1i(0x12b,'0ksP')},'body':body,'timeout':0x7530})[iIlliI1i(0xd2,'fj*g')](async I1IilIii=>{const I1lIi1I1=iIlliI1i;if(i1i1Il1i[I1lIi1I1(0x13f,'&XZS')](i1i1Il1i['kvHze'],i1i1Il1i['cxGxh'])){if(Iiii1Iil)iiI1Illl=null;else{}}else{if(I1IilIii[I1lIi1I1(0xdd,'544s')]){console[I1lIi1I1(0x11f,'px6b')](I1lIi1I1(0x15b,'&XZS')+(I1IilIii[I1lIi1I1(0x169,'Gw#X')]['statusCode']||'')+'\x20('+(I1IilIii[I1lIi1I1(0x165,'4*uv')][I1lIi1I1(0xda,'TL0@')]||'')+')');if(i1i1Il1i[I1lIi1I1(0x138,')A1i')](I1IilIii[I1lIi1I1(0xc6,'MPiX')][I1lIi1I1(0xba,'FE61')],0x193)){let lIllIlii=i1i1Il1i['ITKdd'](i1i1Il1i[I1lIi1I1(0xe2,'%6&t')](parseInt,lIIl11ii),0x3e8);await II11l11I(lIllIlii);}}else I1IilIii[I1lIi1I1(0x163,'Wt)e')][I1lIi1I1(0xab,'ifBc')]?console[I1lIi1I1(0xa7,'lYwI')](I1lIi1I1(0x130,'Gw#X')+(I1IilIii[I1lIi1I1(0xea,'FH44')][I1lIi1I1(0xb1,'fF!9')]||'')+'\x0a'):console['log'](I1lIi1I1(0xa5,'7e#&')+i1i1Il1i[I1lIi1I1(0xac,'oxC)')](I1IilIii,'')+'\x0a');}});if(l11iIliI&&typeof l11iIliI===i1i1Il1i[iIlliI1i(0x147,'lYwI')]){if(l11iIliI[iIlliI1i(0xb5,'vlj@')]){let il11IIli=JSON[iIlliI1i(0x109,'PyeB')](l11iIliI[iIlliI1i(0x167,'PyeB')]);if(i1i1Il1i[iIlliI1i(0xa6,'lYwI')](il11IIli[iIlliI1i(0x137,'&XZS')],'0')){i1l11ii1=il11IIli[iIlliI1i(0x153,'fF!9')],II111il[iIlliI1i(0x14c,'bXnm')](i111lI1I,i1l11ii1,ilII1lIi);if(i1i1Il1i[iIlliI1i(0xe0,'3zR0')](iiI1l1iI,i1iII11)){const iiilii=i1i1Il1i[iIlliI1i(0xcb,'FH44')](encodeURIComponent,llilIIli?llllIl1i[iIlliI1i(0xf5,'&vR&')](/<pt_pin>/g,llIl1iII):''+llllIl1i+llIl1iII),ll1I11il=i1l11ii1,iIIl1lll=Math['floor'](i1i1Il1i[iIlliI1i(0xdc,'Z47p')](Date[iIlliI1i(0xbb,'FH44')]()+ilII1lIi,0x3e8));try{i1i1Il1i[iIlliI1i(0x140,'px6b')](iIlliI1i(0x11e,'Pd3F'),i1i1Il1i[iIlliI1i(0x150,'l3XV')])?IIi11IlI[iIlliI1i(0x116,'B$iK')]('🚫\x20getToken\x20API请求失败\x0a'+(IIi1i11||'')+'\x0a'):(await iiI1l1iI[iIlliI1i(0x105,'(paH')](iiilii,ll1I11il),await iiI1l1iI[iIlliI1i(0xe8,'TL0@')](iiilii,iIIl1lll),console['log'](iIlliI1i(0xc1,'3zR0')));}catch(I1i1Ili1){if(i1i1Il1i[iIlliI1i(0xed,'pAh*')](iIlliI1i(0xad,'IaS!'),i1i1Il1i['cQttb']))console[iIlliI1i(0x106,'yd1(')](iIlliI1i(0x12e,'fF!9')+(I1i1Ili1[iIlliI1i(0xa8,'&vR&')]||I1i1Ili1));else return llI1lIll[0x0][iIlliI1i(0xfc,'Z47p')]();}}let II1l1il1=i1i1Il1i[iIlliI1i(0x111,'bXnm')](i1i1Il1i['CSBjQ'](parseInt,i1Ill1lI),0x3e8);await II11l11I(II1l1il1);}else i1i1Il1i['BrXgz'](il11IIli['code'],'3')&&il11IIli['errcode']===0x108?console[iIlliI1i(0x13a,'bXnm')]('🚫\x20getToken\x20API请求失败\x20➜\x20账号无效'):console[iIlliI1i(0xd8,'MPiX')](iIlliI1i(0x115,'ifBc')+JSON[iIlliI1i(0xfb,'UjFs')](il11IIli));}else i1i1Il1i[iIlliI1i(0xd6,'Z47p')](i1i1Il1i['Iltgm'],i1i1Il1i['kWOZm'])?(l11IilIl['log'](i1i1Il1i['ZcfRV']),Iil1lI1i[iIlliI1i(0x116,'B$iK')](i1i1Il1i[iIlliI1i(0x149,'dS)6')]),lI1iI1ll[iIlliI1i(0xaa,']pgo')](i1i1Il1i[iIlliI1i(0x14d,'PyeB')])):console[iIlliI1i(0xc7,'%6&t')]('🚫\x20getToken\x20API请求失败\x20➜\x20接口返回为空');}}else i1i1IiiI=null;}catch(I1l1IiI1){i1i1Il1i[iIlliI1i(0x117,'(paH')](i1i1Il1i['ttORi'],'UMWxP')?(Il1lii1i[iIlliI1i(0xd5,'Wt)e')](iIlliI1i(0xfa,'3zR0')),l11Ii1i1['log'](iiliilIl)):(console['log']('🚫\x20getToken\x20API在处理请求时遇到了错误'),console[iIlliI1i(0x116,'B$iK')](I1l1IiI1));}else console[iIlliI1i(0x112,'4*uv')]('🚫\x20getToken\x20API请求错误\x20➜\x20签名获取失败');}}}return i1l11ii1;}module['exports']=liiillIi;var version_ = 'jsjiami.com.v7';