import{I as b}from"./index.f298cda6.js";import{l as B,c as C}from"./shared.b468a763.js";import{d as S,b as d,p as V,f as s,h as u,q as N,S as k,D as w,E as $,M as D,i as I,Q as z,m as E,G as P,O as q,N as A}from"./vue-router.esm-bundler.dfdc86af.js";function G(e){return["default","primary","info","success","warning","danger"].includes(e)}function M(e){return["right-top","right-bottom","left-top","left-bottom"].includes(e)}var O={type:{type:String,default:"default",validator:G},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:M},icon:{type:String}},{n:t,classes:Q}=C("badge"),T={key:1};function j(e,l){var r=V("var-icon");return s(),u("div",{class:A(e.classes(e.n(),e.n("$--box")))},[N(P,{name:e.n("$-badge-fade")},{default:k(()=>[w(D("span",E(e.$attrs,{class:e.classes(e.n("content"),...e.contentClass),style:{background:e.color}}),[e.icon&&!e.dot?(s(),I(r,{key:0,name:e.icon,size:"10px"},null,8,["name"])):(s(),u("span",T,z(e.values),1))],16),[[$,!e.hidden]])]),_:1},8,["name"]),q(e.$slots,"default")],2)}const i=S({render:j,name:"VarBadge",components:{VarIcon:b},inheritAttrs:!1,props:O,setup(e,l){var{slots:r}=l,p=d(()=>{var{type:n,position:a,dot:o,icon:m}=e,v=r.default&&t("position")+" "+t("--"+a),g=o?t("dot"):null,y=f(),h=m?t("icon"):null;return[t("--"+n),v,g,y,h]}),c=d(()=>{var{dot:n,value:a,maxValue:o}=e;return n?"":a!==void 0&&o!==void 0&&B(a)>o?o+"+":a}),f=()=>{var{position:n,dot:a}=e;if(a&&n.includes("right"))return t("dot--right");if(a&&n.includes("left"))return t("dot--left")};return{n:t,classes:Q,values:c,contentClass:p}}});i.install=function(e){e.component(i.name,i)};export{i as B};