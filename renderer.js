const robot=require('robotjs');const schedule=require('node\x2dschedule');const request=require('request');const electron=require('electron');var scaleFactor=electron['screen']['getPrimaryDisplay']()['scaleFactor'];switch(process['platform']){case'win32':var x1=0x5dc*scaleFactor/0x2;var y1=0x41c*scaleFactor/0x2;var x2=0x53a*scaleFactor/0x2;var y2=0x25e*scaleFactor/0x2;var x3=0x63a*scaleFactor/0x2;var y3=0x258*scaleFactor/0x2;var x4=0x544*scaleFactor/0x2;var y4=0x32c*scaleFactor/0x2;var x5=0x646*scaleFactor/0x2;var y5=0x32e*scaleFactor/0x2;var x6=0x440*scaleFactor/0x2;var y6=0x3d0*scaleFactor/0x2;break;case'darwin':var x1=0x304;var y1=0x229;var x2=0x29e;var y2=0x147;var x3=0x311;var y3=0x1b1;var x4=0x2ce;var y4=0x1b3;var x5=0x21c;var y5=0x1fe;var x6=0x21c;var y6=0x1fe;break;}setTimeout(function(){robot['moveMouse'](x1,y1);robot['mouseClick']();},0xbb8);setTimeout(function(){robot['moveMouse'](x1,y1);robot['mouseClick']();},0xc1c);$(function(){var _0x22f68a={'\x58\x48\x75':function _0x53521c(_0x4423a8,_0x4cdbd9){return _0x4423a8(_0x4cdbd9);},'\x4e\x75\x41':function _0x4e2c56(_0x313637,_0xe75bf5,_0xdf2dfd){return _0x313637(_0xe75bf5,_0xdf2dfd);},'\x6d\x50\x73':function _0x4049da(_0x591c7d,_0x24f945){return _0x591c7d==_0x24f945;},'\x50\x54\x46':function _0x501f0d(_0x38f4be,_0x479e99){return _0x38f4be==_0x479e99;},'\x45\x4b\x6e':function _0x189a78(_0x40033b,_0x4f233c){return _0x40033b(_0x4f233c);},'\x63\x6e\x61':function _0x432a27(_0x4905f8,_0x3e8178){return _0x4905f8(_0x3e8178);}};var _0x47d1cd='4\x7c1\x7c3\x7c2\x7c5\x7c0'['split']('\x7c'),_0x2ca331=0x0;while(!![]){switch(_0x47d1cd[_0x2ca331++]){case'0':_0x22f68a['XHu']($,'\x23start')['click'](function(){var _0x87eb9e={'\x6b\x58\x55':function _0x5af3ed(_0x519e2d,_0x50f3bb){return _0x519e2d(_0x50f3bb);},'\x4c\x67\x79':function _0x527ac4(_0x4c905e,_0x5d82ca){return _0x4c905e(_0x5d82ca);},'\x72\x4d\x75':function _0x48cfcd(_0x29018a,_0x1b618e){return _0x29018a(_0x1b618e);},'\x6d\x46\x59':function _0x2c1fcc(_0x27d91d,_0x3eaf8e){return _0x27d91d(_0x3eaf8e);},'\x7a\x73\x73':function _0x283081(_0x7847e7,_0x4a4432){return _0x7847e7(_0x4a4432);},'\x74\x51\x57':function _0x2ebc6e(_0x54718f,_0x288373){return _0x54718f+_0x288373;}};var _0x2ad9c6='9\x7c4\x7c2\x7c8\x7c1\x7c6\x7c5\x7c3\x7c7\x7c0\x7c10'['split']('\x7c'),_0x4ed8c5=0x0;while(!![]){switch(_0x2ad9c6[_0x4ed8c5++]){case'0':schedule['scheduleJob'](_0x215cfb,()=>{robot['moveMouse'](x6,y6);robot['mouseClick']();});continue;case'1':schedule['scheduleJob'](_0x37d92b,()=>{var _0x7e04e1={'\x44\x78\x75':function _0x1f3be0(_0x490b76,_0x42f99b){return _0x490b76(_0x42f99b);}};var _0x3ae841='2\x7c1\x7c7\x7c6\x7c5\x7c4\x7c0\x7c3\x7c8'['split']('\x7c'),_0x5304cb=0x0;while(!![]){switch(_0x3ae841[_0x5304cb++]){case'0':robot['mouseClick']();continue;case'1':robot['mouseClick']();continue;case'2':robot['moveMouse'](x2,y2);continue;case'3':robot['moveMouse'](x5,y5);continue;case'4':robot['moveMouse'](x4,y4);continue;case'5':robot['mouseClick']();continue;case'6':robot['moveMouse'](x3,y3);continue;case'7':robot['typeString'](_0x7e04e1['Dxu']($,'\x23addmoney')['val']());continue;case'8':robot['mouseClick']();continue;}break;}});continue;case'2':_0x37d92b['minute']=_0x87eb9e['kXU']($,'\x23minute')['val']();continue;case'3':_0x215cfb['minute']=_0x87eb9e['Lgy']($,'\x23minute')['val']();continue;case'4':_0x37d92b['hour']=_0x87eb9e['Lgy']($,'\x23hour')['val']();continue;case'5':_0x215cfb['hour']=_0x87eb9e['rMu']($,'\x23hour')['val']();continue;case'6':var _0x215cfb=new schedule['RecurrenceRule']();continue;case'7':_0x215cfb['second']=_0x87eb9e['mFY']($,'\x23tosecond')['val']();continue;case'8':_0x37d92b['second']=_0x87eb9e['mFY']($,'\x23fromsecond')['val']();continue;case'9':var _0x37d92b=new schedule['RecurrenceRule']();continue;case'10':_0x87eb9e['zss']($,'\x23startmsg')['html'](_0x87eb9e['tQW'](_0x87eb9e['tQW']('\u4e8e',new Date()['toLocaleTimeString']()),'\u7b56\u7565\u8bbe\u7f6e\u6210\u529f\uff01'));continue;}break;}});continue;case'1':request['get']('http\x3a\x2f\x2fautohupai\x2etop\x2fhupai\x2dserve\x2fpublic\x2findex\x2fgetMessage',function(_0x1d89d7,_0x102a46,_0xb052f1){var _0x3d400e=JSON['parse'](_0xb052f1);_0x4bee4a['bCC']($,'\x23message')['html'](_0x3d400e['message']);});continue;case'2':_0x22f68a['NuA'](setInterval,function(){if(_0x4bee4a['vTj'](_0x4bee4a['bCC']($,'\x23strategy')['val'](),0x1)){request['get']('http\x3a\x2f\x2fautohupai\x2etop\x2fhupai\x2dserve\x2fpublic\x2findex\x2fgetStrategy',function(_0x45c983,_0x37aca6,_0x4ab84f){var _0xdadc47={'\x64\x6b\x53':function _0x3b940a(_0x7a5805,_0x25cdd7){return _0x7a5805(_0x25cdd7);},'\x59\x70\x55':function _0x4fffe1(_0x4c5dfe,_0x3d8a38){return _0x4c5dfe(_0x3d8a38);},'\x75\x47\x52':function _0x2e912b(_0x518381,_0x488e34){return _0x518381(_0x488e34);},'\x42\x6c\x41':function _0x515b6f(_0xa7858f,_0x455845){return _0xa7858f(_0x455845);},'\x47\x6a\x67':function _0x340eeb(_0x5922fa,_0x47cd05){return _0x5922fa(_0x47cd05);},'\x6a\x66\x79':function _0x179a1b(_0x2fdd3e,_0x3d1df3){return _0x2fdd3e(_0x3d1df3);}};var _0x3ce5db='5\x7c4\x7c8\x7c2\x7c0\x7c6\x7c7\x7c3\x7c10\x7c1\x7c9'['split']('\x7c'),_0x91cd0c=0x0;while(!![]){switch(_0x3ce5db[_0x91cd0c++]){case'0':_0xdadc47['dkS']($,'\x23minute')['attr']('readonly','readonly');continue;case'1':_0xdadc47['dkS']($,'\x23tosecond')['val'](_0x27ce5e['tosecond']);continue;case'2':_0xdadc47['YpU']($,'\x23minute')['val'](_0x27ce5e['minute']);continue;case'3':_0xdadc47['YpU']($,'\x23addmoney')['val'](_0x27ce5e['addmoney']);continue;case'4':_0xdadc47['uGR']($,'\x23hour')['val'](_0x27ce5e['hour']);continue;case'5':var _0x27ce5e=JSON['parse'](_0x4ab84f);continue;case'6':_0xdadc47['uGR']($,'\x23fromsecond')['val'](_0x27ce5e['fromsecond']);continue;case'7':_0xdadc47['BlA']($,'\x23fromsecond')['attr']('readonly','readonly');continue;case'8':_0xdadc47['Gjg']($,'\x23hour')['attr']('readonly','readonly');continue;case'9':_0xdadc47['Gjg']($,'\x23tosecond')['attr']('readonly','readonly');continue;case'10':_0xdadc47['jfy']($,'\x23addmoney')['attr']('readonly','readonly');continue;}break;}});}},0x3e8);continue;case'3':if(_0x22f68a['mPs'](_0x22f68a['XHu']($,'\x23strategy')['val'](),0x1)){request['get']('http\x3a\x2f\x2fautohupai\x2etop\x2fhupai\x2dserve\x2fpublic\x2findex\x2fgetStrategy',function(_0x3add73,_0x4f0178,_0x36d0ff){var _0x1a7f3d={'\x76\x78\x50':function _0x105f1c(_0x2ea809,_0x20d4cb){return _0x2ea809(_0x20d4cb);},'\x69\x4b\x63':function _0x385825(_0x1b351f,_0x2807ac){return _0x1b351f(_0x2807ac);},'\x4a\x43\x44':function _0xa6e619(_0x37aeee,_0x37f097){return _0x37aeee(_0x37f097);},'\x62\x61\x48':function _0x35a8b7(_0x3f84d5,_0xf8c758){return _0x3f84d5(_0xf8c758);}};var _0x314ffd='1\x7c9\x7c0\x7c2\x7c4\x7c3\x7c6\x7c5\x7c10\x7c8\x7c7'['split']('\x7c'),_0x17affe=0x0;while(!![]){switch(_0x314ffd[_0x17affe++]){case'0':_0x1a7f3d['vxP']($,'\x23hour')['attr']('readonly','readonly');continue;case'1':var _0x17e36d=JSON['parse'](_0x36d0ff);continue;case'2':_0x1a7f3d['iKc']($,'\x23minute')['val'](_0x17e36d['minute']);continue;case'3':_0x1a7f3d['JCD']($,'\x23fromsecond')['val'](_0x17e36d['fromsecond']);continue;case'4':_0x1a7f3d['JCD']($,'\x23minute')['attr']('readonly','readonly');continue;case'5':_0x1a7f3d['JCD']($,'\x23addmoney')['val'](_0x17e36d['addmoney']);continue;case'6':_0x1a7f3d['baH']($,'\x23fromsecond')['attr']('readonly','readonly');continue;case'7':_0x1a7f3d['baH']($,'\x23tosecond')['attr']('readonly','readonly');continue;case'8':_0x1a7f3d['baH']($,'\x23tosecond')['val'](_0x17e36d['tosecond']);continue;case'9':_0x1a7f3d['baH']($,'\x23hour')['val'](_0x17e36d['hour']);continue;case'10':_0x1a7f3d['baH']($,'\x23addmoney')['attr']('readonly','readonly');continue;}break;}});}continue;case'4':var _0x4bee4a={'\x62\x43\x43':function _0x1f36a0(_0x45b824,_0x20c5dc){return _0x22f68a['XHu'](_0x45b824,_0x20c5dc);},'\x76\x54\x6a':function _0x381977(_0x256924,_0x11c0f6){return _0x22f68a['PTF'](_0x256924,_0x11c0f6);},'\x68\x69\x48':function _0x10900c(_0xd3858d,_0x43cd5c){return _0x22f68a['XHu'](_0xd3858d,_0x43cd5c);},'\x68\x4d\x54':function _0x2d00a1(_0x4eb7a4,_0x46a668){return _0x22f68a['EKn'](_0x4eb7a4,_0x46a668);},'\x51\x75\x71':function _0x1a22fb(_0x68865b,_0x4701f3){return _0x22f68a['cna'](_0x68865b,_0x4701f3);},'\x4a\x61\x64':function _0x471df4(_0x44c99b,_0x3a43bb){return _0x22f68a['PTF'](_0x44c99b,_0x3a43bb);}};continue;case'5':_0x22f68a['cna']($,'\x23strategy')['change'](function(){if(_0x4bee4a['vTj'](_0x4bee4a['bCC']($,'\x23strategy')['val'](),0x2)){var _0x1ab57c='1\x7c3\x7c0\x7c2\x7c4'['split']('\x7c'),_0x38a7ae=0x0;while(!![]){switch(_0x1ab57c[_0x38a7ae++]){case'0':_0x4bee4a['hiH']($,'\x23fromsecond')['removeAttr']('readonly');continue;case'1':_0x4bee4a['hiH']($,'\x23hour')['removeAttr']('readonly');continue;case'2':_0x4bee4a['hiH']($,'\x23tosecond')['removeAttr']('readonly');continue;case'3':_0x4bee4a['hMT']($,'\x23minute')['removeAttr']('readonly');continue;case'4':_0x4bee4a['Quq']($,'\x23addmoney')['removeAttr']('readonly');continue;}break;}}else if(_0x4bee4a['Jad'](_0x4bee4a['Quq']($,'\x23strategy')['val'](),0x1)){request['get']('http\x3a\x2f\x2fautohupai\x2etop\x2fhupai\x2dserve\x2fpublic\x2findex\x2fgetStrategy',function(_0x1d3960,_0x498634,_0x4e0811){var _0x3eaa72={'\x55\x79\x4c':function _0x58002d(_0xb38a03,_0x40c072){return _0xb38a03(_0x40c072);},'\x75\x5a\x4f':function _0x40a67e(_0x376b4a,_0x1384ba){return _0x376b4a(_0x1384ba);},'\x49\x76\x71':function _0x2acf8a(_0x4f9c3f,_0xed13e7){return _0x4f9c3f(_0xed13e7);},'\x6e\x58\x58':function _0x17ba41(_0x2b6375,_0x3513c7){return _0x2b6375(_0x3513c7);},'\x4d\x72\x4c':function _0x2d5878(_0x12c6fe,_0x3f88a7){return _0x12c6fe(_0x3f88a7);},'\x49\x64\x73':function _0x2fc0ac(_0x21f129,_0x16557c){return _0x21f129(_0x16557c);},'\x79\x61\x75':function _0x4aa933(_0x3a7bf9,_0x786e6){return _0x3a7bf9(_0x786e6);},'\x55\x79\x41':function _0x3268ed(_0x5c7cde,_0x4597ee){return _0x5c7cde(_0x4597ee);}};var _0x4b21f1='0\x7c4\x7c5\x7c8\x7c9\x7c7\x7c6\x7c10\x7c1\x7c2\x7c3'['split']('\x7c'),_0x22a4eb=0x0;while(!![]){switch(_0x4b21f1[_0x22a4eb++]){case'0':var _0x10d6f1=JSON['parse'](_0x4e0811);continue;case'1':_0x3eaa72['UyL']($,'\x23addmoney')['attr']('readonly','readonly');continue;case'2':_0x3eaa72['uZO']($,'\x23tosecond')['val'](_0x10d6f1['tosecond']);continue;case'3':_0x3eaa72['Ivq']($,'\x23tosecond')['attr']('readonly','readonly');continue;case'4':_0x3eaa72['nXX']($,'\x23hour')['val'](_0x10d6f1['hour']);continue;case'5':_0x3eaa72['MrL']($,'\x23hour')['attr']('readonly','readonly');continue;case'6':_0x3eaa72['MrL']($,'\x23fromsecond')['attr']('readonly','readonly');continue;case'7':_0x3eaa72['Ids']($,'\x23fromsecond')['val'](_0x10d6f1['fromsecond']);continue;case'8':_0x3eaa72['yau']($,'\x23minute')['val'](_0x10d6f1['minute']);continue;case'9':_0x3eaa72['yau']($,'\x23minute')['attr']('readonly','readonly');continue;case'10':_0x3eaa72['UyA']($,'\x23addmoney')['val'](_0x10d6f1['addmoney']);continue;}break;}});}});continue;}break;}});