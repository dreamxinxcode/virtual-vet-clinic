module.exports = function(router, database) {

  router.get('/names', (req, res) => {
    database.getNames(req.query, 200)
    .then(names => res.send({names}))
    .catch(e => {
      console.error(e);
      res.send(e)
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
}