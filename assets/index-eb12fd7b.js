import{B as i}from"./index-fc93ec85.js";import{C as g}from"./cell-38ee58c5.js";import{D as u}from"./DialogSfc-59e895ad.js";import{I as T}from"./index-951ce32a.js";import{S as m}from"./index-bae959f1.js";import{_ as F,ac as w,r as I,aJ as V,aE as $,f as A,h as E,q as t,S as a,ao as e,aK as y,F as N,P as l,Q as n,aF as _}from"./vue-router.esm-bundler-9b345358.js";import{d as P}from"./index-7bc61823.js";import{p as o,u as B}from"./index-23f00ca5.js";import{u as R}from"./sync-96faa7c8.js";import"./shared-4a7fb7de.js";/* empty css             */import"./IconSfc-4ed993c7.js";import"./CellSfc-4ed993c7.js";import"./popup-272c5c9f.js";/* empty css               */import"./index-c6a26488.js";import"./index-7cf7163d.js";import"./index-7a58b817.js";import"./index-a7264297.js";import"./zIndex-a5325217.js";import"./lock-62d78e34.js";import"./_commonjsHelpers-725317a4.js";const q={setup(J){w(B),R();const d=u.Component,b=I({show:!1,show1:!1,show2:!1}),{show:p,show1:f,show2:c}=V(b),C={confirm:()=>m.success("confirm"),cancel:()=>m.error("cancel"),close:()=>m.info("close")},x=()=>u({message:o.value.message}),h=async()=>C[await u(o.value.message)](),S=()=>{u({title:o.value.title,message:o.value.message})},U=()=>{u({message:o.value.message,confirmButton:!1,cancelButton:!1})},k=(v,s)=>{m.loading(o.value.asyncCloseProgress),setTimeout(()=>{C[v](),s()},1e3)},D=()=>{u({message:o.value.message,onBeforeClose:k})};return w(B),$(P),(v,s)=>(A(),E(N,null,[t(e(_),null,{default:a(()=>[l(n(e(o).functionCall),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:x},{default:a(()=>[l(n(e(o).basicUsage),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:S},{default:a(()=>[l(n(e(o).modifyTitle),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:U},{default:a(()=>[l(n(e(o).hideButton),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:h},{default:a(()=>[l(n(e(o).handleUserBehavior),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:D},{default:a(()=>[l(n(e(o).asyncClose),1)]),_:1}),t(e(_),null,{default:a(()=>[l(n(e(o).componentCall),1)]),_:1}),t(e(i),{type:"warning",block:"",onClick:s[0]||(s[0]=r=>p.value=!0)},{default:a(()=>[l(n(e(o).basicUsage),1)]),_:1}),t(e(d),{show:e(p),"onUpdate:show":s[1]||(s[1]=r=>y(p)?p.value=r:null),title:e(o).title,message:e(o).message,onConfirm:s[2]||(s[2]=()=>e(m).success("confirm")),onCancel:s[3]||(s[3]=()=>e(m).error("cancel")),onClosed:s[4]||(s[4]=()=>e(m).info("closed"))},null,8,["show","title","message"]),t(e(i),{type:"warning",block:"",onClick:s[5]||(s[5]=r=>f.value=!0)},{default:a(()=>[l(n(e(o).asyncClose),1)]),_:1}),t(e(d),{show:e(f),"onUpdate:show":s[6]||(s[6]=r=>y(f)?f.value=r:null),title:e(o).title,message:e(o).message,onBeforeClose:k},null,8,["show","title","message"]),t(e(i),{type:"warning",block:"",onClick:s[7]||(s[7]=r=>c.value=!0)},{default:a(()=>[l(n(e(o).customSlots),1)]),_:1}),t(e(d),{show:e(c),"onUpdate:show":s[8]||(s[8]=r=>y(c)?c.value=r:null)},{title:a(()=>[t(e(T),{name:"information",color:"#2979ff"})]),default:a(()=>[t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1})]),_:1},8,["show"])],64))}},me=F(q,[["__scopeId","data-v-763a115d"]]);export{me as default};
