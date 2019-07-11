
const UsersService = require('../services/users-service');

module.exports = {

   async create (req, res) {
        try {
            let user = await UsersService.createUser(req);
            console.log("inside success block");
            res.status(201).send({
                status: "success",
                message: null,
                data: user
            })
        } catch (error) {
            console.log("inside error block"+error);
            res.status(400).send({
                    status: "fail",
                    message: null,
                    data: error
                }
            )
        }
    },

    async list(req, res) {
        try {
            let users = await UsersService.getUsers();
            res.status(200).send({
                    status: "success",
                    message: null,
                    data: users
                })
        }
        catch (error){
            console.log("inside error block"+error);
            res.status(400).send(error)
        }
    },


    getUserById(req, res) {
        return User
            .findAll({
                where: {
                    userId: req.params.id
                },
                include: [{
                    model: Client,
                    as: 'clients',
                }]
            })
            .then(users => res.status(200).send(
                {
                    status: "success",
                    message: null,
                    data: users
                }
            ))
            .catch(error => res.status(400).send(error));
    }
};