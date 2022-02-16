"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6870],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1415:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),l=["components"],c={id:"use_snackbar_controller",title:"useSnackbarController",sidebar_label:"useSnackbarController"},i=void 0,s={unversionedId:"hooks/use_snackbar_controller",id:"hooks/use_snackbar_controller",title:"useSnackbarController",description:"Please note that in order to use these hooks you must be in",source:"@site/docs/hooks/use_snackbar_controller.md",sourceDirName:"hooks",slug:"/hooks/use_snackbar_controller",permalink:"/docs/hooks/use_snackbar_controller",tags:[],version:"current",frontMatter:{id:"use_snackbar_controller",title:"useSnackbarController",sidebar_label:"useSnackbarController"},sidebar:"docsSidebar",previous:{title:"useSideEntityController",permalink:"/docs/hooks/use_side_entity_controller"},next:{title:"useFireCMSContext",permalink:"/docs/hooks/use_firecms_context"}},u=[],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please note that in order to use these hooks you ",(0,a.kt)("strong",{parentName:"p"},"must")," be in\na component (you can't use them directly from a callback function).\nAnyhow, callbacks usually include a ",(0,a.kt)("inlineCode",{parentName:"p"},"FireCMSContext"),", which includes all\nthe controllers."))),(0,a.kt)("p",null,"Use this hook to get a snackbar controller to display snackbars, with a message,\na type and an optional title."),(0,a.kt)("p",null,"The props provided by this context are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isOpen")," Is there currently an open snackbar"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"close()")," Close the currently open snackbar"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'open ({ type: "success" | "info" | "warning" | "error"; title?: string; message: string; })'),"\nDisplay a new snackbar. You need to specify the type and message. You can\noptionally specify a title")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'\nimport React from "react";\nimport { useSnackbarController } from "@camberi/firecms";\n\nexport function ExampleCMSView() {\n\n    const snackbarController = useSnackbarController();\n\n    return (\n        <Button\n            onClick={() => snackbarController.open({\n                type: "success",\n                title: "Hey!",\n                message: "Test snackbar"\n            })}>\n            Click me\n        </Button>\n    );\n}\n')))}m.isMDXComponent=!0}}]);