"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5549],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},21:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return s}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],l={id:"Authenticator",title:"Type alias: Authenticator<UserType>",sidebar_label:"Authenticator",sidebar_position:0,custom_edit_url:null},p=void 0,d={unversionedId:"api/types/Authenticator",id:"api/types/Authenticator",title:"Type alias: Authenticator<UserType>",description:"\u01ac Authenticator { authController DataSource ; dateTimeFormat? Locale ; storageSource UserType \\| `null  }) => boolean \\| Promise`",source:"@site/docs/api/types/Authenticator.md",sourceDirName:"api/types",slug:"/api/types/Authenticator",permalink:"/docs/api/types/Authenticator",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Authenticator",title:"Type alias: Authenticator<UserType>",sidebar_label:"Authenticator",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"AuthDelegate",permalink:"/docs/api/types/AuthDelegate"},next:{title:"CMSType",permalink:"/docs/api/types/CMSType"}},m=[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Type declaration",id:"type-declaration",children:[{value:"Parameters",id:"parameters",children:[],level:5},{value:"Returns",id:"returns",children:[],level:5}],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],u={toc:m};function s(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Authenticator"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"UserType"),">",": (",(0,i.kt)("inlineCode",{parentName:"p"},"{ user }"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"authController"),": ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/AuthController"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthController")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"UserType"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSource"),": ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/DataSource"},(0,i.kt)("inlineCode",{parentName:"a"},"DataSource"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"dateTimeFormat?"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"locale?"),": ",(0,i.kt)("a",{parentName:"p",href:"Locale"},(0,i.kt)("inlineCode",{parentName:"a"},"Locale"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"storageSource"),": ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/StorageSource"},(0,i.kt)("inlineCode",{parentName:"a"},"StorageSource"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"user"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UserType")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"  }) => ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"UserType")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"User"},(0,i.kt)("inlineCode",{parentName:"a"},"User"))," = ",(0,i.kt)("a",{parentName:"td",href:"User"},(0,i.kt)("inlineCode",{parentName:"a"},"User")))))),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"{ user }"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Implement this function to allow access to specific users.\nYou might want to load additional properties for a user asynchronously\nand store it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"setExtra")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"authController")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{ user }")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{ user }.authController")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/AuthController"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthController")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"UserType"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"AuthController")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{ user }.dataSource")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/DataSource"},(0,i.kt)("inlineCode",{parentName:"a"},"DataSource"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Connector to your database, e.g. your Firestore database")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{ user }.dateTimeFormat?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Format of the dates in the CMS. Defaults to 'MMMM dd, yyyy, HH:mm:ss'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{ user }.locale?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"Locale"},(0,i.kt)("inlineCode",{parentName:"a"},"Locale"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Locale of the CMS, currently only affecting dates")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{ user }.storageSource")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/StorageSource"},(0,i.kt)("inlineCode",{parentName:"a"},"StorageSource"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Used storage implementation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"{ user }.user")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"UserType")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Logged in user or null")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"models/user.ts:55"))}s.isMDXComponent=!0}}]);