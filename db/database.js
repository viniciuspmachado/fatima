import knex from "knex";

const db = knex ({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'F3r5a5d0',
    database : 'batismo'
  }
});

/* const users = db('batismo').select('*').toString();
console.log(users);

 */

const dados = db.select('nome_ela')
  .from('batismo');

console.log(dados);



//console.log(usuarios());


// function usuarios(users) { 
//   db.select('*')
//   .from('batismo')
//   .then(users => {
//     console.log('Saida-->',users);
//   })
// };
// const a = '';
// usuarios(a);

//console.log('Saida-->',users());

  
