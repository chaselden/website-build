const Backbone = require('backbone');
const STORE = require('./store.js')
const $ = require('jquery')
const AboutMeView = require('./about.js')
const ProcessView = require('./process.js')
const AppViewController = require('./components-viewcontroller.js')
const ACTIONS = {

  _routeTo: function(){

      window.location.hash = '#'
  },

  _routeToProcess: function(evt){

      window.location.hash = '#'
  },

  routeHome: function(){
      window.location.hash = '/'
  },
}

module.exports = ACTIONS
