const express =require('express');
const router =express.Router();

const driverController = require('../controlers/driver/DriverController');
router.use('/create',driverController.create);
router.use('/show',driverController.show);
router.use('/update/:_id',driverController.update);
router.use('/delete/:_id',driverController.delete);
router.use('/id/:_id',driverController.get_id)


module.exports =router;