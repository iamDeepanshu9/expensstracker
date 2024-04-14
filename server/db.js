const mongoose = require("mongoose");
// const { MongoClient } = require('mongodb');
mongoose.set('strictQuery', false); 
require('dotenv').config({ path: '/.env' });
// You can force the use of TLS 1.2 by adding this to your code:
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// process.env.NODE_OPTIONS = '--tls-min-v1.2';


module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
	// mongoose.set('debug', true);


	// MongoClient.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
	// 	if (err) {
	// 	  console.error('An error occurred:', err);
	// 	} else {
	// 	  console.log('Connected successfully to server');
	// 	  client.close();
	// 	}
	//   });
};
