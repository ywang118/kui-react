/*! react-kui v1.0.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{308:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(l(2)),n=h(l(3)),u=h(l(4)),d=h(l(5)),i=h(l(6)),o=l(1),r=h(o),s=l(21),c=h(l(324)),f=h(l(364));function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,n.default)(this,t);var l=(0,d.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={checked:!1,value:"3",value1:"0",value2:"0",value3:"0"},l}return(0,i.default)(t,e),(0,u.default)(t,[{key:"testChange",value:function(e){this.setState({checked:e})}},{key:"testClick",value:function(){this.setState({checked:!this.state.checked})}},{key:"onClear",value:function(){this.setState({value:""})}},{key:"onSelect",value:function(){this.setState({value:"0"})}},{key:"onChangeGroup",value:function(e,t){var l={};l[e]=t,this.setState(l)}},{key:"render",value:function(){var e=this.state.value;return r.default.createElement("div",null,r.default.createElement("h2",null,"Radio 单选框"),r.default.createElement("h3",null,"代码示例"),r.default.createElement(s.Row,{gutter:"8"},r.default.createElement(s.Col,{span:"12"},r.default.createElement(c.default,{title:"基础",layout:"vertical"},r.default.createElement("div",null,r.default.createElement("span",null,this.state.checked.toString()),r.default.createElement("br",null),r.default.createElement(s.Radio,{checked:this.state.checked,onChange:this.testChange.bind(this),value:"1"},"单选"),r.default.createElement(s.Button,{onClick:this.testClick.bind(this),style:{margin:0}},"Click me")),r.default.createElement("div",null,"单独使用可使用",r.default.createElement("code",null,"checked"),"切换选中状态"),r.default.createElement("div",null,f.default.base))),r.default.createElement(s.Col,{span:"12"},r.default.createElement(c.default,{title:"组合使用"},r.default.createElement("div",null,r.default.createElement("p",null,"选中的值：",e),r.default.createElement(s.Radio.Group,{value:this.state.value,onChange:this.onChangeGroup.bind(this,"value")},r.default.createElement(s.Radio,{value:"0",label:"苹果🍎"}),r.default.createElement(s.Radio,{value:"1",label:"橘子🍊"}),r.default.createElement(s.Radio,{value:"2",label:"香蕉🍌"}),r.default.createElement(s.Radio,{value:"3",label:"栗子🌰"}),r.default.createElement(s.Radio,{value:"4",label:"葡萄🍇"}),r.default.createElement(s.Radio,{value:"5",label:"梨子🍐",disabled:!0})),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(s.Button,{onClick:this.onClear.bind(this)},"清除"),r.default.createElement(s.Button,{onClick:this.onSelect.bind(this)}," 选中苹果")),r.default.createElement("div",null,"结合",r.default.createElement("code",null,"RadioGroup"),"可以组合使用"),r.default.createElement("div",null,f.default.group)))),r.default.createElement(s.Row,{gutter:"8"},r.default.createElement(s.Col,{span:"12"},r.default.createElement(c.default,{title:"禁用",layout:"vertical"},r.default.createElement("div",null,r.default.createElement(s.Radio,{label:"葡萄🍇",disabled:!0,checked:!0}),r.default.createElement(s.Radio,{label:"梨子🍐",disabled:!0})),r.default.createElement("div",null,"通过",r.default.createElement("code",null,"disabled"),"设置组件是否被禁用"),r.default.createElement("div",null,f.default.disabled))),r.default.createElement(s.Col,{span:"12"},r.default.createElement(c.default,{title:"组合Button使用",layout:"vertical"},r.default.createElement("div",null,r.default.createElement(s.Radio.Group,{value:this.state.value1,onChange:this.onChangeGroup.bind(this,"value1")},r.default.createElement(s.Radio.Button,{value:"0",label:"苹果"}),r.default.createElement(s.Radio.Button,{value:"1",label:"橘子"}),r.default.createElement(s.Radio.Button,{value:"2",label:"香蕉"}),r.default.createElement(s.Radio.Button,{value:"3",label:"栗子"})),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(s.Radio.Group,{value:this.state.value2,onChange:this.onChangeGroup.bind(this,"value2"),mini:!0},r.default.createElement(s.Radio.Button,{value:"0",label:"苹果"}),r.default.createElement(s.Radio.Button,{value:"1",label:"橘子",disabled:!0}),r.default.createElement(s.Radio.Button,{value:"2",label:"香蕉"}),r.default.createElement(s.Radio.Button,{value:"3",label:"栗子"})),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(s.Radio.Group,{value:this.state.value3,onChange:this.onChangeGroup.bind(this,"value3"),mini:!0,disabled:!0},r.default.createElement(s.Radio.Button,{value:"0",label:"苹果"}),r.default.createElement(s.Radio.Button,{value:"1",label:"橘子"}),r.default.createElement(s.Radio.Button,{value:"2",label:"香蕉"}),r.default.createElement(s.Radio.Button,{value:"3",label:"栗子"}))),r.default.createElement("div",null,"通过",r.default.createElement("code",null,"disabled"),"设置组件是否被禁用"),r.default.createElement("div",null,f.default.groupButton)))),r.default.createElement("h3",null,"Radio API"),r.default.createElement("div",{className:"table-border"},r.default.createElement("table",null,r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("th",null,"属性"),r.default.createElement("th",null,"说明"),r.default.createElement("th",null,"类型"),r.default.createElement("th",null,"默认值")),r.default.createElement("tr",null,r.default.createElement("td",null,"checked"),r.default.createElement("td",null,"是否被选中"),r.default.createElement("td",null,"Boolean"),r.default.createElement("td",null,"false")),r.default.createElement("tr",null,r.default.createElement("td",null,"value"),r.default.createElement("td",null,"单选框的值,只在组合使用时有效"),r.default.createElement("td",null,"string | number"),r.default.createElement("td",null,"false")),r.default.createElement("tr",null,r.default.createElement("td",null,"label"),r.default.createElement("td",null,"显示的文字值"),r.default.createElement("td",null,"string "),r.default.createElement("td",null,"-")),r.default.createElement("tr",null,r.default.createElement("td",null,"disabled"),r.default.createElement("td",null,"是否禁用当前项"),r.default.createElement("td",null,"Boolean"),r.default.createElement("td",null,"false")),r.default.createElement("tr",null,r.default.createElement("td",null,"onChange"),r.default.createElement("td",null,"在选项状态发生改变时触发，返回当前状态"),r.default.createElement("td",null,"Function"),r.default.createElement("td",null,"-"))))),r.default.createElement("h3",null,"RadioGroup API"),r.default.createElement("div",{className:"table-border"},r.default.createElement("table",null,r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("th",null,"属性"),r.default.createElement("th",null,"说明"),r.default.createElement("th",null,"类型"),r.default.createElement("th",null,"默认值")),r.default.createElement("tr",null,r.default.createElement("td",null,"value"),r.default.createElement("td",null,"组合使用时的值"),r.default.createElement("td",null,"string，number"),r.default.createElement("td",null,"-")),r.default.createElement("tr",null,r.default.createElement("td",null,"onChange"),r.default.createElement("td",null,"在选项状态发生改变时触发，返回当前选中的项的值"),r.default.createElement("td",null,"Function"),r.default.createElement("td",null,"-"))))))}}]),t}(o.Component);t.default=m},324:function(e,t,l){"use strict";l.r(t);var a=l(325),n=l.n(a);t.default=n.a},325:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(l(12)),n=m(l(2)),u=m(l(3)),d=m(l(4)),i=m(l(5)),o=m(l(6)),r=m(l(1)),s=m(l(326)),c=l(21),f=l(7),h=m(l(54));function m(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){(0,u.default)(this,t);var l=(0,i.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,o.default)(t,e),(0,d.default)(t,[{key:"icons",value:function(){return this.state.expand?"ios-code-working":"ios-code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,a.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return r.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},r.default.createElement("div",{className:"k-demo-main",ref:"demo"},r.default.createElement("div",{className:"k-content"},this.props.children[0]),r.default.createElement("div",{className:"k-desc"},r.default.createElement("a",{className:"k-desc-title"},this.props.title),r.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),r.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},r.default.createElement(c.Icon,{type:this.icons()})))),r.default.createElement("div",{className:"k-demo-line"}),r.default.createElement(h.default,{show:this.state.expand},r.default.createElement(s.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=v,v.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},v.defaultProps={layout:"vertical"}},364:function(e,t,l){"use strict";l.r(t);let a={base:"import { Radio } from 'react-kui';\nconstructor(props) {\n  super(props)\n  this.state = {\n    checked: false,\n  }\n}\ntestChange(value) {\n  this.setState({ checked: value })\n}\ntestClick() {\n  this.setState({ checked: !this.state.checked })\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Radio checked={this.state.checked} onChange={this.testChange.bind(this)} value=\"1\">单选</Radio>\n      <Button onClick={this.testClick.bind(this)} >Click me</Button>\n    </div>\n  )\n}",disabled:'import { Radio } from \'react-kui\';\nReactDOM.render() {\n  return (\n    <div>\n      <Radio label="葡萄🍇" disabled checked></Radio>\n      <Radio label="梨子🍐" disabled></Radio>\n    </div>\n  )\n}',group:'import { Radio } from \'react-kui\';\nconstructor(props) {\n  super(props)\n  this.state = {\n    value: "3",\n  }\n}\nonClear() {\n  this.setState({ value: \'\' })\n}\nonSelect() {\n  this.setState({ value: \'0\' })\n}\nonChangeGroup(value) {\n  this.setState({ value })\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Radio.Group value={this.state.value} onChange={this.onChangeGroup.bind(this)}>\n        <Radio value="0" label="苹果🍎"></Radio>\n        <Radio value="1" label="橘子🍊"></Radio>\n        <Radio value="2" label="香蕉🍌"></Radio>\n        <Radio value="3" label="栗子🌰"></Radio>\n        <Radio value="4" label="葡萄🍇"></Radio>\n        <Radio value="5" label="梨子🍐" disabled></Radio>\n      </Radio.Group>\n      <Button onClick={this.onClear.bind(this)}>清除</Button>\n      <Button onClick={this.onSelect.bind(this)}> 选中苹果</Button >\n    </div>\n  )\n}',groupButton:'import { Radio } from \'react-kui\';\nconstructor(props) {\n  super(props)\n  this.state = {\n    value1: "0",\n    value2: "0",\n    value3: "0",\n  }\n}\nonChangeGroup(key, value) {\n  let data = {}\n  data[key] = value\n  this.setState(data)\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Radio.Group value={this.state.value1} onChange={this.onChangeGroup.bind(this, \'value1\')}>\n        <Radio.Button value="0" label="苹果"></Radio.Button>\n        <Radio.Button value="1" label="橘子"></Radio.Button>\n        <Radio.Button value="2" label="香蕉"></Radio.Button>\n        <Radio.Button value="3" label="栗子"></Radio.Button>\n      </Radio.Group>\n      <br />\n      <br />\n      <Radio.Group value={this.state.value2} onChange={this.onChangeGroup.bind(this, \'value2\')} mini>\n        <Radio.Button value="0" label="苹果"></Radio.Button>\n        <Radio.Button value="1" label="橘子" disabled></Radio.Button>\n        <Radio.Button value="2" label="香蕉"></Radio.Button>\n        <Radio.Button value="3" label="栗子"></Radio.Button>\n      </Radio.Group>\n      <br />\n      <br />\n      <Radio.Group value={this.state.value3} onChange={this.onChangeGroup.bind(this, \'value3\')} mini disabled>\n        <Radio.Button value="0" label="苹果"></Radio.Button>\n        <Radio.Button value="1" label="橘子" ></Radio.Button>\n        <Radio.Button value="2" label="香蕉"></Radio.Button>\n        <Radio.Button value="3" label="栗子"></Radio.Button>\n      </Radio.Group>\n    </div>\n  )\n}'};t.default=a}}]);