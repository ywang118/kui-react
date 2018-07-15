/*! react-kui v1.0.7 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{296:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(l(6)),n=h(l(5)),d=h(l(4)),u=h(l(3)),i=h(l(2)),r=l(1),c=h(r),s=l(21),o=h(l(325)),f=h(l(342));function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,n.default)(this,t);var l=(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={checked:!1,data:"苹果🍎"},l}return(0,i.default)(t,e),(0,d.default)(t,[{key:"testChange",value:function(e){this.setState({checked:e})}},{key:"testClick",value:function(){this.setState({checked:!this.state.checked})}},{key:"onClear",value:function(){this.setState({data:""})}},{key:"onSelect",value:function(){this.setState({data:"苹果🍎"})}},{key:"onChangeGroup",value:function(e){this.setState({data:e})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h2",null,"Radio 单选框"),c.default.createElement("h3",null,"代码示例"),c.default.createElement(s.Row,{gutter:"8"},c.default.createElement(s.Col,{span:"12"},c.default.createElement(o.default,{title:"基础",layout:"vertical"},c.default.createElement("div",null,c.default.createElement("span",null,this.state.checked.toString()),c.default.createElement("br",null),c.default.createElement(s.Radio,{checked:this.state.checked,onChange:this.testChange.bind(this),value:"1"},"单选"),c.default.createElement(s.Button,{onClick:this.testClick.bind(this),style:{margin:0}},"Click me")),c.default.createElement("div",null,"单独使用可使用",c.default.createElement("code",null,"checked"),"切换选中状态"),c.default.createElement("div",null,f.default.base))),c.default.createElement(s.Col,{span:"12"},c.default.createElement(o.default,{title:"禁用",layout:"vertical"},c.default.createElement("div",null,c.default.createElement(s.Radio,{label:"葡萄🍇",disabled:!0,checked:!0}),c.default.createElement(s.Radio,{label:"梨子🍐",disabled:!0})),c.default.createElement("div",null,"通过",c.default.createElement("code",null,"disabled"),"设置组件是否被禁用"),c.default.createElement("div",null,f.default.disabled)))),c.default.createElement(o.default,{title:"组合使用"},c.default.createElement("div",null,c.default.createElement("p",null,this.state.data),c.default.createElement(s.Radio.Group,{value:this.state.data,onChange:this.onChangeGroup.bind(this)},c.default.createElement(s.Radio,{label:"苹果🍎"}),c.default.createElement(s.Radio,{label:"橘子🍊"}),c.default.createElement(s.Radio,{label:"香蕉🍌"}),c.default.createElement(s.Radio,{label:"栗子🌰"}),c.default.createElement(s.Radio,{label:"葡萄🍇"}),c.default.createElement(s.Radio,{label:"梨子🍐",disabled:!0})),c.default.createElement(s.Button,{onClick:this.onClear.bind(this)},"清除"),c.default.createElement(s.Button,{onClick:this.onSelect.bind(this)}," 选中苹果")),c.default.createElement("div",null,"结合",c.default.createElement("code",null,"RadioGroup"),"可以组合使用"),c.default.createElement("div",null,f.default.group)),c.default.createElement("h3",null,"Radio API"),c.default.createElement("div",{className:"table-border"},c.default.createElement("table",null,c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("th",null,"属性"),c.default.createElement("th",null,"说明"),c.default.createElement("th",null,"类型"),c.default.createElement("th",null,"默认值")),c.default.createElement("tr",null,c.default.createElement("td",null,"checked"),c.default.createElement("td",null,"是否被选中"),c.default.createElement("td",null,"Boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"value"),c.default.createElement("td",null,"单选框的值"),c.default.createElement("td",null,"string,number,boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"label"),c.default.createElement("td",null,"单选框的值"),c.default.createElement("td",null," String | Number"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"disabled"),c.default.createElement("td",null,"是否禁用当前项"),c.default.createElement("td",null,"Boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"onChange"),c.default.createElement("td",null,"在选项状态发生改变时触发，返回当前状态"),c.default.createElement("td",null,"Function"),c.default.createElement("td",null,"-"))))),c.default.createElement("h3",null,"RadioGroup API"),c.default.createElement("div",{className:"table-border"},c.default.createElement("table",null,c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("th",null,"属性"),c.default.createElement("th",null,"说明"),c.default.createElement("th",null,"类型"),c.default.createElement("th",null,"默认值")),c.default.createElement("tr",null,c.default.createElement("td",null,"value"),c.default.createElement("td",null,"只在单独使用时有效。"),c.default.createElement("td",null,"Boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"onChange"),c.default.createElement("td",null,"在选项状态发生改变时触发，返回当前选中的项"),c.default.createElement("td",null,"Function"),c.default.createElement("td",null,"-"))))))}}]),t}(r.Component);t.default=m},324:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(l(12)),n=m(l(6)),d=m(l(5)),u=m(l(4)),i=m(l(3)),r=m(l(2)),c=m(l(1)),s=m(l(326)),o=l(21),f=l(7),h=m(l(54));function m(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(e){(0,d.default)(this,t);var l=(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,r.default)(t,e),(0,u.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,a.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return c.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},c.default.createElement("div",{className:"k-demo-main",ref:"demo"},c.default.createElement("div",{className:"k-content"},this.props.children[0]),c.default.createElement("div",{className:"k-desc"},c.default.createElement("a",{className:"k-desc-title"},this.props.title),c.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),c.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},c.default.createElement(o.Icon,{type:this.icons()})))),c.default.createElement("div",{className:"k-demo-line"}),c.default.createElement(h.default,{show:this.state.expand},c.default.createElement(s.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=E,E.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},E.defaultProps={layout:"vertical"}},325:function(e,t,l){"use strict";l.r(t);var a=l(324),n=l.n(a);t.default=n.a},342:function(e,t,l){"use strict";l.r(t);let a={base:"import { Radio } from 'react-kui';\nconstructor(props) {\n  super(props)\n  this.state = {\n    checked: false,\n  }\n}\ntestChange(value) {\n  this.setState({ checked: value })\n}\ntestClick() {\n  this.setState({ checked: !this.state.checked })\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Radio checked={this.state.checked} onChange={this.testChange.bind(this)} value=\"1\">单选</Radio>\n      <Button onClick={this.testClick.bind(this)} >Click me</Button>\n    </div>\n  )\n}",disabled:'import { Radio } from \'react-kui\';\nReactDOM.render() {\n  return (\n    <div>\n      <Radio label="葡萄🍇" disabled checked></Radio>\n      <Radio label="梨子🍐" disabled></Radio>\n    </div>\n  )\n}',group:'import { Radio } from \'react-kui\';\nconstructor(props) {\n  super(props)\n  this.state = {\n    data: "苹果🍎",\n  }\n}\nonChangeGroup(value) {\n  this.setState({ data: value })\n}\nonClear() {\n  this.setState({ data: \'\' })\n}\nonSelect() {\n  this.setState({ data: \'苹果🍎\' })\n}\nReactDOM.render() {\n  return (\n    <div>\n        <Radio.Group value={this.state.data} onChange={this.onChangeGroup.bind(this)}>\n          <Radio label="苹果🍎"></Radio>\n          <Radio label="橘子🍊"></Radio>\n          <Radio label="香蕉🍌"></Radio>\n          <Radio label="栗子🌰"></Radio>\n          <Radio label="葡萄🍇"></Radio>\n          <Radio label="梨子🍐" disabled></Radio>\n        </Radio.Group>\n        <Button onClick={this.onClear.bind(this)}>清除</Button>\n        <Button onClick={this.onSelect.bind(this)}> 选中苹果</Button >\n    </div>\n  )\n}'};t.default=a}}]);