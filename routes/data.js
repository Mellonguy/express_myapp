var express = require('express'); 
var router = express.Router();
var tui-grid = require('tui-grid'); 


const{Client} = require('pg');

const client = new Client({
    host: '61.255.238.83',
    user: 'postgres',
    password: 'P@ssw0rd',
    database: 'postgres',
    port: 5432
});

const grid = new tui.Grid({
    el: document.getElementById('grid'),
    data: gridData,
    scrollX: false,
    scrollY: false,
    columns: [
        {
            header: 'bodyserail',
            name: 'bodyserail'
        },
        {
            header: 'prodcd',
            name: 'prodcd'
        },
        {
            header: 'prodnm',
            name: 'prodnm'
        },
        {
            header: 'prodparamlist',
            name: 'prodparamlist'
        }
    ]

})
const rows = [];


/* GET home page. */ 
router.get('/', function(request, response, next) { 
    client.connect();

    var query = client.query('select * from iftg.adtn_prod_lst', (err,res)=>{
        // console.log(err,res);       
    });

    query.on('row', function(row) { 
        rows.push(row); 
    });


    query.on('end', function(row,err) { 
        response.render('data', { title: 'Express', data:rows }); 
        client.end();
    }); 
 
    query.on('error', function(error) { 
        console.log("ERROR!!" + error); 
        response.render('data', { title: title, data: null, message: "ERROR is occured!" }); 
    }); 

 
}); 
module.exports = router; 