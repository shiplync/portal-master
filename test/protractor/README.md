Testing with protractor
===
## Installation
```
npm install -g protractor
webdriver-manager update
```
Make sure you have a version of the [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed.

Set the following environment variables
```
PROTRACTOR_CARRIER_EMAIL=string email for new carrier
PROTRACTOR_CARRIER_PASSWORD=string password for new carrier
PROTRACTOR_SHIPPER_EMAIL=string email for new shipper
PROTACTOR_SHIPPER_PASSOWRD=string password for new shipper
PROTRACTOR_VERIFIED_CARRIER_EMAIL=string email for carrier created by Django test setup
PROTRACTOR_VERIFIED_CARRIER_PASSWORD=string password for carrier created by Django test setup
PROTRACTOR_VERIFIED_SHIPPER_EMAIL=string email for shipper created by Django test setup
PROTRACTOR_VERIFIED_SHIPPER_PASSWORD=string password for shipper 
created by Django test setup
PROTRACTOR_APP_HOST=string password for app host ('http://localhost:9000 if running locally)
```
## Running the tests locally
On the backend run
```
./e2e.sh
```

Use
```
grunt serve
```

to serve the locally hosted portal.

Then inside test/protractor run
```
webdriver-manager start
```
to start selenium in one terminal
```
protractor conf.js
```
to run the E2E protractor tests in another terminal.

## Running the test on demoportal and portal
Can eventually change the URL to have the tests done on all servers, but right now doing locally due to not wanting everyone to get emails.
