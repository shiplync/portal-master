/* Shipper profile tests
 *  Note: if your tests fail after changing the password, your password might
 * stay as 'testtest2' and cause the rest of the tests after it to fail
 */
 describe('portal shippers profile tests', function() {
    var path = require('path'),
      shipperEmail = browser.params.shipperEmail,
      shipperPassword = browser.params.shipperPassword,
      verifiedShipperEmail = browser.params.verifiedShipperEmail,
      verifiedShipperPassword = browser.params.verifiedShipperPassword,
      host = browser.params.host,
      newValues = {
        name:'Test Name',
        company:'Test Company',
        phone:'222-333-3333',
        email:'test@rubinovitz.com',
        newPassword: 'testtest2'
      },
      clearForm = function(){
        element(by.model('profile.name')).clear()
        element(by.model('profile.phone')).clear();
        element(by.model('profile.company')).clear();
        element(by.model('profile.email')).clear();
      },
      fillForm = function(data){
        element(by.model('profile.name')).sendKeys(data.name);
        element(by.model('profile.phone')).sendKeys(data.phone);
        element(by.model('profile.company')).sendKeys(data.company);
        element(by.model('profile.email')).sendKeys(data.email);
        element(by.model('profile.currentPassword')).sendKeys(verifiedShipperPassword);
        element(by.model('profile.newPassword')).sendKeys(newValues.newPassword);
      },
      // input expected data
      checkForm = function(data){
        expect(element(by.model('profile.name')).getAttribute('value')).toEqual(data.name);
        expect(element(by.model('profile.phone')).getAttribute('value')).toEqual(data.phone);
        expect(element(by.model('profile.company')).getAttribute('value')).toEqual(data.company);
        expect(element(by.model('profile.email')).getAttribute('value')).toEqual(data.email);
      }

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

      // test shipper edit profile 
       it('should modify shipper profile', function() {
        
            // get profile page
            browser.get(host+'/#/shippers/profile');
            
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
            
            browser.sleep(3000);

            // expect status is success status
            expect($('#profile-update-success').isDisplayed()).toBeTruthy();
            
            browser.sleep(3000);

            expect(element(by.id('password-update-success')).isDisplayed()).toBeTruthy();

            // get profile page
            browser.get(host+'/#/shippers/profile');
            browser.driver.sleep(3000);

            // make sure profile form has loaded
            browser.wait(function(){
              return $('#profile-form').isDisplayed();
            },30000);

            // check form
            checkForm(newValues)
      });

       // check password change by changing password back
       it('should make sure shipper password was changed, and change it back to original', function() {
        // get profile page
        browser.get(host+'/#/shippers/profile');
            
        // make sure profile form has loaded
        browser.wait(function(){
            return browser.driver.isElementPresent(by.id('profile-form'));
        },30000);
        element(by.model('profile.currentPassword')).sendKeys(newValues.newPassword);
        element(by.model('profile.newPassword')).sendKeys(verifiedShipperPassword);

        element(by.id('profile-update-submit')).click();

        
        // make sure form has been processed
        browser.wait(function(){
          return browser.driver.isElementPresent(by.css('.status'));
        },30000);
          browser.sleep(3000);
         expect(element(by.id('profile-update-success')).isDisplayed()).toBeTruthy();
         
         browser.sleep(3000);

        expect(element(by.id('password-update-success')).isDisplayed()).toBeTruthy();

      });

});
