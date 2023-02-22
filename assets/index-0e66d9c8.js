import{a as y,u as N,g as L,h as P,i as I,c as k,e as T}from"./shared-4a7fb7de.js";import{d as R,b,f as B,h as C,M as S,O as _,N as v,Q as n,j as V,aE as w,ac as K,q as a,S as l,ao as e,F as Y,P as s,aF as p}from"./vue-router.esm-bundler-9b345358.js";import{I as E}from"./index-951ce32a.js";import{S as f}from"./index-bae959f1.js";/* empty css             */import"./IconSfc-4ed993c7.js";/* empty css                *//* empty css                  *//* empty css                *//* empty css               */import{d as F}from"./index-7bc61823.js";import{p as t,u as O}from"./index-21f14a1a.js";import{u as j}from"./sync-96faa7c8.js";import"./_commonjsHelpers-725317a4.js";import"./index-7a58b817.js";import"./zIndex-a5325217.js";import"./index-7cf7163d.js";import"./lock-62d78e34.js";import"./index-a7264297.js";var q={separator:{type:String},onClick:y()},g=Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"),h=Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");function z(){var{childProviders:r,bindChildren:d}=L(g),{length:u}=N(h);return{length:u,breadcrumbList:r,bindBreadcrumbList:d}}function Q(){var{parentProvider:r,bindParent:d}=P(g),{index:u}=I(h);if(!r||!d||!u)throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");return{index:u,breadcrumb:r,bindBreadcrumb:d}}var{n:G,classes:H}=k("breadcrumb");function J(r,d){return B(),C("div",{class:v(r.n())},[S("div",{class:v(r.classes(r.n("content"),[!r.isLast,r.n("--active")])),onClick:d[0]||(d[0]=function(){return r.handleClick&&r.handleClick(...arguments)})},[_(r.$slots,"default")],2),r.isLast?V("v-if",!0):_(r.$slots,"separator",{key:0},()=>{var u;return[S("div",{class:v(r.n("separator"))},n((u=r.separator)!=null?u:r.parentSeparator),3)]})],2)}var D=R({name:"VarBreadcrumb",props:q,setup(r){var{index:d,breadcrumb:u,bindBreadcrumb:m}=Q(),c=b(()=>d.value===u.length.value-1),A=b(()=>u.separator.value),U=$=>{c.value||T(r.onClick,$)};return m(null),{n:G,classes:H,isLast:c,parentSeparator:A,handleClick:U}}});D.render=J;const o=D;o.install=function(r){r.component(o.name,o)};var W={separator:{type:String,default:"/"}},{n:X}=k("breadcrumbs");function Z(r,d){return B(),C("div",{class:v(r.n())},[_(r.$slots,"default")],2)}var M=R({name:"VarBreadcrumbs",props:W,setup(r){var d=b(()=>r.separator),{bindBreadcrumbList:u,length:m}=z(),c={length:m,separator:d};return u(c),{n:X}}});M.render=Z;const i=M;i.install=function(r){r.component(i.name,i)};const Be={setup(r){return w(F),K(O),j(),(d,u)=>(B(),C(Y,null,[a(e(p),null,{default:l(()=>[s(n(e(t).basicUsage),1)]),_:1}),a(e(i),null,{default:l(()=>[a(e(o),null,{default:l(()=>[s(n(e(t).level1),1)]),_:1}),a(e(o),null,{default:l(()=>[s(n(e(t).level2),1)]),_:1}),a(e(o),null,{default:l(()=>[s(n(e(t).level3),1)]),_:1})]),_:1}),a(e(p),null,{default:l(()=>[s(n(e(t).separator),1)]),_:1}),a(e(i),{separator:"\\"},{default:l(()=>[a(e(o),null,{default:l(()=>[s(n(e(t).level1),1)]),_:1}),a(e(o),null,{default:l(()=>[s(n(e(t).level2),1)]),_:1}),a(e(o),null,{default:l(()=>[s(n(e(t).level3),1)]),_:1})]),_:1}),a(e(p),null,{default:l(()=>[s(n(e(t).childSeparator),1)]),_:1}),a(e(i),null,{default:l(()=>[a(e(o),null,{default:l(()=>[s(n(e(t).level1),1)]),_:1}),a(e(o),{separator:"~"},{default:l(()=>[s(n(e(t).level2),1)]),_:1}),a(e(o),null,{default:l(()=>[s(n(e(t).level3),1)]),_:1})]),_:1}),a(e(p),null,{default:l(()=>[s(n(e(t).separatorSlot),1)]),_:1}),a(e(i),null,{default:l(()=>[a(e(o),null,{separator:l(()=>[a(e(E),{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:l(()=>[s(" "+n(e(t).level1),1)]),_:1}),a(e(o),null,{separator:l(()=>[a(e(E),{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:l(()=>[s(" "+n(e(t).level2),1)]),_:1}),a(e(o),null,{default:l(()=>[s(n(e(t).level3),1)]),_:1})]),_:1}),a(e(p),null,{default:l(()=>[s(n(e(t).events),1)]),_:1}),a(e(i),null,{default:l(()=>[a(e(o),{onClick:u[0]||(u[0]=m=>e(f)(e(t).level1))},{default:l(()=>[s(n(e(t).level1),1)]),_:1}),a(e(o),{onClick:u[1]||(u[1]=m=>e(f)(e(t).level2))},{default:l(()=>[s(n(e(t).level2),1)]),_:1}),a(e(o),{onClick:u[2]||(u[2]=m=>e(f)(e(t).level3))},{default:l(()=>[s(n(e(t).level3),1)]),_:1})]),_:1})],64))}};export{Be as default};
