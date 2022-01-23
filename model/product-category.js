var pool = require('./database-conection');

async function getAllProductsCategories(){
    try{
        var query='select * from product_category where active=true';
        var row = await pool.query(query);
        console.log(row.rows);
        return row.rows;
    } catch (error){
        console.log(error);
    }
}

module.exports = {getAllProductsCategories}