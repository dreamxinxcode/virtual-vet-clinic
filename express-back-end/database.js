// CREATE POOL
const { Pool } = require("pg");

const pool = new Pool({
  user: "oufhcqcl",
  password: "eDjB4LIf3elrvu9QkduzVu8CpfhCdoiV",
  host: "lallah.db.elephantsql.com",
  database: "oufhcqcl",
});

exports.pool = pool;

// # 1
const getUserWithEmail = (email, type) => {
  let account_type;
  if (type === "pet") {
    account_type = "owners";
  } else if (type === "clinic") {
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
      return res.rows[0];
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.getUserWithEmail = getUserWithEmail;

// # 2
const getUserWithId = (id, type) => {
  let queryString;
  if (type === "pet") {
    queryString = `SELECT owners.*, pets.*, pets.id AS pets_id FROM owners LEFT JOIN pets ON pets.owner_id = owners.id WHERE owners.id = $1 LIMIT 1;`;
  } else if (type === "clinic") {
    queryString = `SELECT *    FROM clinics    WHERE id = $1    LIMIT 1;`;
  }
  return pool
    .query(queryString, [id])
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

// # 4
const getUserAppointments = (userID, type) => {
  if (type === "clinic") {
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
  return pool
    .query(
      `    SELECT * FROM appointments    WHERE clinic_id = $1 AND date_apt = $2;`,
      [id, date]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.getClinicBookings = getClinicBookings;

// # 6
const addClinicBooking = (clinic_id, pet_id, date_apt, time_id) => {
  return pool
    .query(
      `INSERT INTO appointments
    (clinic_id, pet_id, date_apt, time_id)
    VALUES
    ($1, $2, $3, $4);`,
      [clinic_id, pet_id, date_apt, time_id]
    )
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.addClinicBooking = addClinicBooking;

// # 7
const getPetsForClinic = (clinicID) => {
  return pool
    .query(
      `
    SELECT DISTINCT pets.id, pets.*, pet_types.type as pet_type, CONCAT(owners.first_name, ' ', owners.last_name) as owner_name, owners.* 
    FROM pets
    JOIN pet_types ON pet_types.id = pets.type_id
    JOIN owners ON owners.id = pets.owner_id
    JOIN appointments ON appointments.pet_id = pets.id
    WHERE appointments.clinic_id = $1
    ; 
  `,
      [clinicID]
    )
    .then((res) => res.rows)
    .catch((e) => e);
};
exports.getPetsForClinic = getPetsForClinic;

// #8
const getPetInfo = (petID) => {
  return pool
    .query(
      `
    SELECT * 
    FROM pets
    WHERE pets.id = $1
    ;
  `,
      [petID]
    )
    .then((res) => res.rows)
    .catch((e) => e);
};
exports.getPetInfo = getPetInfo;

// 9
const addUser = (user) => {
  if (user.accountType === "pet")
    return pool
      .query(
        `
    INSERT INTO owners(first_name, last_name, telephone, email, password)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;
  `,
        [
          user.first_name,
          user.last_name,
          user.telephone,
          user.email,
          user.password,
        ]
      )
      .then((res) => {
        return res.rows[0];
      })
      .catch((err) => {
        console.error("query error", err.stack);
        return null;
      });
};
exports.addUser = addUser;

// # 10
const removeBooking = (id) => {
  return pool
    .query(`DELETE FROM appointments WHERE id =$1;`, [id])
    .then((res) => res.rows[0])
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.removeBooking = removeBooking;

// 11
const addPet = (pet) => {
  return pool
    .query(
      `
    INSERT INTO pets(type_id, owner_id, name, age, gender, breed, weight, info, image )
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
  `,
      [
        pet.type_id,
        pet.userId,
        pet.name,
        pet.age,
        pet.gender,
        pet.breed,
        pet.weight,
        pet.info,
        pet.image,
      ]
    )
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.error("query error", err.stack);
      return null;
    });
};
exports.addPet = addPet;

// #12
const getMyPetsInfo = (user_id) => {
  return pool
    .query(
      `
      SELECT pets.*, pets.id AS pets_id, owners.*, pet_types.*
      FROM pets
      JOIN owners ON owners.id = pets.owner_id
      JOIN pet_types ON pets.type_id = pet_types.id
      WHERE owners.id = $1
    ;
  `,
      [user_id]
    )
    .then((res) => res.rows)
    .catch((e) => e);
};
exports.getMyPetsInfo = getMyPetsInfo;
