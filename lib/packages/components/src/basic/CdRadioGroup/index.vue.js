"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./style/index.css");const g=require("@/api/system"),y=e.defineComponent({name:"CdRadioGroup"}),V=e.defineComponent({...y,props:{modelValue:{type:[String,Array],default:""},list:{type:Array,default:()=>[]},size:{type:String,default:"default"},allDisabled:{type:Boolean,default:!1},type:{type:String,default:""},pId:{type:String,default:"-1"},pVal:{type:String,default:""}},emits:["update:modelValue","on-change"],setup(o,{emit:r}){const i=o,n=e.ref([]),p=e.computed({get:()=>i.modelValue,set:t=>{r("update:modelValue",t)}});e.onMounted(()=>{c()});const c=async()=>{const{type:t,pId:l,pVal:s,list:d}=i;if(t){const a=await g.apiFindDictList({type:t,parentId:l,parentValue:s}),{isSuccess:u,data:f,errorMsg:b,errmsg:v}=a;u&&(n.value=f)}else n.value=d},m=t=>{r("on-change",t)};return(t,l)=>{const s=e.resolveComponent("Radio"),d=e.resolveComponent("RadioGroup");return e.openBlock(),e.createBlock(d,e.mergeProps({class:"dib",modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=a=>p.value=a),size:o.size},t.$attrs,{onOnChange:m}),{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.value,(a,u)=>(e.openBlock(),e.createBlock(s,{size:"default",label:a.value,disabled:a.disabled||o.allDisabled,key:u},{default:e.withCtx(()=>[e.createElementVNode("span",null,e.toDisplayString(a.label),1)]),_:2},1032,["label","disabled"]))),128))]),_:1},16,["modelValue","size"])}}});exports.default=V;