'use strict';
const { User } = require('../models/User');

class UserController {

	create(req, res){
		const { username, email, password } = req.body;
		const user = new User();

		user.create(username, email, password)
			.then(res.status(200).json({
					message: 'User created successfully',
					body: {
							user: {
								username,
								email,
								password
						}
					}
				})
			)
			.catch(e => console.error(e.stack))
	}

	getUserById(req, res){
		const id = req.params.id;
		const user = new User();

		user.getUserById(id)
			.then(function(userById){ res.status(200).json({users: userById})})
			.catch(e => console.error(e.stack))
	}

  getAllUsers(req,res){
		const user = new User();

		user.getAllUsers()
			.then(function(users){ res.status(200).json({users: users})})
			.catch(e => console.error(e.stack))
	}

}

module.exports = { UserController };
