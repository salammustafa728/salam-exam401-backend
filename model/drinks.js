'use strict';
const axios = require('axios');

const getdrinksData = async (req,res)=>{

    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
   
    await axios.get(url).then(response=>{
    
            res.send(response.data)
        
    }).catch(error => console.log(error));


}

module.exports= getdrinksData;