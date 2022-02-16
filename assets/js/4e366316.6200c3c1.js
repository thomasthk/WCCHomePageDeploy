"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6781],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6469:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],p={id:"map",title:"Map",sidebar_label:"Map"},l=void 0,u={unversionedId:"entities/properties/map",id:"entities/properties/map",title:"Map",description:"In a map property you define child properties in the same way you define them",source:"@site/docs/entities/properties/map.md",sourceDirName:"entities/properties",slug:"/entities/properties/map",permalink:"/docs/entities/properties/map",tags:[],version:"current",frontMatter:{id:"map",title:"Map",sidebar_label:"Map"},sidebar:"docsSidebar",previous:{title:"Array",permalink:"/docs/entities/properties/array"},next:{title:"Geopoint",permalink:"/docs/entities/properties/geopoint"}},s=[{value:"<code>properties</code>",id:"properties",children:[],level:2},{value:"<code>previewProperties</code>",id:"previewproperties",children:[],level:2},{value:"<code>validation</code>",id:"validation",children:[],level:2}],c={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In a map property you define child properties in the same way you define them\nat the entity schema level:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { buildProperty } from "./builders";\n\nconst ctaProperty = buildProperty({\n    dataType: "map",\n    properties: {\n        name: {\n            title: "Name",\n            description: "Text that will be shown on the button",\n            validation: { required: true },\n            dataType: "string"\n        },\n        type: {\n            title: "Type",\n            description: "Action type that determines the user flow",\n            validation: { required: true, uniqueInArray: true },\n            dataType: "string",\n            config: {\n                enumValues: {\n                    complete: "Complete",\n                    continue: "Continue"\n                }\n            }\n        }\n    }\n});\n')),(0,a.kt)("h2",{id:"properties"},(0,a.kt)("inlineCode",{parentName:"h2"},"properties")),(0,a.kt)("p",null,"Record of properties included in this map."),(0,a.kt)("h2",{id:"previewproperties"},(0,a.kt)("inlineCode",{parentName:"h2"},"previewProperties")),(0,a.kt)("p",null,"List of properties rendered as this map preview. Defaults to first 3."),(0,a.kt)("h2",{id:"validation"},(0,a.kt)("inlineCode",{parentName:"h2"},"validation")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"required")," Should this field be compulsory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requiredMessage")," Message to be displayed as a validation error.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The widget that gets created is"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../api/functions/mapfield"},(0,a.kt)("inlineCode",{parentName:"a"},"MapField"))," Field that renders the children\nproperty fields")),(0,a.kt)("p",null,"Links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../api/interfaces/mapproperty"},"API"))))}d.isMDXComponent=!0}}]);