
// importa todos os métodos do modulo com o uso do "*" e do "as"
import * as database from './util/database.js';


//destructuring
import {desconectionDatabase, databaseType} from './util/database.js';
import {dataApi,getDataApi} from './util/ex-api.js';


database.getConectionDatabase('postgreSql');
desconectionDatabase();
databaseType;
console.log(dataApi, getDataApi());