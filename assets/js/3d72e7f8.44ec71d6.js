"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7530],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=p(n),s=r,f=k["".concat(d,".").concat(s)]||k[s]||N[s]||i;return n?a.createElement(f,l(l({ref:e},m),{},{components:n})):a.createElement(f,l({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},829:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"NavigationContext",title:"Type alias: NavigationContext",sidebar_label:"NavigationContext",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"api/types/NavigationContext",id:"api/types/NavigationContext",title:"Type alias: NavigationContext",description:"\u01ac NavigationContext: Object",source:"@site/docs/api/types/NavigationContext.md",sourceDirName:"api/types",slug:"/api/types/NavigationContext",permalink:"/docs/api/types/NavigationContext",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"NavigationContext",title:"Type alias: NavigationContext",sidebar_label:"NavigationContext",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"NavigationBuilder",permalink:"/docs/api/types/NavigationBuilder"},next:{title:"NavigationRoutesProps",permalink:"/docs/api/types/NavigationRoutesProps"}},m=[{value:"Type declaration",id:"type-declaration",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],N={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"NavigationContext"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Context that includes the resolved navigation and utility methods and\nattributes."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"baseCollectionPath")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Default path under the collection routes of the CMS will be created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"basePath")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Default path under the navigation routes of the CMS will be created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"homeUrl")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Base url path for the home screen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"initialised")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Is the registry ready to be used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"loading")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"navigation?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/Navigation"},(0,i.kt)("inlineCode",{parentName:"a"},"Navigation"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"navigationLoadingError?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"buildCMSUrlPath")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"buildUrlCollectionPath")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"getCollectionResolver")),(0,i.kt)("td",{parentName:"tr",align:"left"},"<M",">","(",(0,i.kt)("inlineCode",{parentName:"td"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"entityId?"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"baseCollection?"),": ",(0,i.kt)("a",{parentName:"td",href:"../interfaces/EntityCollection"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityCollection")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"M"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",") => ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"EntityCollectionResolver"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityCollectionResolver")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"M"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isUrlCollectionPath")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"urlPath"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"onCollectionModifiedForUser")),(0,i.kt)("td",{parentName:"tr",align:"left"},"<M",">","(",(0,i.kt)("inlineCode",{parentName:"td"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"partialCollection"),": ",(0,i.kt)("a",{parentName:"td",href:"PartialEntityCollection"},(0,i.kt)("inlineCode",{parentName:"a"},"PartialEntityCollection")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"M"),">",") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"removeAllOverridesExcept")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"entityRefs"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"entityId?"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"  }[]) => ",(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"setOverride")),(0,i.kt)("td",{parentName:"tr",align:"left"},"<M",">","(",(0,i.kt)("inlineCode",{parentName:"td"},"props"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"entityId?"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"overrideSchemaRegistry?"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"schemaConfig?"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"EntityCollectionResolver"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityCollectionResolver")),">","  }) => ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"urlPathToDataPath")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"cmsPath"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"models/navigation.ts:82"))}k.isMDXComponent=!0}}]);