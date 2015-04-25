var ejs = require("ejs");
var mysql = require('./mysql');




function insertUser(req,res)
{
	console.log("hi");
	req.session.name=req.param("username");
	console.log("session name:"+req.session.name);
	var insertUserQuery="insert into Users (Username) values ('"+req.param("username")+"')";
	console.log("Query is:"+insertUserQuery);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			res.render('successInsert', { name: req.param("username") });
		}  
	},insertUserQuery);
}

function successInsert(req,res){
	  res.render('successInsert', { name: req.session.name });
	};




exports.insertUser=insertUser;
exports.successInsert=successInsert;