import knex from "knex";

export default async function handler(req, res){
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

    try {
        const query = "SELECT * FROM batimo";
        const values = [];
        const [data] = await db.execute(query, values);
        db.end();
        res.status(200).json({results: data})

    } catch (error){
        res.status(500).json({error: error.message});
    }

}



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

  
