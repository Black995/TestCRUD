'use strict';
const { database } = require('../config/db.config.js');

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
			const query = 'SELECT * FROM users WHERE id = $1'
			const value = [id]

			database.query(query, value)
		    .then(response => {
		    	const product = response.rows[0]
		    	resolve(product)
		    })
        .catch(e => console.error(e.stack))
		})
  }

  getAllUsers(){
		return new Promise((resolve, reject) => {
			const query = 'SELECT * FROM users ORDER BY id DESC'
      
      database.query(query)
			  .then(function(response){
				  const products = response.rows
				  resolve(products)
			  })
			  .catch(e => console.error(e.stack))
		})
	}
  
}

module.exports = { User };
