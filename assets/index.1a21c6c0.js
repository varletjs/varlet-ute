import{A as n}from"./AppType.44f2eb1f.js";import{B as h}from"./index.b049455a.js";import{C as s}from"./checkbox.cf5857c4.js";import{C as y}from"./CheckboxGroupSfc.b71a416a.js";import{I as U}from"./index.f298cda6.js";import"./shared.b468a763.js";/* empty css                  *//* empty css               *//* empty css                *//* empty css               */import"./ButtonSfc.d73b10b3.js";/* empty css                    *//* empty css             */import"./IconSfc.61818718.js";import{d as A}from"./index.098dd72d.js";import{a as B,b as I}from"./utils.16cd8a81.js";import{p as a,u as w}from"./index.e762785f.js";import{u as G}from"./sync.971d6709.js";import{_ as M,r as $,aB as N,f as z,h as D,q as u,S as o,an as e,aC as p,M as b,Q as l,F,P as d,ao as R,ap as T}from"./vue-router.esm-bundler.dfdc86af.js";import"./AppType.vue_vue_type_style_index_0_lang.402a256b.js";import"./index.452b8aab.js";import"./index.39e6461a.js";import"./index.b2443f5d.js";import"./provide.9ad17e86.js";import"./_commonjsHelpers.b8add541.js";import"./index.0d0d6d5d.js";const q=m=>(R("data-v-d96c8168"),m=m(),T(),m),E={class:"relation"},L={class:"relation"},P=q(()=>b("div",{class:"space"},null,-1)),Q={setup(m){const C=$({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:[],value7:!1,value8:[],group:null}),{value:i,value2:f,value3:c,value4:v,value5:V,value6:_,value7:k,value8:x,group:S}=N(C);return B(w),I(A),G(),(g,r)=>(z(),D(F,null,[u(e(n),null,{default:o(()=>[d(l(e(a).basicUsage),1)]),_:1}),u(e(s),{modelValue:e(i),"onUpdate:modelValue":r[0]||(r[0]=t=>p(i)?i.value=t:null)},{default:o(()=>[d(l(e(a).currentValue)+" "+l(e(i)),1)]),_:1},8,["modelValue"]),u(e(n),null,{default:o(()=>[d(l(e(a).setState),1)]),_:1}),u(e(s),{"unchecked-value":0,"checked-value":1,modelValue:e(f),"onUpdate:modelValue":r[1]||(r[1]=t=>p(f)?f.value=t:null)},{default:o(()=>[d(l(e(a).currentValue)+" "+l(e(f)),1)]),_:1},8,["modelValue"]),u(e(n),null,{default:o(()=>[d(l(e(a).setStyle),1)]),_:1}),u(e(s),{"unchecked-color":"#e99eb4","checked-color":"#f44336",modelValue:e(c),"onUpdate:modelValue":r[2]||(r[2]=t=>p(c)?c.value=t:null)},{"unchecked-icon":o(()=>[u(e(U),{name:"heart-half-full",size:"24px"})]),"checked-icon":o(()=>[u(e(U),{name:"heart",size:"24px"})]),default:o(()=>[d(l(e(a).currentValue)+" "+l(e(c)),1)]),_:1},8,["modelValue"]),u(e(n),null,{default:o(()=>[d(l(e(a).disabled),1)]),_:1}),u(e(s),{disabled:"",modelValue:e(v),"onUpdate:modelValue":r[3]||(r[3]=t=>p(v)?v.value=t:null)},{default:o(()=>[d(l(e(a).currentValue)+" "+l(e(v)),1)]),_:1},8,["modelValue"]),u(e(n),null,{default:o(()=>[d(l(e(a).readonly),1)]),_:1}),u(e(s),{readonly:"",modelValue:e(V),"onUpdate:modelValue":r[4]||(r[4]=t=>p(V)?V.value=t:null)},{default:o(()=>[d(l(e(a).currentValue)+" "+l(e(V)),1)]),_:1},8,["modelValue"]),u(e(n),null,{default:o(()=>[d(l(e(a).checkboxGroup),1)]),_:1}),u(e(y),{ref_key:"group",ref:S,modelValue:e(_),"onUpdate:modelValue":r[7]||(r[7]=t=>p(_)?_.value=t:null)},{default:o(()=>[u(e(s),{"checked-value":0},{default:o(()=>[d(l(e(a).eat),1)]),_:1}),u(e(s),{"checked-value":1},{default:o(()=>[d(l(e(a).sleep),1)]),_:1}),u(e(h),{class:"button",type:"primary",onClick:r[5]||(r[5]=t=>g.$refs.group.checkAll())},{default:o(()=>[d(l(e(a).checkAll),1)]),_:1}),u(e(h),{class:"button",type:"primary",onClick:r[6]||(r[6]=t=>g.$refs.group.inverseAll())},{default:o(()=>[d(l(e(a).inverseAll),1)]),_:1})]),_:1},8,["modelValue"]),b("div",E,l(e(a).currentValue)+" "+l(e(_)),1),u(e(n),null,{default:o(()=>[d(l(e(a).checkboxValidate),1)]),_:1}),u(e(s),{modelValue:e(k),"onUpdate:modelValue":r[8]||(r[8]=t=>p(k)?k.value=t:null),rules:[t=>t||e(a).checkboxValidateMessage]},{default:o(()=>[d(l(e(a).currentValue)+" "+l(e(k)),1)]),_:1},8,["modelValue","rules"]),u(e(n),null,{default:o(()=>[d(l(e(a).checkboxGroupValidate),1)]),_:1}),u(e(y),{modelValue:e(x),"onUpdate:modelValue":r[9]||(r[9]=t=>p(x)?x.value=t:null),rules:[t=>t.length===2||e(a).checkboxGroupValidateMessage]},{default:o(()=>[u(e(s),{"checked-value":0},{default:o(()=>[d(l(e(a).eat),1)]),_:1}),u(e(s),{"checked-value":1},{default:o(()=>[d(l(e(a).sleep),1)]),_:1})]),_:1},8,["modelValue","rules"]),b("div",L,l(e(a).currentValue)+" "+l(e(x)),1),P],64))}},_e=M(Q,[["__scopeId","data-v-d96c8168"]]);export{_e as default};