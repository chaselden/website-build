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
            <a href=""><h2>HOME</h2></a>
          </div>
          <div className="process-info">
            <h1>MY &nbsp; PROCESS :</h1>
            <p>  Learning to work with copper has been a long series of trial and error. In fact, some of the "errors" have led to
               unexpected outcomes and desireable effects that I now use regularly. Most of my pieces start with a sheet of standard roofing copper. After it's
               cut, folded, and fitted to the desired space or application, I go to work. All images and patterns are original drawings designed by yours truly,
               and are burned, etched, engraved, patinaed, scraped, scratched, and/or beaten into the copper by hand , by me. If you have an idea or design
                application of your own, let's talk about it. I love a challenge. </p>

               <h1> "Make &nbsp; EVERYTHING &nbsp; You(r) &nbsp; Own"</h1>

          </div>
          <div className="page-footer">
            <a href="https://www.facebook.com/chad.haselden"><i className="fa fa-facebook-official fa-4x multi-icons" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/grapplehouser/"><i className="fa fa-instagram fa-4x multi-icons" aria-hidden="true"></i></a>
            <a href="https://twitter.com/grapplehouser"><i className="fa fa-twitter-square fa-4x multi-icons" aria-hidden="true"></i></a>
            <h1 className="copyright multi-icons">&#xa9; <strong><em>2016 &nbsp; GENUINE-ARTICLE &nbsp; STUDIOS</em></strong></h1>
          </div>
        </div>
      )
    }
}

module.exports = ProcessView
