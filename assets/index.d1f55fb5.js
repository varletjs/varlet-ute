import{B as r}from"./index.b049455a.js";import{S as p}from"./index.fca59cdf.js";import{S as x}from"./index.07bb0a08.js";import"./shared.b468a763.js";/* empty css                  *//* empty css               *//* empty css                *//* empty css               */import"./ButtonSfc.d73b10b3.js";/* empty css              *//* empty css                *//* empty css             */import{d as U}from"./index.098dd72d.js";import{A as b}from"./AppType.44f2eb1f.js";import{p as e,u as B}from"./index.241c5f87.js";import{a as T,b as V}from"./utils.16cd8a81.js";import{u as D}from"./sync.971d6709.js";import{r as M,aB as z,f as N,h as A,q as n,S as l,an as t,M as F,aC as w,F as L,P as i,Q as s}from"./vue-router.esm-bundler.dfdc86af.js";import"./index.452b8aab.js";import"./index.39e6461a.js";import"./index.b2443f5d.js";import"./index.f298cda6.js";import"./zIndex.b1654c4b.js";import"./lock.465be351.js";import"./_commonjsHelpers.b8add541.js";import"./AppType.vue_vue_type_style_index_0_lang.402a256b.js";import"./index.0d0d6d5d.js";const R={class:"snackbar-demo"},mt={setup(q){const y=M({show1:!1,show2:!1,show3:!1,show4:!1,show9:!1}),m=p.Component,{show1:C,show2:k,show3:v,show4:c,show9:g}=z(y),d=u=>{y[u]=!y[u]},f=u=>{const o=u==="loading"?e.value.wait:e.value.text;p[u](o),u==="loading"&&setTimeout(()=>{p.success(e.value.loaded)},2e3)},$=u=>{u==="time"&&p({content:e.value.text,duration:1e3}),u==="position"&&p({content:e.value.text,position:"bottom"}),u||p(e.value.text)},S=()=>{p.allowMultiple(!0);const u=p("Snackbar 1");p.success("Snackbar 2"),setTimeout(()=>{u.clear()},1e3)};return T(B),V(U),D(),(u,o)=>(N(),A(L,null,[n(t(b),null,{default:l(()=>[i(s(t(e).componentCall),1)]),_:1}),n(t(x),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(r),{type:"primary",block:"",onClick:o[0]||(o[0]=a=>d("show1"))},{default:l(()=>[i(s(t(e).basicUsage),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:o[1]||(o[1]=a=>d("show3"))},{default:l(()=>[i(s(t(e).multiLine),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:o[2]||(o[2]=a=>d("show2"))},{default:l(()=>[i(s(t(e).bottomDisplay),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:o[3]||(o[3]=a=>d("show4"))},{default:l(()=>[i(s(t(e).hiddenTime),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:o[4]||(o[4]=a=>d("show9"))},{default:l(()=>[i(s(t(e).forbidClick),1)]),_:1})]),_:1}),n(t(b),null,{default:l(()=>[i(s(t(e).functionCall),1)]),_:1}),n(t(x),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(r),{type:"warning",block:"",onClick:o[5]||(o[5]=a=>$())},{default:l(()=>[i(s(t(e).basicUsage),1)]),_:1}),n(t(r),{type:"warning",block:"",onClick:o[6]||(o[6]=a=>$("time"))},{default:l(()=>[i(s(t(e).hiddenTime),1)]),_:1}),n(t(r),{type:"warning",block:"",onClick:o[7]||(o[7]=a=>$("position"))},{default:l(()=>[i(s(t(e).bottomDisplay),1)]),_:1})]),_:1}),n(t(b),null,{default:l(()=>[i(s(t(e).type),1)]),_:1}),n(t(x),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[n(t(r),{type:"success",block:"",onClick:o[8]||(o[8]=a=>f("success"))},{default:l(()=>[i(s(t(e).success),1)]),_:1}),n(t(r),{type:"warning",block:"",onClick:o[9]||(o[9]=a=>f("warning"))},{default:l(()=>[i(s(t(e).warning),1)]),_:1}),n(t(r),{type:"info",block:"",onClick:o[10]||(o[10]=a=>f("info"))},{default:l(()=>[i(s(t(e).info),1)]),_:1}),n(t(r),{type:"danger",block:"",onClick:o[11]||(o[11]=a=>f("error"))},{default:l(()=>[i(s(t(e).error),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:o[12]||(o[12]=a=>f("loading"))},{default:l(()=>[i(s(t(e).loading),1)]),_:1})]),_:1}),n(t(b),null,{default:l(()=>[i(s(t(e).multiple),1)]),_:1}),n(t(r),{type:"primary",block:"",onClick:S},{default:l(()=>[i(s(t(e).multiple),1)]),_:1}),F("div",R,[n(t(m),{show:t(C),"onUpdate:show":o[13]||(o[13]=a=>w(C)?C.value=a:null)},{default:l(()=>[i(s(t(e).text),1)]),_:1},8,["show"]),n(t(m),{show:t(k),"onUpdate:show":o[15]||(o[15]=a=>w(k)?k.value=a:null),position:"bottom"},{action:l(()=>[n(t(r),{type:"primary",onClick:o[14]||(o[14]=a=>k.value=!1)},{default:l(()=>[i(s(t(e).close),1)]),_:1})]),default:l(()=>[i(s(t(e).text)+" ",1)]),_:1},8,["show"]),n(t(m),{show:t(v),"onUpdate:show":o[17]||(o[17]=a=>w(v)?v.value=a:null),vertical:!0},{action:l(()=>[n(t(r),{type:"primary",onClick:o[16]||(o[16]=a=>v.value=!1)},{default:l(()=>[i(s(t(e).close),1)]),_:1})]),default:l(()=>[i(s(t(e).text)+" ",1)]),_:1},8,["show"]),n(t(m),{show:t(c),"onUpdate:show":o[18]||(o[18]=a=>w(c)?c.value=a:null),duration:1e3},{default:l(()=>[i(s(t(e).text),1)]),_:1},8,["show"]),n(t(m),{show:t(g),"onUpdate:show":o[19]||(o[19]=a=>w(g)?g.value=a:null),"forbid-click":!0},{default:l(()=>[i(s(t(e).text),1)]),_:1},8,["show"])])],64))}};export{mt as default};