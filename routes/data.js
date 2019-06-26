var express = require('express'); 
var router = express.Router();
const {Pool} = require('pg');
const pool = new Pool({
=======
const Pool = require('pg');

Pool.Connection
const pool = Pool({
>>>>>>> 940b077a0a5cf9c0e3e6e2199c0621fe18e6a66a
    host: '61.255.238.83',
    user: 'postgres',
    password: 'P@ssw0rd',
    database: 'postgres',
    port: 5432
});


const rows = [];


/* GET home page. */ 
router.get('/', function(request, response, next) { 
    

    var query = pool.query('select bodyserail, prodcd, prodnm, prodparamlist from iftg.adtn_prod_lst', (err,res)=>{
       // console.log(err,res);   
       
       if(err){
        console.log("ERROR!!" + error); 
        response.render('data', { title: title, data: null, message: "ERROR is occured!" }); 
       }
       
       rows.push(res.rows); 
       response.render('data', { title: 'Express', data:rows }); 
       pool.end();
    });

    // query.on('row', function(row) { 
    //     rows.push(row); 
    // });


    // query.on('end', function(row,err) { 
    //     response.render('data', { title: 'Express', data:rows }); 
    //     pool.end();
    // }); 
 
    // query.on('error', function(error) { 
    //     console.log("ERROR!!" + error); 
    //     response.render('data', { title: title, data: null, message: "ERROR is occured!" }); 
    // }); 

 
}); 
module.exports = router; 