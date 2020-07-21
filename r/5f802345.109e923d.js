(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(47),o=n(207),a=(n(0),n(208)),c=n(210),i={id:"user-component",title:"UserComponent",sidebar_label:"UserComponent"},p={id:"version-0.1.0-beta.10/api/user-component",title:"UserComponent",description:"A wrapper of React.ComponentType. Accepts a static craft property for configuring the User Component.",source:"@site/versioned_docs/version-0.1.0-beta.10/api/UserComponent.md",permalink:"/r/docs/api/user-component",version:"0.1.0-beta.10",sidebar_label:"UserComponent",sidebar:"version-0.1.0-beta.10/docs",previous:{title:"Node",permalink:"/r/docs/api/node"},next:{title:"NodeTree",permalink:"/r/docs/api/nodetree"}},s=[{value:"Reference",id:"reference",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.b,{type:"type",mdxType:"Badge"}),Object(a.b)("p",null,"A wrapper of ",Object(a.b)("inlineCode",{parentName:"p"},"React.ComponentType<Props>"),". Accepts a static ",Object(a.b)("inlineCode",{parentName:"p"},"craft")," property for configuring the User Component."),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)(c.a,{items:[["","React.ComponentType<T> &",[["craft","Object",[["displayName","String","A user-friendly name for the User Component. The value here will be used to set the node.data.displayName property."],["props","T","Specify default values for the props T"],["custom","Record<string, any>","Specify default custom values for the User Component"],["related","Record<string, React.ElementType>","A map of React Components to share the same Node context. This components will be able access the useNode hook"],["rules?",[["canDrag","(currentNode: Node, helpers: NodeHelpers) => boolean","Specifies if the component can be dragged. Applicable only to components whose corresponding Node is a direct child of a Canvas"],["canDrop","(targetNode: Node, currentNode, helpers: NodeHelpers) => boolean","Specifies if the current Node that is being dragged can be dropped in its target. Applicable only if the current Node is a direct child of a Canvas Node"],["canMoveIn","(incomingNode: Node, currentNode: Node, helpers: NodeHelpers) => boolean","Specifies if an incoming Node can be dropped into the current component. Applicable only to components whose corresponding Node is a Canvas"],["canMoveOut","(outgoingNode: Node, currentNode: Node, helpers: NodeHelpers) => boolean","Specifies if a child Node can be dragged out of the current component. Applicable only to components whose corresponding Node is a Canvas"]]]]]]]],mdxType:"API"}),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'type TextProps = {\n  color: string;\n  text: string;\n};\n\nconst TextComponent: UserComponent<TextProps> = ({color, text}) => {\n  return (\n    <h2 style={{color}}>{text}</h2>\n  )\n}\n\nconst TextSettings = () => {\n  const {props, setProp} = useNode();\n  return (\n    <div>\n      Text: <input type="text" value={props.text} onChange={e => setProp(props => props.text = e.target.value) }/>\n      Color: <input type="text" value={props.color} onChange={e => setProp(props => props.color = e.target.value) }/>\n    </div>\n  )\n}\nTextComponent.craft = {\n  displayName: "My Text Component",\n  props: {\n    color: "#000",\n    text: "Hi"\n  },\n  rules: {\n    canDrag: (self: Node, helper) => true,\n    canMoveIn: (incoming: Node, self: Node, helper) => true,\n    canMoveOut: (outgoing: Node, self: Node, helper) => true\n  },\n  related: {\n    settings: TextSettings\n  }\n}\n')))}u.isMDXComponent=!0},207:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},209:function(e,t,n){"use strict";var r=n(0),o=n(48);t.a=function(){return Object(r.useContext)(o.a)}},210:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=function(e){var t=e.item,n=t[0],r=t.length>1&&"string"==typeof t[1]&&t[1],a=3==t.length?"string"==typeof t[2]&&t[2]:4==t.length&&"string"==typeof t[3]&&t[3],i=t.length>1&&Array.isArray(t[t.length-1])&&t[t.length-1];return o.a.createElement("li",{className:"api-item"},o.a.createElement("div",null,n&&o.a.createElement("code",{className:"api-title"},n),r&&o.a.createElement("strong",{className:"api-type"},r)),a&&o.a.createElement("div",{className:"api-description",dangerouslySetInnerHTML:{__html:a}}),i&&o.a.createElement(c,{items:i}))},c=function(e){var t=e.items;return o.a.createElement("ul",null,t&&t.map((function(e,t){return o.a.createElement(a,{item:e,key:t})})))},i=function(e){var t,n=e.type,r=e.title,a=void 0===r||r,c=e.noMargin,i=void 0===c||c;switch(n){case"hoc":t="Higher-Order Component";break;default:t=n[0].toUpperCase()+n.substring(1)}return o.a.createElement("div",{className:"badge-wrapper"},o.a.createElement("span",{className:"badge badge-"+n+" "+(a?"badge-title":"")+" "+(i?"badge-no-margin":"")},t))},p=n(209),s=function(e){var t=e.img,n=Object(p.a)().siteConfig.baseUrl;return o.a.createElement("div",{className:"img-wrapper"},o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement("img",{src:n+"img/"+t})))};n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"b",(function(){})),n.d(t,"c",(function(){return s}))}}]);