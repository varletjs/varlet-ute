import{v as O}from"./index-c6a26488.js";import{p as s,L as z}from"./index-7a58b817.js";import{p as u,a as y,u as N,g as U,h as k,i as P,c as S,e as m}from"./shared-4a7fb7de.js";import{d as R,a as G,b as L,p as V,ag as $,D,f as b,h as E,i as j,N as d,j as A,M as K,O as Y,R as w,as as I}from"./vue-router.esm-bundler-9b345358.js";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function M(e){return["default","primary","info","success","warning","danger"].includes(e)}function q(e){return["normal","mini","small","large"].includes(e)}function F(e){return["button","reset","submit"].includes(e)}var H={type:{type:String,validator:M},nativeType:{type:String,default:"button",validator:F},size:{type:String,validator:q},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},autoLoading:{type:Boolean,default:!1},loadingRadius:{type:[Number,String]},loadingType:u(s,"type"),loadingSize:u(s,"size"),loadingColor:f({},u(s,"color"),{default:"currentColor"}),onClick:y(),onTouchstart:y()},B=Symbol("BUTTON_GROUP_BIND_BUTTON_KEY"),T=Symbol("BUTTON_GROUP_COUNT_BUTTON_KEY");function ne(){var{bindChildren:e,childProviders:a}=U(B),{length:n}=N(T);return{length:n,buttons:a,bindButtons:e}}function J(){var{bindParent:e,parentProvider:a}=k(B),{index:n}=P(T);return{index:n,buttonGroup:a,bindButtonGroup:e}}var{n:Q,classes:W}=S("button"),X=["type","disabled"];function Z(e,a){var n=V("var-loading"),l=$("ripple");return D((b(),E("button",{class:d(e.classes(e.n(),e.n("$--box"),e.n("--"+e.states.size),[e.block,e.n("$--flex")+" "+e.n("--block"),e.n("$--inline-flex")],[e.disabled,e.n("--disabled")],[e.states.text,e.n("--text-"+e.states.type)+" "+e.n("--text"),e.n("--"+e.states.type)+" "+e.n("$-elevation--"+e.states.elevation)],[e.states.text&&e.disabled,e.n("--text-disabled")],[e.round,e.n("--round")],[e.states.outline,e.n("--outline")])),style:w({color:e.states.textColor,background:e.states.color}),type:e.nativeType,disabled:e.disabled,onClick:a[0]||(a[0]=function(){return e.handleClick&&e.handleClick(...arguments)}),onTouchstart:a[1]||(a[1]=function(){return e.handleTouchstart&&e.handleTouchstart(...arguments)})},[e.loading||e.pending?(b(),j(n,{key:0,class:d(e.n("loading")),"var-button-cover":"",color:e.loadingColor,type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["class","color","type","size","radius"])):A("v-if",!0),K("div",{class:d(e.classes(e.n("content"),[e.loading||e.pending,e.n("--hidden")]))},[Y(e.$slots,"default")],2)],46,X)),[[l,{disabled:e.disabled||!e.ripple}]])}var c=R({name:"VarButton",components:{VarLoading:z},directives:{Ripple:O},props:H,setup(e){var a=G(!1),{buttonGroup:n}=J(),l=L(()=>{if(!n)return{elevation:2,type:e.type!=null?e.type:"default",size:e.size!=null?e.size:"normal",color:e.color,text:e.text,textColor:e.textColor,outline:e.outline};var{type:t,size:r,color:i,textColor:o,mode:g}=n;return{elevation:0,type:e.type!=null?e.type:t.value,size:e.size!=null?e.size:r.value,color:e.color!=null?e.color:i.value,textColor:e.textColor!=null?e.textColor:o.value,text:g.value!=="normal",outline:g.value==="outline"}}),p=t=>{e.autoLoading&&(a.value=!0,t=I(t)?t:[t],Promise.all(t).then(()=>{a.value=!1}).catch(()=>{a.value=!1}))},C=t=>{var{loading:r,disabled:i,onClick:o}=e;!o||r||i||a.value||p(m(o,t))},h=t=>{var{loading:r,disabled:i,onTouchstart:o}=e;!o||r||i||a.value||p(m(o,t))};return{n:Q,classes:W,pending:a,states:l,handleClick:C,handleTouchstart:h}}});c.render=Z;const v=c;v.install=function(e){e.component(v.name,v)};export{v as B,ne as u};
