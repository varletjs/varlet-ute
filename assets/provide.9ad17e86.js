import{d as M,f as n,i as h,S as t,h as o,M as f,q as v,Q as g,j as i,G as m,N as d,z as F}from"./vue-router.esm-bundler.dfdc86af.js";import{c as b,s as y,v as I}from"./shared.b468a763.js";var O={errorMessage:{type:String,default:""},extraMessage:{type:String,default:""}},{n:C}=b("form-details"),N={key:0},B={key:0};function _(e,a){return n(),h(m,{name:e.n()},{default:t(()=>[e.errorMessage||e.extraMessage?(n(),o("div",{key:0,class:d(e.n())},[f("div",{class:d(e.n("error-message"))},[v(m,{name:e.n("message")},{default:t(()=>[e.errorMessage?(n(),o("div",N,g(e.errorMessage),1)):i("v-if",!0)]),_:1},8,["name"])],2),f("div",{class:d(e.n("extra-message"))},[v(m,{name:e.n("message")},{default:t(()=>[e.extraMessage?(n(),o("div",B,g(e.extraMessage),1)):i("v-if",!0)]),_:1},8,["name"])],2)],2)):i("v-if",!0)]),_:1},8,["name"])}const l=M({render:_,name:"VarFormDetails",props:O,setup:()=>({n:C})});l.install=function(e){e.component(l.name,l)};function u(){return u=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},u.apply(this,arguments)}var p=Symbol("FORM_BIND_FORM_ITEM_KEY");function P(){var{bindParent:e,parentProvider:a}=y(p),r=F(),s=e?c=>{e(u({},c,{instance:r}))}:null;return{bindForm:s,form:a}}function S(){var{bindChildren:e,childProviders:a}=I(p);return{formItems:a,bindFormItems:e}}export{l as F,S as a,P as u};