module.exports = (app, basePath) => {
  const URI = (path) => (basePath + path);

  app.get(URI('users'), (req, res) => res.send(require('../data/user/userListData')));
  app.get(URI('user/:id'), (req, res) => res.send(require('../data/user/userData')));
  app.put(URI('user'), (req, res) => res.send(require('../data/user/newUserRes')));
  app.get(URI('products'), (req, res) => res.send(require('../data/products/productsData')));
};
