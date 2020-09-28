const bcrypt = require("bcrypt");

module.exports = function (router, database) {
  // Create a new user
  router.post("/", (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    console.log("password:", user.password);
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
  const login = function (email, password, type) {
    return database.getUserWithEmail(email, type).then((user) => {
      if (bcrypt.compareSync(password, user.password)) {
        return user;
      }
      return null;
    });
  };
  exports.login = login;

  router.post("/login", (req, res) => {
    console.log("coming from FE credentials", req.body);
    const { email, password, type } = req.body;
    req.session.userId = 999;
    res.send({
      user: { name: "Tima", email, id: 999, type },
    });
    // login(email, password, type)
    //   .then((user) => {
    //     if (!user) {
    //       res.send({ error: "error" });
    //       return;
    //     }
    //     req.session.userId = user.id;

    //     res.send({ user: { name: user.name, email: user.email, id: user.id } });
    //   })
    //   .catch((e) => res.send(e));
  });

  router.post("/logout", (req, res) => {
    req.session.userId = null;
    res.send({});
  });

  router.get("/me", (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.send({ message: "not logged in" });
      return;
    }
    console.log("sending my credentials to  FE on GET users/me");
    res.send({
      user: {
        name: "Tima",
        email: "tima.xpl@gmail.com",
        id: userId,
      },
    });
  });

  //   database
  //     .getUserWithId(userId)
  //     .then((user) => {
  //       if (!user) {
  //         res.send({ error: "no user with that id" });
  //         return;
  //       }

  //       res.send({
  //         user: {
  //           name: user.name,
  //           email: user.email,
  //           tel: user.tel,
  //           id: userId,
  //         },
  //       });
  //     })
  //     .catch((e) => res.send(e));
  // });

  return router;
};
