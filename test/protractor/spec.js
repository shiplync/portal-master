// spec.js
describe('portal', function() {
    var path = require('path');

   /* test registration */
   if (browser.params.register){
     it('should register shipper and take them to pending page', function() {
      browser.get('http://localhost:9000/#register');
      // click the register as shipper button
      element(by.css('#openShipperReg')).click();
      // expect registration form to be visible
      expect($('#shipper-reg-form').isDisplayed()).toBeTruthy();
      // expect carrier form not to be visible
      expect($('#carrier-reg-form').isDisplayed()).toBeFalsy();
      element(by.model('registerName')).sendKeys('Jennifer Rubinovitz');
      element(by.model('registerCompany')).sendKeys('Test Company');
      element(by.model('registerPhone')).sendKeys('8569063460')
      element(by.model('registerPassword')).sendKeys('testtest');
      element(by.model('registerUsername')).sendKeys("testshipper@rubinovitz.com");
      element(by.id('shipper-reg-submit')).click();
      // sleep and wait for redirect
      browser.driver.sleep(5000);
      expect(browser.getTitle()).toEqual('http://localhost:9000/#/pending');
      element(by.id('logout-pending')).click();
    });

    it('should register carrier and take them to pending page', function() {
      browser.get('http://localhost:9000/#register');
      // click the register as shipper button
      element(by.css('#openCarrierReg')).click();
      // expect carrier form to be visible
      expect($('#carrier-reg-form').isDisplayed()).toBeTruthy();
      // expect shipper form not to be visible
      expect($('#shipper-reg-form').isDisplayed()).toBeFalsy();
      element(by.model('firstName')).sendKeys('Jennifer');
      element(by.model('lastName')).sendKeys('Rubinovitz');
      element(by.model('phone')).sendKeys('8569063460')
      element(by.model('password')).sendKeys('testtest');
      element(by.model('email')).sendKeys("testcarrier@rubinovitz.com");
      element(by.model('DOT')).sendKeys("1234567");
      element(by.cssContainingText('option', 'Van')).click();
      fileToUpload = './profile-pic.jpg';
      absolutePath = path.resolve(__dirname, fileToUpload);
      $('input[type="file"]').sendKeys(absolutePath);
      element(by.id('carrier-reg-submit')).click();
      // sleep and wait for redirect
      browser.driver.sleep(5000);
      expect(browser.getTitle()).toEqual('http://localhost:9000/#/pending');
      element(by.id('logout-pending')).click();

    });
  }
  /* test login */
  if (browser.params.login){
      // test logins
       it('should login shipper', function() {
        browser.get('http://localhost:9000');
        element(by.model('loginUsername')).sendKeys("testshipper@rubinovitz.com");
        element(by.model('loginPassword')).sendKeys("testtest");
        element(by.css('.btn')).click();
        type = browser.executeScript("return window.localStorage.getItem('type');");
        token = browser.executeScript("return window.localStorage.getItem('token');");
        expect(type).toBeTruthy;
        expect(type).toBeTruthy;
        browser.driver.sleep(5000);
        expect(browser.getTitle()).toEqual('http://localhost:9000/#/pending');
        element(by.id('logout-pending')).click();
      });

     it('should login carrier', function() {
        browser.get('http://localhost:9000');
        element(by.model('loginUsername')).sendKeys("testcarrier@rubinovitz.com");
        element(by.model('loginPassword')).sendKeys("testtest");
        element(by.css('.btn')).click();
        type = browser.executeScript("return window.localStorage.getItem('type');");
        token = browser.executeScript("return window.localStorage.getItem('token');");
        expect(type != undefined);
        expect(token != undefined);
        browser.driver.sleep(5000);
        expect(browser.getTitle()).toEqual('http://localhost:9000/#/pending');
        element(by.id('logout-pending')).click();
      });
    }

});
