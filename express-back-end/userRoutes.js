const bcrypt = require("bcrypt");

module.exports = function (router, database) {
  // Create a new user
  router.post("/signup", (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    // console.log("password:", user.password);
    // console.log("USER OBJ SIGNUP!", user);
    database
      .addUser(user)
      .then((user) => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.userId = user.id;
        res.send("🤗");
      })
      .catch((e) => res.send(e));
  });

  /**
   * Check if a user exists with a given username and password
   * @param {String} email
   * @param {String} password encrypted
   */
  const login = function (email, type, password) {
    const the_password = bcrypt.hashSync(password, 12);
    console.log(the_password);
    return database.getUserWithEmail(email, type).then((user) => {
      if (bcrypt.compareSync(password, user.password)) {
        console.log("Passwords match ===========================");
        return user;
      }
    });
  };
  exports.login = login;

  router.post("/login", (req, res) => {
    const { email, password, type } = req.body;
    console.log("LOGIN :", req.body);
    login(req.body.email, req.body.type, req.body.password)
      .then((user) => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.userId = user.id;
        req.session.userType = type;

        res.send({
          user,
          type,
        });
      })
      .catch((e) => res.send(e));
  });

  router.post("/logout", (req, res) => {
    req.session.userId = null;
    req.session.userType = null;
    res.send("OK");
    res.redirect("/");
  });

  router.get("/me", (req, res) => {
    const userId = req.session.userId;
    const type = req.session.userType;
    console.log("users/me", type, userId);
    if (!userId) {
      res.send({ message: "not logged in" });
      return;
    }
    database
      .getUserWithId(userId, type)
      .then((user) => {
        if (!user) {
          res.send({ error: "no user with that id" });
          return;
        }
        console.log("USER FOUND, sending to FE", user, type);
        res.send({
          user,
          type,
        });
      })
      .catch((e) => res.send(e));
  });

  // Create a new pet
  router.post("/addpet", (req, res) => {
    const pet = req.body;
    pet.userId = req.session.userId;
    console.log("PET OBJ SIGNUP!", pet);
    database
      .addPet(pet)
      .then((pet) => {
        if (!pet) {
          res.send({ error: "error" });
          return;
        }
        res.send(pet);
      })
      .catch((e) => res.send(e));
  });

  return router;
};
