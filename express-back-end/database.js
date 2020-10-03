// const properties = require('./json/properties.json');
// const users = require('./json/users.json');
const { Pool } = require("pg");

const pool = new Pool({
  user: "oufhcqcl",
  password: "eDjB4LIf3elrvu9QkduzVu8CpfhCdoiV",
  host: "lallah.db.elephantsql.com",
  database: "oufhcqcl",
});

exports.pool = pool;

const getNames = () => {
  return pool
    .query(
      `
    SELECT * FROM names;
  `
    )
    .then((res) => res.rows)
    .catch((err) => console.error(err));
};
exports.getNames = getNames;

const getUserWithEmail = (email, type) => {
  let account_type;
  console.log("DB query with EMAIl & TYPE", email, type);
  if (type === "pet") {
    console.log("PET TYPE recieved");
    account_type = "owners";
  } else if (type === "clinic") {
    console.log(" CLINIC TYPE recieved");
    account_type = "clinics";
  }
  return pool
    .query(
      `
    SELECT *
    FROM ${account_type}
    WHERE email = $1
    LIMIT 1;
    `,
      [email]
    )
    .then((res) => {
      console.log(res.rows[0]);
      return res.rows[0];
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.getUserWithEmail = getUserWithEmail;

const getUserWithId = (id, type) => {
  let account_type;
  console.log("DB query with ID, and type", id, type);
  if (type === "pet") {
    console.log("PET TYPE recieved");
    account_type = "owners";
  } else if (type === "clinic") {
    console.log(" CLINIC TYPE recieved");
    account_type = "clinics";
  }
  return pool
    .query(
      `    SELECT *    FROM ${account_type}    WHERE id = $1    LIMIT 1;    `,
      [id]
    )
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.getUserWithId = getUserWithId;
