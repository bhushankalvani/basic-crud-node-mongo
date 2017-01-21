/** 
	@requires express
*/
var express = require('express');
/** @var {express} router */
var router = express.Router();

/** To get all the entries from phonebook.*/
router.get('/listall',function(req,res){
	/** @var db - stores req.db object.
	* @var contact - gets the 'contacts' collection from the DB.*/
	var db = req.db;
	var contacts = db.get('contacts');
	contacts.find({},function(e,docs){
		if(e)
			res.end(JSON.stringify(e));
		else{
			/**@message success if operation successful
			* header 200 = OK, script executed properly*/
			res.writeHead(200,{'Content-Type' : 'application/json'});
			res.end(JSON.stringify(docs));
		}
	});
});

/** To add an entry to phonebook. */
router.post('/add',function(req,res){
	/** @var db - stores req.db object.
	* @var contact - gets the 'contacts' collection from the DB.*/
	var db = req.db;
	// console.log(req.body);
	var contacts = db.get('contacts');
	contacts.insert(req.body,function(e,docs){
		if(e){
			// console.log(e);
			res.end(JSON.stringify(e));
		}
		else{
			// console.log(docs);
			/**@message success if operation successful
			* header 200 = OK, script executed properly*/
			res.writeHead(200,{'Content-Type' : 'application/json'});
			res.end(JSON.stringify(message = 'success'));
		}
	});
});

/** To update an entry to phonebook. */
router.post('/update',function(req,res){
	/** @var db - stores req.db object.
	* @var contact - gets the 'contacts' collection from the DB.*/
	var db = req.db;
	var contacts = db.get('contacts');
	contacts.update({_id : req.body._id},{name : req.body.name, phonenumbers : req.body.phonenumbers},function(e,docs){
		if(e) res.end(JSON.stringify(e));
		else{
			/**@message success if operation successful
			* header 200 = OK, script executed properly*/
			res.writeHead(200,{'Content-Type' : 'application/json'});
			res.end(JSON.stringify(message = 'success'));
		}
	});
});

/** To delete a particular entry from phonebook. */
router.post('/remove',function(req,res){
	/** @var db - stores req.db object.
	* @var contact - gets the 'contacts' collection from the DB.*/
	var db = req.db;
	var contacts = db.get('contacts');
	contacts.remove({_id : req.body._id},function(e,docs){
		if(e) res.end(JSON.stringify(e));
		else{
			/**@message success if operation successful
			* header 200 = OK, script executed properly*/
			res.writeHead(200,{'Content-Type' : 'application/json'});
			res.end(JSON.stringify(message = 'success'));
		}
	});
});
/** @exports router*/
module.exports = router;