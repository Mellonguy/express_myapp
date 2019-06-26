var express = require('express'); 
var router = express.Router();
const Pool = require('pg');

Pool.Connection
const pool = Pool({
    host: '61.255.238.83',
    user: 'postgres',
    password: 'P@ssw0rd',
    database: 'postgres',
    port: 5432
});


const rows = [];


/* GET home page. */ 
router.get('/', function(req, res, next) { 
    // client.connect();

    var query = pool.query('select bodyserail, prodcd, prodnm, prodparamlist from iftg.adtn_prod_lst', (err,res)=>{
        // console.log(err,res);       
    });

    query.on('row', function(row) { 
        rows.push(row); 
    });


    query.on('end', function(row,err) { 
        res.render('data', { title: 'Express', data:rows }); 
        pool.end();
    }); 
 
    query.on('error', function(error) { 
        console.log("ERROR!!" + error); 
        res.render('data', { title: title, data: null, message: "ERROR is occured!" }); 
    }); 

 
}); 
module.exports = router; 