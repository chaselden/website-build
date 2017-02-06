const React = require('react')
const ReactDOM = require('react-dom')
const {NavToHome} = require('./shared-components.js')
const ACTIONS = require('./actions.js')
const ProcessView = require('./process.js')
const AppViewController = require('./components-viewcontroller.js')


class AboutMeView extends React.Component {
   constructor(){
      super();
   }
    render(){
      return (
          <div className="about-me-page">
            <div className="about-header">
              <h1> CHAD &nbsp; HASELDEN</h1>
              {/* <a onClick={ function(){ ACTIONS.routeTo('')} } href=""><i className="fa fa-home fa-3x profile-home-icon" aria-hidden="true"></i></a> */}
              <a onClick={function(){ ACTIONS.routeTo('')}} href=""><h2>HOME</h2></a>
            </div>
            <div className="about-me-info">
              <h1>WHO &nbsp; AM &nbsp; I ?</h1>
              <p>
                        I'm just your average artist,&nbsp; fabricator,&nbsp; front-end web developer,&nbsp; tattoo-collector,&nbsp; gym-rat,&nbsp;
                     dad,&nbsp; native&nbsp;South-Carolinian,&nbsp; part-time alchemist,&nbsp; and all-around nice-guy. Charleston has been my home for
                     the last 20 years and I wouldn't want it any other way. If you see something you'd like to purchase, or
                     if you'd like to discuss a commissioned piece, please feel free to contact me.
                     If you'd like to chat about any of the other pastimes listed above, that'd be cool too!
                     (&nbsp;but bring &nbsp;<a href="https://en.wikipedia.org/wiki/Pappy_Van_Winkle%27s_Family_Reserve">BOURBON </a>&nbsp;). Thanks!
              </p>
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

module.exports = AboutMeView
