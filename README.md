shippers-portal
===============

##Installation
To install, first install node.js, NPM, and Ruby.
The node version has to be 0.12.0. It is recommended to install `nvm` via homebrew so you can control what version of node you are using.
If Ruby is giving you trouble with compass, it is a good idea to install another version of Ruby via homebrew (It is not recommended to use the machine default one). 

Then
```
gem install compass #for compiling sass
npm install -g grunt-cli
npm install -g bower
npm install
bower install
grunt
```

## Running the development server
```
grunt serve
```
## Building the sandbox build
The sandbox is where we test the current release
```
grunt sandbox 
```
Commit your changes with git and then
```
eb use shippers-portal-sandbox
eb deploy
```
This build can be built and run locally using
```
grunt serve:sandbox
```

## Building the demo build
The demo is what we let potential customers play with so they don't interfere with normal operations. This should be the current master branch.
```
grunt demo 
```
Commit your changes with git and then
```
eb use shippers-portal-demo 
eb deploy
```
This build can be built and run locally using
```
grunt serve:demo
```

## Building the production build
This is the current live site
```
grunt build
```
Commit your changes with git and then
```
eb use portal-master-env
eb deploy
```
This build can be built and run locally using
```
grunt serve:build
```

## Testing Mixpanel tracking
Mixpanel use it set by a angular config called "track". "Track" is set to 0
(false) by default on local builds to save us Mixpanel events (since they cost
$$). If you would like to turn it on pass 
```
--track=1
```
to grunt. E.g.
```
grunt serve --track=1
```

## Angularjs config variables
We are using grunt-ng-constant with a similar configuration to the one in this [article](http://mindthecode.com/how-to-use-environment-variables-in-your-angular-application), except we also have a 'demo' grunt task.
