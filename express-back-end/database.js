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

const getUserAppointments = (userID, type) => {
  if (type === "clinic") {
    console.log('clinic ')
    return pool
    .query(
      `
    SELECT * 
    FROM appointments
    WHERE clinic_id = $1
    `,
      [userID]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
  }

  console.log('owner')
  return pool
    .query(
    `
    SELECT clinics.name as clinic_name, pets.name as pet_name, appointments.date_apt as appointment_date, appointments.time_id as appointment_time
    FROM appointments
    JOIN clinics ON clinics.id = appointments.clinic_id
    JOIN pets ON appointments.pet_id = pets.id
    JOIN owners on owners.id = pets.owner_id
    WHERE pets.owner_id = $1
    `,
      [userID]
    )
    .then((res) => {
      console.log(res.rows)
      return res.rows;
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.getUserAppointments = getUserAppointments;
