module.exports = function (router, database) {
  // #1
  router.post("/clinics", (req, res) => {
    database
      .getClinic(req.body, 200)
      .then((clinics) => res.send({ clinics }))
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // #2
  router.get("/appointments", (req, res) => {
    const userID = req.session.userId;
    const accountType = req.session.userType;
    database
      .getUserAppointments(userID, accountType)
      .then((appointments) => res.send({ appointments }))
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // #3
  router.post("/booking", (req, res) => {
    const { clinic_id, pet_id, date, time } = req.body;
    console.log(req.body);
    database
      .addClinicBooking(clinic_id, pet_id, date, time)
      .then((booking) => res.send({ booking }))
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // #4
  router.get("/bookings/:id/:date", (req, res) => {
    const clinic_id = req.params.id;
    const date = req.params.date;
    database
      .getClinicBookings(clinic_id, date)
      .then((bookings) => res.send({ bookings }))
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // #5
  router.get("/pets", (req, res) => {
    const userID = req.session.userId;

    database
      .getPetsForClinic(userID)
      .then((pets) => res.send({ pets }))
      .catch((e) => e);
  });

  // 6

  router.get("/pets/:petID", (req, res) => {
    const id = req.params.petID;

    database
      .getPetInfo(id)
      .then((pet) => res.send({ pet }))
      .catch((e) => e);
  });

  // 7
  router.get("/booking/delete/:id", (req, res) => {
    const id = req.params.id;
    req.body.user_id = req.session.userId;
    database.removeBooking(id);
  });

  // 8

  router.get("/mypets", (req, res) => {
    const userID = req.session.userId;

    database
      .getMyPetsInfo(userID)
      .then((pets) => res.send({ pets }))
      .catch((e) => e);
  });

  return router;
};
