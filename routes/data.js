var express = require('express'); 
var router = express.Router();
const{Client} = require('pg');
const tuiGrid = require('tui-grid').Grid;

const client = new Client({
    host: '61.255.238.83',
    user: 'postgres',
    password: 'P@ssw0rd',
    database: 'postgres',
    port: 5432
});


const rows = [];


/* GET home page. */ 
router.get('/', function(request, response, next) { 
    client.connect();

    var query = client.query('select bodyserail, prodcd, prodnm, prodparamlist from iftg.adtn_prod_lst', (err,res)=>{
        // console.log(err,res);       
    });

    query.on('row', function(row) { 
        rows.push(row); 
    });


    query.on('end', function(row,err) { 
        response.render('data', { title: 'Express', data:row }); 
        client.end();
    }); 
 
    query.on('error', function(error) { 
        console.log("ERROR!!" + error); 
        response.render('data', { title: title, data: null, message: "ERROR is occured!" }); 
    }); 

 
}); 
module.exports = router; 