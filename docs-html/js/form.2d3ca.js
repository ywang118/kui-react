/*! react-kui v1.0.8 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{294:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(l(2)),n=f(l(3)),r=f(l(4)),u=f(l(5)),d=f(l(6)),c=f(l(1)),o=f(l(347)),m=f(l(324)),i=l(21);function f(e){return e&&e.__esModule?e:{default:e}}var s=i.Select.Option,E=function(e){function t(e){(0,n.default)(this,t);var l=(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={s1:"",labelAlign:"right",code:o.default,select:[{label:"男",value:"0"},{label:"女",value:"1"},{label:"妖",value:"2"}],form:{switch:!0,input:"",select:"",province:"",city:"",datepicker:"",radio:"",checkbox:[],textarea:""},rules:{input:[{required:!0,trigger:"blur"}],select:[{required:!0,trigger:"change"}],province:[{required:!0,trigger:"change"}],city:[{required:!0,trigger:"change"}],datepicker:[{required:!0,trigger:"change"}],radio:[{required:!0,trigger:"change"}],checkbox:[{required:!0,trigger:"change",min:2,max:3}],textarea:[{required:!0,message:"必填",trigger:"blur"},{min:2,max:5,message:"长度为2-5个字符",trigger:"blur"}]},customRules:{userName:[{validator:l.validateUserName,trigger:"blur"}],password:[{validator:l.validatePass,trigger:"blur"}],rePassword:[{validator:l.validateRePass,trigger:"blur"}]},customForm:{userName:"",password:"",rePassword:""},count:1,dynamicForm:{items:[{value:"",index:1}]}},l}return(0,d.default)(t,e),(0,r.default)(t,[{key:"validatePass",value:function(e,t,l){""===t?l(new Error("请填写密码")):(""!==this.customForm.rePassword&&this.refs.customForm.validateField("rePassword"),l())}},{key:"validateRePass",value:function(e,t,l){""===t?l(new Error("请再次输入密码")):(this.customForm.password!==t&&l(new Error("两次密码输入不一致")),l())}},{key:"validateUserName",value:function(e,t,l){""===t?l(new Error("请输入用户名")):t.length<2||t.length>6?l(new Error("用户名长度为2-6位")):l()}},{key:"add",value:function(){this.count++,this.dynamicForm.items.push({value:"",index:this.count})}},{key:"del",value:function(e){this.dynamicForm.items.splice(e,1)}},{key:"submitForm",value:function(e){this.refs[e].validate(function(e){e?i.Message.success("验证通过"):i.Message.error("验证失败")})}},{key:"resetForm",value:function(e){this.refs[e].resetFields()}},{key:"setAlign",value:function(e){this.setState({labelAlign:e})}},{key:"render",value:function(){var e=this,t=this.state,l=t.labelAlign,a=t.form,n=t.rules;t.customForm,t.customRules,t.s1;return c.default.createElement("div",null,c.default.createElement("h2",null,"Form 表单"),c.default.createElement("h3",null,"代码示例"),c.default.createElement(i.Row,{gutter:"8"},c.default.createElement(i.Col,{span:"12"},c.default.createElement(m.default,{title:"基础用法"},c.default.createElement("div",null,"对齐方式：",c.default.createElement(i.Button,{onClick:this.setAlign.bind(this,"left"),mini:!0},"Left"),c.default.createElement(i.Button,{onClick:this.setAlign.bind(this,"right"),mini:!0},"right"),c.default.createElement(i.Button,{onClick:this.setAlign.bind(this,"top"),mini:!0},"top"),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement(i.Form,{labelWidth:"80",labelAlign:l},c.default.createElement(i.Form.Item,{label:"Input"},c.default.createElement(i.Input,{width:"200"})),c.default.createElement(i.Form.Item,{label:"Select"},c.default.createElement(i.Select,{value:"",width:"200"},c.default.createElement(s,{value:"0"},"男"),c.default.createElement(s,{value:"1"},"女"),c.default.createElement(s,{value:"2"},"妖"))),c.default.createElement(i.Form.Item,{label:"DatePicker"},c.default.createElement(i.DatePicker,null)),c.default.createElement(i.Form.Item,{label:"Radio"},c.default.createElement(i.Radio.Group,{value:"0"},c.default.createElement(i.Radio,{value:"0"},"男"),c.default.createElement(i.Radio,{value:"1"},"女"),c.default.createElement(i.Radio,{value:"2"},"妖"))),c.default.createElement(i.Form.Item,{label:"Checkbox"},c.default.createElement(i.Checkbox.Group,{value:["0"]},c.default.createElement(i.Checkbox,{label:"0"},"男"),c.default.createElement(i.Checkbox,{label:"1"},"女"),c.default.createElement(i.Checkbox,{label:"2"},"妖"))),c.default.createElement(i.Form.Item,{label:"Switch"},c.default.createElement(i.Switch,{trueText:"是",falseText:"否"})),c.default.createElement(i.Form.Item,{label:"Text"},c.default.createElement(i.Input,{type:"textarea",placeholder:"情输入..."})),c.default.createElement(i.Form.Item,null,c.default.createElement(i.Button,{type:"primary"},"Submit"),c.default.createElement(i.Button,{style:{marginLeft:10}},"Cancel")))),c.default.createElement("div",null,c.default.createElement("code",null,"Form"),"内部结构，每个单域由",c.default.createElement("code",null,"Form.Item"),"组成，通过",c.default.createElement("code",null,"label"),"可以设置",c.default.createElement("code",null,"Form.Item"),"标签，",c.default.createElement("code",null,"lableWidth"),"可以设置标签的宽度，",c.default.createElement("code",null,"labelAlign"),"可以设置标签对其方式"),c.default.createElement("div",null,o.default.base))),c.default.createElement(i.Col,{span:"12"},c.default.createElement(m.default,{title:"表单验证"},c.default.createElement("div",null,c.default.createElement(i.Form,{labelWidth:"90",ref:"form",model:a,onChange:function(t){return e.setState({form:t})},rules:n,labelAlign:l},c.default.createElement(i.Form.Item,{label:"Input",prop:"input"},c.default.createElement(i.Input,{value:a.input})),c.default.createElement(i.Form.Item,{label:"Select",required:!0},c.default.createElement(i.Row,null,c.default.createElement(i.Col,{span:"12"},c.default.createElement(i.Form.Item,{prop:"province"},c.default.createElement(i.Select,{value:a.province,clearable:!0},c.default.createElement(s,{value:"0"},"北京"),c.default.createElement(s,{value:"1"},"上海"),c.default.createElement(s,{value:"2"},"广州"),c.default.createElement(s,{value:"3"},"深圳")))),c.default.createElement(i.Col,{span:"11",offset:"1"},c.default.createElement(i.Form.Item,{prop:"city"},c.default.createElement(i.Select,{value:a.city,clearable:!0},c.default.createElement(s,{value:"0"},"南山区"),c.default.createElement(s,{value:"1"},"龙华区"),c.default.createElement(s,{value:"2"},"福田区"),c.default.createElement(s,{value:"3"},"宝安区")))))),c.default.createElement(i.Form.Item,{label:"DatePicker",prop:"datepicker"},c.default.createElement(i.DatePicker,{value:a.datepicker,clearable:!0})),c.default.createElement(i.Form.Item,{label:"Radio",prop:"radio"},c.default.createElement(i.Radio.Group,{value:a.radio},c.default.createElement(i.Radio,{value:"0"},"男"),c.default.createElement(i.Radio,{value:"1"},"女"),c.default.createElement(i.Radio,{value:"2"},"妖"))),c.default.createElement(i.Form.Item,{label:"Checkbox",prop:"checkbox"},c.default.createElement(i.Checkbox.Group,{value:a.checkbox},c.default.createElement(i.Checkbox,{label:"0"},"男"),c.default.createElement(i.Checkbox,{label:"1"},"女"),c.default.createElement(i.Checkbox,{label:"2"},"妖"),c.default.createElement(i.Checkbox,{label:"3"},"鲛人"))),c.default.createElement(i.Form.Item,{label:"Text",prop:"textarea"},c.default.createElement(i.Input,{type:"textarea",placeholder:"情输入...",value:a.textarea})),c.default.createElement(i.Form.Item,null,c.default.createElement(i.Button,{type:"primary",onClick:function(){return e.submitForm("form")}},"Submit"),c.default.createElement(i.Button,{style:{marginLeft:10},onClick:function(){return e.resetForm("form")}},"Reset")))),c.default.createElement("div",null,"给",c.default.createElement("code",null,"Form"),"设置",c.default.createElement("code",null,"rules"),"属性，给每个要验证的标签添加",c.default.createElement("code",null,"prop"),"属性，",c.default.createElement("code",null,"validate"),"用来验证表单，",c.default.createElement("code",null,"resetFields"),"用来重置表单"),c.default.createElement("div",null,o.default.invalid)))),c.default.createElement("h3",null,"Form API"),c.default.createElement("div",{className:"table-border"},c.default.createElement("table",null,c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("th",null,"属性"),c.default.createElement("th",null,"说明"),c.default.createElement("th",null,"类型"),c.default.createElement("th",null,"默认值")),c.default.createElement("tr",null,c.default.createElement("td",null,"model"),c.default.createElement("td",null,"表单数据对象"),c.default.createElement("td",null,"Object"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"rules"),c.default.createElement("td",null,"表单验证规则，"),c.default.createElement("td",null,"Boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"labelWidth"),c.default.createElement("td",null,"表单域标签的宽度，所有的 Form.Item 都会继承 Form 组件的 labelWidth 的值"),c.default.createElement("td",null,"Number,String"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"labelAlign"),c.default.createElement("td",null,"表单域标签的位置，可选值为 left、right、top"),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"right")),c.default.createElement("tr",null,c.default.createElement("td",null,"validate"),c.default.createElement("td",null,"对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，暂不支持异步验证"),c.default.createElement("td",null,"Function"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"validateField"),c.default.createElement("td",null,"对表单单个字段进行校验的方法"),c.default.createElement("td",null,"Function"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"resetFields"),c.default.createElement("td",null,"对整个表单进行重置，将所有字段值重置为空并移除校验结果"),c.default.createElement("td",null,"Function"),c.default.createElement("td",null,"-"))))),c.default.createElement("h3",null,"Form.Item API"),c.default.createElement("div",{className:"table-border"},c.default.createElement("table",null,c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("th",null,"属性"),c.default.createElement("th",null,"说明"),c.default.createElement("th",null,"类型"),c.default.createElement("th",null,"默认值")),c.default.createElement("tr",null,c.default.createElement("td",null,"prop"),c.default.createElement("td",null,"对应表单域 model 里的字段，表单验证必须字段"),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"label"),c.default.createElement("td",null,"标签文本"),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"rules"),c.default.createElement("td",null,"表单验证规则"),c.default.createElement("td",null,"Array"),c.default.createElement("td",null,"-"))))),c.default.createElement("h3",null,"rules API"),c.default.createElement("div",{className:"table-border"},c.default.createElement("table",null,c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("th",null,"属性"),c.default.createElement("th",null,"说明"),c.default.createElement("th",null,"类型"),c.default.createElement("th",null,"默认值")),c.default.createElement("tr",null,c.default.createElement("td",null,"required"),c.default.createElement("td",null,"是否必填字段"),c.default.createElement("td",null,"Boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"trigger"),c.default.createElement("td",null,"校验触发方式，提供",c.default.createElement("code",null,"blur"),"失去焦点，",c.default.createElement("code",null,"change"),"值被改变两种方式触发"),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"blur")),c.default.createElement("tr",null,c.default.createElement("td",null,"message"),c.default.createElement("td",null,"校验不通过提示语"),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"validator"),c.default.createElement("td",null,"自定义校验方法，可参见示例"),c.default.createElement("td",null,"Function"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"type"),c.default.createElement("td",null,"数据类型校验，提供三种校验方式",c.default.createElement("code",null,"mobile"),"手机，",c.default.createElement("code",null,"mail"),"邮箱，",c.default.createElement("code",null,"number"),"数字类型判断"),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"pattner"),c.default.createElement("td",null,"自定义正则校验，比喻密码强度包含数字，字母，特殊符号可以这么写",c.default.createElement("code",null,"/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).",20,"/")),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"min"),c.default.createElement("td",null,"字段长度最小值校验"),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"max"),c.default.createElement("td",null,"字段长度最大值校验"),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"-"))))))}}]),t}(c.default.Component);t.default=E},324:function(e,t,l){"use strict";l.r(t);var a=l(325),n=l.n(a);t.default=n.a},325:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=E(l(12)),n=E(l(2)),r=E(l(3)),u=E(l(4)),d=E(l(5)),c=E(l(6)),o=E(l(1)),m=E(l(326)),i=l(21),f=l(7),s=E(l(54));function E(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,r.default)(this,t);var l=(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,c.default)(t,e),(0,u.default)(t,[{key:"icons",value:function(){return this.state.expand?"ios-code-working":"ios-code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,a.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return o.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},o.default.createElement("div",{className:"k-demo-main",ref:"demo"},o.default.createElement("div",{className:"k-content"},this.props.children[0]),o.default.createElement("div",{className:"k-desc"},o.default.createElement("a",{className:"k-desc-title"},this.props.title),o.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),o.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},o.default.createElement(i.Icon,{type:this.icons()})))),o.default.createElement("div",{className:"k-demo-line"}),o.default.createElement(s.default,{show:this.state.expand},o.default.createElement(m.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=p,p.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},p.defaultProps={layout:"vertical"}},347:function(e,t,l){"use strict";l.r(t);let a={base:'import { Form,Input,Select,DatePicker,Radio,Checkbox,Switch,Button } from \'react-kui\';\nReactDOM.render() {\n  return (\n    <Form labelWidth="80" labelAlign={labelAlign}>\n      <Form.Item label="Input">\n        <Input width="200"></Input>\n      </Form.Item>\n      <Form.Item label="Select">\n        <Select value="s1" width="200">\n          <Option value="0">男</Option>\n          <Option value="1">女</Option>\n          <Option value="2">妖</Option>\n        </Select>\n      </Form.Item>\n      <Form.Item label="DatePicker">\n        <DatePicker></DatePicker>\n      </Form.Item>\n      <Form.Item label="Radio">\n        <Radio.Group value="0">\n          <Radio value="0">男</Radio>\n          <Radio value="1">女</Radio>\n          <Radio value="2">妖</Radio>\n        </Radio.Group>\n      </Form.Item>\n      <Form.Item label="Checkbox">\n        <Checkbox.Group value={[\'0\']}>\n          <Checkbox label="0">男</Checkbox>\n          <Checkbox label="1">女</Checkbox>\n          <Checkbox label="2">妖</Checkbox>\n        </Checkbox.Group>\n      </Form.Item>\n      <Form.Item label="Switch">\n        <Switch trueText="是" falseText="否"></Switch>\n      </Form.Item>\n      <Form.Item label="Text">\n        <Input type="textarea" placeholder="情输入..."></Input>\n      </Form.Item>\n      <Form.Item>\n        <Button type="primary">Submit</Button>\n        <Button style={{ marginLeft: 10 }}>Cancel</Button>\n      </Form.Item>\n    </Form>\n  )\n}',invalid:'import { Form,Input,Select,DatePicker,Radio,Checkbox,Switch,Button } from \'react-kui\'\nconstructor(props) {\n  super(props)\n  this.state = {\n    s1: \'\',\n    labelAlign: \'right\',\n    code: code,\n    select: [\n      { label: "男", value: "0" },\n      { label: "女", value: "1" },\n      { label: "妖", value: "2" },\n    ],\n    form: {\n      switch: true,\n      input: "",\n      select: \'\',\n      province: \'\',\n      city: \'\',\n      datepicker: "",\n      radio: "",\n      checkbox: [],\n      textarea: \'\'\n    },\n    rules: {\n      input: [{ required: true, trigger: \'blur\' }],\n      select: [{ required: true, trigger: \'change\' }],\n      province: [{ required: true, trigger: \'change\' }],\n      city: [{ required: true, trigger: \'change\' }],\n      datepicker: [{ required: true, trigger: \'change\' }],\n      radio: [{ required: true, trigger: \'change\' }],\n      checkbox: [{ required: true, trigger: \'change\', min: 2, max: 3 }],\n      textarea: [{ required: true, message: \'必填\', trigger: \'blur\' }, { min: 2, max: 5, message: \'长度为2-5个字符\', trigger: \'blur\' }],\n    },\n  }\n}\nReactDOM.render() {\n  let { labelAlign, form, rules, s1 } = this.state\n  return (\n    <Form labelWidth="90" ref="form" model={form}\n      onChange={(form) => this.setState({ form })}\n      rules={rules} labelAlign={labelAlign}>\n      <Form.Item label="Input" prop="input">\n        <Input value={form.input}></Input>\n      </Form.Item>\n      <Form.Item label="Select" required>\n        <Row>\n          <Col span="12">\n            <Form.Item prop="province">\n              <Select value={form.province} clearable>\n                <Option value="0">北京</Option>\n                <Option value="1">上海</Option>\n                <Option value="2">广州</Option>\n                <Option value="3">深圳</Option>\n              </Select>\n            </Form.Item>\n          </Col>\n          <Col span="11" offset="1">\n            <Form.Item prop="city">\n              <Select value={form.city} clearable>\n                <Option value="0">南山区</Option>\n                <Option value="1">龙华区</Option>\n                <Option value="2">福田区</Option>\n                <Option value="3">宝安区</Option>\n              </Select>\n            </Form.Item>\n          </Col>\n        </Row>\n      </Form.Item>\n      <Form.Item label="DatePicker" prop="datepicker">\n        <DatePicker value={form.datepicker} clearable></DatePicker>\n      </Form.Item>\n      <Form.Item label="Radio" prop="radio">\n        <Radio.Group value={form.radio}>\n          <Radio value="0">男</Radio>\n          <Radio value="1">女</Radio>\n          <Radio value="2">妖</Radio>\n        </Radio.Group>\n      </Form.Item>\n      <Form.Item label="Checkbox" prop="checkbox">\n        <Checkbox.Group value={form.checkbox}>\n          <Checkbox label="0">男</Checkbox>\n          <Checkbox label="1">女</Checkbox>\n          <Checkbox label="2">妖</Checkbox>\n          <Checkbox label="3">鲛人</Checkbox>\n        </Checkbox.Group>\n      </Form.Item>\n      <Form.Item label="Text" prop="textarea">\n        <Input type="textarea" placeholder="情输入..." value={form.textarea}></Input>\n      </Form.Item>\n      <Form.Item>\n        <Button type="primary" onClick={() => this.submitForm(\'form\')}>Submit</Button>\n        <Button style={{ marginLeft: 10 }} onClick={() => this.resetForm(\'form\')}>Reset</Button>\n      </Form.Item>\n    </Form>\n  )\n}\n',customValid:"\n"};t.default=a}}]);