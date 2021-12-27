(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3720:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return mn}});var r,o,l,s,a,i,c,u=t(2209),p=t(7294),d=t(7379),m=t(9008),f=t(5893),h=d.ZP.header(r||(r=(0,u.Z)(["\n  background: steelblue;\n  color: #fff;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n"]))),x=d.ZP.nav(o||(o=(0,u.Z)(["\n  max-width: 960px;\n  height: 50px;\n  margin: auto;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 600px) {\n    padding: 0 10px;\n  }\n"]))),y=d.ZP.a(l||(l=(0,u.Z)(["\n  color: #fff;\n  text-decoration: none;\n\n  &:hover {\n    color: #eee;\n  }\n"]))),g=d.ZP.h1(s||(s=(0,u.Z)(["\n  margin: 10px 0;\n"]))),b=function(){return(0,f.jsx)(h,{children:(0,f.jsxs)(x,{children:[(0,f.jsx)(y,{href:"/",children:(0,f.jsx)(g,{children:"react-runner"})}),(0,f.jsx)(y,{href:"https://github.com/nihgwu/react-runner",children:"Github"})]})})},v=(0,d.vJ)(a||(a=(0,u.Z)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    font-size: 16px;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  pre, code, kbd {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;\n  }\n"]))),w=d.ZP.div(i||(i=(0,u.Z)(["\n  overflow: auto;\n"]))),k=d.ZP.div(c||(c=(0,u.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 70px 20px 20px;\n\n  @media (max-width: 600px) {\n    padding: 60px 10px 10px;\n  }\n"]))),Z=function(n){var e=n.children;return(0,f.jsxs)(w,{children:[(0,f.jsx)(v,{}),(0,f.jsxs)(m.default,{children:[(0,f.jsx)("title",{children:"react-runner"}),(0,f.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,f.jsx)("meta",{name:"description",content:"Preview your React component the easy way"}),(0,f.jsx)("meta",{name:"keywords",content:"react, component, preview, runner, live"})]}),(0,f.jsx)(b,{}),(0,f.jsx)(k,{children:e})]})},j=t(81);function C(){return(C=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}class B extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n){var e,t;null==(e=(t=this.props).onError)||e.call(t,n.toString())}render(){return this.state.hasError?null:this.props.children}}const P=/^export default(?=\s+)/m,E=/^render(?=\s*\([^)])/m,N=/^</,S=(n,e)=>{const{code:t,scope:r}=n,o=t?t.trim():"";if(!o)return null;const l=((n,e)=>{const t=Object.keys(e),r=t.map((n=>e[n]));return new Function(...t,n)(...r)})((n=>(0,j.vs)(n,{transforms:["jsx","typescript"],production:!0}).code)((n=>P.test(n)?n.replace(P,"return"):E.test(n)?n.replace(E,"return"):(n=n.replace(/;$/,""),N.test(n)&&p.Fragment&&(n="<>"+n+"</>"),"return ("+n+")"))(o)),C({React:p},r));let s;return s=(0,p.isValidElement)(l)?l:"object"==typeof l?String(l):"function"==typeof l?(0,p.createElement)(l):null,(0,p.createElement)(B,{onError:e},s)},_=(n,e)=>{let t;try{t={element:S(n,e),error:null}}catch(n){t={element:null,error:n.toString()}}return t};var O=t(2062),F=t(5620),D=t(2349);p.Component;function z(){return(z=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function R(n,e){if(null==n)return{};var t,r,o={},l=Object.keys(n);for(r=0;r<l.length;r++)e.indexOf(t=l[r])>=0||(o[t]=n[t]);return o}const W={plain:{color:"#ffffff",backgroundColor:"#282c34"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#b2b2b2"}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:"#b2b2b2"}},{types:["boolean"],style:{color:"#ff8b50"}},{types:["tag"],style:{color:"#fc929e"}},{types:["string"],style:{color:"#8dc891"}},{types:["punctuation"],style:{color:"#88c6Be"}},{types:["selector","char","builtin","inserted"],style:{color:"#d8dee9"}},{types:["function"],style:{color:"#79b6f2"}},{types:["operator","entity","url","variable"],style:{color:"#d7deea"}},{types:["keyword"],style:{color:"#c5a5c5"}},{types:["class-name"],style:{color:"#fac863"}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"700"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["namespace"],style:{opacity:.7}}]},M=["children","language","theme","padding","noWrapper","noWrap","className","style"],$=n=>{let{children:e="",language:t="jsx",theme:r=W,padding:o=10,noWrapper:l,noWrap:s,className:a,style:i}=n,c=R(n,M);return p.createElement(F.ZP,{code:e,language:t,Prism:D.Z,theme:r},(n=>{let{className:e,style:t,tokens:r,getLineProps:u,getTokenProps:d}=n;const m=r.map(((n,e)=>p.createElement("div",u({line:n,key:e}),n.map(((n,e)=>p.createElement("span",d({token:n,key:e})))))));return l?m:p.createElement("pre",z({className:a?e+" "+a:e,style:z({},t,{margin:0,padding:o,whiteSpace:s?"pre":"pre-wrap"},i)},c),m)}))},V=["defaultValue","value","language","theme","padding","onChange"],I=n=>{let{defaultValue:e,value:t,language:r="jsx",theme:o=W,padding:l=10,onChange:s}=n,a=R(n,V);const[i,c]=(0,p.useState)(e||""),u=(0,p.useCallback)((n=>p.createElement($,{language:r,theme:o,noWrapper:!0},n)),[r,o]),d=(0,p.useRef)(s);d.current=s;const m=(0,p.useCallback)((n=>{void 0===t&&c(n),null==d.current||d.current(n)}),[t]),f=(0,p.useMemo)((()=>z({},o.plain,a.style)),[o.plain,a.style]);return p.createElement(O.Z,z({},a,{padding:l,value:void 0!==t?t:i,highlight:u,onValueChange:m,style:f}))};(0,p.createContext)({element:null,error:null,code:"",onChange:()=>{}});var T,X,G,H,J,L;var q,A,K,Q,U,Y,nn,en=d.ZP.div(T||(T=(0,u.Z)(["\n  display: flex;\n  box-shadow: 0 0 8px 0 lightsteelblue;\n  height: 250px;\n  overflow: hidden;\n\n  @media (max-width: 600px) {\n    flex-direction: column-reverse;\n    height: 400px;\n  }\n"]))),tn=d.ZP.div(X||(X=(0,u.Z)(["\n  flex: 1;\n  overflow: auto;\n"]))),rn=(0,d.ZP)(I)(G||(G=(0,u.Z)(["\n  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 14px;\n  white-space: pre;\n  caret-color: #fff;\n  min-width: 100%;\n  min-height: 100%;\n  float: left;\n\n  & > textarea,\n  & > pre {\n    outline: none;\n    white-space: pre !important;\n  }\n"]))),on=d.ZP.div(H||(H=(0,u.Z)(["\n  flex: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  overflow: auto;\n"]))),ln=d.ZP.div(J||(J=(0,u.Z)(["\n  margin: auto;\n  text-align: center;\n"]))),sn=d.ZP.div(L||(L=(0,u.Z)(["\n  background: #fcc;\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  margin: 0;\n  padding: 10px;\n  color: #f00;\n  white-space: pre-wrap;\n"]))),an=function(n){var e=n.code,t=n.scope,r=n.language,o=(0,p.useState)((e||"").trim()),l=o[0],s=o[1],a=(n=>{let{code:e,scope:t}=n;const[r,o]=(0,p.useState)({element:null,error:null}),l=(0,p.useRef)(t);return l.current=t,(0,p.useEffect)((()=>{const{element:n,error:t}=_({code:e,scope:l.current},(n=>{o({error:n,element:null})}));o({element:n,error:t})}),[e]),r})({code:l,scope:t}),i=a.element,c=a.error;return(0,f.jsxs)(en,{children:[(0,f.jsx)(tn,{children:(0,f.jsx)(rn,{value:l,language:r,onChange:s})}),(0,f.jsxs)(on,{children:[c&&(0,f.jsx)(sn,{children:c}),(0,f.jsx)(ln,{children:i})]})]})},cn=t(865),un=[{key:"inline-elements",title:"Inline elements",code:(0,cn.FD)(q||(q=(0,u.Z)(["\n    <div>Hello</div>\n    <div>react-runner</div>\n    "])))},{key:"function-component",title:"Function Component",code:(0,cn.FD)(A||(A=(0,u.Z)(["\n    function Counter() {\n      const [count, setCount] = React.useState(0)\n\n      return (\n        <>\n          <div>{count}</div>\n          <button onClick={() => setCount(count => count + 1)}>+</button>\n          <button onClick={() => setCount(count => count - 1)}>-</button>\n        </>\n      )\n    }\n    "])))},{key:"class-component",title:"Class Component with fields support",code:(0,cn.FD)(K||(K=(0,u.Z)(["\n    class Counter extends React.Component {\n      state = {\n        count: 0,\n      }\n\n      onIncrement = () => {\n        this.setState(({ count }) => ({\n          count: count + 1,\n        }))\n      }\n\n      onDecrement = () => {\n        this.setState(({ count }) => ({\n          count: count - 1,\n        }))\n      }\n\n      render() {\n        return (\n          <div>\n            <div>{this.state.count}</div>\n            <button onClick={this.onIncrement}>+</button>\n            <button onClick={this.onDecrement}>-</button>\n          </div>\n        )\n      }\n    }\n    "])))},{key:"export-default",title:"export default Component",scope:{styled:d.ZP,css:d.iv},code:(0,cn.FD)(Q||(Q=(0,u.Z)(["\n    const Button = styled.button`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      ${props => props.primary && css`\n        background: steelblue;\n        color: white;\n      `}\n    `\n\n    export default () => (\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "],["\n    const Button = styled.button\\`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      \\${props => props.primary && css\\`\n        background: steelblue;\n        color: white;\n      \\`}\n    \\`\n\n    export default () => (\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "])))},{key:"render",title:"render(<Component />)",scope:{styled:d.ZP,css:d.iv},code:(0,cn.FD)(U||(U=(0,u.Z)(["\n    const Button = styled.button`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      ${props => props.primary && css`\n        background: steelblue;\n        color: white;\n      `}\n    `\n\n    render(\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "],["\n    const Button = styled.button\\`\n      background: transparent;\n      color: steelblue;\n      border: 2px solid steelblue;\n      margin: 5px 10px;\n      padding: 5px 10px;\n      font-size: 16px;\n      border-radius: 4px;\n\n      \\${props => props.primary && css\\`\n        background: steelblue;\n        color: white;\n      \\`}\n    \\`\n\n    render(\n      <>\n        <Button>Normal Button</Button>\n        <Button primary>Primary Button</Button>\n      </>\n    )\n    "])))}],pn=d.ZP.h3(Y||(Y=(0,u.Z)(["\n  color: steelblue;\n"]))),dn=d.ZP.div(nn||(nn=(0,u.Z)(["\n  color: steelblue;\n"]))),mn=function(){return(0,f.jsxs)(Z,{children:[(0,f.jsx)(dn,{children:"Run your React code on the go, in different ways"}),un.map((function(n){var e=n.key,t=n.title,r=n.code,o=n.scope;return(0,f.jsxs)(p.Fragment,{children:[(0,f.jsx)(pn,{id:e,children:t}),(0,f.jsx)(an,{code:r,scope:o})]},e)}))]})}},5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3720)}])}},function(n){n.O(0,[411,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);