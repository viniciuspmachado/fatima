(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[4],{223:function(e,t){},225:function(e,t){},257:function(e,t){},258:function(e,t){},355:function(e,t){},516:function(e,t,i){"use strict";i.r(t);var n=i(123),o=i(7),r=i(1),a=i(59),c=i(91),s=i(92),d=i(6);var l=function(e){var t=n.StyleSheet.create({row:{display:"flex",flexDirection:"row",borderTop:"1px solid #EEE",paddingTop:8,paddingBottom:8},row1:{width:"40%"},row2:{width:"40%"},row3:{width:"10%"},row4:{width:"10%"},row5:{width:"27%"}}),i=e.datasel.replaceAll("/","-"),l=Object(r.useState)([]),h=Object(o.a)(l,2),w=h[0],p=h[1];return Object(r.useEffect)((function(){console.log("http://ec2-34-229-84-223.compute-1.amazonaws.com:8080/participantes/",i),fetch("http://ec2-34-229-84-223.compute-1.amazonaws.com:8080/participantes/"+i).then((function(e){return e.json()})).then((function(e){p(e)})).catch((function(e){console.log(e.message)}))}),[]),Object(d.jsx)("div",{children:w.map((function(e,i){return Object(d.jsxs)(n.View,{style:t.row,wrap:!1,children:[Object(d.jsx)(n.Text,{style:t.row1,children:Object(d.jsx)(a.a,{nome:[e.nome_ele]})}),Object(d.jsx)(n.Text,{style:t.row2,children:Object(d.jsx)(a.a,{nome:[e.nome_ela]})}),Object(d.jsx)(n.Text,{style:t.row3,children:Object(d.jsx)(c.a,{casados:[e.casados]})}),Object(d.jsx)(n.Text,{style:t.row4,children:Object(d.jsx)(s.a,{tp:[e.t_paticipacao]})})]})}))})},h=i.p+"static/media/logo_paroquia.bf1a45de.jpg",w=n.StyleSheet.create({page:{backgroundColor:"white",color:"black"},section:{margin:5,padding:10},viewer:{width:.7*window.innerWidth,height:window.innerHeight},header:{margin:5,padding:5,alignItems:"center"},line:{border:"1px solid black",borderRadius:"1px"},table:{width:"100%",margin:5,padding:5,fontSize:8},tableh:{width:"100%",margin:4,padding:10,fontSize:8},rowh:{display:"flex",flexDirection:"row",borderTop:"1px solid #EEE",paddingTop:8,paddingBottom:8,fontSize:12},row:{display:"flex",flexDirection:"row",borderTop:"1px solid #EEE",paddingTop:8,paddingBottom:8},headerT:{borderTop:"none"},bold:{fontWeight:"heavy"},row1:{width:"40%"},row2:{width:"40%"},row3:{width:"10%"},row4:{width:"10%"},row5:{width:"27%"},subtitulo:{fontSize:10,paddingBottom:4,paddingTop:4,textAlign:"center",borderTop:"1px solid #000"},row11:{width:"40%"},row22:{width:"60%"},image:{width:80,alignContent:"center",paddingBottom:4},data:{fontSize:8}});var p=function(){var e=window.location.hash,t=e.substring(e.indexOf("?")),i=new URLSearchParams(t).get("data");return i=null!=i?i.replaceAll("-","/"):"-",Object(d.jsx)(n.PDFViewer,{style:w.viewer,children:Object(d.jsx)(n.Document,{children:Object(d.jsxs)(n.Page,{size:"A4",style:w.page,children:[Object(d.jsxs)(n.View,{fixed:!0,style:w.header,children:[Object(d.jsx)(n.Image,{style:w.image,src:h}),Object(d.jsx)(n.Text,{style:w.subtitulo,children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Lista de Prepara\xe7\xe3o para o Sacramento do Batismo \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),Object(d.jsx)(n.Text,{style:w.data,children:i})]}),Object(d.jsxs)(n.View,{style:w.tableh,children:[Object(d.jsxs)(n.View,{style:[w.row,w.bold,w.headerT],children:[Object(d.jsx)(n.Text,{style:w.row1,children:"NOME DELE"}),Object(d.jsx)(n.Text,{style:w.row2,children:"NOME DELA"}),Object(d.jsx)(n.Text,{style:w.row3,children:"CASADOS?"}),Object(d.jsx)(n.Text,{style:w.row4,children:"TIPO"})]}),Object(d.jsx)(l,{datasel:i})]})]})})})};t.default=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(p,{})})}},59:function(e,t,i){"use strict";var n=i(6);t.a=function(e){var t=e.nome;return"null"!==t?t:Object(n.jsx)("center",{children:"-"})}},91:function(e,t,i){"use strict";t.a=function(e){return"1"===e.casados?"Sim":"N\xe3o"}},92:function(e,t,i){"use strict";t.a=function(e){return"1"===e.tp?"Pais":"Padrinhos"}}}]);
//# sourceMappingURL=4.bd15c562.chunk.js.map