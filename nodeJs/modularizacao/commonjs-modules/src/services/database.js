
// padrão commonJS: importar/exportar
//export default: exporta uma função ou variável por padrão
exports.getDatabaseName = async (nameDatabase) => {
    console.log(`Banco de dados: ${nameDatabase}`);
}

exports.getConectionDatabase = async () => {
    console.log(`Conexão com o banco de dados`);
}