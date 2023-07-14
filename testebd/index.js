//index.js
(async () => {
    const db = require('./db');
    console.log('Começou!');
    console.log('Seleciona:');
    const participantes = await db.selectBatismo();
    console.log(participantes);
})();