exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['shipper-auth.js','shipper-shipments.js','shipper-profile.js','carrier-auth.js','carrier-profile.js'],
  params:{
    carrierEmail:process.env.PROTRACTOR_CARRIER_EMAIL,
    carrierPassword:process.env.PROTRACTOR_CARRIER_PASSWORD,
    shipperEmail:process.env.PROTRACTOR_SHIPPER_EMAIL,
    shipperPassword:process.env.PROTRACTOR_SHIPPER_PASSWORD,
    verifiedCarrierEmail:process.env.PROTRACTOR_VERIFIED_CARRIER_EMAIL,
    verifiedCarrierPassword:process.env.PROTRACTOR_VERIFIED_CARRIER_PASSWORD,
    verifiedShipperEmail:process.env.PROTRACTOR_VERIFIED_SHIPPER_EMAIL,
    verifiedShipperPassword:process.env.PROTRACTOR_VERIFIED_SHIPPER_PASSWORD,
    host:process.env.PROTRACTOR_APP_HOST
  }
}
console.log(exports.config.params);
