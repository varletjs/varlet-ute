import{I as A}from"./index.f298cda6.js";import{F as E,u as X}from"./provide.9ad17e86.js";import{v as j}from"./index.452b8aab.js";import{a as N,u as G,e as m,t as R,l as i,c as H}from"./shared.b468a763.js";import{d as J,p as k,ai as K,f as b,h,M as O,F as Q,ak as Y,D as Z,R as I,N as v,q as z,n as $}from"./vue-router.esm-bundler.dfdc86af.js";var _={modelValue:{type:[String,Number],default:0},count:{type:[String,Number],default:5},color:{type:String},icon:{type:String,default:"star"},emptyColor:{type:String},emptyIcon:{type:String,default:"star-outline"},size:{type:[String,Number]},gap:{type:[String,Number]},namespace:{type:String},half:{type:Boolean,default:!1},halfIcon:{type:String,default:"star-half-full"},disabled:{type:Boolean,default:!1},disabledColor:{type:String},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},rules:{type:Array},onChange:N(),"onUpdate:modelValue":N()},{n:s}=H("rate"),x=["onClick"];function ee(e,a){var c=k("var-icon"),d=k("var-form-details"),f=K("ripple");return b(),h("div",{class:v(e.n("wrap"))},[O("div",{class:v(e.n())},[(b(!0),h(Q,null,Y(e.toNumber(e.count),n=>Z((b(),h("div",{key:n,style:I(e.getStyle(n)),class:v(e.getClass(n)),onClick:o=>e.handleClick(n,o)},[z(c,{class:v(e.n("content-icon")),"var-rate-cover":"",transition:0,namespace:e.namespace,name:e.getCurrentState(n).name,style:I({fontSize:e.toSizeUnit(e.size)})},null,8,["class","namespace","name","style"])],14,x)),[[f,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]])),128))],2),z(d,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const C=J({render:ee,name:"VarRate",components:{VarIcon:A,VarFormDetails:E},directives:{Ripple:j},props:_,setup(e){var{form:a,bindForm:c}=X(),{errorMessage:d,validateWithTrigger:f,validate:n,resetValidation:o}=G(),B=r=>{var{count:l,gap:t}=e;return{color:p(r).color,marginRight:r!==i(l)?R(t):0}},D=r=>{var{name:l,color:t}=p(r);return{[s("content")]:!0,[s("--disabled")]:(a==null?void 0:a.disabled.value)||e.disabled,[s("--error")]:d.value,[s("--primary")]:l!==e.emptyIcon&&!t}},p=r=>{var{modelValue:l,disabled:t,disabledColor:u,color:y,half:w,emptyColor:L,icon:P,halfIcon:W,emptyIcon:q}=e,g=y;return(t||a!=null&&a.disabled.value)&&(g=u),r<=i(l)?{color:g,name:P}:w&&r<=i(l)+.5?{color:g,name:W}:{color:t||a!=null&&a.disabled.value?u:L,name:q}},F=(r,l)=>{if(e.half){var{offsetWidth:t}=l.target;l.offsetX<=Math.floor(t/2)&&(r-=.5)}m(e["onUpdate:modelValue"],r)},S=()=>n(e.rules,i(e.modelValue)),U=()=>$(()=>f(["onChange"],"onChange",e.rules,e.modelValue)),M=(r,l)=>{var{readonly:t,disabled:u,onChange:y}=e;t||u||a!=null&&a.disabled.value||a!=null&&a.readonly.value||(F(r,l),m(y,r),U())},V=()=>{m(e["onUpdate:modelValue"],0),o()},T={reset:V,validate:S,resetValidation:o};return m(c,T),{errorMessage:d,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,getStyle:B,getClass:D,getCurrentState:p,handleClick:M,reset:V,validate:S,resetValidation:o,toSizeUnit:R,toNumber:i,n:s}}});C.install=function(e){e.component(C.name,C)};export{C as R};