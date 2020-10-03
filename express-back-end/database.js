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
    .then(res => res.rows)
    .catch(err => console.error(err));
};
exports.getNames = getNames;

const getUserWithEmail = (email, type) => {
  if (type === "pet") console.log("PET TYPE recieved");
  if (type === "clinic") console.log(" CLINIC TYPE recieved");
  return pool
    .query(
      `
    SELECT *
    FROM users
    WHERE email = $1
    LIMIT 1;
    `,
      [email]
    )
    .then(res => {
      return res.rows[0];
      petpet;
    })
    .catch(err => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.getUserWithEmail = getUserWithEmail;

const getClinic = options => {
  const queryParams = [];
  let queryString = `
  SELECT DISTINCT clinics.* FROM pet_types
  JOIN clinic_pet_types ON pet_type_id = pet_types.id
  JOIN clinics ON clinic_id = clinics.id

  `;
  if (options.clinicName) {
    queryParams.push(`%${options.clinicName}%`);
    queryString += `WHERE name LIKE $${queryParams.length} `;
  }
  if (options.clinicCity) {
    if (queryString.includes("WHERE")) {
      queryString += ` AND `;
    } else {
      queryString += ` WHERE `;
    }
    queryParams.push(`%${options.clinicCity}%`);
    queryString += `city LIKE $${queryParams.length}`;
  }
  if (options.animalType) {
    if (queryString.includes("WHERE")) {
      queryString += ` AND `;
    } else {
      queryString += ` WHERE `;
    }
    queryParams.push(options.animalType);
    queryString += `pet_types.type = $${queryParams.length}`;
  }

  console.log("queryString:", queryString);
  console.log("queryParams:", queryParams);

  return pool
    .query(queryString, queryParams)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.getClinic = getClinic;
