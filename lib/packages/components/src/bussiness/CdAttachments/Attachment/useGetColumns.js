"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("../../../basic/CdButton/index.js"),c=require("vue");function m(s){const a=[{title:"选择",key:"action",width:120,align:"center",render:(e,{row:i})=>e("div",[e(r.CdButton,{size:"small",style:{marginRight:"10px"},onclick:()=>l(i,"download")},"下载"),e(r.CdButton,{size:"small",onclick:()=>l(i,"preview")},"预览")])},{title:"附件类别",key:"attCategoryName",width:120},{title:"附件种类",key:"attClassName",width:120},{title:"标题",key:"attitleName",width:120},{title:"文件名",key:"attname",width:150},{title:"上传账号",key:"createUserName",width:95},{title:"上传时间",key:"createDate",width:150}],l=(e,i)=>{const{attsysid:u,attfileroute:n,datasource:o,attname:d}=e;let t="";n&&n.indexOf("http://")!=-1?t=n:o&&(o==="oss"||o==="OSS")?t=e.attfileroute:t=`${window.$baseRequestUrl}/api/equipment-documents/attachments/${i}?attsysid=${encodeURI(u)}&__sid=564e2ef45af04d2e92fc13abf09f3c9d`,i==="download"?window.open(t):d.endsWith(".png")||d.endsWith(".jpg")?window.$ImagePreview.show({previewList:[t],toolbar:["zoomIn","zoomOut","rotateLeft","rotateRight"]}):window.open(t)};return c.computed(()=>s.cusColumns.length>0?[...a,...s.cusColumns]:a)}exports.default=m;