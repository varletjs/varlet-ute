import{B as s}from"./index.19438cb4.js";import{C as u}from"./cell.cc853fb8.js";import{M as i}from"./menu.493b3496.js";import{O as y,S as k}from"./OptionSfc.e121317a.js";import{S as d}from"./index.fe56df08.js";import{S as I}from"./index.a079afdf.js";import{A as m}from"./AppType.9ff697f8.js";/* empty css                  */import"./shared.683c68c7.js";import"./MenuSfc.1aa87537.js";/* empty css              *//* empty css               *//* empty css                *//* empty css               */import"./ButtonSfc.d73b10b3.js";import"./checkbox.657d5fcb.js";/* empty css             */import"./CellSfc.90047be6.js";/* empty css                */import{p as o,u as M}from"./index.041e8d7c.js";import{a as N}from"./utils.ec5be6f5.js";import{u as A}from"./sync.45b658de.js";import{_ as F,r as L,a as _,aB as T,p as W,f as O,h as S,q as l,S as t,an as e,M as x,F as w,P as a,Q as n,ak as X,i as Y,ao as j,ap as q}from"./vue-router.esm-bundler.94bfc301.js";import"./index.99ecac2e.js";import"./index.e9ed0577.js";import"./index.f97751f8.js";import"./index.27bcfa75.js";import"./zIndex.e6361e60.js";import"./index.933da9e0.js";import"./provide.f6089a49.js";import"./lock.159bd874.js";import"./AppType.vue_vue_type_style_index_0_lang.d7747dd0.js";import"./_commonjsHelpers.b8add541.js";import"./index.cd0f538d.js";const V=f=>(j("data-v-bfeaf3bd"),f=f(),q(),f),D={class:"flex-box"},E=V(()=>x("div",{style:{"margin-bottom":"20px"}},null,-1)),P=V(()=>x("div",{style:{"margin-bottom":"100px"}},null,-1)),Q={setup(f){const B=L({top:!1,bottom:!1,offsetX:!1,offsetX1:!1,offsetY:!1,offsetY1:!1,event:!1,placement:!0,trigger:!1}),c=_(!1);T(B);const v=_("cover-top-start"),C=_(["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end","cover-top","cover-top-start","cover-top-end","cover-bottom","cover-bottom-start","cover-bottom-end","cover-left","cover-right"]),b=_("click"),g=()=>{c.value=!1};return N(M),A(),(R,r)=>{const h=W("var-icon");return O(),S(w,null,[l(e(m),null,{default:t(()=>[a(n(e(o).basicUsage),1)]),_:1}),l(e(i),null,{menu:t(()=>[l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1})]),default:t(()=>[l(e(s),{type:"primary"},{default:t(()=>[a(n(e(o).basicUsage),1)]),_:1})]),_:1}),l(e(m),null,{default:t(()=>[a(n(e(o).placement),1)]),_:1}),l(e(k),{hint:!1,modelValue:v.value,"onUpdate:modelValue":r[0]||(r[0]=p=>v.value=p)},{default:t(()=>[(O(!0),S(w,null,X(C.value,(p,U)=>(O(),Y(e(y),{key:U,label:p},null,8,["label"]))),128))]),_:1},8,["modelValue"]),x("div",D,[l(e(i),{placement:v.value},{menu:t(()=>[l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1})]),default:t(()=>[l(e(s),{type:"primary"},{default:t(()=>[l(h,{name:"star"})]),_:1})]),_:1},8,["placement"])]),l(e(m),null,{default:t(()=>[a(n(e(o).offset),1)]),_:1}),l(e(i),{"offset-x":"36px","offset-y":"18px"},{menu:t(()=>[l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1})]),default:t(()=>[l(e(s),{type:"primary"},{default:t(()=>[a(n(e(o).offset),1)]),_:1})]),_:1}),l(e(m),null,{default:t(()=>[a(n(e(o).trigger),1)]),_:1}),l(e(k),{hint:!1,modelValue:b.value,"onUpdate:modelValue":r[1]||(r[1]=p=>b.value=p)},{default:t(()=>[l(e(y),{label:"click"}),l(e(y),{label:"hover"})]),_:1},8,["modelValue"]),E,l(e(i),{trigger:b.value},{menu:t(()=>[l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1})]),default:t(()=>[l(e(s),{type:"primary"},{default:t(()=>[a(n(e(o).trigger),1)]),_:1})]),_:1},8,["trigger"]),l(e(m),null,{default:t(()=>[a(n(e(o).events),1)]),_:1}),l(e(i),{onOpen:r[2]||(r[2]=()=>e(d).info("open")),onOpened:r[3]||(r[3]=()=>e(d).success("opened")),onClose:r[4]||(r[4]=()=>e(d).warning("close")),onClosed:r[5]||(r[5]=()=>e(d).error("closed"))},{menu:t(()=>[l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1})]),default:t(()=>[l(e(s),{type:"primary"},{default:t(()=>[a(n(e(o).events),1)]),_:1})]),_:1}),l(e(m),null,{default:t(()=>[a(n(e(o).disabled),1)]),_:1}),l(e(I),{justify:"space-between"},{default:t(()=>[l(e(i),{disabled:""},{menu:t(()=>[l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),null,{default:t(()=>[a(n(e(o).menuOption),1)]),_:1})]),default:t(()=>[l(e(s),{type:"primary"},{default:t(()=>[a(n(e(o).disabled),1)]),_:1})]),_:1})]),_:1}),l(e(m),null,{default:t(()=>[a(n(e(o).twoWayBinding),1)]),_:1}),l(e(i),{show:c.value,"onUpdate:show":r[6]||(r[6]=p=>c.value=p)},{menu:t(()=>[l(e(u),{onClick:g},{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),{onClick:g},{default:t(()=>[a(n(e(o).menuOption),1)]),_:1}),l(e(u),{onClick:g},{default:t(()=>[a(n(e(o).menuOption),1)]),_:1})]),default:t(()=>[l(e(s),{type:"primary"},{default:t(()=>[a(n(e(o).twoWayBinding),1)]),_:1})]),_:1},8,["show"]),P],64)}}},Ce=F(Q,[["__scopeId","data-v-bfeaf3bd"]]);export{Ce as default};