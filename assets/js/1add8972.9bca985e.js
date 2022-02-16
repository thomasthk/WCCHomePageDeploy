"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9567],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3985:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],p={id:"FirebaseAuthDelegate",title:"Type alias: FirebaseAuthDelegate",sidebar_label:"FirebaseAuthDelegate",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/types/FirebaseAuthDelegate",id:"api/types/FirebaseAuthDelegate",title:"Type alias: FirebaseAuthDelegate",description:"\u01ac FirebaseAuthDelegate boolean ; loginSkipped? () => void ; appleLogin (email string) => void ; emailPasswordLogin string, password () => void ; fetchSignInMethodsForEmail string) => Promise ; githubLogin () => void ; microsoftLogin () => void ; twitterLogin: () => void  }",source:"@site/docs/api/types/FirebaseAuthDelegate.md",sourceDirName:"api/types",slug:"/api/types/FirebaseAuthDelegate",permalink:"/docs/api/types/FirebaseAuthDelegate",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FirebaseAuthDelegate",title:"Type alias: FirebaseAuthDelegate",sidebar_label:"FirebaseAuthDelegate",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"FilterValues",permalink:"/docs/api/types/FilterValues"},next:{title:"FirestoreTextSearchController",permalink:"/docs/api/types/FirestoreTextSearchController"}},d=[{value:"Defined in",id:"defined-in",children:[],level:4}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"FirebaseAuthDelegate"),": ",(0,a.kt)("a",{parentName:"p",href:"AuthDelegate"},(0,a.kt)("inlineCode",{parentName:"a"},"AuthDelegate")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"FirebaseUser"),">"," & { ",(0,a.kt)("inlineCode",{parentName:"p"},"authLoading"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"loginSkipped?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"anonymousLogin"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"appleLogin"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"createUserWithEmailAndPassword"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"email"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"password"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"emailPasswordLogin"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"email"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"password"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"facebookLogin"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchSignInMethodsForEmail"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"email"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"githubLogin"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"googleLogin"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"microsoftLogin"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"skipLogin?"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"twitterLogin"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),"  }"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"firebase_app/models/auth.tsx:34"))}c.isMDXComponent=!0}}]);