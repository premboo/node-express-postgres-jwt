const User = require('../models').User;
module.exports = {
    createUser(req) {
        return new Promise(function(resolve, reject) {
            User
                .create(req.body)
                .then(user => resolve(user))
                .catch(error => reject(error));
        });
    },
    getUsers(){
        return new Promise(function(resolve, reject) {
            User
            .findAll({})
            .then(users => resolve(users))
            .catch(error => reject(error));
        });
    }
};