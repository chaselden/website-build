const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
// const $ = require('jquery')
// const {NavToHome} = require('./shared-components.js')
// const AppViewController = require('./components-viewcontroller.js')
const AboutMeView = require('./about.js')
const ProcessView = require('./process.js')
const HomeView = require('./homeview.js')
// const ACTIONS = require('./actions.js')
// const STORE = require('./store.js')


const AppRouter = Backbone.Router.extend({
  routes: {
  "about" : "showAboutMeView",
  "process" : "showProcessView",
  '':"showHomeView"
  },

  showHomeView:function(){
       ReactDOM.render( <HomeView/>,  document.querySelector('#app-container'))
    },

  showAboutMeView:function(){
       ReactDOM.render( <AboutMeView/>,  document.querySelector('#app-container'))
    },

  showProcessView:function(){
       ReactDOM.render( <ProcessView/>,  document.querySelector('#app-container'))
    },

  initialize: function() {

      Backbone.history.start()
  }
})
new AppRouter()
