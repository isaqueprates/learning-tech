
// padrão commonJS: importar/exportar
async function productsFullName(codeId, productsName) {
    // console.log('\n');
    console.log (`Produto: ${codeId} - ${productsName} `);
}

async function getDescription(marca, modelo) {
    console.log (`Marca: ${marca} - ${modelo} `);
}
// tudo que esta dentro do module.exports vai ser exportado
module.exports = {
    productsFullName,
    getDescription,
}