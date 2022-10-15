import{v as oe}from"./index.8b902a19.js";import{w as J,i as Q,h as Z,x as _,c as z,p as le,t as se,b as D,q as X,l as ve,E as G}from"./shared.dccb68a6.js";import{d as N,a as p,b as T,w as A,ai as ue,D as de,f as P,h as ce,O as U,N as k,R as x,p as ee,i as W,S as R,j as me,o as fe,u as be,G as pe,M as V,m as he,av as Te,X as ye}from"./vue-router.esm-bundler.ad5bb508.js";import{a as Se,S as Ce}from"./index.fc49949b.js";import{p as ge,S as we}from"./sticky.0736d546.js";var Be={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:{type:Function}},ae=Symbol("TABS_BIND_TAB_KEY"),re=Symbol("TABS_COUNT_TAB_KEY");function Ie(){var{childProviders:e,bindChildren:r}=Q(ae),{length:a}=J(re);return{length:a,tabList:e,bindTabList:r}}function Ee(){var{parentProvider:e,bindParent:r}=Z(ae),{index:a}=_(re);if(!e||!r||!a)throw Error("<var-tab/> must in <var-tabs/>");return{index:a,tabs:e,bindTabs:r}}var{n:Ae,classes:De}=z("tab");function ke(e,r){var a=ue("ripple");return de((P(),ce("div",{class:k(e.classes(e.n(),"var--box",e.computeColorClass(),e.n("--"+e.itemDirection))),ref:"tabEl",style:x({color:e.computeColorStyle()}),onClick:r[0]||(r[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[U(e.$slots,"default")],6)),[[a,{disabled:e.disabled}]])}const K=N({render:ke,name:"VarTab",directives:{Ripple:oe},props:Be,setup(e){var r=p(null),a=T(()=>e.name),u=T(()=>e.disabled),d=T(()=>r.value),{index:n,tabs:v,bindTabs:c}=Ee(),{onTabClick:l,active:b,activeColor:w,inactiveColor:B,disabledColor:s,itemDirection:m,resize:o}=v,y={name:a,index:n,disabled:u,element:d};c(y);var S=()=>{var{disabled:C,name:g}=e;return C?s.value:b.value===g||b.value===(n==null?void 0:n.value)?w.value:B.value},I=()=>{var{disabled:C,name:g}=e;return C?"var-tab--disabled":b.value===g||b.value===(n==null?void 0:n.value)?"var-tab--active":"var-tab--inactive"},L=C=>{var{disabled:g,name:$,onClick:h}=e;g||(h==null||h($!=null?$:n.value,C),l(y))};return A(()=>e.name,o),A(()=>e.disabled,o),{n:Ae,classes:De,tabEl:r,active:b,activeColor:w,inactiveColor:B,itemDirection:m,computeColorStyle:S,computeColorClass:I,handleClick:L}}});K.install=function(e){e.component(K.name,K)};var te=Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"),ne=Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");function $e(){var{bindChildren:e,childProviders:r}=Q(te),{length:a}=J(ne);return{length:a,tabItemList:r,bindTabItem:e}}function ze(){var{parentProvider:e,bindParent:r}=Z(te),{index:a}=_(ne);if(!e||!r||!a)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:a,tabsItems:e,bindTabsItems:r}}var Ne={name:{type:[String,Number]}},{n:Pe,classes:Ue}=z("tab-item");function Le(e,r){var a=ee("var-swipe-item");return P(),W(a,{class:k(e.classes(e.n(),[!e.current,e.n("--inactive")])),"var-tab-item-cover":""},{default:R(()=>[e.initSlot?U(e.$slots,"default",{key:0}):me("v-if",!0)]),_:3},8,["class"])}const F=N({render:Le,name:"VarTabItem",components:{VarSwipeItem:Se},props:Ne,setup(e){var r=p(!1),a=p(!1),u=T(()=>e.name),{index:d,bindTabsItems:n}=ze(),v=l=>{!a.value&&l&&(a.value=!0),r.value=l},c={index:d,name:u,setCurrent:v};return n(c),{n:Pe,classes:Ue,current:r,initSlot:a}}});F.install=function(e){e.component(F.name,F)};function q(e){return["horizontal","vertical"].includes(e)}var Ye={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:q},itemDirection:{type:String,default:"horizontal",validator:q},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},safeArea:{type:Boolean,default:!1},offsetTop:le(ge,"offsetTop"),onClick:{type:Function},onChange:{type:Function},"onUpdate:active":{type:Function}};function j(e,r,a,u,d,n,v){try{var c=e[n](v),l=c.value}catch(b){a(b);return}c.done?r(l):Promise.resolve(l).then(u,d)}function Me(e){return function(){var r=this,a=arguments;return new Promise(function(u,d){var n=e.apply(r,a);function v(l){j(n,u,d,v,c,"next",l)}function c(l){j(n,u,d,v,c,"throw",l)}v(void 0)})}}var{n:Ve,classes:Ke}=z("tabs");function Fe(e,r){return P(),W(Te(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.offsetTop:null},{default:R(()=>[V("div",he({class:e.classes(e.n(),"var--box",e.n("--item-"+e.itemDirection),e.n("--layout-"+e.layoutDirection+"-padding"),[e.elevation,"var-elevation--4"],[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[V("div",{ref:"scrollerEl",class:k(e.classes(e.n("tab-wrap"),[e.scrollable,e.n("--layout-"+e.layoutDirection+"-scrollable")],e.n("--layout-"+e.layoutDirection)))},[U(e.$slots,"default"),V("div",{class:k(e.classes(e.n("indicator"),e.n("--layout-"+e.layoutDirection+"-indicator"))),style:x({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?"translateX("+e.indicatorX+")":"translateY("+e.indicatorY+")",background:e.indicatorColor||e.activeColor})},null,6)],2)],16)]),_:3},8,["offset-top"])}const H=N({render:Fe,name:"VarTabs",components:{VarSticky:we},inheritAttrs:!1,props:Ye,setup(e){var r=p("0px"),a=p("0px"),u=p("0px"),d=p("0px"),n=p(!1),v=p(null),c=T(()=>e.active),l=T(()=>e.activeColor),b=T(()=>e.inactiveColor),w=T(()=>e.disabledColor),B=T(()=>e.itemDirection),{tabList:s,bindTabList:m,length:o}=Ie(),y=i=>{var f,t=(f=i.name.value)!=null?f:i.index.value,{active:E,onChange:Y,onClick:M}=e;D(e["onUpdate:active"],t),D(M,t),t!==E&&D(Y,t)},S=()=>s.find(i=>{var{name:f}=i;return e.active===f.value}),I=i=>s.find(f=>{var{index:t}=f;return(i!=null?i:e.active)===t.value}),L=()=>{if(o.value!==0){var{active:i}=e;if(ye(i)){var f=i>o.value-1?o.value-1:0;return D(e["onUpdate:active"],f),I(f)}}},C=()=>{n.value=s.length>=5},g=i=>{var{element:f}=i,t=f.value;e.layoutDirection==="horizontal"?(r.value=(t==null?void 0:t.offsetWidth)+"px",u.value=(t==null?void 0:t.offsetLeft)+"px"):(a.value=(t==null?void 0:t.offsetHeight)+"px",d.value=(t==null?void 0:t.offsetTop)+"px")},$=i=>{var{element:f}=i;if(!!n.value){var t=v.value,E=f.value;if(e.layoutDirection==="horizontal"){var Y=E.offsetLeft+E.offsetWidth/2-t.offsetWidth/2;X(t,{left:Y,animation:G})}else{var M=E.offsetTop+E.offsetHeight/2-t.offsetHeight/2;X(t,{top:M,animation:G})}}},h=()=>{var i=S()||I()||L();!i||i.disabled.value||(C(),g(i),$(i))},ie={active:c,activeColor:l,inactiveColor:b,disabledColor:w,itemDirection:B,resize:h,onTabClick:y};return m(ie),A(()=>o.value,Me(function*(){yield ve(),h()})),A(()=>e.active,h),fe(()=>window.addEventListener("resize",h)),be(()=>window.removeEventListener("resize",h)),{indicatorWidth:r,indicatorHeight:a,indicatorX:u,indicatorY:d,scrollable:n,scrollerEl:v,Transition:pe,toSizeUnit:se,n:Ve,classes:Ke,resize:h}}});H.install=function(e){e.component(H.name,H)};var He={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},"onUpdate:active":{type:Function}},{n:Oe}=z("tabs-items");function We(e,r){var a=ee("var-swipe");return P(),W(a,{class:k(e.n()),ref:"swipe",loop:e.loop,touchable:e.canSwipe,indicator:!1,onChange:e.handleSwipeChange},{default:R(()=>[U(e.$slots,"default")]),_:3},8,["class","loop","touchable","onChange"])}const O=N({render:We,name:"VarTabsItems",components:{VarSwipe:Ce},props:He,setup(e){var r=p(null),{tabItemList:a,bindTabItem:u,length:d}=$e(),n=s=>a.find(m=>{var{name:o}=m;return s===o.value}),v=s=>a.find(m=>{var{index:o}=m;return s===o.value}),c=s=>n(s)||v(s),l=s=>{var m,o=c(s);!o||(a.forEach(y=>{var{setCurrent:S}=y;return S(!1)}),o.setCurrent(!0),(m=r.value)==null||m.to(o.index.value))},b=s=>{var m,o=a.find(S=>{var{index:I}=S;return I.value===s}),y=(m=o.name.value)!=null?m:o.index.value;D(e["onUpdate:active"],y)},w=()=>r.value,B={};return u(B),A(()=>e.active,l),A(()=>d.value,()=>l(e.active)),{swipe:r,n:Oe,handleSwipeChange:b,getSwipe:w}}});O.install=function(e){e.component(O.name,O)};export{K as T,H as a,F as b,O as c};