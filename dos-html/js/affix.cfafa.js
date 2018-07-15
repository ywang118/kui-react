/*! react-kui v1.0.7 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{322:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(l(6)),a=c(l(5)),u=c(l(4)),f=c(l(3)),o=c(l(2)),d=c(l(374)),r=c(l(325)),i=c(l(1)),s=l(21);function c(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return(0,a.default)(this,t),(0,f.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,u.default)(t,[{key:"onChange",value:function(e){e?s.Message.success("当前状态："+e):s.Message.error("当前状态："+e)}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"Affix 图钉"),i.default.createElement("p",null,"将页面元素钉在可视范围。"),i.default.createElement("h3",null,"代码示例"),i.default.createElement(s.Row,{gutter:"8"},i.default.createElement(s.Col,{span:"12"},i.default.createElement(r.default,{title:"基本",layout:"vertical"},i.default.createElement("div",null,i.default.createElement(s.Affix,null,i.default.createElement(s.Button,null,"Affix top")),i.default.createElement(s.Affix,{offsetBottom:"0"},i.default.createElement(s.Button,null,"Affix Bottom"))),i.default.createElement("div",null,"通过",i.default.createElement("code",null,"offsetTop"),"和",i.default.createElement("code",null,"offsetBottom"),"来设定固定位置"),i.default.createElement("div",null,d.default.base))),i.default.createElement(s.Col,{span:"12"},i.default.createElement(r.default,{title:"偏移",layout:"vertical"},i.default.createElement("div",null,i.default.createElement(s.Affix,{offsetTop:"200"},i.default.createElement(s.Button,null,"200px to Affix top")),i.default.createElement(s.Affix,{offsetBottom:"100"},i.default.createElement(s.Button,null,"100px to Affix bottom"))),i.default.createElement("div",null,"默认",i.default.createElement("code",null,"offsetTop"),"值为0"),i.default.createElement("div",null,d.default.offset)))),i.default.createElement(r.default,{title:"事件回调"},i.default.createElement("div",null,i.default.createElement(s.Affix,{offsetTop:"150",onChange:this.onChange.bind(this)},i.default.createElement(s.Button,null,"150px to Affix top")),i.default.createElement(s.Affix,{offsetBottom:"100",onChange:this.onChange.bind(this)},i.default.createElement(s.Button,null,"100px to Affix bottom"))),i.default.createElement("div",null,"当固定状态发生改变时触发回调"),i.default.createElement("div",null,d.default.callback)),i.default.createElement("h3",null,"API"),i.default.createElement("div",{className:"table-border"},i.default.createElement("table",null,i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("th",null,"属性"),i.default.createElement("th",null,"说明"),i.default.createElement("th",null,"类型"),i.default.createElement("th",null,"默认值")),i.default.createElement("tr",null,i.default.createElement("td",null,"offsetTop"),i.default.createElement("td",null,"距离窗口顶部达到指定偏移量后触发 "),i.default.createElement("td",null,"String,Number"),i.default.createElement("td",null,"0")),i.default.createElement("tr",null,i.default.createElement("td",null,"offsetBottom"),i.default.createElement("td",null,"距离窗口底部达到指定偏移量后触发 "),i.default.createElement("td",null,"String,Number "),i.default.createElement("td",null,"-")),i.default.createElement("tr",null,i.default.createElement("td",null,"onChange"),i.default.createElement("td",null,"在固定状态发生改变时触发,返回当前固定状态 false | true"),i.default.createElement("td",null,"Function "),i.default.createElement("td",null,"-"))))))}}]),t}(i.default.Component);t.default=m},324:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(l(12)),a=h(l(6)),u=h(l(5)),f=h(l(4)),o=h(l(3)),d=h(l(2)),r=h(l(1)),i=h(l(326)),s=l(21),c=l(7),m=h(l(54));function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,u.default)(this,t);var l=(0,o.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,d.default)(t,e),(0,f.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,n.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return r.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},r.default.createElement("div",{className:"k-demo-main",ref:"demo"},r.default.createElement("div",{className:"k-content"},this.props.children[0]),r.default.createElement("div",{className:"k-desc"},r.default.createElement("a",{className:"k-desc-title"},this.props.title),r.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),r.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},r.default.createElement(s.Icon,{type:this.icons()})))),r.default.createElement("div",{className:"k-demo-line"}),r.default.createElement(m.default,{show:this.state.expand},r.default.createElement(i.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(c.Kui);t.default=p,p.propTypes={layout:c.PropTypes.string,title:c.PropTypes.string,lang:c.PropTypes.string},p.defaultProps={layout:"vertical"}},325:function(e,t,l){"use strict";l.r(t);var n=l(324),a=l.n(n);t.default=a.a},374:function(e,t,l){"use strict";l.r(t);let n={base:"import { Affix } from 'react-kui';\nReactDOM.render() {\n  return (\n    <div>\n      <Affix>\n        <Button>Affix top</Button>\n      </Affix>\n      <Affix offsetBottom=\"0\">\n        <Button>Affix Bottom</Button>\n      </Affix> \n    </div>\n  )\n}",offset:'import { Affix } from \'react-kui\';\nReactDOM.render() {\n  return (\n    <div>\n       <Affix offsetTop="200">\n           <Button>200px to Affix top</Button>\n       </Affix>\n       <Affix offsetBottom="100">\n           <Button>100px to Affix bottom</Button>\n       </Affix>  \n    </div>\n  )\n}',callback:"import { Affix ,Message} from 'react-kui';\nonChange(v) {\n  if (v) {\n      Message.success('当前状态：' + v)\n  } else {\n      Message.error('当前状态：' + v)\n  }\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Affix offsetTop=\"150\" onChange={()=>this.onChange}>\n          <Button>150px to Affix top</Button>\n      </Affix>\n      <Affix offsetBottom=\"100\" onChange={()=>this.onChange}>\n          <Button>100px to Affix bottom</Button>\n      </Affix>  \n    </div>\n  )\n}\n"};t.default=n}}]);