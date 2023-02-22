import{d as W,b as C,Z as S,f as n,h as u,N as i,M as g,R as c,j as p,O as N,P as d,Q as v,a as V,o as F,ac as I,aE as T,u as $,q as l,S as s,ao as a,F as E,aF as f}from"./vue-router.esm-bundler-9b345358.js";import{o as w,t as L,n as j,c as q}from"./shared-4a7fb7de.js";import{S as b}from"./index-b036c08f.js";/* empty css              */import{d as A}from"./index-7bc61823.js";import{p as m,u as O}from"./index-9af5a950.js";import{u as Q}from"./sync-96faa7c8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a7264297.js";function R(e){return["linear","circle"].includes(e)}var Z={mode:{type:String,default:"linear",validator:R},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},labelClass:{type:String},size:{type:[Number,String],default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}},{n:G,classes:H}=q("progress"),J=["viewBox"],K=["cx","cy","r","stroke-width"],X=["cx","cy","r","stroke-width"];function Y(e,o){return n(),u("div",{class:i(e.n())},[e.mode==="linear"?(n(),u("div",{key:0,class:i(e.n("linear"))},[g("div",{class:i(e.n("linear-block")),style:c({height:e.toSizeUnit(e.lineWidth)})},[e.track?(n(),u("div",{key:0,class:i(e.n("linear-background")),style:c({background:e.trackColor})},null,6)):p("v-if",!0),g("div",{class:i(e.classes(e.n("linear-certain"),[e.ripple,e.n("linear-ripple")])),style:c({background:e.color,width:e.linearProps.width})},null,6)],6),e.label?(n(),u("div",{key:0,class:i(e.classes(e.n("linear-label"),[e.labelClass,e.labelClass]))},[N(e.$slots,"default",{},()=>[d(v(e.linearProps.roundValue),1)])],2)):p("v-if",!0)],2)):p("v-if",!0),e.mode==="circle"?(n(),u("div",{key:1,class:i(e.n("circle")),style:c({width:e.toSizeUnit(e.size),height:e.toSizeUnit(e.size)})},[(n(),u("svg",{class:i(e.n("circle-svg")),style:c({transform:"rotate("+(e.rotate-90)+"deg)"}),viewBox:e.circleProps.viewBox},[e.track?(n(),u("circle",{key:0,class:i(e.n("circle-background")),cx:e.multiplySizeUnit(e.size,.5),cy:e.multiplySizeUnit(e.size,.5),r:e.circleProps.radius,fill:"transparent","stroke-width":e.toSizeUnit(e.lineWidth),style:c({strokeDasharray:e.circleProps.perimeter,stroke:e.trackColor})},null,14,K)):p("v-if",!0),g("circle",{class:i(e.n("circle-certain")),cx:e.multiplySizeUnit(e.size,.5),cy:e.multiplySizeUnit(e.size,.5),r:e.circleProps.radius,fill:"transparent","stroke-width":e.toSizeUnit(e.lineWidth),style:c({strokeDasharray:e.circleProps.strokeDasharray,stroke:e.color})},null,14,X)],14,J)),e.label?(n(),u("div",{key:0,class:i(e.classes(e.n("circle-label"),[e.labelClass,e.labelClass]))},[N(e.$slots,"default",{},()=>[d(v(e.circleProps.roundValue),1)])],2)):p("v-if",!0)],6)):p("v-if",!0)],2)}var B=W({name:"VarProgress",props:Z,setup(e){var o=C(()=>{var t=S(e.value),y=t>100?100:t,k=t>100?100:Math.round(t);return{width:y+"%",roundValue:k+"%"}}),h=C(()=>{var{size:t,lineWidth:y,value:k}=e,D="0 0 "+w(t)+" "+w(t),P=S(k)>100?100:Math.round(S(k)),U=(w(t)-w(y))/2,z=2*Math.PI*U,M=P/100*z+", "+z;return{viewBox:D,radius:U,strokeDasharray:M,perimeter:z,roundValue:P+"%"}});return{n:G,classes:H,toSizeUnit:L,multiplySizeUnit:j,linearProps:o,circleProps:h}}});B.render=Y;const r=B;r.install=function(e){e.component(r.name,r)};const _=d("success"),ne={setup(e){const o=V(0),h=V(0);return F(()=>{h.value=window.setInterval(()=>{o.value>=100?o.value=0:o.value+=20},1e3)}),I(O),T(A),Q(),$(()=>{window.clearInterval(h.value)}),(t,y)=>(n(),u(E,null,[l(a(f),null,{default:s(()=>[d(v(a(m).basicUsage),1)]),_:1}),l(a(b),{direction:"column",size:["3vh","3vh"]},{default:s(()=>[l(a(r),{value:20,track:!1}),l(a(r),{value:o.value,track:!1},null,8,["value"]),l(a(r),{value:100,track:!1})]),_:1}),l(a(f),null,{default:s(()=>[d(v(a(m).showLabel),1)]),_:1}),l(a(b),{direction:"column",size:["3vh","3vh"]},{default:s(()=>[l(a(r),{value:30,label:""}),l(a(r),{value:o.value,label:""},null,8,["value"]),l(a(r),{value:100,label:""},{default:s(()=>[_]),_:1})]),_:1}),l(a(f),null,{default:s(()=>[d(v(a(m).style),1)]),_:1}),l(a(b),{direction:"column",size:["3vh","3vh"]},{default:s(()=>[l(a(r),{value:30,"line-width":"8",color:"#ff9f00"}),l(a(r),{value:60,"line-width":"8",color:"#ff9f00","track-color":"#f5cb90"}),l(a(r),{value:80,ripple:"","line-width":"8",color:"#ff9f00","track-color":"#f5cb90"})]),_:1}),l(a(f),null,{default:s(()=>[d(v(a(m).circle),1)]),_:1}),l(a(b),{size:["8vw","8vw"]},{default:s(()=>[l(a(r),{mode:"circle",value:30,"line-width":"5",size:"18vw"}),l(a(r),{mode:"circle",label:"",value:o.value,"line-width":"5",size:"18vw"},null,8,["value"]),l(a(r),{mode:"circle",label:"",value:100,"line-width":"5",size:"18vw"})]),_:1}),l(a(f),null,{default:s(()=>[d(v(a(m).hideTrack),1)]),_:1}),l(a(r),{mode:"circle",value:50,size:"18vw",track:!1})],64))}};export{ne as default};
