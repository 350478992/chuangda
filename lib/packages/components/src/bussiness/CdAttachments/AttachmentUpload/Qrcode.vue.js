"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=require("./useUploadUtils.js"),n={class:"cd-qrcode-wrap"},l=["src"],a=e.defineComponent({__name:"Qrcode",props:{url:{},formData:{}},setup(t){const o=t,{getQrcodeImgSrc:r}=s.default(),c=e.ref(r(o.formData));return(u,d)=>(e.openBlock(),e.createElementBlock("div",n,[e.createElementVNode("img",{src:c.value,alt:"二维码"},null,8,l)]))}});exports.default=a;