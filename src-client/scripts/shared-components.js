const React = require('react')
const ACTIONS = require('./actions.js')
const AboutMeView = require('./about.js')
const ProcessView = require('./process.js')



const NavToHome = React.createClass({

  render: function(){

    return (
      <div className="profile-home-icon-container">
        <a onClick={ function(){ ACTIONS._routeTo('')} } href=""><i className="fa fa-home fa-4x profile-home-icon" aria-hidden="true"></i></a>
      </div>
    )
  }

})

module.exports = {
  NavToHome
}
