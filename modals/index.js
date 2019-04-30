module.exports = (sequelize, dataTypes) => {
	return sequelize.define('users', {
	  id: {
		type: dataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	  },
  
	  first: {
		type: dataTypes.TEXT
	  },
  
	  last: {
		type: dataTypes.TEXT
	  },
  
	  username: {
		type: dataTypes.TEXT
	  },
  
	  password: {
		type: dataTypes.TEXT
	  },
  
	  email: {
		type: dataTypes.TEXT
	  }
	})
  }