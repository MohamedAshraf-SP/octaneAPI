const express = require ("express")
const router = express.Router()
const accountRoute= require('./account/account');
const companyRoute = require("./company/company");
const carRoute = require("./cars/car");


//"/api"+'/'
 
 router.use('/account', accountRoute);
 router.use('/account/company', companyRoute);
 router.use('/account/company/car', carRoute);

  module.exports=router