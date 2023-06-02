const mongoose =require('mongoose');
const driverSchema =require('../../models/Driver');

class DriverController{
    //show all
    async show(req,res){
        try {
            const drivers=  await driverSchema.find({});
            res.status(200).json(drivers);  
        } catch (error) {
            console.log(error);
            res.status(500).json({message:error.message})
        }
        
    }
    // // show detel
    async get_id(req,res){
        try {
            const {_id}=req.params;
            const driver =  await driverSchema.findById({_id});
            res.status(200).json(driver); 
        } catch (error) {
            console.log(error);
            res.status(500).json({message:error.message})
        }
    }

    async create(req,res){
        try{
          const driver =  await driverSchema.create(req.body);
          res.status(200).json(driver);
      
        }catch(error){
          console.log(error);
          res.status(500).json({message:error.message})
        }
      }

      async update(req,res){
        try {
            const {_id}=req.params;
            const driver =  await driverSchema.findByIdAndUpdate(_id,req.body);
            res.status(200).json(driver); 
            if(!driver){
                return res.status(404).json({message:`cannot find any driver with id ${_id}`})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({message:error.message})
        }
    }
      async delete(req,res){
        try {
            const {_id}=req.params;
            const driver =  await driverSchema.findByIdAndDelete(_id,req.body);
            res.status(200).json(driver); 
            if(!driver){
                return res.status(404).json({message:`cannot find any driver with id ${_id}`})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({message:error.message})
        }
    }
}
module.exports =new DriverController;
 