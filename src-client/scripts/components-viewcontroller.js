const React = require('react')
const ACTIONS = require('./actions.js')
const ProcessView = require('./process.js')
const AboutMeView = require('./about.js')
const STORE = require('./store.js')
const {ItemsModel} = require('./models.js')

const AppViewController = React.createClass({
  getInitialState: function(){
      return STORE.getStoreData()
   },

  componentWillMount: function(){
    let self = this

    ACTIONS._routeTo(),
    ACTIONS._routeToProcess()

    STORE.onChange(function(){
        let updatedState = STORE.getStoreData()
        component.setState(updatedState)

    })
  },
  render: function(){
     console.log(this.state)
      switch(this.props.routedFrom) {

        case "AboutMeView":
          return <AboutMeView/>
          break;

        case "ProcessView":
          return <ProcessView/>
          break;
      }
  }
})

module.exports = AppViewController
