import{_ as r,r as a,o as e,c as i,b as t,d as o,e as s,a as l}from"./app-in_WKorJ.js";const h={},c=t("h1",{id:"tetris-ts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tetris-ts"},[t("span",null,"Tetris-ts")])],-1),p=t("p",null,[o("这里分享github开源的一个小游戏，tetris指的是俄罗斯方块，即用ts语言实现的html小游戏 "),t("br"),o(" 涉及到的技术：ts基础，canvas基本用法")],-1),d=t("h1",{id:"下载地址",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#下载地址"},[t("span",null,"下载地址")])],-1),w={id:"tetris-ts-1",tabindex:"-1"},f={class:"header-anchor",href:"#tetris-ts-1"},g={href:"https://github.com/pilotpirxie/tetris-ts",target:"_blank",rel:"noopener noreferrer"},m=t("h2",{id:"源码解析",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#源码解析"},[t("span",null,"源码解析")])],-1),x={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"1041px",viewBox:"-0.5 -0.5 1041 821",content:'<mxfile host="1d2om22pu7a8efrjrolue5gt2k11jpgdjear6q3s77kami869mt4" modified="2024-04-15T00:18:32.111Z" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.88.1 Chrome/120.0.6099.291 Electron/28.2.8 Safari/537.36" etag="04--1FDrJ4tgStZof6GY" version="12.2.4" pages="1"><diagram id="HwJJZc8ETXaGiqDZJMXd" name="Page-1">7VtLc6M4EP41qto5ZAshzOMobJI5JDnEO7XHKQUUmw1GHozjZH/9qoUwxiI72d0ZYbv2FNF6IL7u/rpbchCZrl5vKrZe3omMF8h1sldEZsh1sRM68g9I3hpJ4GvBosozPagTzPM/eTtTS7d5xje9gbUQRZ2v+8JUlCVP656MVZXY9Yc9iaL/1jVbcEMwT1lhSn/Ps3rZSMOJ08k/83yxbN+MHd2zYu1gLdgsWSZ2ByKSIDKthKib1up1ygsAr8WlmXf9Tu9+YxUv649M8PQ26rf223gmP1U/iqpeioUoWZF00rgS2zLjsIAjn7oxt0KspRBL4R+8rt+03ti2FlK0rFeF7jU3qfe9Edsq1ftwtV5ZteB6FGlEsMODafrDbrhY8bp6kwMqXrA6f+kri2mdL/bjOlhkQyMzjJI/HkpHH/tvYJtYQkm/+oUVW73oDb1LpGR6S+dzA8IOIPja3TKv+XzN1HfsJG180GReeFXz1781B91LWp/TpOO27rrrXBi3Y5YH7tuS03/BBnsGOOdjU8S0KUwsGRUOLwy4wJY3mu541sBZI/uW7S8GOFv8TwzcHr7cQ3q1LdM6F+XoEWByFAFIZDECuOdMZI0NHdmVLSYjzqUhF9lC7pxjwBByxFYQIJNLQ86zFT5N5LbrjNX8R9C/wfUDWLxL/4HXp38/sEj/JDhjgyLegEH5tlzRLJ3kZjNejW5QIekbVOTYNCgzTU1Z+SKXlOuuc5T4iF6j8BolExSHiAYoiVDooIiiJESx7JIW6RdyR/GjhNJfQAsGR1MUO6oRozhRDReF0+mXh4fk/rd5uuQrBqvLRWMXGtE1ikhvQkjgxaemHuxgm/rBpn6WPH2+zUtJhVNQAk0QxSgJoBEFCrgQhb7CdKKVEFLAVw6WmMYzlFyjeCq1gRIPHvXgEFQNDdkVgZ4jtaZsUBd6x9aEH/U1EVpNvKMB5m0MP8tfesD437Zw8BqnohAVIhTobPH4i9wbgt3JVzlH7U/wABg5jyx9Xihgr46mgxnqGb1mN/dJlPXVE1vlxVszTW6Frdaqk0j+gx2VG1GAcx917NcbmLKtcmBJp+S79+etRCk2Svm93WxUBIG9YG/9uu8rpPVetRpSvRH0tsDteUQDLBcuv4ew3FGWZilj5jIV/7blm5qW+YpBBXldsRVv15Z6b5bvv1KKlVr70v81fdqaHgpXKkpJpgCmxMB5/0zxY0cf3Oe8YIjzogHOC34E55nZZrqtYOtt/PYA5TBW0SdAcaxjDQ0PQoyRL+gYT6EBMYuqoCOn+zroxOZ9kvVYE3wA958Wa8ygLxPme76LC5E+H0A7gehNVfokYz4YuQTSb2O+RD3S8EM8b7oiBf8MYB4d47CP8cTmVYp7zlcpWCuvdxxk7S5loAYddHIwyZly8kBxxARsNmqcfALDGv+PZ8MVxLFpmzVF4wdhvcw3vxaszD6NbtJ7Ex7FpM2j82Ecv8sMXemgSD0cn4+PgfWtXrue810OHro+tHWZg02T3OVlBj+dkaYl3TjCyuocRFWmEHmq4my6wi5n26cVY9uh1x5MjuHgeOA4Wadg9CAXk54r0zFfgSYpkigYDyQRrkTNar7LN80Zgg+4N/4P3WE/yXNjxeqJGhEAMWiFyFU9TR50dnKaCYhFzZzzrdzAMb+tO7m2uLkU3GzdyGH3snDDti7khghU0iWGTAjyIaJKV02DShKcwhn0nrc0t3k2rwiwWY1+LIncl6lGNtnEdYA6gBgS09ERdo/q/YnNW72Bo+V3q50pVDtfodpREZ8qgBWusXeCefux5U5CmwXROYeXgRIf24ovZoWv7+3MSn0+/Zzc0Z6zy2SQEm3BdCiJhyySKh7YG7evxoT7Y+fycbM+hfPXK29EXsBDxPABpzfptTsGCEAHsflT9LGBDX7irap87P4XQvUd/EcJSf4C</diagram></mxfile>',onclick:"(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&&src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&&!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&&evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);svg.wnd=window.open('https://www.draw.io/?client=1&lightbox=1&edit=_blank');}}})(this);",style:{cursor:"pointer","max-width":"100%","max-height":"821px"}},v=t("defs",null,null,-1),_=l('<path d="M 480 30 L 620 30 L 620 133.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 620 138.88 L 616.5 131.88 L 620 133.63 L 623.5 131.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><path d="M 360 30 L 220 30 L 220 143.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 220 148.88 L 216.5 141.88 L 220 143.63 L 223.5 141.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><rect x="360" y="0" width="120" height="60" rx="9" ry="9" fill="#ffffff" stroke="#000000" pointer-events="all"></rect>',5),k={transform:"translate(380.5,23.5)"},y={style:{overflow:"visible"},"pointer-events":"all",width:"78",height:"12"},b=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"79px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"GAME CLASS")],-1),L=[b],u=l('<path d="M 620 200 L 620 250 L 525 250 L 525 293.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 525 298.88 L 521.5 291.88 L 525 293.63 L 528.5 291.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><path d="M 620 200 L 620 250 L 650 250 L 650 293.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 650 298.88 L 646.5 291.88 L 650 293.63 L 653.5 291.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><path d="M 680 170 L 780 170 L 780 293.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 780 298.88 L 776.5 291.88 L 780 293.63 L 783.5 291.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><path d="M 680 170 L 840 170 L 840 413.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 840 418.88 L 836.5 411.88 L 840 413.63 L 843.5 411.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><rect x="560" y="140" width="120" height="60" rx="9" ry="9" fill="#ffffff" stroke="#000000" pointer-events="all"></rect>',9),M={transform:"translate(584.5,163.5)"},z={style:{overflow:"visible"},"pointer-events":"all",width:"71",height:"12"},j=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"72px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"RUN function")],-1),Z=[j],H=l('<path d="M 840 480 L 840 510 L 770 510 L 770 533.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 770 538.88 L 766.5 531.88 L 770 533.63 L 773.5 531.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><path d="M 840 480 L 840 510 L 945 510 L 945 533.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 945 538.88 L 941.5 531.88 L 945 533.63 L 948.5 531.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><path d="M 840 480 L 840 560 L 790 560 L 790 633.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 790 638.88 L 786.5 631.88 L 790 633.63 L 793.5 631.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><path d="M 840 480 L 840 565 L 930 565 L 930 643.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 930 648.88 L 926.5 641.88 L 930 643.63 L 933.5 641.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><rect x="780" y="420" width="120" height="60" rx="9" ry="9" fill="#ffffff" stroke="#000000" pointer-events="all"></rect>',9),E={transform:"translate(821.5,443.5)"},O={style:{overflow:"visible"},"pointer-events":"all",width:"37",height:"12"},B=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"38px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"update")],-1),Y=[B],S=t("path",{d:"M 930 710 L 930 753.63",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"stroke"},null,-1),R=t("path",{d:"M 930 758.88 L 926.5 751.88 L 930 753.63 L 933.5 751.88 Z",fill:"#000000",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"all"},null,-1),T=t("rect",{x:"870",y:"650",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),V={transform:"translate(912.5,673.5)"},N={style:{overflow:"visible"},"pointer-events":"all",width:"35",height:"12"},A=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"36px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"render")],-1),F=[A],W=t("rect",{x:"870",y:"760",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),C={transform:"translate(871.5,761.5)"},U={style:{overflow:"visible"},"pointer-events":"all",width:"116",height:"56"},G=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"116px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},[o("canvas api每帧通过"),t("br"),o("地图和CURRENTSchema渲染图像")])],-1),J=[G],X=t("rect",{x:"730",y:"640",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),D={transform:"translate(731.5,656.5)"},I={style:{overflow:"visible"},"pointer-events":"all",width:"116",height:"27"},q=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"116px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"checkLine,计算分数功能，但是有问题")],-1),P=[q],K=t("rect",{x:"850",y:"540",width:"190",height:"70",rx:"10.5",ry:"10.5",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),Q={transform:"translate(863.5,556.5)"},$={style:{overflow:"visible"},"pointer-events":"all",width:"162",height:"36"},tt=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"163px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},[t("div",{style:{color:"rgb(212 , 212 , 212)","background-color":"rgb(30 , 30 , 30)","font-family":'"consolas" , "courier new" , monospace',"font-size":"14px","line-height":"19px"}},[t("span",{style:{color:"#dcdcaa"}},"requestAnimationFrame")]),t("div",{style:{color:"rgb(212 , 212 , 212)","background-color":"rgb(30 , 30 , 30)","font-family":'"consolas" , "courier new" , monospace',"font-size":"14px","line-height":"19px"}},[t("span",{style:{color:"#dcdcaa"}},"每帧运行")])])],-1),et=[tt],it=t("rect",{x:"710",y:"540",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),ot={transform:"translate(711.5,556.5)"},lt={style:{overflow:"visible"},"pointer-events":"all",width:"116",height:"27"},nt=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"116px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"currentSchema下移动，通过固定时间")],-1),st=[nt],rt=t("rect",{x:"720",y:"300",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),at={transform:"translate(721.5,316.5)"},ht={style:{overflow:"visible"},"pointer-events":"all",width:"116",height:"27"},ct=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"116px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"getNewBlock，形成新候选方块")],-1),pt=[ct],dt=t("path",{d:"M 650 360 L 650 393.63",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"stroke"},null,-1),wt=t("path",{d:"M 650 398.88 L 646.5 391.88 L 650 393.63 L 653.5 391.88 Z",fill:"#000000",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"all"},null,-1),ft=t("rect",{x:"590",y:"300",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),gt={transform:"translate(595.5,316.5)"},mt={style:{overflow:"visible"},"pointer-events":"all",width:"109",height:"27"},xt=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"110px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},[o("通过初始化长宽"),t("br"),o("形成地图（this.land)")])],-1),vt=[xt],_t=t("rect",{x:"590",y:"400",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),kt={transform:"translate(601.5,423.5)"},yt={style:{overflow:"visible"},"pointer-events":"all",width:"96",height:"12"},bt=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"97px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"形成候选方块数组")],-1),Lt=[bt],ut=t("path",{d:"M 525 360 L 525 473.63",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"stroke"},null,-1),Mt=t("path",{d:"M 525 478.88 L 521.5 471.88 L 525 473.63 L 528.5 471.88 Z",fill:"#000000",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"all"},null,-1),zt=t("rect",{x:"465",y:"300",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),jt={transform:"translate(466.5,316.5)"},Zt={style:{overflow:"visible"},"pointer-events":"all",width:"116",height:"27"},Ht=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"116px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"windows监听键盘行动")],-1),Et=[Ht],Ot=t("rect",{x:"465",y:"480",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),Bt={transform:"translate(466.5,481.5)"},Yt={style:{overflow:"visible"},"pointer-events":"all",width:"116",height:"56"},St=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"116px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"上下左右触发rotatewise,改变currentSchema+边界判断")],-1),Rt=[St],Tt=l('<path d="M 160 180 L 60 180 L 60 313.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 60 318.88 L 56.5 311.88 L 60 313.63 L 63.5 311.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><path d="M 220 210 L 220 323.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 220 328.88 L 216.5 321.88 L 220 323.63 L 223.5 321.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><path d="M 280 180 L 370 180 L 370 313.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path><path d="M 370 318.88 L 366.5 311.88 L 370 313.63 L 373.5 311.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path><rect x="160" y="150" width="120" height="60" rx="9" ry="9" fill="#ffffff" stroke="#000000" pointer-events="all"></rect>',7),Vt={transform:"translate(195.5,173.5)"},Nt={style:{overflow:"visible"},"pointer-events":"all",width:"48",height:"12"},At=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"49px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"局部变量")],-1),Ft=[At],Wt=t("rect",{x:"310",y:"320",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),Ct={transform:"translate(315.5,343.5)"},Ut={style:{overflow:"visible"},"pointer-events":"all",width:"108",height:"12"},Gt=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"109px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"候选方块，数组表示")],-1),Jt=[Gt],Xt=t("rect",{x:"160",y:"330",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),Dt={transform:"translate(161.5,346.5)"},It={style:{overflow:"visible"},"pointer-events":"all",width:"116",height:"27"},qt=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"116px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"地图，this_land二维数组")],-1),Pt=[qt],Kt=t("path",{d:"M 60 380 L 60 453.63",fill:"none",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"stroke"},null,-1),Qt=t("path",{d:"M 60 458.88 L 56.5 451.88 L 60 453.63 L 63.5 451.88 Z",fill:"#000000",stroke:"#000000","stroke-miterlimit":"10","pointer-events":"all"},null,-1),$t=t("rect",{x:"0",y:"320",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),te={transform:"translate(1.5,329.5)"},ee={style:{overflow:"visible"},"pointer-events":"all",width:"116",height:"41"},ie=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"116px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},[o("CURRENT"),t("br"),o("SCHEMA，正在行动的图案 ")])],-1),oe=[ie],le=t("rect",{x:"0",y:"460",width:"120",height:"60",rx:"9",ry:"9",fill:"#ffffff",stroke:"#000000","pointer-events":"all"},null,-1),ne={transform:"translate(11.5,483.5)"},se={style:{overflow:"visible"},"pointer-events":"all",width:"96",height:"12"},re=t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","font-size":"12px","font-family":"Helvetica",color:"rgb(0, 0, 0)","line-height":"1.2","vertical-align":"top",width:"97px","white-space":"nowrap","overflow-wrap":"normal","text-align":"center"}},[t("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block","text-align":"inherit","text-decoration":"inherit","white-space":"normal"}},"二维数组表示形状")],-1),ae=[re],he=t("h2",{id:"在线体验地址",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#在线体验地址"},[t("span",null,"在线体验地址")])],-1),ce={id:"github",tabindex:"-1"},pe={class:"header-anchor",href:"#github"},de={href:"https://pilotpirxie.github.io/tetris-ts/demo.html",target:"_blank",rel:"noopener noreferrer"};function we(fe,ge){const n=a("ExternalLinkIcon");return e(),i("div",null,[c,p,d,t("h2",w,[t("a",f,[t("span",null,[t("a",g,[o("Tetris-ts"),s(n)])])])]),m,t("p",null,[(e(),i("svg",x,[v,t("g",null,[_,t("g",k,[(e(),i("foreignObject",y,L))]),u,t("g",M,[(e(),i("foreignObject",z,Z))]),H,t("g",E,[(e(),i("foreignObject",O,Y))]),S,R,T,t("g",V,[(e(),i("foreignObject",N,F))]),W,t("g",C,[(e(),i("foreignObject",U,J))]),X,t("g",D,[(e(),i("foreignObject",I,P))]),K,t("g",Q,[(e(),i("foreignObject",$,et))]),it,t("g",ot,[(e(),i("foreignObject",lt,st))]),rt,t("g",at,[(e(),i("foreignObject",ht,pt))]),dt,wt,ft,t("g",gt,[(e(),i("foreignObject",mt,vt))]),_t,t("g",kt,[(e(),i("foreignObject",yt,Lt))]),ut,Mt,zt,t("g",jt,[(e(),i("foreignObject",Zt,Et))]),Ot,t("g",Bt,[(e(),i("foreignObject",Yt,Rt))]),Tt,t("g",Vt,[(e(),i("foreignObject",Nt,Ft))]),Wt,t("g",Ct,[(e(),i("foreignObject",Ut,Jt))]),Xt,t("g",Dt,[(e(),i("foreignObject",It,Pt))]),Kt,Qt,$t,t("g",te,[(e(),i("foreignObject",ee,oe))]),le,t("g",ne,[(e(),i("foreignObject",se,ae))])])]))]),he,t("h2",ce,[t("a",pe,[t("span",null,[t("a",de,[o("github"),s(n)])])])])])}const xe=r(h,[["render",we],["__file","index.html.vue"]]),ve=JSON.parse('{"path":"/program/Tetris-ts/","title":"Tetris-ts","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Tetris-ts","slug":"tetris-ts-1","link":"#tetris-ts-1","children":[]},{"level":2,"title":"源码解析","slug":"源码解析","link":"#源码解析","children":[]},{"level":2,"title":"在线体验地址","slug":"在线体验地址","link":"#在线体验地址","children":[]},{"level":2,"title":"github","slug":"github","link":"#github","children":[]}],"git":{},"filePathRelative":"program/Tetris-ts/README.md"}');export{xe as comp,ve as data};