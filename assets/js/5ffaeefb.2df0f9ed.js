"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2174],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,b=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(b,u(u({ref:t},p),{},{components:r})):n.createElement(b,u({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var s=2;s<i;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3386:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),u=["components"],o={id:"useFirebaseAuthDelegate",title:"Function: useFirebaseAuthDelegate",sidebar_label:"useFirebaseAuthDelegate",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/functions/useFirebaseAuthDelegate",id:"api/functions/useFirebaseAuthDelegate",title:"Function: useFirebaseAuthDelegate",description:"\u25b8 Const useFirebaseAuthDelegate(__namedParameters): FirebaseAuthDelegate",source:"@site/docs/api/functions/useFirebaseAuthDelegate.md",sourceDirName:"api/functions",slug:"/api/functions/useFirebaseAuthDelegate",permalink:"/docs/api/functions/useFirebaseAuthDelegate",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"useFirebaseAuthDelegate",title:"Function: useFirebaseAuthDelegate",sidebar_label:"useFirebaseAuthDelegate",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"useFireCMSContext",permalink:"/docs/api/functions/useFireCMSContext"},next:{title:"useFirebaseStorageSource",permalink:"/docs/api/functions/useFirebaseStorageSource"}},p=[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"useFirebaseAuthDelegate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,i.kt)("a",{parentName:"p",href:"../types/FirebaseAuthDelegate"},(0,i.kt)("inlineCode",{parentName:"a"},"FirebaseAuthDelegate"))),(0,i.kt)("p",null,"Use this hook to build an ",(0,i.kt)("a",{parentName:"p",href:"../types/AuthDelegate"},"AuthDelegate")," based on Firebase Auth"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"FirebaseAuthHandlerProps"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types/FirebaseAuthDelegate"},(0,i.kt)("inlineCode",{parentName:"a"},"FirebaseAuthDelegate"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"firebase_app/hooks/useFirebaseAuthDelegate.ts:39"))}d.isMDXComponent=!0}}]);