(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[10],{520:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c.n(n),a=c(9),s=c(14),i=c(16),o=c(17),j=c(18),l=c(7),d=c(1),h=c.n(d),u=c(27),b=c(59),O=c(21),m=c(6);var p=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,3),c=t[0],n=t[1],r=(t[2],Object(d.useState)(!1)),a=Object(l.a)(r,2),s=a[0],i=a[1],o=function(){i(!1)},j=function(){i(!0)},h=Object(d.useState)("Conte\xfado"),p=Object(l.a)(h,2),x=p[0],f=p[1],v=function(e){f(e)};function w(e){switch(e=(e=JSON.stringify(e))[1]){case"0":return"Administrador";case"1":return"Batismo";case"2":return"PASCOM";case"3":return"ECC";case"4":return"D\xedzimo";default:return"Nada"}}return Object(d.useEffect)((function(){fetch("http://ec2-34-229-84-223.compute-1.amazonaws.com:8080/usersys").then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.log(e.message)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsxs)(u.y,{toggle:o,isOpen:s,backdrop:"static",children:[Object(m.jsx)(u.B,{toggle:o,children:"Alerta!"}),Object(m.jsx)(u.z,{children:x}),Object(m.jsxs)(u.A,{children:[Object(m.jsx)(u.e,{color:"primary",onClick:function(){window.location.replace("http://ec2-34-229-84-223.compute-1.amazonaws.com/fatima//#/GestUsers"),window.location.reload(!1)},children:"OK"})," "]})]})}),Object(m.jsxs)(u.H,{bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Login"}),Object(m.jsx)("th",{children:"Nome"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Pastoral"}),Object(m.jsx)("th",{children:"Aprovado?"}),Object(m.jsx)("th",{children:"A\xe7\xf5es"})]})}),Object(m.jsx)("tbody",{children:c.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:e.id}),Object(m.jsx)("td",{children:Object(m.jsx)(b.a,{nome:[e.login]})}),Object(m.jsx)("td",{children:Object(m.jsx)(b.a,{nome:[e.nome]})}),Object(m.jsx)("td",{children:Object(m.jsx)(b.a,{nome:[e.email]})}),Object(m.jsx)("td",{children:w([e.perm])}),Object(m.jsx)("td",{children:(c=[e.aprov],"1"!==(c=(c=JSON.stringify(c))[1])?"N\xe3o":"Sim")}),Object(m.jsxs)("td",{children:[Object(m.jsx)(O.b,{to:"",onClick:function(){return t=e.id,j(),v("Usu\xe1rio Exclu\xeddo!"),void fetch("http://ec2-34-229-84-223.compute-1.amazonaws.com:8080/deleta_user/"+t).then((function(e){return e.json()}));var t},children:Object(m.jsx)("i",{class:"bi bi-person-x-fill",title:"Excluir Usu\xe1rio"})}),"\xa0\xa0",Object(m.jsx)(O.b,{to:"",onClick:function(){return t=e.id,v("Permiss\xe3o concedida ao usu\xe1rio!"),j(),void fetch("http://ec2-34-229-84-223.compute-1.amazonaws.com:8080/autoriza_user/"+t).then((function(e){return e.json()}));var t},children:Object(m.jsx)("i",{class:"bi bi-person-check-fill",title:"Aprova Usu\xe1rio"})})]})]});var c}))})]})]})},x=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).onDataPChange=function(e){n.setState({datap:e.target.value})},n.onSubmitSignIn=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(t=n.state.datap.trim())){e.next=8;break}return t=t.replaceAll("-","/"),"http://ec2-34-229-84-223.compute-1.amazonaws.com:8080/register_dt",e.next=6,fetch("http://ec2-34-229-84-223.compute-1.amazonaws.com:8080/register_dt",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({datap:n.state.datap})}).then(alert("Data Cadastrada com Sucesso!")).then((function(e){e.json(),window.location.replace("http://ec2-34-229-84-223.compute-1.amazonaws.com/fatima//#/CadastroDatas"),window.location.reload()}));case 6:e.next=9;break;case 8:t="-";case 9:case"end":return e.stop()}}),e)}))),n.state={variavel:window.location.hash,datap:""},n}return Object(i.a)(c,[{key:"render",value:function(){return Object(m.jsx)(u.F,{children:Object(m.jsx)(u.n,{lg:"12",children:Object(m.jsxs)(u.g,{children:[Object(m.jsx)(u.m,{tag:"h6",className:"border-bottom p-3 mb-0",children:Object(m.jsxs)("h3",{children:[Object(m.jsx)("i",{class:"bi bi-people-fill"}),"  ","Gest\xe3o de Usu\xe1rios"]})}),Object(m.jsx)(u.h,{className:"",children:Object(m.jsx)(p,{})})]})})})}}]),c}(h.a.Component);t.default=x},59:function(e,t,c){"use strict";var n=c(6);t.a=function(e){var t=e.nome;return"null"!==t?t:Object(n.jsx)("center",{children:"-"})}}}]);
//# sourceMappingURL=10.e148689f.chunk.js.map