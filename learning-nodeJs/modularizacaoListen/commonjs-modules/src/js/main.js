
// padrão commonJS: importar/exportar
//destructuring destruturando o modulo exportado
const {productsFullName} = require('../services/products');

// Essa variavel pega tudo que estiver dentro do module.exports esse baixa os arquivos completos sem desestruturar
const prod = require('../services/products');
const config = require('../services/config');
const database = require('../services/database');

async function main() {
    console.log('Carrinho de compras \n');

    // exportando funções
    productsFullName(1, 'Monitor');
    prod.productsFullName(2, 'Mouse');
    prod.getDescription('Logitech', 'G502');
    prod.productsFullName(3, 'Teclado');
    prod.getDescription('Redragon', 'K552');

    // exportando variaveis
    console.log(config.nome);
    console.log(config.getClentes);

    // exportado por padrão
    database.getDatabaseName('PostgreSQL');
    database.getConectionDatabase();
}

main();