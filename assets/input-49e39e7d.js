import{F as H,u as J}from"./provide-56101ca9.js";import{I as K}from"./index-951ce32a.js";import{a as u,j as X,e as d,c as Y}from"./shared-4a7fb7de.js";import{d as c,a as C,z as x,b as _,av as p,o as ee,p as w,f as m,h,M as f,N as s,O as D,j as B,R as v,Q as ae,i as re,q as le,Z as ne,n as oe}from"./vue-router.esm-bundler-9b345358.js";function se(e){return["text","password","number"].includes(e)}var de={modelValue:{type:String},modelModifiers:{type:Object,default:()=>({})},type:{type:String,default:"text",validator:se},textarea:{type:Boolean,default:!1},rows:{type:[String,Number],default:8},placeholder:{type:String},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},maxlength:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},validateTrigger:{type:Array,default:()=>["onInput","onClear"]},rules:{type:Array},onFocus:u(),onBlur:u(),onClick:u(),onClear:u(),onInput:u(),onChange:u(),"onUpdate:modelValue":u()},{n:F,classes:ue}=Y("input"),ie=["id","disabled","type","value","maxlength","rows"],te=["id","disabled","type","value","maxlength"],me=["for"];function fe(e,r){var g=w("var-icon"),i=w("var-form-details");return m(),h("div",{class:s(e.classes(e.n(),e.n("$--box"),[e.disabled,e.n("--disabled")])),onClick:r[10]||(r[10]=function(){return e.handleClick&&e.handleClick(...arguments)})},[f("div",{class:s(e.classes(e.n("controller"),[e.isFocus,e.n("--focus")],[e.errorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:v({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[f("div",{class:s(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[D(e.$slots,"prepend-icon")],2),f("div",{class:s(e.classes(e.n("wrap"),[!e.hint,e.n("--non-hint")]))},[e.type==="password"?(m(),h("input",{key:0,class:s(e.n("autocomplete"))},null,2)):B("v-if",!0),e.textarea?(m(),h("textarea",{key:1,class:s(e.classes(e.n("input"),e.n("--textarea"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,rows:e.rows,style:v({color:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor,resize:e.resize?"vertical":"none"}),onFocus:r[0]||(r[0]=function(){return e.handleFocus&&e.handleFocus(...arguments)}),onBlur:r[1]||(r[1]=function(){return e.handleBlur&&e.handleBlur(...arguments)}),onInput:r[2]||(r[2]=function(){return e.handleInput&&e.handleInput(...arguments)}),onChange:r[3]||(r[3]=function(){return e.handleChange&&e.handleChange(...arguments)}),onTouchstart:r[4]||(r[4]=function(){return e.handleTouchstart&&e.handleTouchstart(...arguments)})},`
        `,46,ie)):(m(),h("input",{key:2,class:s(e.classes(e.n("input"),[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--caret-error")])),ref:"el",autocomplete:"new-password",id:e.id,disabled:e.formDisabled||e.disabled||e.formReadonly||e.readonly,type:e.type,value:e.modelValue,maxlength:e.maxlength,style:v({color:e.textColor,caretColor:e.errorMessage?void 0:e.focusColor}),onFocus:r[5]||(r[5]=function(){return e.handleFocus&&e.handleFocus(...arguments)}),onBlur:r[6]||(r[6]=function(){return e.handleBlur&&e.handleBlur(...arguments)}),onInput:r[7]||(r[7]=function(){return e.handleInput&&e.handleInput(...arguments)}),onChange:r[8]||(r[8]=function(){return e.handleChange&&e.handleChange(...arguments)}),onTouchstart:r[9]||(r[9]=function(){return e.handleTouchstart&&e.handleTouchstart(...arguments)})},null,46,te)),f("label",{class:s(e.classes(e.n("$--ellipsis"),[e.isFocus,e.n("--focus")],[e.formDisabled||e.disabled,e.n("--disabled")],[e.errorMessage,e.n("--error")],[e.textarea,e.n("textarea-placeholder"),e.n("placeholder")],e.computePlaceholderState(),[!e.hint,e.n("--placeholder-non-hint")])),style:v({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor}),for:e.id},ae(e.placeholder),15,me)],2),f("div",{class:s(e.classes(e.n("icon"),[!e.hint,e.n("--non-hint")]))},[D(e.$slots,"append-icon",{},()=>[e.clearable&&!e.isEmpty(e.modelValue)?(m(),re(g,{key:0,class:s(e.n("clear-icon")),"var-input-cover":"",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["class","onClick"])):B("v-if",!0)])],2)],6),e.line?(m(),h("div",{key:0,class:s(e.classes(e.n("line"),[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:v({background:e.errorMessage?void 0:e.blurColor})},[f("div",{class:s(e.classes(e.n("dot"),[e.isFocus,e.n("--spread")],[e.formDisabled||e.disabled,e.n("--line-disabled")],[e.errorMessage,e.n("--line-error")])),style:v({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):B("v-if",!0),le(i,{"error-message":e.errorMessage,"extra-message":e.maxlengthText},null,8,["error-message","extra-message"])],2)}var N=c({name:"VarInput",components:{VarIcon:K,VarFormDetails:H},props:de,setup(e){var r=C("var-input-"+x().uid),g=C(null),i=C(!1),z=_(()=>{var{maxlength:a,modelValue:l}=e;return a?p(l)?"0 / "+a:String(l).length+"/"+a:""}),{bindForm:P,form:o}=J(),{errorMessage:$,validateWithTrigger:R,validate:U,resetValidation:b}=X(),t=a=>{oe(()=>{var{validateTrigger:l,rules:n,modelValue:y}=e;R(l,a,n,y)})},j=()=>{var{hint:a,modelValue:l}=e;if(!a&&!p(l))return F("--placeholder-hidden");if(a&&(!p(l)||i.value))return F("--placeholder-hint")},E=a=>{i.value=!0,d(e.onFocus,a),t("onFocus")},A=a=>{i.value=!1,d(e.onBlur,a),t("onBlur")},O=a=>{var l=a.target,{value:n}=l;n=M(k(n)),l.value=n,d(e["onUpdate:modelValue"],n),d(e.onInput,n,a),t("onInput")},W=a=>{var l=a.target,{value:n}=l;n=M(k(n)),l.value=n,d(e.onChange,n,a),t("onChange")},q=()=>{var{disabled:a,readonly:l,clearable:n,onClear:y}=e;o!=null&&o.disabled.value||o!=null&&o.readonly.value||a||l||!n||(d(e["onUpdate:modelValue"],""),d(y,""),t("onClear"))},L=a=>{var{disabled:l,onClick:n}=e;o!=null&&o.disabled.value||l||(d(n,a),t("onClick"))},k=a=>e.modelModifiers.trim?a.trim():a,M=a=>e.maxlength?a.slice(0,ne(e.maxlength)):a,Q=a=>{var{disabled:l,readonly:n}=e;o!=null&&o.disabled.value||o!=null&&o.readonly.value||l||n||a.stopPropagation()},I=()=>{d(e["onUpdate:modelValue"],""),b()},T=()=>U(e.rules,e.modelValue),S=()=>{var a;(a=g.value)==null||a.focus()},Z=()=>{g.value.blur()},G={reset:I,validate:T,resetValidation:b};return d(P,G),ee(()=>{e.autofocus&&S()}),{el:g,id:r,isFocus:i,errorMessage:$,maxlengthText:z,formDisabled:o==null?void 0:o.disabled,formReadonly:o==null?void 0:o.readonly,n:F,classes:ue,isEmpty:p,computePlaceholderState:j,handleFocus:E,handleBlur:A,handleInput:O,handleChange:W,handleClear:q,handleClick:L,handleTouchstart:Q,validate:T,resetValidation:b,reset:I,focus:S,blur:Z}}});N.render=fe;const V=N;V.install=function(e){e.component(V.name,V)};export{V as I};
