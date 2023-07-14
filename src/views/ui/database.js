const mysql = require('serverless-mysql')({
    config: {
  
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : '',
        database : 'fatima'
    }
  });
  
  // Main handler function
  exports.handler = async (event, context) => {
    // Run your query
    let results = await mysql.query('SELECT * FROM batismo')
  
    // Run clean up function
    await mysql.end()
  
    // Return the results
    return results
  }
  
  