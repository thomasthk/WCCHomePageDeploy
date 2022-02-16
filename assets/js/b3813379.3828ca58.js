"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8724],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),p=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(t),f=r,m=s["".concat(d,".").concat(f)]||s[f]||u[f]||a;return t?i.createElement(m,l(l({ref:n},c),{},{components:t})):i.createElement(m,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=s;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},244:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),l=["components"],o={id:"CMSView",title:"Interface: CMSView",sidebar_label:"CMSView",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"api/interfaces/CMSView",id:"api/interfaces/CMSView",title:"Interface: CMSView",description:"Custom additional views created by the developer, added to the main",source:"@site/docs/api/interfaces/CMSView.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CMSView",permalink:"/docs/api/interfaces/CMSView",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CMSView",title:"Interface: CMSView",sidebar_label:"CMSView",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"CMSFormFieldProps",permalink:"/docs/api/interfaces/CMSFormFieldProps"},next:{title:"CollectionFetchProps",permalink:"/docs/api/interfaces/CollectionFetchProps"}},c=[{value:"Properties",id:"properties",children:[{value:"description",id:"description",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"group",id:"group",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"hideFromNavigation",id:"hidefromnavigation",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"name",id:"name",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"path",id:"path",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"view",id:"view",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2}],u={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Custom additional views created by the developer, added to the main\nnavigation."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"description"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Optional description of this view. You can use Markdown"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"models/navigation.ts:198"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"group"},"group"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"group"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Optional field used to group top level navigation entries under a\nnavigation view."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"models/navigation.ts:216"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hidefromnavigation"},"hideFromNavigation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"hideFromNavigation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Should this view be hidden from the main navigation panel.\nIt will still be accessible if you reach the specified path"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"models/navigation.ts:204"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name of this view"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"models/navigation.ts:193"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"path"},"path"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"path"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"CMS Path (or paths) you can reach this view from.\nIf you include multiple paths, only the first one will be included in the\nmain menu"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,"models/navigation.ts:188"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"view"},"view"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"view"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactNode")),(0,a.kt)("p",null,"Component to be rendered. This can be any React component, and can use\nany of the provided hooks"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,"models/navigation.ts:210"))}s.isMDXComponent=!0}}]);