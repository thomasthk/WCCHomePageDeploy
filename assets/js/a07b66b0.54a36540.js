"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[161],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),s=i,f=c["".concat(d,".").concat(s)]||c[s]||m[s]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],o={id:"buildAdditionalColumnDelegate",title:"Function: buildAdditionalColumnDelegate",sidebar_label:"buildAdditionalColumnDelegate",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"api/functions/buildAdditionalColumnDelegate",id:"api/functions/buildAdditionalColumnDelegate",title:"Function: buildAdditionalColumnDelegate",description:"\u25b8 buildAdditionalColumnDelegate(additionalColumnDelegate): AdditionalColumnDelegate",source:"@site/docs/api/functions/buildAdditionalColumnDelegate.md",sourceDirName:"api/functions",slug:"/api/functions/buildAdditionalColumnDelegate",permalink:"/docs/api/functions/buildAdditionalColumnDelegate",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"buildAdditionalColumnDelegate",title:"Function: buildAdditionalColumnDelegate",sidebar_label:"buildAdditionalColumnDelegate",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"UrlComponentPreview",permalink:"/docs/api/functions/UrlComponentPreview"},next:{title:"buildCollection",permalink:"/docs/api/functions/buildCollection"}},u=[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],m={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buildAdditionalColumnDelegate"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AdditionalKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UserType"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"additionalColumnDelegate"),"): ",(0,r.kt)("a",{parentName:"p",href:"../interfaces/AdditionalColumnDelegate"},(0,r.kt)("inlineCode",{parentName:"a"},"AdditionalColumnDelegate")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AdditionalKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UserType"),">"),(0,r.kt)("p",null,"Identity function we use to defeat the type system of Typescript and build\nadditional column delegates views with all its properties"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AdditionalKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UserType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"additionalColumnDelegate")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../interfaces/AdditionalColumnDelegate"},(0,r.kt)("inlineCode",{parentName:"a"},"AdditionalColumnDelegate")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"M"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"AdditionalKey"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"UserType"),">")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../interfaces/AdditionalColumnDelegate"},(0,r.kt)("inlineCode",{parentName:"a"},"AdditionalColumnDelegate")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AdditionalKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UserType"),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"core/builders.ts:150"))}c.isMDXComponent=!0}}]);