// const properties = require('./json/properties.json');
// const users = require('./json/users.json');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'oufhcqcl',
  password: 'eDjB4LIf3elrvu9QkduzVu8CpfhCdoiV',
  host: 'lallah.db.elephantsql.com',
  database: 'oufhcqcl'
})


const getNames = () => {
  return pool.query(`
    SELECT * FROM names;
  `)
  .then(res => res.rows)
  .catch(err => console.error(err))
};
 exports.getNames = getNames;
 
// const getUserWithEmail = (email) => {
//   return pool.query(`
//     SELECT *
//     FROM users
//     WHERE email = $1
//     LIMIT 1;
//     `, [email])
//     .then(res => {
//       return res.rows[0];
//     })
//     .catch(err => {
//       console.error('query error', err.stack);
//       return null;
//     });
// };
// exports.getUserWithEmail = getUserWithEmail;