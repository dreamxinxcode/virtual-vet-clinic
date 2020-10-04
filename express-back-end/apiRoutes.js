module.exports = function (router, database) {
  router.get("/names", (req, res) => {
    database
      .getNames(req.query, 200)
      .then((names) => res.send({ names }))
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // #1
  router.post("/clinics", (req, res) => {
    console.log("BODY from REQ:", req.body);
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

  // #4
  router.post("/booking", (req, res) => {
    const { clinic_id, pet_id, date, time } = req.body;
    console.log("PUT => /api/bookings/id", clinic_id, pet_id, date, time);

    database
      .addClinicBooking(clinic_id, pet_id, date, time)
      .then((booking) => res.send({ booking }))
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
    // res.send("OK");
  });

  // #3
  router.get("/bookings/:id/:date", (req, res) => {
    const clinic_id = req.params.id;
    const date = req.params.date;
    console.log("/api/bookings/id", clinic_id, date);

    database
      .getClinicBookings(clinic_id, date)
      .then((bookings) => res.send({ bookings }))
      .catch((e) => {
        console.error(e);
        res.send(e);
      });
  });

  // router.post('/items', (req, res) => {
  //   console.log('req to add new item:', req.body);
  //   console.log('res:', res);
  //   const userId = req.session.userId;
  //   database.addProperty({...req.body, user_id: userId})
  //     .then(property => {
  //       res.send(property);
  //     })
  //     .catch(e => {
  //       console.error(e);
  //       res.send(e)
  //     });
  // });

  return router;
};
