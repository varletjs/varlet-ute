import{A as p}from"./AppType.4481ec15.js";import{B as k}from"./index.15207531.js";import{t as w,c as N}from"./shared.bc6bc3e5.js";import{d as b,Z as z,f as s,h as d,N as l,O as B,j as f,R as g,M as y,F as h,ak as D,a as S,q as t,S as n,an as a,P as i,Q as o}from"./vue-router.esm-bundler.7dc93fcf.js";/* empty css                  *//* empty css               *//* empty css                *//* empty css               */import"./ButtonSfc.d73b10b3.js";import{d as U}from"./index.fb915d03.js";import{a as C,b as V}from"./utils.a38dbf6d.js";import{p as r,u as A}from"./index.b7e2afd7.js";import{u as M}from"./sync.f08f8c3a.js";import"./AppType.vue_vue_type_style_index_0_lang.560fc63c.js";import"./index.9a14f3f4.js";import"./index.356384ec.js";import"./index.e0c80dc2.js";import"./_commonjsHelpers.b8add541.js";import"./index.db886bc8.js";var T={loading:{type:Boolean,default:!0},title:{type:Boolean,default:!1},card:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},fullscreenZIndex:{type:[Number,String],default:100},titleWidth:{type:[Number,String]},cardHeight:{type:[Number,String]},avatarSize:{type:[Number,String]},rows:{type:[Number,String],default:3},rowsWidth:{type:Array,default:()=>[]}},{n:W,classes:F}=N("skeleton");function H(e,m){return s(),d("div",{class:l(e.classes("var--box",e.n()))},[e.loading?f("v-if",!0):(s(),d("div",{key:0,class:l(e.n("data"))},[B(e.$slots,"default")],2)),e.loading&&!e.fullscreen?(s(),d("div",{key:1,class:l(e.n("content"))},[e.card?(s(),d("div",{key:0,class:l(e.n("card")),style:g({height:e.toSizeUnit(e.cardHeight)})},[y("div",{class:l(e.n("--animation"))},null,2)],6)):f("v-if",!0),e.avatar||e.title||e.toNumber(e.rows)>0?(s(),d("div",{key:1,class:l(e.n("article"))},[e.avatar?(s(),d("div",{key:0,class:l(e.n("avatar")),style:g({width:e.toSizeUnit(e.avatarSize),height:e.toSizeUnit(e.avatarSize)})},[y("div",{class:l(e.n("--animation"))},null,2)],6)):f("v-if",!0),e.title||e.toNumber(e.rows)>0?(s(),d("div",{key:1,class:l(e.n("section"))},[e.title?(s(),d("div",{key:0,class:l(e.n("title")),style:g({width:e.toSizeUnit(e.titleWidth)})},[y("div",{class:l(e.n("--animation"))},null,2)],6)):f("v-if",!0),(s(!0),d(h,null,D(e.toNumber(e.rows),(v,c)=>(s(),d("div",{class:l(e.n("row")),key:v,style:g({width:e.toSizeUnit(e.rowsWidth[c])})},[y("div",{class:l(e.n("--animation"))},null,2)],6))),128))],2)):f("v-if",!0)],2)):f("v-if",!0)],2)):f("v-if",!0),e.loading&&e.fullscreen?(s(),d("div",{key:2,class:l(e.n("fullscreen")),style:g({zIndex:e.toNumber(e.fullscreenZIndex)})},[y("div",{class:l(e.n("--animation"))},null,2)],6)):f("v-if",!0)],2)}const u=b({render:H,name:"VarSkeleton",props:T,setup(){return{n:W,classes:F,toSizeUnit:w,toNumber:z}}});u.install=function(e){e.component(u.name,u)};const te={setup(e){const m=S(!0),v=S(!1),c=()=>{v.value=!0,setTimeout(()=>{v.value=!1},2e3)};return C(A),V(U),M(),(I,L)=>(s(),d(h,null,[t(a(p),null,{default:n(()=>[i(o(a(r).basicUsage),1)]),_:1}),t(a(u),{loading:m.value},{default:n(()=>[i(o(a(r).loadingData),1)]),_:1},8,["loading"]),t(a(p),null,{default:n(()=>[i(o(a(r).displayTitle),1)]),_:1}),t(a(u),{title:"",loading:m.value},{default:n(()=>[i(o(a(r).loadingData),1)]),_:1},8,["loading"]),t(a(p),null,{default:n(()=>[i(o(a(r).customRowsHeight),1)]),_:1}),t(a(u),{title:"",rows:3,loading:m.value,"rows-width":["200px","100px","50px"]},{default:n(()=>[i(o(a(r).loadingData),1)]),_:1},8,["loading"]),t(a(p),null,{default:n(()=>[i(o(a(r).displayAvatar),1)]),_:1}),t(a(u),{title:"",avatar:"",rows:3,loading:m.value},{default:n(()=>[i(o(a(r).loadingData),1)]),_:1},8,["loading"]),t(a(p),null,{default:n(()=>[i(o(a(r).displayCard),1)]),_:1}),t(a(u),{title:"",avatar:"",card:"",rows:3,loading:m.value},{default:n(()=>[i(o(a(r).loadingData),1)]),_:1},8,["loading"]),t(a(p),null,{default:n(()=>[i(o(a(r).fullscreenMode),1)]),_:1}),t(a(k),{type:"danger",class:"button",onClick:c},{default:n(()=>[i(o(a(r).toggleFullscreenMode),1)]),_:1}),t(a(u),{fullscreen:"",loading:v.value},null,8,["loading"])],64))}};export{te as default};