// CREATE POOL
const { Pool } = require("pg");

const pool = new Pool({
  user: "oufhcqcl",
  password: "eDjB4LIf3elrvu9QkduzVu8CpfhCdoiV",
  host: "lallah.db.elephantsql.com",
  database: "oufhcqcl",
});

exports.pool = pool;

// 1
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

// 2
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

// 3
const getClinic = (options) => {
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
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.getClinic = getClinic;

// 4

const getUserAppointments = (userID, type) => {
  if (type === "clinic") {
    console.log('clinic', userID)
    return pool
    .query(
      `
    SELECT CONCAT(owners.first_name, ' ', owners.last_name) as owner_full_name, pets.name as pet_name, appointments.date_apt as appointment_date, appointments.time_id as appointment_time
    FROM appointments
    JOIN pets ON pets.id = appointments.pet_id
    JOIN owners ON pets.owner_id = owners.id
    WHERE clinic_id = $1
    ;
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

  console.log('owner', userID)
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

// 5
const getClinicBookings = (id, date) => {
  console.log("DB query with ID, and type", id, date);
  return pool
    .query(`    SELECT * FROM appointments    WHERE id = $1;`, [id])
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.getClinicBookings = getClinicBookings;

// 6
const addClinicBooking = (id, date) => {
  console.log("DB query with ID, and type", id, date);
  return pool
    .query(`    SELECT * FROM appointments    WHERE id = $1;`, [id])
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.addClinicBooking = addClinicBooking;

// 7

const getPetsForClinic = (clinicID) => {
  return pool
  .query(`
    SELECT pets.*, pet_types.type as pet_type, CONCAT(owners.first_name, ' ', owners.last_name) as owner_name 
    FROM pets
    JOIN pet_types ON pet_types.id = pets.type_id
    JOIN owners ON owners.id = pets.owner_id
    JOIN appointments ON appointments.pet_id = pets.id
    WHERE appointments.clinic_id = $1
    ; 
  `, [clinicID])
  .then(res => res.rows)
  .catch(e => e);
};
exports.getPetsForClinic = getPetsForClinic;

// 8

const getPetInfo = (petID) => {
  return pool.query(`
    SELECT * 
    FROM pets
    WHERE pets.id = $1
    ;
  `, [petID])
  .then(res => res.rows)
  .catch(e => e);
};
exports.getPetInfo = getPetInfo;