(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[11],{521:function(e,t,a){"use strict";a.r(t);var n=a(5),o=a.n(n),c=a(9),s=a(14),i=a(16),r=a(28),l=a(17),h=a(18),d=a(27),j=a(1),u=a.n(j),b=a(7),m=a(6);var p=function(){var e=Object(j.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1];return Object(j.useEffect)((function(){fetch("http://lina.ufpi.br:3001/paroquias").then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.log(e.message)}))}),[]),Object(m.jsx)("optgroup",{label:"Selecione a par\xf3quia que frequenta",children:a.map((function(e,t){return Object(m.jsx)("option",{value:e.id,children:e.nome})}))})},g=a(93),x=a(21),O=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onTipoPChange=function(e){n.setState({tipoP:e.target.value})},n.onNomeDeleChange=function(e){n.setState({nomedele:e.target.value})},n.onNomeDelaChange=function(e){n.setState({nomedela:e.target.value})},n.onCasadosChange=function(e){n.setState({casados:e.target.value})},n.onDataPChange=function(e){n.setState({datap:e.target.value})},n.onEnderecoChange=function(e){n.setState({endereco:e.target.value})},n.onCidadeChange=function(e){n.setState({cidade:e.target.value})},n.onTelChange=function(e){n.setState({telefone:e.target.value})},n.onSacraChange=function(e){n.setState({sacramentos:e.target.value})},n.onBatisChange=function(e){n.setState({batismo:e.target.value})},n.onEucaChange=function(e){n.setState({euca:e.target.value})},n.onCrismaChange=function(e){n.setState({crisma:e.target.value})},n.onMatriChange=function(e){n.setState({matrimonio:e.target.value})},n.onOrdemChange=function(e){n.setState({ordem:e.target.value})},n.onParoquiaChange=function(e){n.setState({paroquia:e.target.value})},n.onECCChange=function(e){n.setState({ecc:e.target.value})},n.paginaPrincipal=function(){n.toggle(),0!=n.state.rota&&(window.location.replace("http://localhost:3000/#/"),window.location.reload())},n.onSubmitSignIn=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=0,""===n.state.tipoP.trim()&&(t=1,n.onMudaTitulo("Erro!"),n.onMudaMessagem("Por favor, selecione o tipo de participa\xe7\xe3o (pais ou padrinhos)!"),n.toggle()),""===n.state.nomedele.trim()&&""===n.state.nomedela.trim()&&(t=1,n.onMudaTitulo("Erro!"),n.onMudaMessagem("Por favor, preencha pelo menos nome de um participante!"),n.toggle()),""===n.state.datap.trim()&&(t=1,n.onMudaTitulo("Erro!"),n.onMudaMessagem("Por favor , informe a data para a prepara\xe7\xe3o para o Batismo!"),n.toggle()),0!==t){e.next=7;break}return e.next=7,fetch("http://lina.ufpi.br:3001/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({tipo:n.state.tipoP,nomedele:n.state.nomedele,nomedela:n.state.nomedela,casados:n.state.casados,datap:n.state.datap,endereco:n.state.endereco,cidade:n.state.cidade,telefone:n.state.telefone,sacramentos:n.state.sacramentos,paroquia:n.state.paroquia,ecc:n.state.ecc,batismo:n.state.batismo,euca:n.state.euca,crisma:n.state.crisma,matrimonio:n.state.matrimonio,ordem:n.state.ordem})}).then((function(e){e.json(),n.onMudaLink(1),n.onMudaTitulo("Sucesso!"),n.onMudaMessagem("Agendamento realizado!"),n.toggle()})).then((function(e){e&&console.log("2==>",e)}));case 7:case"end":return e.stop()}}),e)}))),n.state={tipoP:"",nomedele:"",nomedela:"",casados:"0",datap:"",endereco:"",cidade:"",telefone:"",sacramentos:"",paroquia:"1",ecc:"0",batismo:"0",euca:"0",crisma:"0",matrimonio:"0",ordem:"0",rota:"0",message:"",t_message:"",modal:!1},n.toggle=n.toggle.bind(Object(r.a)(n)),n}return Object(i.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"onMudaMessagem",value:function(e){this.setState((function(t){return{message:e}}))}},{key:"onMudaTitulo",value:function(e){this.setState((function(t){return{t_message:e}}))}},{key:"onMudaLink",value:function(e){this.setState((function(t){return{rota:e}}))}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(d.y,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,backdrop:"static",children:[Object(m.jsx)(d.B,{toggle:this.toggle,children:this.state.t_message}),Object(m.jsx)(d.z,{children:this.state.message}),Object(m.jsxs)(d.A,{children:[Object(m.jsx)(d.e,{color:"primary",onClick:this.paginaPrincipal,children:"OK"})," "]})]}),Object(m.jsx)(d.F,{children:Object(m.jsx)(d.n,{children:Object(m.jsxs)(d.g,{children:[Object(m.jsx)(d.m,{tag:"h6",className:"border-bottom p-3 mb-0",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"0.8em",viewBox:"0 0 640 512",children:Object(m.jsx)("path",{d:"M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V48H264c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2V512h96V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96h96V251.2c0-16.9-8.8-32.5-23.3-41.2L344 142.4V96h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4V464c0 26.5 21.5 48 48 48h80V273.6L24.9 330.3zM592 512c26.5 0 48-21.5 48-48V372.4c0-17.5-9.5-33.6-24.9-42.1L512 273.6V512h80z"})}),"  ","Ficha para Prepara\xe7\xe3o ao Sacramento do Batismo"]})}),Object(m.jsx)(d.h,{children:Object(m.jsxs)(d.u,{children:[Object(m.jsxs)(d.v,{tag:"fieldset",children:[Object(m.jsx)(d.x,{children:"Tipo de Participa\xe7\xe3o:"}),Object(m.jsxs)(d.v,{check:!0,children:[Object(m.jsx)(d.w,{name:"pp",type:"radio",value:"1",onChange:this.onTipoPChange})," ",Object(m.jsx)(d.x,{check:!0,children:"Pai(s)"})]}),Object(m.jsxs)(d.v,{check:!0,children:[Object(m.jsx)(d.w,{name:"pp",type:"radio",value:"0",onChange:this.onTipoPChange})," ",Object(m.jsx)(d.x,{check:!0,children:"Padrinho(s)"})]})]}),Object(m.jsxs)(d.v,{children:[Object(m.jsx)(d.x,{for:"nomeDele",children:"Nome Dele:"}),Object(m.jsx)(d.w,{id:"nomeDele",name:"nomeDele",placeholder:"",type:"text",onChange:this.onNomeDeleChange})]}),Object(m.jsxs)(d.v,{children:[Object(m.jsx)(d.x,{for:"exampleEmail",children:"Nome Dela:"}),Object(m.jsx)(d.w,{id:"nomeDela",name:"nomeDela",placeholder:"",type:"text",onChange:this.onNomeDelaChange})]}),Object(m.jsx)(d.x,{children:"S\xe3o Casados?"}),Object(m.jsxs)(d.v,{children:[Object(m.jsxs)(d.v,{check:!0,children:[Object(m.jsx)(d.w,{name:"casados",type:"radio",value:"1",onChange:this.onCasadosChange})," ",Object(m.jsx)(d.x,{check:!0,children:"Sim"})]}),Object(m.jsxs)(d.v,{check:!0,children:[Object(m.jsx)(d.w,{name:"casados",type:"radio",value:"0",onChange:this.onCasadosChange,checked:!0})," ",Object(m.jsx)(d.x,{check:!0,children:"N\xe3o"})]})]}),Object(m.jsxs)(d.v,{children:[Object(m.jsxs)(d.x,{children:[Object(m.jsxs)("b",{children:["* Local: Sal\xe3o Paroquial ",Object(m.jsx)("br",{}),"* Presencial ",Object(m.jsx)("br",{}),"* Hor\xe1rio: 19:00 ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),"Marque a data para realizar a prepara\xe7\xe3o do Batismo de acordo com o dispon\xedvel no calend\xe1rio."]}),Object(m.jsxs)(d.w,{id:"dataSelect",name:"datapart",type:"select",onChange:this.onDataPChange,children:[Object(m.jsx)("option",{value:"-",children:"-"}),Object(m.jsx)(g.a,{})]})]}),Object(m.jsxs)(d.v,{children:[Object(m.jsx)(d.x,{for:"enderco",children:"Endere\xe7o:"}),Object(m.jsx)(d.w,{id:"endereco",name:"endereco",placeholder:"",type:"text",onChange:this.onEnderecoChange})]}),Object(m.jsxs)(d.v,{children:[Object(m.jsx)(d.x,{for:"cidade",children:"Cidade:"}),Object(m.jsx)(d.w,{id:"cidade",name:"cidade",placeholder:"",type:"text",onChange:this.onCidadeChange})]}),Object(m.jsxs)(d.v,{children:[Object(m.jsx)(d.x,{for:"telefone",children:"Telefone:"}),Object(m.jsx)(d.w,{id:"tel",name:"tel",placeholder:"",type:"text",onChange:this.onTelChange})]}),Object(m.jsxs)(d.v,{children:[Object(m.jsx)(d.x,{for:"exampleSelectMulti",children:"Recebeu quais sacramentos?"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"checkbox",name:"batismo",value:"1",onChange:this.onBatisChange}),"\xa0Batismo \xa0\xa0\xa0",Object(m.jsx)("input",{type:"checkbox",name:"euca",value:"2",onChange:this.onEucaChange}),"\xa01a. Eucaristia \xa0\xa0\xa0",Object(m.jsx)("input",{type:"checkbox",name:"crisma",value:"3",onChange:this.onCrismaChange}),"\xa0Crisma \xa0\xa0\xa0",Object(m.jsx)("input",{type:"checkbox",name:"matrimonio",value:"5",onChange:this.onMatriChange}),"\xa0Matrim\xf4nio \xa0\xa0\xa0",Object(m.jsx)("input",{type:"checkbox",name:"ordem",value:"4",onChange:this.onOrdemChange}),"\xa0Ordem"]}),Object(m.jsxs)(d.v,{children:[Object(m.jsx)(d.x,{for:"exampleSelectMulti",children:"Qual a par\xf3quia que frequenta?"}),Object(m.jsx)(d.w,{id:"dataSelect",name:"paroquia",type:"select",onChange:this.onParoquiaChange,children:Object(m.jsx)(p,{})})]}),Object(m.jsx)(d.x,{children:"J\xe1 participou do Encontro de Casais com Cristo (ECC)?"}),Object(m.jsxs)(d.v,{children:[Object(m.jsxs)(d.v,{check:!0,children:[Object(m.jsx)(d.w,{name:"radio3",value:"1",type:"radio",onChange:this.onECCChange})," ",Object(m.jsx)(d.x,{check:!0,children:"Sim"})]}),Object(m.jsxs)(d.v,{check:!0,children:[Object(m.jsx)(d.w,{name:"radio3",value:"0",type:"radio",onChange:this.onECCChange,checked:!0})," ",Object(m.jsx)(d.x,{check:!0,children:"N\xe3o"})]})]}),Object(m.jsx)(d.x,{children:"V\xeddeo de Acolhida:"}),Object(m.jsx)("br",{}),Object(m.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/vrFbVSvKl1g",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),Object(m.jsx)("br",{}),Object(m.jsx)(x.b,{className:"btn btn-primary",onClick:this.onSubmitSignIn,children:"Enviar"})]})})]})})})]})}}]),a}(u.a.Component);t.default=O},93:function(e,t,a){"use strict";var n=a(7),o=a(1),c=a(6);t.a=function(){var e=Object(o.useState)([]),t=Object(n.a)(e,2),a=t[0],s=t[1];return Object(o.useEffect)((function(){fetch("http://lina.ufpi.br:3001/datasbat").then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){console.log(e.message)}))}),[]),Object(c.jsx)("optgroup",{label:"Selecione a data",children:a.map((function(e,t){return Object(c.jsx)("option",{value:e.data,children:e.data})}))})}}}]);
//# sourceMappingURL=11.768e0ca6.chunk.js.map