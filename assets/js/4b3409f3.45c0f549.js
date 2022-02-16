"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6547],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1927:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],p={id:"WhereFilterOp",title:"Type alias: WhereFilterOp",sidebar_label:"WhereFilterOp",sidebar_position:0,custom_edit_url:null},l=void 0,c={unversionedId:"api/types/WhereFilterOp",id:"api/types/WhereFilterOp",title:"Type alias: WhereFilterOp",description:'\u01ac WhereFilterOp: `"=" \\| ">" \\| "array-contains" \\| "in" \\| "array-contains-any"`',source:"@site/docs/api/types/WhereFilterOp.md",sourceDirName:"api/types",slug:"/api/types/WhereFilterOp",permalink:"/docs/api/types/WhereFilterOp",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"WhereFilterOp",title:"Type alias: WhereFilterOp",sidebar_label:"WhereFilterOp",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"User",permalink:"/docs/api/types/User"},next:{title:"AsyncPreviewComponent",permalink:"/docs/api/variables/AsyncPreviewComponent"}},s=[{value:"Defined in",id:"defined-in",children:[],level:4}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"WhereFilterOp"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"<"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"<="')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"=="')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"!="')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'">="')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'">"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"array-contains"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"in"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"array-contains-any"')),(0,a.kt)("p",null,"Filter conditions in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Query.where()")," clause are specified using the\nstrings '<', '<=', '==', '>=', '>', 'array-contains', 'in', and 'array-contains-any'."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"models/collections.ts:265"))}d.isMDXComponent=!0}}]);