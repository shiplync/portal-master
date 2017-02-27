/* Carrier profile tests
 * Note: if your tests fail after changing the password, your password might
 * stay as 'testtest2' and cause the rest of the tests after it to fail 
 */
 describe('portal carriers profile tests', function() {
    var path = require('path'),
      carrierEmail = browser.params.carrierEmail,
      carrierPassword = browser.params.shipperPassword,
      verifiedCarrierEmail = browser.params.verifiedCarrierEmail,
      verifiedCarrierPassword = browser.params.verifiedCarrierPassword,
      host = browser.params.host,
      newValues = {
        firstName:'testfirstname',
        lastName:'TestLastName',
        phone:'222-333-3333',
        email:'testcarrier3@rubinovitz.com',
        vehicle: '3',
        mcdot: '11111',
        newPassword: 'testtest2'
      },
      clearForm = function(){
        element(by.model('profile.firstName')).clear();
        element(by.model('profile.lastName')).clear();
        element(by.model('profile.phone')).clear();
        element(by.model('profile.mcdot')).clear();
        element(by.model('profile.email')).clear();
      },
      fillForm = function(data){
        element(by.model('profile.firstName')).sendKeys(data.firstName);
        element(by.model('profile.lastName')).sendKeys(data.lastName);
        element(by.model('profile.phone')).sendKeys(data.phone);
        element(by.model('profile.email')).sendKeys(data.email);
        element(by.model('profile.mcdot')).sendKeys(data.mcdot);
        element(by.css('#vehicle-type option[value="'+data.vehicle+'"]')).click();
        element(by.model('profile.currentPassword')).sendKeys(verifiedCarrierPassword);
        element(by.model('profile.newPassword')).sendKeys(newValues.newPassword);
      },
      // input expected data
      checkForm = function(data){
        expect(element(by.model('profile.firstName')).getAttribute('value')).toEqual(data.firstName);
        expect(element(by.model('profile.lastName')).getAttribute('value')).toEqual(data.lastName);
        expect(element(by.model('profile.phone')).getAttribute('value')).toEqual(data.phone);
        expect(element(by.model('profile.email')).getAttribute('value')).toEqual(data.email);
        expect(element(by.model('profile.mcdot')).getAttribute('value')).toEqual(data.mcdot);
        expect(element(by.model('profile.vehicle')).getAttribute('value')).toEqual(data.vehicle);

      }

      it('should login carrier', function() {
        browser.get(host+'/#login');
        browser.driver.sleep(3000);
        element(by.model('loginUsername')).sendKeys(verifiedCarrierEmail);
        element(by.model('loginPassword')).sendKeys(verifiedCarrierPassword);
        element(by.css('.btn')).click();
        browser.driver.sleep(3000);
        type = browser.executeScript("return window.localStorage.getItem('type');");
        token = browser.executeScript("return window.localStorage.getItem('token');");
        expect(type).toBeTruthy;
        expect(token).toBeTruthy;
      });
        
      // test carrier edit profile 
       it('should modify carrier profile', function() {
        browser.get(host);
        // get profile page
        browser.get(host+'/#/carriers/profile');
        // make sure profile form has loaded
        browser.wait(function(){
          return browser.driver.isElementPresent(by.id('profile-form'));
        },30000);
        // clear form
        clearForm();
      
        // fill form with new data
        fillForm(newValues);
        
        element(by.css('#profile-update-submit')).click();

        // make sure form has been processed
        browser.wait(function(){
          return browser.driver.isElementPresent(by.css('.status'));
        },30000);

        browser.sleep(5000);

        // make sure form has been processed
        browser.driver.findElements(by.css('.green')).
            then(function(elems) {
                expect(elems.length).toEqual(2);
            }
        ); 
        // get profile page
        browser.get(host+'/#/carriers/profile');
        // make sure profile form has loaded
        browser.wait(function(){
          return browser.driver.isElementPresent(by.id('profile-form'));
        },30000);

        // check form
        checkForm(newValues);
      });

     // check password change by changing password back
       it('should make sure carrier password was changed, and change it back to original', function() {
        // get profile page
        browser.get(host+'/#/carriers/profile');
            
        // make sure profile form has loaded
        browser.wait(function(){
            return browser.driver.isElementPresent(by.id('profile-form'));
        },30000);
        element(by.model('profile.currentPassword')).sendKeys(newValues.newPassword);
        element(by.model('profile.newPassword')).sendKeys(verifiedCarrierPassword);

        element(by.id('profile-update-submit')).click();

        // make sure form has been processed
        browser.wait(function(){
          return browser.driver.isElementPresent(by.css('.status'));
        },30000);

        browser.sleep(5000);

        // make sure all current updates were successful
        browser.driver.findElements(by.css('.green')).
            then(function(elems) {
                expect(elems.length).toEqual(3);
            }
        ); 

      });

       // test carrier upload photo
   /*    it('should upload carrier photo', function() {
          browser.get(host+'#/carriers/photo');
          // make sure profile upload is loaded or wait 30 secs
          browser.wait(function(){
                return browser.driver.isElementPresent(by.css('#profile-form'));
          },30000);
          // add photo to file input
          fileToUpload = './profile-pic.jpg';
          absolutePath = path.resolve(__dirname, fileToUpload);
          $('input[type="file"]').sendKeys(absolutePath);
          browser.wait(function(){
                return browser.driver.isElementPresent(by.css('#photo-upload-submit'));
          },30000); 
       
         element(by.id('photo-upload-submit')).click();

         browser.wait(function(){
                return browser.driver.isElementPresent(by.css('#profile-update-success'));
          },30000);
        
       }); */

 });
