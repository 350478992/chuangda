"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i=require("view-ui-plus");function l(n,o,s){const r=e.inject("$optPermissionConf");return{title:"选择",key:"action",width:150,align:"center",render:(c,{row:t})=>{const u=n.type==="2"?"inline-block":"none";return e.createVNode("div",null,[e.withDirectives(e.createVNode(i.Button,{style:{marginRight:"10px",display:u},size:"small",onClick:()=>s(t)},{default:()=>[e.createTextVNode("编辑")]}),[[e.resolveDirective("hasPermission"),r.basic.unitmng.bussinessorg.edit]]),e.createVNode(i.Button,{size:"small",onClick:()=>o(t)},{default:()=>[e.createTextVNode("选择")]})])}}}exports.default=l;