import{F as w,u as z}from"./provide-56101ca9.js";import{a as C,j as B,e as l,c as q}from"./shared-4a7fb7de.js";import{u as D}from"./checkbox-35583659.js";import{d as L,b as i,w as b,p as P,f as j,h as O,M as $,O as H,N as p,q as I,aL as x,n as J}from"./vue-router.esm-bundler-9b345358.js";function K(e){return["horizontal","vertical"].includes(e)}var Q={modelValue:{type:Array,default:()=>[]},max:{type:[String,Number]},direction:{type:String,default:"horizontal",validator:K},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onChange:C(),"onUpdate:modelValue":C()},{n:R,classes:X}=q("checkbox-group");function Y(e,u){var s=P("var-form-details");return j(),O("div",{class:p(e.n("wrap"))},[$("div",{class:p(e.classes(e.n(),e.n("--"+e.direction)))},[H(e.$slots,"default")],2),I(s,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var y=L({name:"VarCheckboxGroup",components:{VarFormDetails:w},props:Q,setup(e){var u=i(()=>e.max),s=i(()=>e.modelValue.length),{length:A,checkboxes:t,bindCheckboxes:_}=D(),{bindForm:G}=z(),{errorMessage:v,validateWithTrigger:M,validate:U,resetValidation:c}=B(),F=i(()=>v.value),N=a=>{J(()=>{var{validateTrigger:r,rules:o,modelValue:n}=e;M(r,a,o,n)})},m=a=>{l(e["onUpdate:modelValue"],a),l(e.onChange,a),N("onChange")},S=a=>{var{modelValue:r}=e;r.includes(a)||m([...r,a])},T=a=>{var{modelValue:r}=e;r.includes(a)&&m(r.filter(o=>o!==a))},h=()=>t.forEach(a=>{var{sync:r}=a;return r(e.modelValue)}),f=()=>{t.forEach(a=>a.resetWithAnimation())},E=()=>{var a=t.map(o=>{var{checkedValue:n}=o;return n.value}),r=x(a);return f(),l(e["onUpdate:modelValue"],r),r},W=()=>{var a=t.filter(o=>{var{checked:n}=o;return!n.value}).map(o=>{var{checkedValue:n}=o;return n.value}),r=x(a);return f(),l(e["onUpdate:modelValue"],r),r},k=()=>{l(e["onUpdate:modelValue"],[]),c()},g=()=>U(e.rules,e.modelValue);b(()=>e.modelValue,h,{deep:!0}),b(()=>A.value,h);var V={max:u,checkedCount:s,onChecked:S,onUnchecked:T,validate:g,resetValidation:c,reset:k,errorMessage:F};return _(V),l(G,V),{errorMessage:v,n:R,classes:X,checkAll:E,inverseAll:W,reset:k,validate:g,resetValidation:c}}});y.render=Y;const d=y;d.install=function(e){e.component(d.name,d)};export{d as C};
