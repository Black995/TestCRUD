'use strict';
const { database } = require('../config/db.config');

class User{
  
  create(username, email, password){
    return new Promise((resolve, reject) => {

          database.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id', [username, email, password])
						.then(function(response){
							const id = response.rows[0].id
							resolve(id)
						})
            .catch(e => console.error(e.stack))
    })
  }

  getUserById(id){
		return new Promise((resolve, reject) => {

			database.query('SELECT * FROM users WHERE id = $1', [id])
		    .then(response => {
		    	const user = response.rows[0]
		    	resolve(user)
		    })
        .catch(e => console.error(e.stack))
		})
  }

  getAllUsers(){
		return new Promise((resolve, reject) => {
      
      database.query('SELECT * FROM users ORDER BY id DESC')
			  .then(function(response){
				  const user = response.rows
				  resolve(user)
			  })
			  .catch(e => console.error(e.stack))
		})
	}

	updateUser(id, username, email, password){
		return new Promise((resolve, reject) => {

			database.query('UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4', [username, email, password, id])
				.then(function(){resolve(true)})
        .catch(e => console.error(e.stack))
		})
	}
	
	deleteUser(id){
		return new Promise((resolve, reject) => {

			database.query('DELETE FROM users WHERE id = $1', [id])
				.then(function(){resolve(true)})
        .catch(e => console.error(e.stack))
		})
  }
  
}

module.exports = { User };
