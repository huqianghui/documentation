"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[349],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return p}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(o),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9203:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],u={id:"module-intro",sidebar_position:2},l="Introduction to the CAF super-module",s={unversionedId:"module/module-intro",id:"module/module-intro",title:"Introduction to the CAF super-module",description:"What is CAF module?",source:"@site/docs/module/intro.md",sourceDirName:"module",slug:"/module/module-intro",permalink:"/documentation/docs/module/module-intro",editUrl:"https://github.com/aztfmod/documentation/tree/main/website/docs/module/intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"module-intro",sidebar_position:2},sidebar:"cafSidebar",previous:{title:"Cross-levels composition",permalink:"/documentation/docs/fundamentals/lz-composition"},next:{title:"Introduction to CAF Terraform provider",permalink:"/documentation/docs/provider/provider-intro"}},c=[{value:"What is CAF module?",id:"what-is-caf-module",children:[],level:2},{value:"Why using CAF module?",id:"why-using-caf-module",children:[],level:2},{value:"Where to find CAF module?",id:"where-to-find-caf-module",children:[],level:2},{value:"How to use CAF module?",id:"how-to-use-caf-module",children:[],level:2}],d={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-the-caf-super-module"},"Introduction to the CAF super-module"),(0,i.kt)("h2",{id:"what-is-caf-module"},"What is CAF module?"),(0,i.kt)("p",null,"We have seen numerous customers spending much times creating their own Terraform modules in their own private repositories and while it's hard to find the right balance of what components should be inside a single module, it is a very time consuming task. As part of our engagements with customers, we took an approach enabled by Terraform 0.13 to develop a concept of super-module (similar to the concept of superapp) allowing you to create configurations files for any Azure components while focusing on one tested logic. The advantage of having one module is to be able to easily compose across all components inside the module: ie: you can describe a Virtual machine, how it is linked to a virtual network, a Key Vault etc."),(0,i.kt)("p",null,"The core concept of the module is to compose an environment based on Terraform configuration files instead of writing ad-hoc code for each components."),(0,i.kt)("p",null,'We want to promote "',(0,i.kt)("strong",{parentName:"p"},"infrastructure-as-data"),'" in favor of adhoc "infrastructure-as-code", to make composition more accessible and rely on a strong community to write code.'),(0,i.kt)("h2",{id:"why-using-caf-module"},"Why using CAF module?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accelerate innovation with the community: many users use and contribute to the module across the world, have tested it and using it in production, so your DevOps teams can focus on delivering value instead of coding and testing a module."),(0,i.kt)("li",{parentName:"ul"},"Compose across all the Azure components enables you to compose new architectures with an un-matchable speed.")),(0,i.kt)("h2",{id:"where-to-find-caf-module"},"Where to find CAF module?"),(0,i.kt)("p",null,"The CAF Terraform module is verified by Hashicorp and is present in the ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/modules/aztfmod"},"Hashicorp Terraform registry here")," and you can contribute to the module ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aztfmod/terraform-azurerm-caf"},"on GitHub.")),(0,i.kt)("h2",{id:"how-to-use-caf-module"},"How to use CAF module?"),(0,i.kt)("p",null,"It is important to note that although the module is part of the CAF landing zones solution, it can be used as any standalone module, directly from the Terraform registry or from pipelines, as showed in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.hashicorp.com/blog/go-big-or-go-small-building-in-azure-caf-with-terraform-cloud"},"Hashicorp blog post"),"."),(0,i.kt)("p",null,"Just invoke the module using the following call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terraform"},'module "caf" {\n  source  = "aztfmod/caf/azurerm"\n  version = "~>5.5.0"\n  \n  #feed me with variables!\n}\n')),(0,i.kt)("img",{src:"https://aztfmod.azureedge.net/media/standalone.gif",width:"720"})," ",(0,i.kt)("br",null)," ",(0,i.kt)("br",null))}m.isMDXComponent=!0}}]);