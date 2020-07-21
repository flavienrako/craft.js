(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(47),o=t(207),i=(t(0),t(208)),a={id:"serializing",title:"Serializing"},c={id:"version-0.1.0-beta.10/concepts/serializing",title:"Serializing",description:"Serializing",source:"@site/versioned_docs/version-0.1.0-beta.10/concepts/serializing.md",permalink:"/r/docs/concepts/serializing",version:"0.1.0-beta.10"},l=[{value:"Serializing",id:"serializing",children:[]},{value:"Resolvers",id:"resolvers",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"serializing"},"Serializing"),Object(i.b)("p",null,"We can serialize the editor's current state of Nodes into JSON by calling the ",Object(i.b)("inlineCode",{parentName:"p"},"serialize")," method provided by the ",Object(i.b)("inlineCode",{parentName:"p"},"useEditor")," hook"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const Toolbar = () => {\n  const { query } = useEditor();\n\n  return (\n    <a onClick={() => console.log(query.serialize())}>Serialize</a>\n  )\n}\n")),Object(i.b)("h2",{id:"resolvers"},"Resolvers"),Object(i.b)("p",null,"Craft.js exports the nodes in its internal state into a serialzable JSON format. For this to be possible, complex objects such as functions cannot be included - which means User Components cannot be serialised. "),Object(i.b)("p",null,"To overcome this is why when setting up Craft.js with your React application, one of the first things you have to do is to specify a map of user components in the ",Object(i.b)("inlineCode",{parentName:"p"},"resolver")," prop of the ",Object(i.b)("inlineCode",{parentName:"p"},"Manager")," component."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import {Text, Hero, Container} from ".../myproject/components";\n\nconst App = () => {\n  return (\n    <Manager resolvers={{\n      "MyText" : Text\n    }}>\n      <Frame>\n        <Element is="div">\n          <h1>Hi</h1>\n          <Text text="Hi" />\n        </Element>\n      </Frame>\n    </Manager>\n  )\n}\n')),Object(i.b)("p",null,"Given the above example, when a ",Object(i.b)("inlineCode",{parentName:"p"},"Node")," that is of the type  ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," is serialised, it will return something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"node-randomId": {\n  "type": {\n    "resolvedName": "MyText"\n  },\n  "props": {\n    "text" : "Hi World!"\n  },\n  "parent": "ROOT",\n  "displayName": "Card"\n  ...\n}\n')),Object(i.b)("p",null,"Notice how the ",Object(i.b)("inlineCode",{parentName:"p"},"resolvedName")," is ",Object(i.b)("inlineCode",{parentName:"p"},"MyText")," rather than the name of the component, ",Object(i.b)("inlineCode",{parentName:"p"},"Text"),". This is because in our ",Object(i.b)("inlineCode",{parentName:"p"},"resolver"),", we mapped ",Object(i.b)("inlineCode",{parentName:"p"},"MyText")," to our Text component. Now, when we deserialize - Craft.js is easily able to find ",Object(i.b)("inlineCode",{parentName:"p"},"MyText")," in our resolver, and knows the component it refers to."))}p.isMDXComponent=!0},207:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},208:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return t?o.a.createElement(m,c(c({ref:n},s),{},{components:t})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);