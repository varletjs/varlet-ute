import{c as z}from"./shared.b468a763.js";import{d as N,a as h,o as V,al as $,f,h as d,M as A,O as g,N as p,R as b,P as r,Q as i,j as L,q as a,S as o,an as t,F as P,ak as D,D as M,i as _}from"./vue-router.esm-bundler.dfdc86af.js";import{B}from"./index.b049455a.js";import{C as F}from"./cell.7317c0f3.js";import{I as C}from"./index.f298cda6.js";import{M as I}from"./menu.d36eeb6c.js";import{v as O}from"./index.452b8aab.js";import{S as R}from"./index.fca59cdf.js";/* empty css                  *//* empty css             */import"./IconSfc.61818718.js";/* empty css                *//* empty css                *//* empty css               */import"./MenuSfc.1aa87537.js";/* empty css               */import"./ButtonSfc.d73b10b3.js";import"./CellSfc.90047be6.js";import{A as u}from"./AppType.44f2eb1f.js";import{d as U}from"./index.098dd72d.js";import{p as l,u as j}from"./index.60ca59d2.js";import{a as q,b as E}from"./utils.16cd8a81.js";import{u as Q}from"./sync.971d6709.js";import"./_commonjsHelpers.b8add541.js";import"./index.b2443f5d.js";import"./zIndex.b1654c4b.js";import"./index.39e6461a.js";import"./lock.465be351.js";import"./AppType.vue_vue_type_style_index_0_lang.402a256b.js";import"./index.0d0d6d5d.js";function Y(e){var n=["left","center","right"];return n.includes(e)}var G={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:Y},elevation:{type:Boolean,default:!0},round:{type:Boolean,default:!1}},{n:H,classes:J}=z("app-bar");function K(e,n){return f(),d("div",{class:p(e.classes(e.n(),[e.round,e.n("--round")],[e.elevation,e.n("$-elevation--3")])),style:b({background:e.color,color:e.textColor})},[A("div",{class:p(e.n("left"))},[g(e.$slots,"left"),e.titlePosition==="left"?(f(),d("div",{key:0,class:p(e.n("title")),style:b({paddingLeft:e.paddingLeft})},[g(e.$slots,"default",{},()=>[r(i(e.title),1)])],6)):L("v-if",!0)],2),e.titlePosition==="center"?(f(),d("div",{key:0,class:p(e.n("title"))},[g(e.$slots,"default",{},()=>[r(i(e.title),1)])],2)):L("v-if",!0),A("div",{class:p(e.n("right"))},[e.titlePosition==="right"?(f(),d("div",{key:0,class:p(e.n("title")),style:b({paddingRight:e.paddingRight})},[g(e.$slots,"default",{},()=>[r(i(e.title),1)])],6)):L("v-if",!0),g(e.$slots,"right")],2)],6)}const s=N({render:K,name:"VarAppBar",props:G,setup(e,n){var{slots:m}=n,c=h(),y=h(),v=()=>{c.value=m.left?0:void 0,y.value=m.right?0:void 0};return V(v),$(v),{n:H,classes:J,paddingLeft:c,paddingRight:y}}});s.install=function(e){e.component(s.name,s)};const W=A("div",{class:"var-app-var--example-space"},null,-1),Pt={setup(e){const n=h(!1),m=h([]),c=h("#fff"),y=()=>{R({content:l.value.search,position:"top"})},v=()=>{R({content:l.value.goBack,position:"top"})},T=()=>{m.value=[{label:l.value.options1,value:"menu1"},{label:l.value.options2,value:"menu2"}],n.value=!0};return q(k=>{j(k),n.value=!1}),E(U,k=>{c.value=k==="darkTheme"?"#272727":"#fff"}),Q(),(k,w)=>(f(),d(P,null,[a(t(u),null,{default:o(()=>[r(i(t(l).basicAppBar),1)]),_:1}),a(t(s),{title:t(l).title},null,8,["title"]),a(t(u),null,{default:o(()=>[r(i(t(l).customStyle),1)]),_:1}),a(t(s),{title:t(l).title,"title-position":"center",color:"#00c48f"},null,8,["title"]),a(t(u),null,{default:o(()=>[r(i(t(l).addSlotsAtTitle),1)]),_:1}),a(t(s),null,{default:o(()=>[r(i(t(l).addTheTitleFromTheSlot),1)]),_:1}),a(t(u),null,{default:o(()=>[r(i(t(l).addLeftSlot),1)]),_:1}),a(t(s),{title:t(l).title,"title-position":"center"},{left:o(()=>[a(t(B),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:v},{default:o(()=>[a(t(C),{name:"chevron-left",size:24})]),_:1})]),_:1},8,["title"]),a(t(u),null,{default:o(()=>[r(i(t(l).addRightSlot),1)]),_:1}),a(t(s),{title:t(l).title},{right:o(()=>[a(t(B),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:y},{default:o(()=>[a(t(C),{name:"magnify",size:24})]),_:1})]),_:1},8,["title"]),a(t(u),null,{default:o(()=>[r(i(t(l).addLeftAndRightSlot),1)]),_:1}),a(t(s),{title:t(l).title},{left:o(()=>[a(t(B),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:v},{default:o(()=>[a(t(C),{name:"chevron-left",size:24})]),_:1})]),right:o(()=>[a(t(I),{"offset-y":42,"offset-x":-20,show:n.value,"onUpdate:show":w[0]||(w[0]=S=>n.value=S)},{menu:o(()=>[A("div",{class:"var-app-var--example-menu-list",style:b({background:c.value})},[(f(!0),d(P,null,D(m.value,S=>M((f(),_(t(F),{class:"var-app-var--example-menu-cell",key:S.value},{default:o(()=>[r(i(S.label),1)]),_:2},1024)),[[t(O)]])),128))],4)]),default:o(()=>[a(t(B),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:T},{default:o(()=>[a(t(C),{name:"menu",size:24})]),_:1})]),_:1},8,["show"])]),_:1},8,["title"]),W],64))}};export{Pt as default};