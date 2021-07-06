'use strict';

const DrinksData = require('../model/drinks.mongoose');
const axios = require('axios');



const createDrink = async (req,res)=>{
    let url= `${process.env.SERVER_URL}/createData`;
    let {strDrink,strDrinkThumb}=req.body;
    DrinksData.find({strDrink,strDrinkThumb},(error,data)=>{
        await axios.post((url), {
                     strDrink,
                     strDrinkThumb,
                   }).then(res=>{
                    res.send(res.data.drinks)
                   }).catch(error => console.log(error));  
    })

}
const getdrinksfav = async (req,res)=>{

    let url= `${process.env.SERVER_URL}/createData`;
   
    await axios.get(url).then(response=>{
    
            res.send(response.data)
        
    }).catch(error => console.log(error));


}

const deleteDrink = async (req,res)=>{
    let url= `${process.env.SERVER_URL}/deleteData`;
    let {strDrink} = req.params.body;
    
    DrinksData.deleteOne({strDrink:strDrink},(error,data)=>{
      await axios.delete(url).then(response=>{
    
            res.send(response.data)
        
    }).catch(error => console.log(error));

    });


}

const updateDrink = async(req,res)=>{
    let url= `${process.env.SERVER_URL}/updateData`;
    let {strDrink,strDrinkThumb} = req.params.body;
    
    DrinksData.deleteOne({strDrink:strDrink},(error,data)=>{
      await axios.put(url).then(response=>{
        if(data.length>0){
            res.send(respons.error)
        }else{
            data[0].strDrink= strDrink;
            data[0].strDrinkThumb= strDrinkThumb;
            data.save();
            res.send(response.data)
           
        }
            
    })

    });
}

module.exports= {createDrink,getdrinksfav,deleteDrink,updateDrink};