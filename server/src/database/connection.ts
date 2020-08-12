import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        // __dirname retorna o nome do diretorio atual
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,

});

export default db;