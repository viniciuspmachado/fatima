(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[9],{505:function(e,t,s){},513:function(e,t,s){"use strict";s.r(t);var a=s(5),n=s.n(a),o=s(9),i=s(14),r=s(16),c=s(28),u=s(17),l=s(18),d=s(1),h=s.n(d),g=(s(505),s(27)),m=s(21),p=s(6),j=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).onUserChange=function(e){a.setState({user:e.target.value})},a.onPassChange=function(e){a.setState({pass:e.target.value})},a.paginaPrincipal=function(){window.location.replace("http://ec2-34-229-84-223.compute-1.amazonaws.com/fatima/"+a.state.rota),window.location.reload()},a.onSubmitSignIn=Object(o.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=0,""===a.state.user.trim()&&(a.onMudaTitulo("Erro!"),a.onMudaMessagem("Por favor, digite o nome de usu\xe1rio!"),a.onMudaLink("/#/login"),t=1,a.toggle()),""===a.state.pass.trim()&&(a.onMudaTitulo("Erro!"),a.onMudaMessagem("Por favor, digite a senha!"),a.onMudaLink("/#/login"),t=1,a.toggle()),0!==t){e.next=6;break}return e.next=6,fetch("http://ec2-34-229-84-223.compute-1.amazonaws.com:8080/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:a.state.user,pass:a.state.pass})}).then((function(e){return e.json()})).then((function(e){e.login?(sessionStorage.setItem("nomez",e.nome.split(" ")[0]),sessionStorage.setItem("permz",e.perm),a.onMudaTitulo("Sucesso!"),a.onMudaMessagem("Bem vindo "+sessionStorage.getItem("nomez")),a.onMudaLink("/#/"),a.toggle()):(a.onMudaTitulo("Erro!"),a.onMudaMessagem(e),a.onMudaLink("/#/login"),a.toggle())}));case 6:case"end":return e.stop()}}),e)}))),a.state={user:"",pass:"",rota:"",message:"",t_message:"",modal:!1},a.toggle=a.toggle.bind(Object(c.a)(a)),a}return Object(r.a)(s,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"onMudaMessagem",value:function(e){this.setState((function(t){return{message:e}}))}},{key:"onMudaTitulo",value:function(e){this.setState((function(t){return{t_message:e}}))}},{key:"onMudaLink",value:function(e){this.setState((function(t){return{rota:e}}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{children:Object(p.jsxs)(g.y,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,backdrop:"static",children:[Object(p.jsx)(g.B,{toggle:this.toggle,children:this.state.t_message}),Object(p.jsx)(g.z,{children:this.state.message}),Object(p.jsxs)(g.A,{children:[Object(p.jsx)(g.e,{color:"primary",onClick:this.paginaPrincipal,children:"OK"})," "]})]})}),Object(p.jsx)("h2",{children:"Iniciar Sess\xe3o"}),Object(p.jsxs)(g.u,{className:"form",children:[Object(p.jsxs)(g.v,{children:[Object(p.jsx)(g.x,{for:"exampleEmail",children:"Usu\xe1rio"}),Object(p.jsx)(g.w,{type:"user",name:"user",id:"user",placeholder:"usu\xe1rio",onChange:this.onUserChange})]}),Object(p.jsxs)(g.v,{children:[Object(p.jsx)(g.x,{for:"examplePassword",children:"Senha"}),Object(p.jsx)(g.w,{type:"password",name:"password",id:"examplePassword",placeholder:"********",onChange:this.onPassChange})]}),Object(p.jsx)(m.b,{to:this.state.rota,className:"btn btn-primary",onClick:this.onSubmitSignIn,children:"Entrar"}),"\xa0\xa0\xa0",Object(p.jsx)(m.b,{to:"/caduser",className:"btn btn-primary",children:"Solicitar Cadastro"}),"\xa0\xa0\xa0",Object(p.jsx)(m.b,{to:this.state.rota,children:"Solicitar Nova Senha"})]})]})}}]),s}(h.a.Component);t.default=j}}]);
//# sourceMappingURL=9.1836dc09.chunk.js.map