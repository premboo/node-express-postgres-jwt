const usersController = require('../controllers').users;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
      message: 'Welcome to the Node API!. Please contact system admin to get api details',
    }));

    app.post('/api/user', usersController.create);
    app.get('/api/users', usersController.list);
};