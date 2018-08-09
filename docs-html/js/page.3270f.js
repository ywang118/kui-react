/*! react-kui v1.0.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{307:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(l(2)),n=f(l(3)),u=f(l(4)),d=f(l(5)),r=f(l(6)),c=f(l(1)),i=f(l(324)),o=l(21),s=f(l(363));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){return(0,n.default)(this,t),(0,d.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e))}return(0,r.default)(t,e),(0,u.default)(t,[{key:"onChange",value:function(e){console.log(e)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h2",null,"Page 分页"),c.default.createElement("h3",null,"代码示例"),c.default.createElement(i.default,{title:"基础",layout:"vertical"},c.default.createElement("div",null,c.default.createElement(o.Page,{total:"100",current:"1",pageSize:"10"})),c.default.createElement("div",null,"基本分页，",c.default.createElement("code",null,"total"),"为总页数，",c.default.createElement("code",null,"current"),"为当前页码，",c.default.createElement("code",null,"pagesize"),"为页码分组"),c.default.createElement("div",null,s.default.base)),c.default.createElement(i.default,{title:"尺寸",layout:"vertical"},c.default.createElement("div",null,c.default.createElement(o.Page,{total:"60",current:"1",pageSize:"10",mini:!0,onChange:this.onChange.bind(this)})),c.default.createElement("div",null,"设置",c.default.createElement("code",null,"mini"),"可设置组件小尺寸展示，",c.default.createElement("code",null,"change"),"为页码改变触发事件"),c.default.createElement("div",null,s.default.size)),c.default.createElement(i.default,{title:"显示辅助分页",layout:"vertical"},c.default.createElement("div",null,c.default.createElement(o.Page,{total:"60",current:"1",showSizer:!0,showElevator:!0,showTotal:!0,pageSize:"15",mini:!0,onChange:this.onChange.bind(this)})),c.default.createElement("div",null,"可以切换每页显示的数量。"),c.default.createElement("div",null,s.default.sizer)),c.default.createElement("h3",null,"API"),c.default.createElement("div",{className:"table-border"},c.default.createElement("table",null,c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("th",null,"属性"),c.default.createElement("th",null,"说明"),c.default.createElement("th",null,"类型"),c.default.createElement("th",null,"默认值")),c.default.createElement("tr",null,c.default.createElement("td",null,"current"),c.default.createElement("td",null,"当前页码"),c.default.createElement("td",null,"Number,String"),c.default.createElement("td",null,"1")),c.default.createElement("tr",null,c.default.createElement("td",null,"total"),c.default.createElement("td",null,"数据总数"),c.default.createElement("td",null,"Number,String"),c.default.createElement("td",null,"0")),c.default.createElement("tr",null,c.default.createElement("td",null,"pageSize"),c.default.createElement("td",null,"每页条数"),c.default.createElement("td",null,"Number,String "),c.default.createElement("td",null,"10")),c.default.createElement("tr",null,c.default.createElement("td",null,"showSizer"),c.default.createElement("td",null,"是否显示页码组"),c.default.createElement("td",null,"Boolean "),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"showTotal"),c.default.createElement("td",null,"是否显示总数"),c.default.createElement("td",null,"Boolean "),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"showElevator"),c.default.createElement("td",null,"是否显示跳转"),c.default.createElement("td",null,"Boolean "),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"sizeData"),c.default.createElement("td",null,"自定义页码组数据"),c.default.createElement("td",null,"Array "),c.default.createElement("td",null,"[10,15,20,30,40]")),c.default.createElement("tr",null,c.default.createElement("td",null,"mini"),c.default.createElement("td",null,"是否为迷你风格"),c.default.createElement("td",null,"Boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"onChange"),c.default.createElement("td",null,"页码改变的回调，返回改变后的页码"),c.default.createElement("td",null,"Function"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"onPageSizeChange"),c.default.createElement("td",null,"切换页码组改变的回调，返回改变后的page-size"),c.default.createElement("td",null,"Function"),c.default.createElement("td",null,"-"))))))}}]),t}(c.default.Component);t.default=m},324:function(e,t,l){"use strict";l.r(t);var a=l(325),n=l.n(a);t.default=n.a},325:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(l(12)),n=h(l(2)),u=h(l(3)),d=h(l(4)),r=h(l(5)),c=h(l(6)),i=h(l(1)),o=h(l(326)),s=l(21),f=l(7),m=h(l(54));function h(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(e){(0,u.default)(this,t);var l=(0,r.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,c.default)(t,e),(0,d.default)(t,[{key:"icons",value:function(){return this.state.expand?"ios-code-working":"ios-code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,a.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return i.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},i.default.createElement("div",{className:"k-demo-main",ref:"demo"},i.default.createElement("div",{className:"k-content"},this.props.children[0]),i.default.createElement("div",{className:"k-desc"},i.default.createElement("a",{className:"k-desc-title"},this.props.title),i.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),i.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},i.default.createElement(s.Icon,{type:this.icons()})))),i.default.createElement("div",{className:"k-demo-line"}),i.default.createElement(m.default,{show:this.state.expand},i.default.createElement(o.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=E,E.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},E.defaultProps={layout:"vertical"}},363:function(e,t,l){"use strict";l.r(t);let a={base:'\nimport { Page } from \'react-kui\';\nReactDOM.render() {\n  return <Page total="100" curent="1" pageSize="10"/>\n}\n',size:'import { Page } from \'react-kui\';\nReactDOM.render() {\n  return <Page total="60" curent="1" pageSize="10" mini onChange={(page)=>{console.log(page)}} />\n}',sizer:'import { Page } from \'react-kui\';\nReactDOM.render() {\n  return <Page total="60" current="1" showSizer showElevator showTotal pageSize="15" mini onChange={this.onChange.bind(this)}></Page>\n}'};t.default=a}}]);