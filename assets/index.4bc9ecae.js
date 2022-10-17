import{C as E}from"./cell.5f671be0.js";import{L as H}from"./index.ec3d8aae.js";import{v as J}from"./index.d57f0855.js";import{n as O,a as Q,c as X,b as F,k as j}from"./shared.07bb7935.js";import{d as A,a as D,o as K,u as W,X as Y,p as Z,ai as _,f as h,h as L,O as C,M as U,N as k,Q as f,q as u,j as R,D as ee,P as y,n as te,r as ne,aI as ae,S as o,an as t,aJ as b,F as w,ak as x,i as V}from"./vue-router.esm-bundler.25bd2824.js";import{p as ie}from"./index.e87889df.js";import{T as P,a as re,b as $,c as oe}from"./TabSfc.fa1b3a3b.js";import{p as c,u as le}from"./index.9b4ab656.js";import"./AppType.vue_vue_type_style_index_0_lang.bf5feac1.js";/* empty css               *//* empty css                *//* empty css             */import"./CellSfc.90047be6.js";/* empty css                  */import"./sticky.ac52bc2c.js";/* empty css                  */import{a as se}from"./utils.62158ef9.js";import{u as de}from"./sync.2570f9f6.js";import"./index.7a42f2c5.js";import"./index.6d19d5a3.js";import"./_commonjsHelpers.b8add541.js";import"./index.76bcfda0.js";var ue={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:{type:Function},"onUpdate:loading":{type:Function},"onUpdate:error":{type:Function}};function M(e,n,m,i,g,p,r){try{var l=e[p](r),s=l.value}catch(S){m(S);return}l.done?n(s):Promise.resolve(s).then(i,g)}function fe(e){return function(){var n=this,m=arguments;return new Promise(function(i,g){var p=e.apply(n,m);function r(s){M(p,i,g,r,l,"next",s)}function l(s){M(p,i,g,r,l,"throw",s)}r(void 0)})}}var{n:me,classes:pe}=X("list");function ge(e,n){var m=Z("var-loading"),i=_("ripple");return h(),L("div",{class:k(e.classes(e.n(),"var--box")),ref:"listEl"},[C(e.$slots,"default"),e.loading?C(e.$slots,"loading",{key:0},()=>[U("div",{class:k(e.n("loading"))},[U("div",{class:k(e.n("loading-text"))},f(e.dt(e.loadingText,e.pack.listLoadingText)),3),u(m,{size:"mini",radius:10})],2)]):R("v-if",!0),e.finished?C(e.$slots,"finished",{key:1},()=>[U("div",{class:k(e.n("finished"))},f(e.dt(e.finishedText,e.pack.listFinishedText)),3)]):R("v-if",!0),e.error?C(e.$slots,"error",{key:2},()=>[ee((h(),L("div",{class:k(e.n("error")),onClick:n[0]||(n[0]=function(){return e.load&&e.load(...arguments)})},[y(f(e.dt(e.errorText,e.pack.listErrorText)),1)],2)),[[i]])]):R("v-if",!0),U("div",{class:k(e.n("detector")),ref:"detectorEl"},null,2)],2)}const B=A({render:ge,name:"VarList",directives:{Ripple:J},components:{VarLoading:H},props:ue,setup(e){var n=D(null),m=D(null),i,g=()=>{F(e["onUpdate:error"],!1),F(e["onUpdate:loading"],!0),F(e.onLoad)},p=()=>{var l=i===window?window.innerHeight:i.getBoundingClientRect().bottom,{bottom:s}=m.value.getBoundingClientRect();return Math.floor(s)-j(e.offset)<=l},r=function(){var l=fe(function*(){yield te();var{loading:s,finished:S,error:I}=e;!s&&!S&&!I&&p()&&g()});return function(){return l.apply(this,arguments)}}();return K(()=>{i=O(n.value),e.immediateCheck&&r(),i.addEventListener("scroll",r)}),W(()=>{i.removeEventListener("scroll",r)}),{pack:ie,listEl:n,detectorEl:m,dt:Q,isNumber:Y,load:g,check:r,n:me,classes:pe}}});B.install=function(e){e.component(B.name,B)};const De={setup(e){const n=ne({loading:!1,loading2:!1,loading3:!1,finished:!1,finished2:!1,finished3:!1,error:!1,list:[],list2:[],list3:[],current:0}),{list:m,list2:i,list3:g,loading:p,loading2:r,loading3:l,finished:s,finished2:S,finished3:I,error:N,current:T}=ae(n),z=()=>{if(n.current!==0){n.loading=!1;return}setTimeout(()=>{for(let v=0;v<20;v++)n.list.push(n.list.length+1);n.loading=!1,n.list.length>=60&&(n.finished=!0)},1e3)},G=()=>{if(n.current!==1){n.loading2=!1;return}setTimeout(()=>{if(n.list2.length===40){n.error=!0,n.loading2=!1;return}for(let v=0;v<20;v++)n.list2.push(n.list2.length+1);n.loading2=!1},1e3)},q=()=>{if(n.current!==2){n.loading3=!1;return}setTimeout(()=>{for(let v=0;v<20;v++)n.list3.push(n.list3.length+1);n.loading3=!1,n.list3.length>=60&&(n.finished3=!0)},1e3)};return se(le),de(),(v,d)=>(h(),L(w,null,[u(t(re),{active:t(T),"onUpdate:active":d[0]||(d[0]=a=>b(T)?T.value=a:null),sticky:"","offset-top":"14.4vw",style:{"margin-bottom":"10px"}},{default:o(()=>[u(t(P),null,{default:o(()=>[y(f(t(c).basicUsage),1)]),_:1}),u(t(P),null,{default:o(()=>[y(f(t(c).loadFail),1)]),_:1}),u(t(P),null,{default:o(()=>[y(f(t(c).tipText),1)]),_:1})]),_:1},8,["active"]),u(t(oe),{active:t(T),"onUpdate:active":d[5]||(d[5]=a=>b(T)?T.value=a:null)},{default:o(()=>[u(t($),null,{default:o(()=>[u(t(B),{finished:t(s),loading:t(p),"onUpdate:loading":d[1]||(d[1]=a=>b(p)?p.value=a:null),onLoad:z},{default:o(()=>[(h(!0),L(w,null,x(t(m),a=>(h(),V(t(E),{key:a},{default:o(()=>[y(f(t(c).listItem)+": "+f(a),1)]),_:2},1024))),128))]),_:1},8,["finished","loading"])]),_:1}),u(t($),null,{default:o(()=>[u(t(B),{finished:t(S),error:t(N),"onUpdate:error":d[2]||(d[2]=a=>b(N)?N.value=a:null),loading:t(r),"onUpdate:loading":d[3]||(d[3]=a=>b(r)?r.value=a:null),onLoad:G},{default:o(()=>[(h(!0),L(w,null,x(t(i),a=>(h(),V(t(E),{key:a},{default:o(()=>[y(f(t(c).listItem)+": "+f(a),1)]),_:2},1024))),128))]),_:1},8,["finished","error","loading"])]),_:1}),u(t($),null,{default:o(()=>[u(t(B),{"loading-text":t(c).loadingText,"finished-text":t(c).finishedText,"error-text":t(c).errorText,finished:t(I),loading:t(l),"onUpdate:loading":d[4]||(d[4]=a=>b(l)?l.value=a:null),onLoad:q},{default:o(()=>[(h(!0),L(w,null,x(t(g),a=>(h(),V(t(E),{key:a},{default:o(()=>[y(f(t(c).listItem)+": "+f(a),1)]),_:2},1024))),128))]),_:1},8,["loading-text","finished-text","error-text","finished","loading"])]),_:1})]),_:1},8,["active"])],64))}};export{De as default};