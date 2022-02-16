"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3777],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={id:"timestamp",title:"Timestamp",sidebar_label:"Timestamp"},p=void 0,u={unversionedId:"entities/properties/timestamp",id:"entities/properties/timestamp",title:"Timestamp",description:'autoValue "oncreate" | "onupdate"',source:"@site/docs/entities/properties/timestamp.md",sourceDirName:"entities/properties",slug:"/entities/properties/timestamp",permalink:"/docs/entities/properties/timestamp",tags:[],version:"current",frontMatter:{id:"timestamp",title:"Timestamp",sidebar_label:"Timestamp"},sidebar:"docsSidebar",previous:{title:"Reference",permalink:"/docs/entities/properties/reference"},next:{title:"Array",permalink:"/docs/entities/properties/array"}},c=[{value:"<code>autoValue</code> &quot;on_create&quot; | &quot;on_update&quot;",id:"autovalue-on_create--on_update",children:[],level:2},{value:"<code>validation</code>",id:"validation",children:[],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { buildProperty } from "./builders";\n\nconst publicationProperty = buildProperty({\n    title: "Publication date",\n    dataType: "timestamp"\n});\n')),(0,a.kt)("h2",{id:"autovalue-on_create--on_update"},(0,a.kt)("inlineCode",{parentName:"h2"},"autoValue"),' "on_create" | "on_update"'),(0,a.kt)("p",null,"Used this prop to update this timestamp automatically upon entity creation\nor update."),(0,a.kt)("h2",{id:"validation"},(0,a.kt)("inlineCode",{parentName:"h2"},"validation")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"required")," Should this field be compulsory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requiredMessage")," Message to be displayed as a validation error."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min")," Set the minimum date allowed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max")," Set the maximum date allowed.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The widget that gets created is"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../api/functions/datetimefield"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTimeField"))," Field that allows selecting a date")),(0,a.kt)("p",null,"Links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../api/interfaces/timestampproperty"},"API"))))}m.isMDXComponent=!0}}]);