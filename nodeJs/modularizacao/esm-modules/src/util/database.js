
//exporta variaveis
const databaseType = {
    type: 'mySql',
    userType: 'admin'
}

async function getConectionDatabase(nameDatabase) {
    console.log(`Banco de dados: ${nameDatabase}`)
}

async function desconectionDatabase() {
    console.log(`Desconectando do banco de dados...`);
}

// exporta todos métodos do modulo
export {
    getConectionDatabase,
    desconectionDatabase,
    databaseType
}