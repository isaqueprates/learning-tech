
// padrão commonJS: importar/exportar
const getClentes = {
    nome:'Maicon',
    sobrenome:'Nunes',
    email:'youremail@exemple.com'
}

// O modulo.exports exporta até variaveis
const nome = 'Isaque';

module.exports = {
    getClentes,
    nome
} 