var pool = require('./database-conection');

async function getAllProducts(){
    try{
        var query='select * from product where active=true';
        var row = await pool.query(query);
        console.log(row.rows);
        return row.rows;
    } catch (error){
        console.log(error);
    }
}

module.exports = {getAllProducts}