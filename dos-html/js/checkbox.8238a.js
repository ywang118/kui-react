/*! react-kui v1.0.7 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{314:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(l(6)),a=f(l(5)),c=f(l(4)),d=f(l(3)),u=f(l(2)),r=l(1),i=f(r),h=l(21),o=f(l(325)),s=f(l(358));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,a.default)(this,t);var l=(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={checked:!0,data:["苹果🍎","香蕉🍌","葡萄🍇"],checkAll:!1,indeterminate:!1,check:[]},l}return(0,u.default)(t,e),(0,c.default)(t,[{key:"toggleCheck",value:function(){this.setState({checked:!this.state.checked})}},{key:"onChange",value:function(e){this.setState({checked:e})}},{key:"onClear",value:function(){this.setState({data:[]})}},{key:"onSelect",value:function(){this.setState({data:["苹果🍎"]})}},{key:"onChangeGroup",value:function(e){this.setState({data:e})}},{key:"handelCheck",value:function(e){var t=this.state,l=t.checkAll,n=t.indeterminate;t.check;4===e.length?(n=!1,l=!0):e.length>0?(n=!0,l=!1):(n=!1,l=!1),this.setState({checkAll:l,indeterminate:n})}},{key:"handelCheckAll",value:function(e){var t=this.state,l=t.checkAll,n=t.indeterminate,a=t.check;l=!n&&!l,n=!1,a=l?["苹果🍎","香蕉🍌","葡萄🍇","栗子🌰"]:[],this.setState({checkAll:l,indeterminate:n,check:a})}},{key:"render",value:function(){var e=this.state,t=e.checked,l=e.data,n=e.checkAll,a=e.indeterminate,c=e.check;return i.default.createElement("div",null,i.default.createElement("h2",null,"Checkbox 多选框"),i.default.createElement("h3",null,"代码示例 "),i.default.createElement(o.default,{title:"基础用法"},i.default.createElement("div",null,i.default.createElement("p",null,t.toString()),i.default.createElement(h.Checkbox,{checked:t,onChange:this.onChange.bind(this)},"单选框 "),i.default.createElement(h.Button,{onClick:this.toggleCheck.bind(this)},"Click me")),i.default.createElement("div",null,"单独使用 ,使用",i.default.createElement("code",null,"checked")," 切换选中状态"),i.default.createElement("div",null,s.default.base)),i.default.createElement(o.default,{title:"组合使用"},i.default.createElement("div",null,l.toString(),i.default.createElement("br",null),i.default.createElement(h.Checkbox.Group,{value:l,onChange:this.onChangeGroup.bind(this)},i.default.createElement(h.Checkbox,{label:"苹果🍎"}),i.default.createElement(h.Checkbox,{label:"橘子🍊"}),i.default.createElement(h.Checkbox,{label:"香蕉🍌"}),i.default.createElement(h.Checkbox,{label:"栗子🌰"}),i.default.createElement(h.Checkbox,{label:"葡萄🍇",disabled:!0}),i.default.createElement(h.Checkbox,{label:"梨子🍐",disabled:!0})),i.default.createElement(h.Button,{onClick:this.onClear.bind(this)},"清除"),i.default.createElement(h.Button,{onClick:this.onSelect.bind(this)},"选中苹果")),i.default.createElement("div",null,"结合",i.default.createElement("code",null,"CheckboxGroup"),"来组合使用,通过",i.default.createElement("code",null,"disabled"),"可以设置组件是否被禁用"),i.default.createElement("div",null,s.default.group)),i.default.createElement(o.default,{title:"全选"},i.default.createElement("div",null,i.default.createElement(h.Checkbox,{checked:n,indeterminate:a,onChange:this.handelCheckAll.bind(this)},"全选"),i.default.createElement("br",null),i.default.createElement(h.Checkbox.Group,{value:c,onChange:this.handelCheck.bind(this)},i.default.createElement(h.Checkbox,{label:"苹果🍎"}),i.default.createElement(h.Checkbox,{label:"葡萄🍇"}),i.default.createElement(h.Checkbox,{label:"香蕉🍌"}),i.default.createElement(h.Checkbox,{label:"栗子🌰"}))),i.default.createElement("div",null,"全选组合"),i.default.createElement("div",null,s.default.checkAll)),i.default.createElement("h3",null,"API"),i.default.createElement("div",{className:"table-border"},i.default.createElement("table",null,i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("th",null,"属性"),i.default.createElement("th",null,"说明"),i.default.createElement("th",null,"类型"),i.default.createElement("th",null,"默认值")),i.default.createElement("tr",null,i.default.createElement("td",null,"checked"),i.default.createElement("td",null,"当前是否勾选"),i.default.createElement("td",null,"Boolean"),i.default.createElement("td",null,"false")),i.default.createElement("tr",null,i.default.createElement("td",null,"label"),i.default.createElement("td",null,"只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目"),i.default.createElement("td",null," String | Number"),i.default.createElement("td",null,"-")),i.default.createElement("tr",null,i.default.createElement("td",null,"disabled"),i.default.createElement("td",null,"是否禁用当前项"),i.default.createElement("td",null,"Boolean"),i.default.createElement("td",null,"false")),i.default.createElement("tr",null,i.default.createElement("td",null,"onChange"),i.default.createElement("td",null,"在选项状态发生改变时触发，返回当前状态"),i.default.createElement("td",null,"Function"),i.default.createElement("td",null,"-"))))),i.default.createElement("h3",null,"CheckboxGroup API"),i.default.createElement("div",{className:"table-border"},i.default.createElement("table",null,i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("th",null,"属性"),i.default.createElement("th",null,"说明"),i.default.createElement("th",null,"类型"),i.default.createElement("th",null,"默认值")),i.default.createElement("tr",null,i.default.createElement("td",null,"value"),i.default.createElement("td",null,"多选组当前取值"),i.default.createElement("td",null,"string"),i.default.createElement("td",null,"false")),i.default.createElement("tr",null,i.default.createElement("td",null,"disabled"),i.default.createElement("td",null,"是否禁用当前项"),i.default.createElement("td",null,"Boolean"),i.default.createElement("td",null,"false")),i.default.createElement("tr",null,i.default.createElement("td",null,"onChange"),i.default.createElement("td",null,"在选项状态发生改变时触发，返回当前选中的项"),i.default.createElement("td",null,"Function"),i.default.createElement("td",null,"-"))))))}}]),t}(r.Component);t.default=m},324:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(l(12)),a=m(l(6)),c=m(l(5)),d=m(l(4)),u=m(l(3)),r=m(l(2)),i=m(l(1)),h=m(l(326)),o=l(21),s=l(7),f=m(l(54));function m(e){return e&&e.__esModule?e:{default:e}}var k=function(e){function t(e){(0,c.default)(this,t);var l=(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,r.default)(t,e),(0,d.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,n.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return i.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},i.default.createElement("div",{className:"k-demo-main",ref:"demo"},i.default.createElement("div",{className:"k-content"},this.props.children[0]),i.default.createElement("div",{className:"k-desc"},i.default.createElement("a",{className:"k-desc-title"},this.props.title),i.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),i.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},i.default.createElement(o.Icon,{type:this.icons()})))),i.default.createElement("div",{className:"k-demo-line"}),i.default.createElement(f.default,{show:this.state.expand},i.default.createElement(h.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(s.Kui);t.default=k,k.propTypes={layout:s.PropTypes.string,title:s.PropTypes.string,lang:s.PropTypes.string},k.defaultProps={layout:"vertical"}},325:function(e,t,l){"use strict";l.r(t);var n=l(324),a=l.n(n);t.default=a.a},358:function(e,t,l){"use strict";l.r(t);let n={base:"import { Checkbox } from 'react-kui';\nconstructor(props) {\n  super(props)\n  this.state = {\n    checked: true,\n  }\n}\ntoggleCheck() {\n  this.setState({ checked: !this.state.checked })\n}\nonChange(state) {\n  this.setState({ checked: state  });\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Checkbox checked={this.state.checked} onChange={this.onChange.bind(this)}>单选框 </Checkbox>\n      <Button onClick={this.toggleCheck.bind(this)}>Click me</Button>\n    </div>\n  )\n}",disabled:" ",group:'import { Checkbox } from \'react-kui\';\nconstructor(props) {\n  super(props)\n  this.state = {\n    checked: true,\n    data: ["苹果🍎", "香蕉🍌", "葡萄🍇"],\n  }\n}\nonChangeGroup(opt) {\n  this.setState({ data: opt })\n}\nonClear() {\n  this.setState({data: []})\n}\nonSelect() {\n  this.setState({data: [\'苹果🍎\']})\n}\nReactDOM.render() {\n  return (\n    <div>\n        <Checkbox.Group value={this.state.data} onChange={this.onChangeGroup.bind(this)}>\n          <Checkbox label="苹果🍎"></Checkbox>\n          <Checkbox label="橘子🍊"></Checkbox>\n          <Checkbox label="香蕉🍌"></Checkbox>\n          <Checkbox label="栗子🌰"></Checkbox>\n          <Checkbox label="葡萄🍇" disabled></Checkbox>\n          <Checkbox label="梨子🍐" disabled></Checkbox>\n        </Checkbox.Group>\n        <Button onClick={this.onClear.bind(this)}>清除</Button>\n        <Button onClick={this.onSelect.bind(this)}>选中苹果</Button>\n    </div>\n  )\n}\n',checkAll:'import { Checkbox } from \'react-kui\';\nconstructor(props) {\n  super(props)\n  this.state = {\n    checkAll: false,\n    indeterminate: false,\n    check: []\n  }\n}\nhandelCheck(data) {\n  let { checkAll, indeterminate, check } = this.state\n  if (data.length === 4) {\n    indeterminate = false;\n    checkAll = true;\n  } else if (data.length > 0) {\n    indeterminate = true;\n    checkAll = false;\n  } else {\n    indeterminate = false;\n    checkAll = false;\n  }\n  this.setState({ checkAll, indeterminate })\n}\nhandelCheckAll(v) {\n  let { checkAll, indeterminate, check } = this.state\n  if (indeterminate) {\n    checkAll = false;\n  } else {\n    checkAll = !checkAll;\n  }\n  indeterminate = false;\n\n  if (checkAll) {\n    check = ["苹果🍎", "香蕉🍌", "葡萄🍇", "栗子🌰"];\n  } else {\n    check = [];\n  }\n  this.setState({ checkAll, indeterminate, check })\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Checkbox checked={checkAll} indeterminate={indeterminate} onChange={this.handelCheckAll.bind(this)}>全选</Checkbox>\n\n      <Checkbox.Group value={check} onChange={this.handelCheck.bind(this)}>\n        <Checkbox label="苹果🍎"></Checkbox>\n        <Checkbox label="葡萄🍇"></Checkbox>\n        <Checkbox label="香蕉🍌"></Checkbox>\n        <Checkbox label="栗子🌰"></Checkbox>\n      </Checkbox.Group>\n  <div>)\n'};t.default=n}}]);