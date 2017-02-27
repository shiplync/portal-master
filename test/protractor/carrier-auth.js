// spec.js
describe('portal', function() {
    var path = require('path'),
      carrierEmail = browser.params.carrierEmail,
      carrierPassword = browser.params.carrierPassword,
      verifiedCarrierEmail = browser.params.verifiedCarrierEmail,
      verifiedCarrierPassword = browser.params.verifiedCarrierPassword,
      host = browser.params.host;

    it('should register carrier and take them to pending page', function() {
      browser.get('http://localhost:9000/#register/carrier');
      element(by.model('carrierData.firstName')).sendKeys('TestCarrierFirstName');
      element(by.model('carrierData.lastName')).sendKeys('TestCarrierLastName');
      element(by.model('carrierData.phone')).sendKeys('1111111111')
      element(by.model('carrierData.password')).sendKeys(carrierPassword);
      element(by.model('carrierData.email')).sendKeys(carrierEmail);
      element(by.model('carrierData.DOT')).sendKeys("11111");
      element(by.cssContainingText('option', 'Van')).click();
      element(by.id('carrier-reg-submit')).click();
      // sleep 30 seconds or until tos-modal shows 
      browser.wait(function(){
        return browser.driver.isElementPresent(by.id('tos-modal'));
      },30000);
      browser.driver.sleep(6000);

      // terms of service module is displayed
      // user cannot accept TOS without scrolling
      expect(element(by.id('accept-tos')).isEnabled()).toBeFalsy();

      //scroll to bottom of terms
        browser.executeScript('document.getElementById("modal-content").scrollTop = document.getElementById("modal-content").scrollHeight;').then(function () {
      // accept TOS
        element(by.id('accept-tos')).click(); 
        // sleep until pending page
        browser.wait(function(){
          return browser.driver.isElementPresent(by.id('unverified-user-page'));
        },30000);
        expect(browser.getTitle()).toEqual(host+'/#/pending');
          browser.executeScript('window.localStorage.clear()').then(function () {
            browser.get(host);
        })
      });
    });

  /* test login */
    it('should login carrier', function() {
      browser.executeScript('window.localStorage.clear()').then(function () {
          browser.driver.sleep(3000);
          browser.get(host+'/#login');
          element(by.model('loginUsername')).sendKeys(verifiedCarrierEmail);
          element(by.model('loginPassword')).sendKeys(verifiedCarrierPassword);
          element(by.css('.btn')).click();
          type = browser.executeScript("return window.localStorage.getItem('type');");
          token = browser.executeScript("return window.localStorage.getItem('token');");
          // sleep until pending page
          browser.wait(function(){
            return browser.driver.isElementPresent(by.css('.shipment-list-container .shipment-header'));
          },10000);
      });
    });
 });
