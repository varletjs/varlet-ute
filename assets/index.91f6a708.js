import{P as $}from"./PaginationSfc.6082209e.js";import{t as C,c as T}from"./shared.b468a763.js";import{d as V,f as u,h as d,M as t,N as c,R as w,O as g,j as z,_ as I,a as A,q as r,S as i,an as a,F as y,P as v,Q as n,ak as B,ao as P,ap as U}from"./vue-router.esm-bundler.dfdc86af.js";import{p as l,u as j}from"./index.e5f0e7f2.js";import{A as S}from"./AppType.44f2eb1f.js";/* empty css                  */import"./menu.d36eeb6c.js";import"./cell.7317c0f3.js";import"./input.4375e132.js";/* empty css               *//* empty css             */import{a as F}from"./utils.16cd8a81.js";import{u as L}from"./sync.971d6709.js";import"./index.452b8aab.js";import"./index.39e6461a.js";import"./index.f298cda6.js";import"./index.0d0d6d5d.js";import"./_commonjsHelpers.b8add541.js";import"./AppType.vue_vue_type_style_index_0_lang.402a256b.js";import"./zIndex.b1654c4b.js";import"./provide.9ad17e86.js";var{n:W,classes:q}=T("table");function D(e,f){return u(),d("div",{class:c(e.classes(e.n(),e.n("$-elevation--1"),e.n("$--box")))},[t("div",{class:c(e.n("main"))},[t("table",{class:c(e.n("table")),style:w({width:e.toSizeUnit(e.fullWidth)})},[g(e.$slots,"default")],6)],2),e.$slots.footer?(u(),d("div",{key:0,class:c(e.n("footer"))},[g(e.$slots,"footer")],2)):z("v-if",!0)],2)}const m=V({render:D,name:"VarTable",props:{fullWidth:{type:[Number,String],default:"100%"}},setup(){return{toSizeUnit:C,n:W,classes:q}}});m.install=function(e){e.component(m.name,m)};const h=e=>(P("data-v-2bd6b8a8"),e=e(),U(),e),E=h(()=>t("td",null,"124",-1)),M=h(()=>t("td",null,"38",-1)),O=h(()=>t("td",null,"100",-1)),Q=h(()=>t("td",null,"135",-1)),R={class:"footer"},G={setup(e){const f=(p,o)=>Array.from({length:o}).map((s,k)=>{const _=(p-1)*o+k+1;return{name:`Name ${_}`,math:_,english:_}}),b=A(f(1,10)),N=(p,o)=>{b.value=f(p,o)};return F(j),L(),(p,o)=>(u(),d(y,null,[r(a(S),null,{default:i(()=>[v(n(a(l).basicUsage),1)]),_:1}),r(a(m),null,{default:i(()=>[t("thead",null,[t("tr",null,[t("th",null,n(a(l).name),1),t("th",null,n(a(l).math),1),t("th",null,n(a(l).english),1)])]),t("tbody",null,[t("tr",null,[t("td",null,n(a(l).jerry),1),E,M]),t("tr",null,[t("td",null,n(a(l).tom),1),O,Q])])]),_:1}),r(a(S),null,{default:i(()=>[v(n(a(l).slot),1)]),_:1}),r(a(m),null,{footer:i(()=>[t("div",R,[r(a($),{current:1,total:100,"size-option":[5,10],onChange:N})])]),default:i(()=>[t("thead",null,[t("tr",null,[t("th",null,n(a(l).name),1),t("th",null,n(a(l).math),1),t("th",null,n(a(l).english),1)])]),t("tbody",null,[(u(!0),d(y,null,B(b.value,s=>(u(),d("tr",{key:s.name},[t("td",null,n(s.name),1),t("td",null,n(s.math),1),t("td",null,n(s.english),1)]))),128))])]),_:1})],64))}},ht=I(G,[["__scopeId","data-v-2bd6b8a8"]]);export{ht as default};