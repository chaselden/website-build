const React = require('react')
const ReactDOM = require('react-dom')
const {NavToHome} = require('./shared-components.js')
const ACTIONS = require('./actions.js')
const AboutMeView = require('./about.js')
const AppViewController = require('./components-viewcontroller.js')


class ProcessView extends React.Component {
   constructor(){
      super();
   }
    render(){
      return (
        <div className="my-process-page">
          <div className="process-header">
            <h1> CHAD &nbsp; HASELDEN</h1>
            {/* <a onClick={ function(){ ACTIONS.routeTo('')} } href=""><i className="fa fa-home fa-3x profile-home-icon" aria-hidden="true"></i></a> */}
            <a onClick={function(){ ACTIONS.routeTo('')}} href=""><h2>HOME</h2></a>
          </div>
          <div className="process-info">
            <h1>My &nbsp; Process :</h1>
            <p> BLAH BLAH BLAH </p>
          </div>
          <div className="page-footer">
            <a href="https://www.facebook.com/chad.haselden"><i className="fa fa-facebook-official fa-4x multi-icons" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/grapplehouser/"><i className="fa fa-instagram fa-4x multi-icons" aria-hidden="true"></i></a>
            <a href="https://twitter.com/grapplehouser"><i className="fa fa-twitter-square fa-4x multi-icons" aria-hidden="true"></i></a>
            <h1 className="copyright multi-icons">&#xa9; <strong><em>2016 &nbsp; GRAPPLEHOUSER &nbsp; STUDIOS</em></strong></h1>
          </div>
        </div>
      )
    }
}

module.exports = ProcessView
