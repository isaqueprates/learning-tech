
//em versões mais velhas do node 20 tem de ser instalado o pacote do dotenv no npmjs
//link da documentação: https://www.npmjs.com/package/dotenv
async function conectionDatabase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.USERPASSWORD) {
        console.log('Conection success');
    }else {
        console.log('Conection failed');
    }
}

export default conectionDatabase;