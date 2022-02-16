"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6720],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8997:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={id:"deployment",title:"Deployment to Firebase Hosting",sidebar_label:"Deployment"},s=void 0,p={unversionedId:"deployment",id:"deployment",title:"Deployment to Firebase Hosting",description:"If you would like to deploy your CMS to Firebase Hosting, you need to enable",source:"@site/docs/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/docs/deployment",tags:[],version:"current",frontMatter:{id:"deployment",title:"Deployment to Firebase Hosting",sidebar_label:"Deployment"},sidebar:"docsSidebar",previous:{title:"Firebase setup",permalink:"/docs/firebase_setup"},next:{title:"Building a blog",permalink:"/docs/recipes/building_a_blog"}},c=[],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you would like to deploy your CMS to Firebase Hosting, you need to enable\nit first in the Hosting tab of your Firebase project."),(0,i.kt)("p",null,"You will need to init Firebase, either with an existing project or a new one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"firebase init\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You don't need to enable any of the services, besides Firebase Hosting if you\nwould like to deploy it there."))),(0,i.kt)("p",null,"You can link the Firebase hosting site to the webapp that you have created\nin order to get your Firebase config."),(0,i.kt)("p",null,"In order to make everything work as expected, you need to setup Firebase Hosting\nredirects to work as a SPA. Your ",(0,i.kt)("strong",{parentName:"p"},"firebase.json")," should\nlook similar to this (remember to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"[YOUR_SITE_HERE]"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "hosting": {\n        "site": "[YOUR_SITE_HERE]",\n        "public": "build",\n        "ignore": [\n            "firebase.json",\n            "**/.*",\n            "**/node_modules/**"\n        ],\n        "rewrites": [\n            {\n                "source": "**",\n                "destination": "/index.html"\n            }\n        ]\n    }\n}\n\n')),(0,i.kt)("p",null,"Then simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn run build && firebase deploy --only hosting\n")),(0,i.kt)("p",null,"to deploy."))}d.isMDXComponent=!0}}]);