module.exports = function(router, database) {

  router.get('/items', (req, res) => {
    database.getAllProperties(req.query, 200)
    .then(properties => res.send({properties}))
    .catch(e => {
      console.error(e);
      res.send(e)
    }); 
  });

  router.post('/items', (req, res) => {
    console.log('req to add new item:', req.body);
    console.log('res:', res);
    const userId = req.session.userId;
    database.addProperty({...req.body, user_id: userId})
      .then(property => {
        res.send(property);
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  });

  return router;
}