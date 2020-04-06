'use strict';
const { User } = require('../models/User');

const user = new User();

class UserController {

	create(req, res){
		const { username, email, password } = req.body;

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

		user.getUserById(id)
			.then(function(userById){ 
				if(userById){
					res.status(200).json({users: userById})
				}
				else {
					res.status(500).json({message: 'user has not been found'})
				}
			})
			.catch(e => console.error(e.stack))
	}

  getAllUsers(req,res){

		user.getAllUsers()
			.then(function(users){ res.status(200).json({users: users})})
			.catch(e => console.error(e.stack))
	}

	updateUser(req, res){
		const { username, email, password } = req.body;
		const id = req.params.id;

		user.updateUser(id, username, email, password)
			.then(function(users){res.status(200).json('User updated successfully')})
			.catch(e => console.error(e.stack))
	}

	deleteUser(req, res){
		const id = req.params.id;

		user.deleteUser(id)
			.then(function(users){res.status(200).json('User deleted successfully')})
			.catch(e => console.error(e.stack))
	}

}

module.exports = { UserController };
