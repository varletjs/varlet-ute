import{x as H,j as I,c as P,b as k,y as R,z as G}from"./shared.683c68c7.js";import{d as O,a as r,b,w as V,v as A,x as D,o as U,u as $,f as j,h as q,M as J,O as K,N as F,R as L}from"./vue-router.esm-bundler.94bfc301.js";var Q={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:{type:Function}};function T(e,t,f,a,i,l,o){try{var d=e[l](o),n=d.value}catch(v){f(v);return}d.done?t(n):Promise.resolve(n).then(a,i)}function X(e){return function(){var t=this,f=arguments;return new Promise(function(a,i){var l=e.apply(t,f);function o(n){T(l,a,i,o,d,"next",n)}function d(n){T(l,a,i,o,d,"throw",n)}o(void 0)})}}var{n:Y,classes:Z}=P("sticky");function _(e,t){return j(),q("div",{class:F(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:L({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?e.offsetTop+"px":void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[J("div",{class:F(e.n("wrapper")),ref:"wrapperEl",style:L({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[K(e.$slots,"default")],6)],6)}const y=O({render:_,name:"VarSticky",props:Q,setup(e){var t=r(null),f=r(null),a=r(!1),i=r("0px"),l=r("0px"),o=r("auto"),d=r("auto"),n=r("auto"),v=r("auto"),W=b(()=>!e.disabled&&e.cssMode),E=b(()=>!e.disabled&&a.value),p=b(()=>H(e.offsetTop)),s,u=()=>{var{onScroll:c,cssMode:g,disabled:N}=e;if(!N){var h=0;if(s!==window){var{top:z}=s.getBoundingClientRect();h=z}var x=f.value,m=t.value,{top:B,left:C}=m.getBoundingClientRect(),M=B-h;M<=p.value?(g||(o.value=m.offsetWidth+"px",d.value=m.offsetHeight+"px",i.value=h+p.value+"px",l.value=C+"px",n.value=x.offsetWidth+"px",v.value=x.offsetHeight+"px",a.value=!0),k(c,p.value,!0)):(a.value=!1,k(c,M,!1))}},w=function(){var c=X(function*(){yield R(),s=G(t.value),s!==window&&s.addEventListener("scroll",u),window.addEventListener("scroll",u),u()});return function(){return c.apply(this,arguments)}}(),S=()=>{s!==window&&s.removeEventListener("scroll",u),window.removeEventListener("scroll",u)};return V(()=>e.disabled,u),A(w),D(S),U(w),$(S),{n:Y,classes:Z,stickyEl:t,wrapperEl:f,isFixed:a,offsetTop:p,fixedTop:i,fixedLeft:l,fixedWidth:o,fixedHeight:d,fixedWrapperWidth:n,fixedWrapperHeight:v,enableCSSMode:W,enableFixedMode:E,toNumber:I}}});y.install=function(e){e.component(y.name,y)};export{y as S,Q as p};