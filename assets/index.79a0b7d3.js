import{d as y,a as c,o as S,e as h,p,f as u,i as T,M as B,O as C,q as l,S as f,m as N,aj as V,T as E,aF as w,W as j,aG as F,h as d,F as I,ak as L,an as v,P as O,Q as P}from"./vue-router.esm-bundler.ad5bb508.js";import{B as U}from"./index.a8a9f26a.js";import{I as q}from"./index.32f62010.js";import{n as z,t as M,c as A,b as H,o as $,q as D,r as G,v as Q,k as W}from"./shared.dccb68a6.js";import{C as _}from"./cell.4202ff83.js";import"./AppType.vue_vue_type_style_index_0_lang.011afb85.js";/* empty css               *//* empty css             */import"./CellSfc.90047be6.js";import{u as J}from"./sync.2b7a7eea.js";import"./index.8b902a19.js";import"./index.696949a9.js";import"./index.8fd7e086.js";import"./_commonjsHelpers.b8add541.js";var K={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},right:{type:[Number,String]},bottom:{type:[Number,String]},target:{type:[String,Object]},onClick:{type:Function}},{n:R,classes:X}=A("back-top");function Y(t,r){var a=p("var-icon"),o=p("var-button");return u(),T(E,{to:"body",disabled:t.disabled},[B("div",N({class:t.classes(t.n(),[t.show,t.n("--active")]),ref:"backTopEl",style:{right:t.toSizeUnit(t.right),bottom:t.toSizeUnit(t.bottom)}},t.$attrs,{onClick:r[0]||(r[0]=V(function(){return t.click&&t.click(...arguments)},["stop"]))}),[C(t.$slots,"default",{},()=>[l(o,{type:"primary",round:"","var-back-top-cover":""},{default:f(()=>[l(a,{name:"chevron-up"})]),_:1})])],16)],8,["disabled"])}const i=y({render:Y,name:"VarBackTop",components:{VarButton:U,VarIcon:q},inheritAttrs:!1,props:K,setup(t){var r=c(!1),a=c(null),o=c(!0),e,b=n=>{H(t.onClick,n);var s=$(e);D(e,{left:s,duration:t.duration,animation:G})},g=()=>{r.value=Q(e)>=W(t.visibilityHeight)},m=w(g,200),k=()=>{var{target:n}=t;if(j(n)){var s=document.querySelector(t.target);if(!s)throw Error("[Varlet] BackTop: target element cannot found");return s}if(F(n))return n;throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object')};return S(()=>{e=t.target?k():z(a.value),e.addEventListener("scroll",m),o.value=!1}),h(()=>{e.removeEventListener("scroll",m)}),{disabled:o,show:r,backTopEl:a,toSizeUnit:M,n:R,classes:X,click:b}}});i.install=function(t){t.component(i.name,i)};const pt={setup(t){const r=[...Array(100).keys()];return J(),(a,o)=>(u(),d("div",null,[(u(),d(I,null,L(r,e=>l(v(_),{key:e},{default:f(()=>[O("Scroll to bottom "+P(e),1)]),_:2},1024)),64)),l(v(i),{duration:300})]))}};export{pt as default};