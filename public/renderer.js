const robot=require('robotjs');const schedule=require('node-schedule');const request=require('request');const electron=require('electron');var scaleFactor=electron['screen']['getPrimaryDisplay']()['scaleFactor'];switch(process['platform']){case'win32':var x1=0x5dc*scaleFactor/0x2;var y1=0x41c*scaleFactor/0x2;var x2=0x53a*scaleFactor/0x2;var y2=0x25e*scaleFactor/0x2;var x3=0x63a*scaleFactor/0x2;var y3=0x258*scaleFactor/0x2;var x4=0x544*scaleFactor/0x2;var y4=0x32c*scaleFactor/0x2;var x5=0x646*scaleFactor/0x2;var y5=0x32e*scaleFactor/0x2;var x6=0x440*scaleFactor/0x2;var y6=0x3d0*scaleFactor/0x2;var x7=0x452*scaleFactor/0x2;var y7=0x1d4*scaleFactor/0x2;var x8=0x474*scaleFactor/0x2;var y8=0x2b2*scaleFactor/0x2;var x10=0x546*scaleFactor/0x2;var y10=0x260*scaleFactor/0x2;var x11=0x546*scaleFactor/0x2;var y11=0x2de*scaleFactor/0x2;var x12=0x63a*scaleFactor/0x2;var y12=0x2d6*scaleFactor/0x2;break;case'darwin':var x1=0x304;var y1=0x229;var x2=0x2a6;var y2=0x144;var x3=0x31b;var y3=0x140;var x4=0x31b;var y4=0x1af;var x5=0x2dd;var y5=0x1ac;var x6=0x226;var y6=0x200;var x7=0x253;var y7=0x10e;var x8=0x23c;var y8=0x171;var x10=0x284;var y10=0x14c;var x11=0x284;var y11=0x17d;var x12=0x31e;var y12=0x185;break;}setTimeout(function(){robot['moveMouse'](x1,y1);robot['mouseClick']();},0x7d0);setTimeout(function(){robot['moveMouse'](x1,y1);robot['mouseClick']();},0x834);$(function(){var _0xd459f={'dBACT':'2|5|4|6|3|0|1','GtezM':function(_0x534162,_0x6990b){return _0x534162(_0x6990b);},'fqTTL':'#start','maBos':'http://autohupai.top/hupai-serve/public/index/getUrl','hhlkR':'#message','gRFEb':'9|0|2|3|6|8|7|5|4|1|10','fsfyM':'#hour','NqHFk':'#tosecond','OsvYS':'readonly','CDlqO':'#minute','HmEpm':'#addmoney','SPjwb':'#fromsecond','GhLvk':'7|3|1|10|2|0|4|8|5|6|9','zvjIm':function(_0x377d18,_0x73176){return _0x377d18(_0x73176);},'jhhUv':function(_0x217cfd,_0x34c193){return _0x217cfd(_0x34c193);},'ZappA':function(_0x93dbce,_0x432107){return _0x93dbce==_0x432107;},'VOxrR':'#strategy','QuvVj':'http://autohupai.top/hupai-serve/public/index/getStrategy','rjhAa':'8|1|9|0|10|2|3|6|7|4|5','tkVEM':function(_0x12587a,_0x3d1cac){return _0x12587a(_0x3d1cac);},'PcxFm':function(_0x12d141,_0x873f39){return _0x12d141(_0x873f39);},'WETGQ':function(_0x1ecc23,_0x5d454f){return _0x1ecc23(_0x5d454f);},'GkKNI':'2|3|1|4|0','KXReQ':'6|7|1|0|3|2|4|8|5','wYKNE':function(_0x2b3a41,_0x3a75fe){return _0x2b3a41(_0x3a75fe);},'XrKIT':'10|4|5|2|3|7|0|9|6|1|8','ybcox':function(_0x4d9833,_0x238a4b){return _0x4d9833(_0x238a4b);},'kcNwB':function(_0x17b839,_0x2216a4){return _0x17b839(_0x2216a4);},'WExLj':function(_0x588ae0,_0x4922f2){return _0x588ae0(_0x4922f2);},'aKbEv':'#startmsg','uNGhI':function(_0x55dc3f,_0xfc758b){return _0x55dc3f+_0xfc758b;},'cOPqz':'策略设置成功！','zlORG':function(_0x5072b2,_0x17f0c1){return _0x5072b2(_0x17f0c1);},'tGzIG':'4|0|2|3|5|1|6','pFdjq':'12345678','vxRjC':'tab','xYZiz':'1234','REHTz':'3|0|4|6|5|1|7|2','gcaEF':'87900','vTOqt':'11|9|13|20|14|22|4|10|2|17|12|5|1|0|19|8|21|18|7|6|16|3|15|23','uDkQs':function(_0x2d2f7e,_0x4c77e8){return _0x2d2f7e(_0x4c77e8);},'Qlhuu':function(_0x1532b5,_0x4325a7,_0x1e03fb){return _0x1532b5(_0x4325a7,_0x1e03fb);},'zrPTh':function(_0x10606d,_0x4fc229){return _0x10606d(_0x4fc229);},'GkEkN':function(_0x47b7ca,_0x3c5981){return _0x47b7ca(_0x3c5981);},'hEIdi':function(_0x38d5ce,_0x4c36bd){return _0x38d5ce(_0x4c36bd);},'GmpaX':'8|6|1|2|5|7|3|0|4','Pcsvp':function(_0xb490bc,_0x188352){return _0xb490bc==_0x188352;},'FUUDX':function(_0x4a3b72,_0x959523){return _0x4a3b72(_0x959523);},'GYzLe':'http://autohupai.top/hupai-serve/public/index/getMessage','awunK':function(_0xe03a71,_0x53a165,_0x433958){return _0xe03a71(_0x53a165,_0x433958);}};var _0x3e6021=_0xd459f['dBACT']['split']('|'),_0x7c4bfc=0x0;while(!![]){switch(_0x3e6021[_0x7c4bfc++]){case'0':_0xd459f['GtezM']($,_0xd459f['fqTTL'])['click'](function(){var _0x2ae334=_0x140a5b['MMMUk']['split']('|'),_0x193d02=0x0;while(!![]){switch(_0x2ae334[_0x193d02++]){case'0':_0x2deb2b['hour']=_0x140a5b['Lefwx']($,_0x140a5b['iinmy'])['val']();continue;case'1':schedule['scheduleJob'](_0x2deb2b,()=>{robot['moveMouse'](x6,y6);robot['mouseClick']();});continue;case'2':_0x2e79e3['second']=_0x140a5b['oxHTL']($,_0x140a5b['lErru'])['val']();continue;case'3':schedule['scheduleJob'](_0x2e79e3,()=>{var _0x31a5f6=_0x140a5b['OtGnf']['split']('|'),_0x40a195=0x0;while(!![]){switch(_0x31a5f6[_0x40a195++]){case'0':robot['moveMouse'](x3,y3);continue;case'1':robot['typeString'](_0x140a5b['Lefwx']($,_0x140a5b['XNuhG'])['val']());continue;case'2':robot['moveMouse'](x4,y4);continue;case'3':robot['mouseClick']();continue;case'4':robot['mouseClick']();continue;case'5':robot['mouseClick']();continue;case'6':robot['moveMouse'](x2,y2);continue;case'7':robot['mouseClick']();continue;case'8':robot['moveMouse'](x5,y5);continue;}break;}});continue;case'4':_0x2e79e3['hour']=_0x140a5b['JZkoD']($,_0x140a5b['iinmy'])['val']();continue;case'5':_0x2e79e3['minute']=_0x140a5b['tVjQY']($,_0x140a5b['bVLdd'])['val']();continue;case'6':_0x2deb2b['second']=_0x140a5b['tVjQY']($,_0x140a5b['gvpQB'])['val']();continue;case'7':var _0x2deb2b=new schedule['RecurrenceRule']();continue;case'8':_0x140a5b['YgbsF']($,_0x140a5b['DtqHF'])['html'](_0x140a5b['hraGl'](_0x140a5b['hraGl']('于',new Date()['toLocaleTimeString']()),_0x140a5b['Ntcjb']));continue;case'9':_0x2deb2b['minute']=_0x140a5b['hMUEY']($,_0x140a5b['bVLdd'])['val']();continue;case'10':var _0x2e79e3=new schedule['RecurrenceRule']();continue;}break;}});continue;case'1':request['get'](_0xd459f['maBos'],function(_0x42aab0,_0x127901,_0x139fe2){var _0x4da4c8={'zhJmT':_0x140a5b['afecD'],'LOYOx':function(_0x23f1f5,_0x4ad0cc){return _0x140a5b['OqlRO'](_0x23f1f5,_0x4ad0cc);},'bYHkD':_0x140a5b['XNuhG']};var _0x5836f8=JSON['parse'](_0x139fe2);onlineUrl=_0x5836f8['url'];request['get'](onlineUrl,{'timeout':0x1f4},function(_0x42aab0){var _0x2bae8b={'UfAWQ':_0x140a5b['qPmNo'],'cgCao':_0x140a5b['sWyVM'],'ydyHs':_0x140a5b['ESaaH'],'bSEFK':_0x140a5b['kEVYO'],'qTtKd':_0x140a5b['QrTzL'],'ojrDp':_0x140a5b['PrBEZ']};if(_0x42aab0){var _0x30c9eb=_0x140a5b['snvah']['split']('|'),_0x19fa23=0x0;while(!![]){switch(_0x30c9eb[_0x19fa23++]){case'0':_0x3635b3['hour']=_0x140a5b['lyuZd']($,_0x140a5b['iinmy'])['val']();continue;case'1':var _0x3635b3=new schedule['RecurrenceRule']();continue;case'2':_0x140a5b['ZsXmG']($,_0x140a5b['bVLdd'])['val'](_0x140a5b['eqWED'](_0x43cf83['getMinutes'](),0x4));continue;case'3':schedule['scheduleJob'](_0xf99d80,()=>{robot['moveMouse'](x6,y6);robot['mouseClick']();});continue;case'4':_0x140a5b['ZsXmG']($,_0x140a5b['XNuhG'])['removeAttr'](_0x140a5b['FNOsP']);continue;case'5':_0x140a5b['ZsXmG']($,_0x140a5b['gvpQB'])['val'](0x3a);continue;case'6':_0xf99d80['minute']=_0x140a5b['ZsXmG']($,_0x140a5b['bVLdd'])['val']();continue;case'7':_0xf99d80['hour']=_0x140a5b['ZsXmG']($,_0x140a5b['iinmy'])['val']();continue;case'8':_0x3635b3['second']=_0x140a5b['ikGhw']($,_0x140a5b['lErru'])['val']();continue;case'9':var _0x43cf83=new Date();continue;case'10':_0x140a5b['Vppfa']($,_0x140a5b['iinmy'])['val'](_0x43cf83['getHours']());continue;case'11':_0x140a5b['Vppfa']($,_0x140a5b['mkNrw'])['val'](0x2);continue;case'12':_0x140a5b['jALEJ']($,_0x140a5b['XNuhG'])['val'](0x258);continue;case'13':_0x140a5b['jALEJ']($,_0x140a5b['iinmy'])['removeAttr'](_0x140a5b['FNOsP']);continue;case'14':_0x140a5b['jALEJ']($,_0x140a5b['lErru'])['removeAttr'](_0x140a5b['FNOsP']);continue;case'15':_0x140a5b['JpFCK'](setTimeout,function(){var _0x15d3d4=_0x2bae8b['UfAWQ']['split']('|'),_0x5dba9c=0x0;while(!![]){switch(_0x15d3d4[_0x5dba9c++]){case'0':robot['mouseClick']();continue;case'1':robot['moveMouse'](x8,y8);continue;case'2':robot['typeStringDelayed'](_0x2bae8b['cgCao']);continue;case'3':robot['keyTap'](_0x2bae8b['ydyHs']);continue;case'4':robot['moveMouse'](x7,y7);continue;case'5':robot['typeStringDelayed'](_0x2bae8b['bSEFK']);continue;case'6':robot['mouseClick']();continue;}break;}},0x9c4);continue;case'16':_0xf99d80['second']=_0x140a5b['pBXDJ']($,_0x140a5b['gvpQB'])['val']();continue;case'17':_0x140a5b['JQlWP']($,_0x140a5b['lErru'])['val'](0x30);continue;case'18':var _0xf99d80=new schedule['RecurrenceRule']();continue;case'19':_0x3635b3['minute']=_0x140a5b['zpmDQ']($,_0x140a5b['bVLdd'])['val']();continue;case'20':_0x140a5b['zpmDQ']($,_0x140a5b['bVLdd'])['removeAttr'](_0x140a5b['FNOsP']);continue;case'21':schedule['scheduleJob'](_0x3635b3,()=>{var _0x56fbf1=_0x4da4c8['zhJmT']['split']('|'),_0x4f94bc=0x0;while(!![]){switch(_0x56fbf1[_0x4f94bc++]){case'0':robot['moveMouse'](x5,y5);continue;case'1':robot['typeString'](_0x4da4c8['LOYOx']($,_0x4da4c8['bYHkD'])['val']());continue;case'2':robot['moveMouse'](x3,y3);continue;case'3':robot['mouseClick']();continue;case'4':robot['mouseClick']();continue;case'5':robot['mouseClick']();continue;case'6':robot['mouseClick']();continue;case'7':robot['moveMouse'](x4,y4);continue;case'8':robot['moveMouse'](x2,y2);continue;}break;}});continue;case'22':_0x140a5b['OqlRO']($,_0x140a5b['gvpQB'])['removeAttr'](_0x140a5b['FNOsP']);continue;case'23':_0x140a5b['JpFCK'](setTimeout,function(){var _0xa23106=_0x2bae8b['qTtKd']['split']('|'),_0x4faf0b=0x0;while(!![]){switch(_0xa23106[_0x4faf0b++]){case'0':robot['mouseClick']();continue;case'1':robot['typeStringDelayed'](_0x2bae8b['ojrDp']);continue;case'2':robot['mouseClick']();continue;case'3':robot['moveMouse'](x10,y10);continue;case'4':robot['typeStringDelayed'](_0x2bae8b['ojrDp']);continue;case'5':robot['mouseClick']();continue;case'6':robot['moveMouse'](x11,y11);continue;case'7':robot['moveMouse'](x12,y12);continue;}break;}},0xea60);continue;}break;}}});});continue;case'2':var _0x140a5b={'yYuua':function(_0x3670a9,_0x16068d){return _0xd459f['GtezM'](_0x3670a9,_0x16068d);},'VhkjE':_0xd459f['hhlkR'],'ELTGN':_0xd459f['gRFEb'],'iinmy':_0xd459f['fsfyM'],'gvpQB':_0xd459f['NqHFk'],'FNOsP':_0xd459f['OsvYS'],'bVLdd':_0xd459f['CDlqO'],'XNuhG':_0xd459f['HmEpm'],'SSOfD':function(_0x4f1cbe,_0x58217c){return _0xd459f['GtezM'](_0x4f1cbe,_0x58217c);},'lErru':_0xd459f['SPjwb'],'KavZv':_0xd459f['GhLvk'],'bDHDc':function(_0x108a69,_0x49a258){return _0xd459f['zvjIm'](_0x108a69,_0x49a258);},'bDYlj':function(_0x17389c,_0x215749){return _0xd459f['zvjIm'](_0x17389c,_0x215749);},'IkACw':function(_0x18e56d,_0x2cc1cb){return _0xd459f['jhhUv'](_0x18e56d,_0x2cc1cb);},'zOkGh':function(_0x25e3f0,_0x3ff208){return _0xd459f['ZappA'](_0x25e3f0,_0x3ff208);},'mkNrw':_0xd459f['VOxrR'],'XjcMC':_0xd459f['QuvVj'],'atPdK':_0xd459f['rjhAa'],'tTINA':function(_0xcfa922,_0x3b4c13){return _0xd459f['tkVEM'](_0xcfa922,_0x3b4c13);},'vyjtm':function(_0x4bf7c1,_0x29df04){return _0xd459f['PcxFm'](_0x4bf7c1,_0x29df04);},'WxRTn':function(_0x3682f4,_0x21a152){return _0xd459f['PcxFm'](_0x3682f4,_0x21a152);},'fkigE':function(_0x152d50,_0x11d49b){return _0xd459f['WETGQ'](_0x152d50,_0x11d49b);},'Ujlhk':function(_0x5a91d3,_0x734931){return _0xd459f['WETGQ'](_0x5a91d3,_0x734931);},'iztls':_0xd459f['GkKNI'],'EXOeD':function(_0x2521ef,_0x39d27d){return _0xd459f['WETGQ'](_0x2521ef,_0x39d27d);},'ZIHNo':function(_0x413be7,_0x4dacf0){return _0xd459f['WETGQ'](_0x413be7,_0x4dacf0);},'peTVM':function(_0x4637f8,_0x240742){return _0xd459f['WETGQ'](_0x4637f8,_0x240742);},'OtGnf':_0xd459f['KXReQ'],'Lefwx':function(_0x103a61,_0x2920b3){return _0xd459f['wYKNE'](_0x103a61,_0x2920b3);},'MMMUk':_0xd459f['XrKIT'],'oxHTL':function(_0x19189d,_0x1a9b30){return _0xd459f['ybcox'](_0x19189d,_0x1a9b30);},'JZkoD':function(_0x401b7e,_0x4861cf){return _0xd459f['ybcox'](_0x401b7e,_0x4861cf);},'tVjQY':function(_0xb4bc21,_0x4d8ea3){return _0xd459f['kcNwB'](_0xb4bc21,_0x4d8ea3);},'YgbsF':function(_0x4c396c,_0x272a3c){return _0xd459f['WExLj'](_0x4c396c,_0x272a3c);},'DtqHF':_0xd459f['aKbEv'],'hraGl':function(_0x48b248,_0x5ca856){return _0xd459f['uNGhI'](_0x48b248,_0x5ca856);},'Ntcjb':_0xd459f['cOPqz'],'hMUEY':function(_0x13150a,_0x32cd18){return _0xd459f['zlORG'](_0x13150a,_0x32cd18);},'qPmNo':_0xd459f['tGzIG'],'sWyVM':_0xd459f['pFdjq'],'ESaaH':_0xd459f['vxRjC'],'kEVYO':_0xd459f['xYZiz'],'QrTzL':_0xd459f['REHTz'],'PrBEZ':_0xd459f['gcaEF'],'snvah':_0xd459f['vTOqt'],'lyuZd':function(_0x3d38e6,_0x106b12){return _0xd459f['uDkQs'](_0x3d38e6,_0x106b12);},'ZsXmG':function(_0x22fde0,_0x5f3b7a){return _0xd459f['uDkQs'](_0x22fde0,_0x5f3b7a);},'eqWED':function(_0x372ab4,_0x23d229){return _0xd459f['uNGhI'](_0x372ab4,_0x23d229);},'ikGhw':function(_0x57392a,_0x4b63da){return _0xd459f['uDkQs'](_0x57392a,_0x4b63da);},'Vppfa':function(_0x43a860,_0x5ca265){return _0xd459f['uDkQs'](_0x43a860,_0x5ca265);},'jALEJ':function(_0x392a8f,_0x1cce5f){return _0xd459f['uDkQs'](_0x392a8f,_0x1cce5f);},'JpFCK':function(_0x397651,_0x1dba18,_0x2fa755){return _0xd459f['Qlhuu'](_0x397651,_0x1dba18,_0x2fa755);},'pBXDJ':function(_0x2ec26f,_0x1f978c){return _0xd459f['uDkQs'](_0x2ec26f,_0x1f978c);},'JQlWP':function(_0x3ac5fe,_0x2a3060){return _0xd459f['zrPTh'](_0x3ac5fe,_0x2a3060);},'zpmDQ':function(_0x37cd65,_0x396db6){return _0xd459f['GkEkN'](_0x37cd65,_0x396db6);},'OqlRO':function(_0x269c5b,_0x2452b4){return _0xd459f['hEIdi'](_0x269c5b,_0x2452b4);},'afecD':_0xd459f['GmpaX']};continue;case'3':_0xd459f['hEIdi']($,_0xd459f['VOxrR'])['change'](function(){if(_0x140a5b['zOkGh'](_0x140a5b['Ujlhk']($,_0x140a5b['mkNrw'])['val'](),0x2)){var _0x38cf93=_0x140a5b['iztls']['split']('|'),_0x27c2e5=0x0;while(!![]){switch(_0x38cf93[_0x27c2e5++]){case'0':_0x140a5b['Ujlhk']($,_0x140a5b['XNuhG'])['removeAttr'](_0x140a5b['FNOsP']);continue;case'1':_0x140a5b['EXOeD']($,_0x140a5b['lErru'])['removeAttr'](_0x140a5b['FNOsP']);continue;case'2':_0x140a5b['ZIHNo']($,_0x140a5b['iinmy'])['removeAttr'](_0x140a5b['FNOsP']);continue;case'3':_0x140a5b['ZIHNo']($,_0x140a5b['bVLdd'])['removeAttr'](_0x140a5b['FNOsP']);continue;case'4':_0x140a5b['ZIHNo']($,_0x140a5b['gvpQB'])['removeAttr'](_0x140a5b['FNOsP']);continue;}break;}}else if(_0x140a5b['zOkGh'](_0x140a5b['peTVM']($,_0x140a5b['mkNrw'])['val'](),0x1)){request['get'](_0x140a5b['XjcMC'],function(_0xcabb6b,_0x19e04f,_0x1a4422){var _0x12e3e0=_0x140a5b['atPdK']['split']('|'),_0x3a54a5=0x0;while(!![]){switch(_0x12e3e0[_0x3a54a5++]){case'0':_0x140a5b['IkACw']($,_0x140a5b['bVLdd'])['val'](_0x403c4e['minute']);continue;case'1':_0x140a5b['IkACw']($,_0x140a5b['iinmy'])['val'](_0x403c4e['hour']);continue;case'2':_0x140a5b['IkACw']($,_0x140a5b['lErru'])['val'](_0x403c4e['fromsecond']);continue;case'3':_0x140a5b['tTINA']($,_0x140a5b['lErru'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'4':_0x140a5b['tTINA']($,_0x140a5b['gvpQB'])['val'](_0x403c4e['tosecond']);continue;case'5':_0x140a5b['vyjtm']($,_0x140a5b['gvpQB'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'6':_0x140a5b['WxRTn']($,_0x140a5b['XNuhG'])['val'](_0x403c4e['addmoney']);continue;case'7':_0x140a5b['WxRTn']($,_0x140a5b['XNuhG'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'8':var _0x403c4e=JSON['parse'](_0x1a4422);continue;case'9':_0x140a5b['fkigE']($,_0x140a5b['iinmy'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'10':_0x140a5b['Ujlhk']($,_0x140a5b['bVLdd'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;}break;}});}});continue;case'4':if(_0xd459f['Pcsvp'](_0xd459f['FUUDX']($,_0xd459f['VOxrR'])['val'](),0x1)){request['get'](_0xd459f['QuvVj'],function(_0x45b774,_0x47dd99,_0x606cf3){var _0x2ed37a=_0x140a5b['ELTGN']['split']('|'),_0x5595a1=0x0;while(!![]){switch(_0x2ed37a[_0x5595a1++]){case'0':_0x140a5b['yYuua']($,_0x140a5b['iinmy'])['val'](_0x2e54f8['hour']);continue;case'1':_0x140a5b['yYuua']($,_0x140a5b['gvpQB'])['val'](_0x2e54f8['tosecond']);continue;case'2':_0x140a5b['yYuua']($,_0x140a5b['iinmy'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'3':_0x140a5b['yYuua']($,_0x140a5b['bVLdd'])['val'](_0x2e54f8['minute']);continue;case'4':_0x140a5b['yYuua']($,_0x140a5b['XNuhG'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'5':_0x140a5b['SSOfD']($,_0x140a5b['XNuhG'])['val'](_0x2e54f8['addmoney']);continue;case'6':_0x140a5b['SSOfD']($,_0x140a5b['bVLdd'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'7':_0x140a5b['SSOfD']($,_0x140a5b['lErru'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'8':_0x140a5b['SSOfD']($,_0x140a5b['lErru'])['val'](_0x2e54f8['fromsecond']);continue;case'9':var _0x2e54f8=JSON['parse'](_0x606cf3);continue;case'10':_0x140a5b['SSOfD']($,_0x140a5b['gvpQB'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;}break;}});}continue;case'5':request['get'](_0xd459f['GYzLe'],function(_0x35bb5e,_0x3359b2,_0x55a45d){var _0x41b706=JSON['parse'](_0x55a45d);_0x140a5b['yYuua']($,_0x140a5b['VhkjE'])['html'](_0x41b706['message']);});continue;case'6':_0xd459f['awunK'](setInterval,function(){if(_0x140a5b['zOkGh'](_0x140a5b['IkACw']($,_0x140a5b['mkNrw'])['val'](),0x1)){request['get'](_0x140a5b['XjcMC'],function(_0x5dc970,_0x318234,_0x22a123){var _0x2dc644=_0x140a5b['KavZv']['split']('|'),_0x5ebbb3=0x0;while(!![]){switch(_0x2dc644[_0x5ebbb3++]){case'0':_0x140a5b['SSOfD']($,_0x140a5b['lErru'])['val'](_0x1237ef['fromsecond']);continue;case'1':_0x140a5b['bDHDc']($,_0x140a5b['iinmy'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'2':_0x140a5b['bDYlj']($,_0x140a5b['bVLdd'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'3':_0x140a5b['bDYlj']($,_0x140a5b['iinmy'])['val'](_0x1237ef['hour']);continue;case'4':_0x140a5b['bDYlj']($,_0x140a5b['lErru'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'5':_0x140a5b['bDYlj']($,_0x140a5b['XNuhG'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'6':_0x140a5b['IkACw']($,_0x140a5b['gvpQB'])['val'](_0x1237ef['tosecond']);continue;case'7':var _0x1237ef=JSON['parse'](_0x22a123);continue;case'8':_0x140a5b['IkACw']($,_0x140a5b['XNuhG'])['val'](_0x1237ef['addmoney']);continue;case'9':_0x140a5b['IkACw']($,_0x140a5b['gvpQB'])['attr'](_0x140a5b['FNOsP'],_0x140a5b['FNOsP']);continue;case'10':_0x140a5b['IkACw']($,_0x140a5b['bVLdd'])['val'](_0x1237ef['minute']);continue;}break;}});}},0x3e8);continue;}break;}});setInterval(function(){var _0x15dc66={'HSstO':function(_0xe569e,_0x3b331b){return _0xe569e+_0x3b331b;},'LLbnh':function(_0x54825e,_0x451682){return _0x54825e+_0x451682;},'SVCVs':'Mouse\x20is\x20at\x20x:','xjgOI':'\x20y:'};var _0x40a6dc=robot['getMousePos']();console['log'](_0x15dc66['HSstO'](_0x15dc66['LLbnh'](_0x15dc66['LLbnh'](_0x15dc66['SVCVs'],_0x40a6dc['x']),_0x15dc66['xjgOI']),_0x40a6dc['y']));},0x3e8);