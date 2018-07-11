/*! react-kui v1.0.2 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{281:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(l(6)),n=f(l(5)),u=f(l(4)),d=f(l(3)),o=f(l(2)),r=f(l(1)),i=l(21),c=f(l(325)),s=f(l(327));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,n.default)(this,t);var l=(0,d.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={code:s.default,action:"/rest/jcmro-sys-service/fileupload/uploadFile",data:{a:1,b:2,c:3}},l}return(0,o.default)(t,e),(0,u.default)(t,[{key:"upload",value:function(){this.refs.upload.submit()}},{key:"change",value:function(e){i.Message.info("选择了文件："+e)}},{key:"complite",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this.state,t=e.action,l=e.data;return r.default.createElement("div",null,r.default.createElement("h2",null,"Upload 上传"),r.default.createElement("h3",null,"代码示例"),r.default.createElement(i.Row,{gutter:"8"},r.default.createElement(i.Col,{span:"12"},r.default.createElement(c.default,{title:"基础用法",layout:"vertical"},r.default.createElement("div",null,r.default.createElement(i.Upload,{action:"/rest/jcmro-sys-service/fileupload/uploadFile"},r.default.createElement(i.Button,null,"上传文件"))),r.default.createElement("div",null,r.default.createElement("code",null,"action"),"配置上传接口路径"),r.default.createElement("div",null,s.default.base)),r.default.createElement(c.default,{title:"禁用",layout:"vertical"},r.default.createElement("div",null,r.default.createElement(i.Upload,{action:t,disabled:!0},r.default.createElement(i.Button,{type:"success"},"上传文件"))),r.default.createElement("div",null,r.default.createElement("div",null,"设置",r.default.createElement("code",null,"disabled"),"属性来控制组件是否可用")),r.default.createElement("div",null,s.default.disabled))),r.default.createElement(i.Col,{span:"12"},r.default.createElement(c.default,{title:"附带数据上传",layout:"vertical"},r.default.createElement("div",null,r.default.createElement(i.Upload,{action:"/rest/jcmro-sys-service/fileupload/uploadFile",onChange:this.change.bind(this),onComplite:this.complite.bind(this),data:l},r.default.createElement(i.Button,null,"上传文件"))),r.default.createElement("div",null,"此操作非多此一举，在ajax上传模式中，除了上传文件外，可能会有其他附加参数一起附带表单提交，传参",r.default.createElement("code",null,"data"),"为 Object"),r.default.createElement("div",null,s.default.withData)),r.default.createElement(c.default,{title:"非自动上传模式",layout:"vertical"},r.default.createElement("div",null,r.default.createElement(i.Upload,{action:t,onChange:this.change.bind(this),onComplite:this.complite.bind(this),ref:"upload",data:l,type:"wait"},r.default.createElement(i.Button,null,"上传文件")),r.default.createElement(i.Button,{onClick:this.upload.bind(this)},"点我开始上传")),r.default.createElement("div",null,"通过",r.default.createElement("code",null,"type"),"来控制是否选择文件就提交上传，",r.default.createElement("code",null,"complite"),"方法为上传完成成功或失败回调，返回数据取决于接口",r.default.createElement("code",null,"change"),"选择文件触发事件，返回选择的文件名"),r.default.createElement("div",null,s.default.mode)))),r.default.createElement("h3",null,"API"),r.default.createElement("div",{className:"table-border"},r.default.createElement("table",null,r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("th",null,"属性"),r.default.createElement("th",null,"说明"),r.default.createElement("th",null,"类型"),r.default.createElement("th",null,"默认值")),r.default.createElement("tr",null,r.default.createElement("td",null,"action"),r.default.createElement("td",null,"上传API地址"),r.default.createElement("td",null,"String"),r.default.createElement("td",null,"-")),r.default.createElement("tr",null,r.default.createElement("td",null,"data"),r.default.createElement("td",null,"上传附带参数"),r.default.createElement("td",null,"Oject"),r.default.createElement("td",null)),r.default.createElement("tr",null,r.default.createElement("td",null,"type"),r.default.createElement("td",null,"上传类型，可选值为change（选择文件触发上传），wait（选择文件之后，其他事件触发上传）或者不设置"),r.default.createElement("td",null,"String"),r.default.createElement("td",null,"change")),r.default.createElement("tr",null,r.default.createElement("td",null,"change"),r.default.createElement("td",null,"选择文件之后的回调，返回选中的文件名"),r.default.createElement("td",null,"Function"),r.default.createElement("td",null,"-")),r.default.createElement("tr",null,r.default.createElement("td",null,"complite"),r.default.createElement("td",null,"上传完成之后的回调，返回值取决于api上传接口返回的值 "),r.default.createElement("td",null,"Function"),r.default.createElement("td",null,"-")),r.default.createElement("tr",null,r.default.createElement("td",null,"upload"),r.default.createElement("td",null,"触发上传事件，此方法配合type=wait，选中文件后 手动提交上传"),r.default.createElement("td",null,"Function"),r.default.createElement("td",null,"-"))))))}}]),t}(r.default.Component);t.default=m},324:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(l(12)),n=p(l(6)),u=p(l(5)),d=p(l(4)),o=p(l(3)),r=p(l(2)),i=p(l(1)),c=p(l(326)),s=l(21),f=l(7),m=p(l(54));function p(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){(0,u.default)(this,t);var l=(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,r.default)(t,e),(0,d.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,a.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return i.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},i.default.createElement("div",{className:"k-demo-main",ref:"demo"},i.default.createElement("div",{className:"k-content"},this.props.children[0]),i.default.createElement("div",{className:"k-desc"},i.default.createElement("a",{className:"k-desc-title"},this.props.title),i.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),i.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},i.default.createElement(s.Icon,{type:this.icons()})))),i.default.createElement("div",{className:"k-demo-line"}),i.default.createElement(m.default,{show:this.state.expand},i.default.createElement(c.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=h,h.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},h.defaultProps={layout:"vertical"}},325:function(e,t,l){"use strict";l.r(t);var a=l(324),n=l.n(a);t.default=n.a},327:function(e,t,l){"use strict";l.r(t);let a={base:"import { Upload ，Button } from 'react-kui';\nReactDOM.render() {\n  return (\n    <div>\n      <Upload action=\"/rest/uploadFile\">\n        <Button>上传文件</Button>\n      </Upload>\n    </div>\n  )\n}",disabled:"import { Upload ，Button } from 'react-kui';\nReactDOM.render() {\n  return (\n    <div>\n      <Upload action=\"/rest/uploadFile\" disabled>\n        <Button>上传文件</Button>\n      </Upload>\n    </div>\n  )\n}",withData:"import { Upload ，Button } from 'react-kui';\nconstructor(props) {\n  super(props)\n  this.state = {\n    data: { a: 1, b: 2, c: 3 },\n  }\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Upload action=\"/rest/uploadFile\" data={data}>\n        <Button>上传文件</Button>\n      </Upload>\n    </div>\n  )\n}",mode:'import { Upload ，Button ，Message } from \'react-kui\';\nconstructor(props) {\n  super(props)\n  this.state = {\n    data: { a: 1, b: 2, c: 3 },\n  }\n}\nchange(file) {\n  Message.info(\'选择了文件：\' + file);\n}\nupload() {\n  this.refs.upload.submit();\n}\ncomplite(res) {\n  console.log(res);\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Upload action="/rest/uploadFile" onChange={this.change.bind(this)} onComplite={this.complite.bind(this)} ref="upload" data={data} type="wait">\n        <Button>上传文件</Button>\n      </Upload>\n      <Button onClick={this.upload.bind(this)}>点我开始上传</Button>\n    </div>\n  )\n}'};t.default=a}}]);