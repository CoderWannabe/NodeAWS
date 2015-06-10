module.exports = {
	applicationPort 			: 80, 
<<<<<<< HEAD
	database 					: function(){
		if(process.env.ENVIRONMENT){
			var opsworks = require('./../opsworks');
			var opsWorksDB = opsworks.db;
			var rdsConnection = {
				host : opsWorksDB.host,
				port : opsWorksDB.port,
				database : opsWorksDB.database,
				user : opsWorksDB.username,
				password : opsWorksDB.password
			};
			return rdsConnection;
		} else {
			var local = require('./../config/local');
			var localConnection = local.db;
			return localConnection;
		}
	} 
	
}

// try again
=======
	database 					: 
	{
		host					: 'localhost',
		port 					: 3306,
  		database 				: 'photoalbums',
		user     				: 'root',
 		password 				: 'secret'
	}
}
>>>>>>> b244c3a5ea9dcd843918c906bbfa612cbf6eb989
