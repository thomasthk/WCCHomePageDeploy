"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3476],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||s[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3149:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),l=["components"],o={id:"EntityOnDeleteProps",title:"Interface: EntityOnDeleteProps<M>",sidebar_label:"EntityOnDeleteProps",sidebar_position:0,custom_edit_url:null},p=void 0,d={unversionedId:"api/interfaces/EntityOnDeleteProps",id:"api/interfaces/EntityOnDeleteProps",title:"Interface: EntityOnDeleteProps<M>",description:"Parameters passed to hooks when an entity is deleted",source:"@site/docs/api/interfaces/EntityOnDeleteProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/EntityOnDeleteProps",permalink:"/docs/api/interfaces/EntityOnDeleteProps",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityOnDeleteProps",title:"Interface: EntityOnDeleteProps<M>",sidebar_label:"EntityOnDeleteProps",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"EntityFormProps",permalink:"/docs/api/interfaces/EntityFormProps"},next:{title:"EntityOnSaveProps",permalink:"/docs/api/interfaces/EntityOnSaveProps"}},c=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"context",id:"context",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"entity",id:"entity",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"entityId",id:"entityid",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"path",id:"path",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"schema",id:"schema",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],s={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Parameters passed to hooks when an entity is deleted"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"M")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("inlineCode",{parentName:"td"},"Object"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"context"},"context"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"context"),": ",(0,a.kt)("a",{parentName:"p",href:"FireCMSContext"},(0,a.kt)("inlineCode",{parentName:"a"},"FireCMSContext")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("p",null,"Context of the app status"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"models/entity_callbacks.ts:129"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"entity"},"entity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"entity"),": ",(0,a.kt)("a",{parentName:"p",href:"Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"M"),">"),(0,a.kt)("p",null,"Deleted entity"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"models/entity_callbacks.ts:124"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"entityid"},"entityId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"entityId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Deleted entity id"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"models/entity_callbacks.ts:119"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"path"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Path of the parent collection"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"models/entity_callbacks.ts:114"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"schema"},"schema"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"schema"),": ",(0,a.kt)("a",{parentName:"p",href:"../types/ResolvedEntitySchema"},(0,a.kt)("inlineCode",{parentName:"a"},"ResolvedEntitySchema")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"M"),">"),(0,a.kt)("p",null,"Schema of the entity being deleted"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,"models/entity_callbacks.ts:109"))}u.isMDXComponent=!0}}]);