// spec.js
describe('portal', function() {
    var path = require('path'),
      carrierEmail = browser.params.carrierEmail,
      carrierPassword = browser.params.carrierPassword,
      verifiedCarrierEmail = browser.params.verifiedCarrierEmail,
      verifiedCarrierPassword = browser.params.verifiedCarrierPassword,
      host = browser.params.host;

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
 
    /* test claim shipment */
    it('should have a carrier claim a shipment', function(){
        browser.wait(function(){
          return browser.driver.isElementPresent(by.css('.shipment-header-label'));
        },30000);
      // get first shipment header and click to go to that shipment
      element(by.css('.shipment-header-label')).click();
      // wait for  shipment info
        browser.wait(function(){
            return browser.driver.isElementPresent(by.css('#shipment-information'));
      },30000);
      // make sure claim shipment button is displayed
      expect($('#claim-shipment-button').isDisplayed()).toBeTruthy();
      // click claim shipment button
      element(by.id('claim-shipment-button')).click();
      // wait for a shipment claim status dialog 
      browser.wait(function(){
          return browser.driver.isElementPresent(by.css('.status'));
        },30000);
      // expect success msg
      expect($('#claim-shipment-success').isDisplayed()).toBeTruthy();
      // refresh current page and make sure you can no longer claim this
      // shipment
      currentUrl = browser.getCurrentUrl();
      browser.get(currentUrl);
      // wait for shipment info to load
      browser.wait(function(){
            return browser.driver.isElementPresent(by.css('#shipment-information'));
      },30000);

    });
    /* show you can claim another shipment */

    /* test unclaim shipment */
    it('should have a carrier unclaim a shipment', function(){
      browser.get(host+'/#/shipments/pending/carriers');
        browser.wait(function(){
          return browser.driver.isElementPresent(by.css('shipment-header-label'));
        },30000);
      // get first shipment header and click to go to that shipment
      element(by.css('.shipment-header-label')).click();
      //wait a second
      browser.driver.sleep(1000);
      // make sure you're on the single shipment page
      expect(browser.getTitle()).toEqual(host+'/#/singleShipment');
      // unclaim shipment
      element(by.id('unclaim-shipment-button')).click(); 
      // wait two seconds
      browser.driver.sleep(2000);
      //expect claiming shipment was success
      expect($('#unclaim-success').isDisplayed()).toBeTruthy();
    }); 

});
