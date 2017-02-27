//Shipment posting and updating tests
 describe('portal', function() {
    var path = require('path'),
      shipperEmail = browser.params.shipperEmail,
      shipperPassword = browser.params.shipperPassword,
      verifiedShipperEmail = browser.params.verifiedShipperEmail,
      verifiedShipperPassword = browser.params.verifiedShipperPassword,
      host = browser.params.host;

    var clearForm = function(){
     
      // weight details field
      element(by.model('shipment.weight')).clear();

      element(by.model('shipment.palletHeight')).clear()
      element(by.model('shipment.palletLength')).clear();
      element(by.model('shipment.palletWidth')).clear();
      element(by.model('shipment.palletNumber')).clear();
      // extra details field
      element(by.model('shipment.extraDetails')).clear();

      // pickup details
      element(by.model('shipment.pickup.address.locationId')).clear();
      element(by.model('shipment.pickup.phone')).clear();
      // clear the autofill first
      element(by.model('shipment.pickup.email')).clear();
      element(by.model('shipment.pickup.address.line1')).clear();
      element(by.model('shipment.pickup.address.line2')).clear();
      element(by.model('shipment.pickup.address.city')).clear();
      element(by.model('shipment.pickup.address.zipCode')).clear();
      
      // delivery details
      element(by.model('shipment.delivery.address.locationId')).clear();
      element(by.model('shipment.delivery.phone')).clear();
      element(by.model('shipment.delivery.email')).clear();
      element(by.model('shipment.delivery.address.line1')).clear();
      element(by.model('shipment.delivery.address.line2')).clear();
      element(by.model('shipment.delivery.address.city')).clear();
      element(by.model('shipment.delivery.address.zipCode')).clear();

    }

    /* Fills create shipment form 
     * args: either original or modified
    */
    var fillForm = function(locationObj, modify){
      var delivery = locationObj.delivery;
      var pickUp = locationObj.pickup;  

      // vehicle field
      element(by.css('#vehicle-type option[value="'+locationObj.vehicle+'"]')).click();
     
      // weight details field
      element(by.model('shipment.weight')).sendKeys(locationObj.weight);
    
      //palletized field
      if (locationObj.palletized){
        element(by.css('#palletized-true')).click();
      } else {
        element(by.css('#palletized-false')).click();
      }

      element(by.model('shipment.palletHeight')).sendKeys(locationObj.palletHeight);
      element(by.model('shipment.palletLength')).sendKeys(locationObj.palletLength);
      element(by.model('shipment.palletWidth')).sendKeys(locationObj.palletWidth);

      element(by.model('shipment.palletNumber')).sendKeys(locationObj.palletNumber);

      // extra details field
      element(by.model('shipment.extraDetails')).sendKeys(locationObj.extraDetails);

      // time fields
      element(by.css('#pickup-tz option[value="'+pickUp.timezone+'"]')).click();
      element(by.css('#delivery-tz option[value="'+delivery.timezone+'"]')).click();
      if (!modify){ 
        element(by.model('shipment.pickup.newLocationName')).sendKeys(pickUp.newLocationName);
      }
      
      element(by.model('shipment.pickup.address.locationId')).sendKeys(pickUp.address.locationId);
      element(by.model('shipment.pickup.phone')).sendKeys(pickUp.phone);
      // clear the autofill first
      element(by.model('shipment.pickup.email')).clear();
      element(by.model('shipment.pickup.email')).sendKeys(pickUp.email);
      element(by.model('shipment.pickup.address.line1')).sendKeys(pickUp.address.line1);
      element(by.model('shipment.pickup.address.line2')).sendKeys(pickUp.address.line2);
      element(by.model('shipment.pickup.address.city')).sendKeys(pickUp.address.city);
      element(by.css('#pickup-address-state option[value="'+pickUp.address.state+'"]')).click();
      element(by.model('shipment.pickup.address.zipCode')).sendKeys(pickUp.address.zipCode);
      
      if (!modify){ 
        // delivery details
        element(by.model('shipment.delivery.newLocationName')).sendKeys(delivery.newLocationName);
      }

      element(by.model('shipment.delivery.address.locationId')).sendKeys(delivery.address.locationId);
      element(by.model('shipment.delivery.phone')).sendKeys(delivery.phone);
      element(by.model('shipment.delivery.email')).sendKeys(delivery.email);
      element(by.model('shipment.delivery.address.line1')).sendKeys(delivery.address.line1);
      element(by.model('shipment.delivery.address.line2')).sendKeys(delivery.address.line2);
      element(by.model('shipment.delivery.address.city')).sendKeys(delivery.address.city);
      element(by.css('#delivery-address-state option[value="'+delivery.address.state+'"]')).click();
      element(by.model('shipment.delivery.address.zipCode')).sendKeys(delivery.address.zipCode);
    } 
    
    /* check form against a location object */
    var checkForm = function(locationObj){
        
        var pickUp = locationObj.pickup;
        var delivery = locationObj.delivery;
        
        expect(element(by.model('shipment.vehicleType')).getAttribute('value')).toEqual(locationObj.vehicle);
        expect(element(by.model('shipment.pickup.phone')).getAttribute('value')).toEqual(pickUp.phone);
        expect(element(by.model('shipment.pickup.email')).getAttribute('value')).toEqual(pickUp.email);
        expect(element(by.model('shipment.weight')).getAttribute('value')).toEqual(locationObj.weight);
        //expect(element(by.model('shipment.palletized')).getAttribute('value')).toEqual(locationObj.palletized);
        expect(element(by.model('shipment.palletHeight')).getAttribute('value')).toEqual(locationObj.palletHeight);
        expect(element(by.model('shipment.palletWidth')).getAttribute('value')).toEqual(locationObj.palletWidth);
        expect(element(by.model('shipment.palletLength')).getAttribute('value')).toEqual(locationObj.palletLength);
        expect(element(by.model('shipment.palletNumber')).getAttribute('value')).toEqual(locationObj.palletNumber);
        expect(element(by.model('shipment.pickup.address.line1')).getAttribute('value')).toEqual(pickUp.address.line1);
        expect(element(by.model('shipment.pickup.address.line2')).getAttribute('value')).toEqual(pickUp.address.line2);
        expect(element(by.model('shipment.pickup.address.city')).getAttribute('value')).toEqual(pickUp.address.city);
        expect(element(by.css('#pickup-address-state')).getAttribute('value')).toEqual(pickUp.address.state);
        expect(element(by.model('shipment.pickup.address.zipCode')).getAttribute('value')).toEqual(pickUp.address.zipCode);
        
        // delivery details
        expect(element(by.model('shipment.delivery.phone')).getAttribute('value')).toEqual(delivery.phone);
        expect(element(by.model('shipment.delivery.email')).getAttribute('value')).toEqual(delivery.email);
        expect(element(by.model('shipment.delivery.address.line1')).getAttribute('value')).toEqual(delivery.address.line1);
        expect(element(by.model('shipment.delivery.address.line2')).getAttribute('value')).toEqual(delivery.address.line2);
        expect(element(by.model('shipment.delivery.address.city')).getAttribute('value')).toEqual(delivery.address.city);
        expect(element(by.css('#delivery-address-state')).getAttribute('value')).toEqual(delivery.address.state);
        expect(element(by.model('shipment.delivery.address.zipCode')).getAttribute('value')).toEqual(delivery.address.zipCode);
        
        // extra details field
        expect(element(by.model('shipment.extraDetails')).getAttribute('value')).toEqual(locationObj.extraDetails);
    }

    // TODO: modify times
    var testValues = {
      original:{
        vehicle:'2',
        extraDetails:'original extra details',
        weight: '500',
        palletized: true,
        palletNumber:'5',
        palletHeight:'20',
        palletWidth:'30',
        palletLength:'10',
        pickup:{
          phone:'9999999999',
          email:'testPickup@gmail.com',
          timezone:'US/Eastern',
          newLocationName: 'Test Pickup Company',
          address:{
            locationId:'Test Pickup Alias',
            line1:'214 W 29th St.',
            line2: 'Floor 5',
            city: 'New York',
            state:'NY',
            zipCode:'10001'
          }
        },
        delivery:{
          phone:'5555555555',
          email:'testDelivery@gmail.com',
          timezone:'US/Pacific',
          newLocationName: 'Test Delivery Company',
          address:{
            line1:'2714 4th St NW',
            line2: 'Unit 2',
            city: 'Albuquerque',
            state:'NM',
            zipCode:'87107',
            locationId:'Test Delivery Alias'
          }
        }
      },
      modified:{
        vehicle: '3',
        extraDetails:'modified extra details',
        weight: '300',
        palletized: true,
        palletHeight:'10',
        palletNumber:'23',
        palletWidth:'8',
        palletLength:'2',
        pickup:{
          phone:'1111111111',
          email:'modTestPickup@gmail.com',
          timezone:'US/Pacific',
          newLocationName: 'Modified Test Pickup Company',
          address:{
            locationId:'Modified Test Pickup Alias',
            line1:'1 Hacker Way',
            line2: 'Garage',
            city: 'Menlo Park',
            state:'CA',
            zipCode:'94025',
            locationId:'Modified Test Pickup Alias'
          }
        },
        delivery:{
          phone:'2222222222',
          email:'modTestDelivery@gmail.com',
          timezone:'US/Eastern',
          newLocationName: 'Test Delivery Company',
          address:{
            line1:'421 N 7th St',
            line2: 'Floor 5',
            city: 'Philadelphia',
            state:'PA',
            zipCode:'19123',
            locationId:'Modified Test Delivery Alias'
          }
        }

      }
    }; 
      // login shipper
     it('should login shipper shipper', function() {
          browser.get(host+'/#login');
          browser.driver.sleep(3000);
            element(by.model('loginUsername')).sendKeys(verifiedShipperEmail);
            element(by.model('loginPassword')).sendKeys(verifiedShipperPassword);
            element(by.css('.btn')).click();
            type = browser.executeScript("return window.localStorage.getItem('type');");
            token = browser.executeScript("return window.localStorage.getItem('token');");
            expect(type).toBeTruthy;
            expect(token).toBeTruthy;
            browser.driver.sleep(3000); 
      });


     // test posting of shipment
    it('should have a shipper post a shipment', function() {
          browser.get(host+'/#/shipments/add');
          browser.driver.sleep(3000);
          expect(browser.getTitle()).toEqual(host+'/#/shipments/add');
      
          // fill create shipment form
          fillForm(testValues.original, false);
          
          // submit form
          element(by.id('shipment-submit')).click();

          // wait 5 seconds for post to process
          browser.driver.sleep(3000);

          // make sure success alert is present
          expect(element(by.css('.alert-success')).isPresent()).toBeTruthy();
        
    });
      // make sure update shipment form matches
    it('should make sure past shipment was posted correctly', function() {
       
        // get update form 
        browser.get(host);
        browser.driver.sleep(3000);
        // click latest shipment
        element(by.css('.shipment-list-container .shipment-header')).click();
        // click mod button
        element(by.css('#edit-shipment')).click();
        browser.driver.sleep(2000);
        // check to make sure form is displaying the original values 
        checkForm(testValues.original);
       
    });

      // make sure you can post an update
      it('should modify a shipment', function() {
       
        // get update form 
        browser.get(host);
        browser.driver.sleep(3000);
        element(by.css('.shipment-list-container .shipment-header')).click();
        browser.driver.sleep(2000);
        element(by.css('#edit-shipment')).click();
        browser.driver.sleep(2000);
        // clear form
        clearForm();
        // modify all the values
        fillForm(testValues.modified, true);
       // submit form
        element(by.id('shipment-submit')).click();

        // wait 5 seconds for post to process
        browser.driver.sleep(5000);

        // make sure success alert is present
        expect(element(by.css('.alert-success')).isPresent()).toBeTruthy();
  
    });
      
      // recheck update form to make sure changes were made
    it('should make sure updated shipment was updated correctly', function() {
       
        // get update form 
        browser.get(host);
        element(by.css('.shipment-list-container .shipment-header')).click();
         browser.driver.sleep(2000);
        element(by.css('#edit-shipment')).click();
        browser.driver.sleep(2000);

        // check to make sure form is displaying the original values 
        checkForm(testValues.modified);
    });

     // test posting of shipment with new location after choosing old location
    it('should have a shipper post an old location to new locatino shipment', function() {
          browser.get(host+'/#/shipments/add');
          browser.driver.sleep(3000);
          expect(browser.getTitle()).toEqual(host+'/#/shipments/add');

          // change location to saved location and then new location again
          element(by.css('#pickup-location-name option[value="0"]')).click();
          browser.driver.sleep(2000);
          element(by.css('#pickup-location-name option[value=""]')).click();
          browser.driver.sleep(2000);
          // change location to saved location and then new location again
          element(by.css('#delivery-location-name option[value="1"]')).click();
          browser.driver.sleep(2000);
          element(by.css('#delivery-location-name option[value=""]')).click();
 

          // fill create shipment form
          fillForm(testValues.original, true);
          
          // submit form
          element(by.id('shipment-submit')).click();

          // wait 5 seconds for post to process
          browser.driver.sleep(3000);

          // make sure success alert is present
          expect(element(by.css('.alert-success')).isPresent()).toBeTruthy();
        
    });
      // make sure update shipment form matches matches old->new
    it('should make sure old location to new location shipment was posted correctly', function() {
       
        // get update form 
        browser.get(host);
        browser.driver.sleep(3000);
        // click latest shipment
        element.all(by.css('.shipment-list-container .shipment-header')).get(0).click();
        // click mod button
        element(by.css('#edit-shipment')).click();
        browser.driver.sleep(2000);
        // check to make sure form is displaying the original values 
        checkForm(testValues.original);
       
    });


    //TODO: make sure shippers can delete shipment
 });
