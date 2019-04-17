module.exports = (sequelize, dataTypes) => {
	return sequelize.define('users', {
	  id: {
		type: dataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	  },
	  
	})
  }