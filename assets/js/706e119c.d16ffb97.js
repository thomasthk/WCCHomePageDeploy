"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1622],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1092:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],l={id:"reference",title:"Reference",sidebar_label:"Reference"},p=void 0,c={unversionedId:"entities/properties/reference",id:"entities/properties/reference",title:"Reference",description:"path",source:"@site/docs/entities/properties/reference.md",sourceDirName:"entities/properties",slug:"/entities/properties/reference",permalink:"/docs/entities/properties/reference",tags:[],version:"current",frontMatter:{id:"reference",title:"Reference",sidebar_label:"Reference"},sidebar:"docsSidebar",previous:{title:"Boolean",permalink:"/docs/entities/properties/boolean"},next:{title:"Timestamp",permalink:"/docs/entities/properties/timestamp"}},s=[{value:"<code>path</code>",id:"path",children:[],level:2},{value:"<code>previewProperties</code>",id:"previewproperties",children:[],level:2},{value:"<code>validation</code>",id:"validation",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { buildProperty } from "./builders";\n\nconst productsReferenceProperty = buildProperty({\n    title: "Product",\n    dataType: "reference",\n    path: "products",\n    previewProperties: ["name", "main_image"]\n});\n')),(0,o.kt)("h2",{id:"path"},(0,o.kt)("inlineCode",{parentName:"h2"},"path")),(0,o.kt)("p",null,"Absolute collection path of the collection this reference\npoints to. The schema of the entity is inferred based on the root navigation,\nso the filters and search delegate existing there are applied to this view as\nwell."),(0,o.kt)("h2",{id:"previewproperties"},(0,o.kt)("inlineCode",{parentName:"h2"},"previewProperties")),(0,o.kt)("p",null,"List of properties rendered as this reference preview.\nDefaults to first 3."),(0,o.kt)("h2",{id:"validation"},(0,o.kt)("inlineCode",{parentName:"h2"},"validation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"required")," Should this field be compulsory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requiredMessage")," Message to be displayed as a validation error.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The widget that gets created is"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../api/functions/referencefield"},(0,o.kt)("inlineCode",{parentName:"a"},"ReferenceField"))," Field that opens a\nreference selection dialog")),(0,o.kt)("p",null,"Links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../api/interfaces/referenceproperty"},"API"))))}d.isMDXComponent=!0}}]);