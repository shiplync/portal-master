//Shipper auth tests
 describe('portal', function() {
    var path = require('path'),
      shipperEmail = browser.params.shipperEmail,
      shipperPassword = browser.params.shipperPassword,
      verifiedShipperEmail = browser.params.verifiedShipperEmail,
      verifiedShipperPassword = browser.params.verifiedShipperPassword,
      host = browser.params.host;

    // test shipper registration
     it('should register shipper and take them to pending page', function() {
      browser.get(host+'/#register/shipper');
      element(by.model('registerName')).sendKeys('Test Shipper');
      element(by.model('registerCompany')).sendKeys('Test Company');
      element(by.model('registerPhone')).sendKeys('8888888888')
      element(by.model('registerPassword')).sendKeys(shipperPassword);
      element(by.model('registerUsername')).sendKeys(shipperEmail);
      element(by.id('shipper-reg-submit')).click();
      
        browser.driver.sleep(6000);

          // user cannot accept TOS without scrolling
      expect(element(by.id('accept-tos')).isEnabled()).toBeFalsy();

      //scroll to bottom of terms
        browser.executeScript('document.getElementById("modal-content").scrollTop = document.getElementById("modal-content").scrollHeight;').then(function () {
          browser.driver.sleep(3000);
      // accept TOS
       element(by.id('accept-tos')).click(); 
       browser.driver.sleep(5000);

        pending = browser.executeScript("return window.localStorage.getItem('pending');");
        expect(pending).toBeTruthy;
       expect(browser.getTitle()).toEqual(host+'/#/pending');
        browser.executeScript("window.localStorage.clear();").then(function(){
        browser.get(host);
        browser.driver.sleep(3000);
        });
        })
    });

      // test shipper login 
       it('should login shipper', function() {
        browser.get(host);
        element(by.model('loginUsername')).sendKeys(verifiedShipperEmail);
        element(by.model('loginPassword')).sendKeys(verifiedShipperPassword);
        element(by.css('.btn')).click();
        type = browser.executeScript("return window.localStorage.getItem('type');");
        token = browser.executeScript("return window.localStorage.getItem('token');");
        expect(type).toBeTruthy;
        expect(token).toBeTruthy;
        browser.driver.sleep(5000);
      });
});
