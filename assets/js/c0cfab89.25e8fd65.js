"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6551],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,v=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},955:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={id:"ResolvedNavigationCollection",title:"Interface: ResolvedNavigationCollection<M>",sidebar_label:"ResolvedNavigationCollection",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/ResolvedNavigationCollection",id:"api/interfaces/ResolvedNavigationCollection",title:"Interface: ResolvedNavigationCollection<M>",description:"see resolveNavigationFrom",source:"@site/docs/api/interfaces/ResolvedNavigationCollection.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ResolvedNavigationCollection",permalink:"/docs/api/interfaces/ResolvedNavigationCollection",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ResolvedNavigationCollection",title:"Interface: ResolvedNavigationCollection<M>",sidebar_label:"ResolvedNavigationCollection",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"ReferenceProperty",permalink:"/docs/api/interfaces/ReferenceProperty"},next:{title:"ResolvedNavigationEntity",permalink:"/docs/api/interfaces/ResolvedNavigationEntity"}},d=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"collection",id:"collection",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"path",id:"path",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"type",id:"type",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],s={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"see"))," resolveNavigationFrom"),(0,o.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"M"))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"collection"},"collection"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"collection"),": ",(0,o.kt)("a",{parentName:"p",href:"EntityCollection"},(0,o.kt)("inlineCode",{parentName:"a"},"EntityCollection")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,"hooks/useResolvedNavigationFrom.tsx:39"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"path"},"path"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,"hooks/useResolvedNavigationFrom.tsx:38"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"type"},"type"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"collection"')),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,"hooks/useResolvedNavigationFrom.tsx:37"))}u.isMDXComponent=!0}}]);