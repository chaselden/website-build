const React = require('react')


class HomeView extends React.Component {
   constructor(){
      super();
   }
    render(){
      return (
        <div className="page-content">
        <div id="header-wrapper">
          <div className="page-header">
            <h1> CHAD &nbsp; HASELDEN</h1>
            <a href="#about" ><h1>ABOUT</h1></a>
            <a href="#process" ><h1>PROCESS</h1></a>
            <a href="mailto:chad@chaselden.com" data-hover="contact"><span><h1>CONTACT</h1></span></a>
          </div>
        </div>
          <div className="slideshow">
              <div className="artwork-header">
                <h2>Current  and  Past  Works></h2>
              </div>
              <table className="image-display">
              <tbody>
                <tr>
             			<th>
                    <img src={"../images/IMG_5963.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/IMG_5963.jpg"}/> */}
                      <h2>"Vines at Night" (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/transformation.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/transformation.jpg"}/> */}
                    <h2>"Transition"</h2>
                  </th>
                  <th>
                    <img src={"../images/angel.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/angel.jpg"}/> */}
                    <h2>"Ascension"</h2>
                  </th>
             			<th>
                    <img src={"../images/Aura ix.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/Aura ix.jpg"}/> */}
                    <h2>"Aura" (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/crumpled-circle.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/crumpled-circle.jpg"}/> */}
                    <h2>"Rough Around the Edges"</h2>
                  </th>
                  <th>
                    <img src={"../images/dreamscape.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/dreamscape.jpg"}/> */}
                    <h2>"Dreamscape"</h2>
                  </th>
                  <th>
                    <img src={"../images/Global Warming ix.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/dear-god.jpg"}/> */}
                    <h2>"Dear God..." (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/tree-moon.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/tree-moon.jpg"}/> */}
                    <h2>"Just Over the Horizon" (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/Warrior One ix.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/Warrior One ix.jpg"}/> */}
                    <h2>"Warrior One"</h2>
                  </th>
                  <th>
                    <img src={"../images/flowers.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/flowers.jpg"}/> */}
                    <h2>"In Full Bloom"</h2>
                  </th>
                  <th>
                    <img src={"../images/creep.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/creep.jpg"}/> */}
                    <h2>"Creep"</h2>
                  </th>
                  <th>
                    <img src={"../images/small-tree.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/small-tree.jpg"}/> */}
                    <h2>"Moon Dance" (*sold)</h2>
                  </th>
             			<th>
                    <img src={"../images/wing.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/wing.jpg"}/> */}
                    <h2>"Wing and a prayer" (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/ORB.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/ORB.jpg"}/> */}
                    <h2>"Cold-Hearted Orb"</h2>
                  </th>
                  <th>
                    <img src={"../images/OWL.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/OWL.jpg"}/> */}
                    <h2>"Descension of Fate"</h2>
                  </th>
                  <th>
                    <img src={"../images/REAPER.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/REAPER.jpg"}/> */}
                    <h2>"And Upon His Back Rode Death" (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/time.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/time.jpg"}/> */}
                    <h2>"Time Waits for No Man"</h2>
                  </th>
                  <th>
                    <img src={"../images/dark-tree.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/dark-tree.jpg"}/> */}
                    <h2>"Untitled Commission" (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/happy-tree.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/happy-tree.jpg"}/> */}
                    <h2>"Untitled Commission" (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/happy-tree-2.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/happy-tree-2.jpg"}/> */}
                    <h2>"Tree Detail" (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/gun.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/gun.jpg"}/> */}
                    <h2>"On Your Mark..." (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/Solidarity.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/Solidarity.jpg"}/> */}
                    <h2>"Power To the People"</h2>
                  </th>
                  <th>
                    <img src={"../images/mad.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/mad.jpg"}/> */}
                    <h2>"Failure To Communicate"</h2>
                  </th>
                  <th>
                    <img src={"../images/sleepy.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/sleepy.jpg"}/> */}
                    <h2>"Sleepy Hollow" (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/enigma.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/enigma.jpg"}/> */}
                    <h2>"Enigma" (*sold)</h2>
                  </th>
                  <th>
                    <img src={"../images/screaming-eagle.jpg"}/>
                    {/* <img src={"/Users/chadhaselden/website-build/public/images/screaming-eagle.jpg"}/> */}
                    <h2>*Currently in progress</h2>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
            <div className="slideshow">
                <div className="fab-header">
                  <h2>Table-Tops  and  Fabrication  Projects ></h2>
                </div>
                <table className="fabrication-display">
                <tbody>
                  <tr>
               			<th>
                      <img src={"../images/table1-1.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/table1-1.jpg"}/> */}
                      <h2>Copper Table-Top 1-1</h2>
                    </th>
                    <th>
                      <img src={"../images/table1-2.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/table1-2.jpg"}/> */}
                      <h2>Copper Table-Top 1-2</h2>
                    </th>
                    <th>
                      <img src={"../images/table1-3.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/table1-3.jpg"}/> */}
                      <h2>Copper Table-Top 1-3</h2>
                    </th>
               			<th>
                      <img src={"../images/table2-1.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/table2-1.jpg"}/> */}
                      <h2>Zinc Table-Top</h2>
                    </th>
                    <th>
                      <img src={"../images/table2-sideview.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/table2-sideview.jpg"}/> */}
                      <h2>Zinc Table-Top Side-View</h2>
                    </th>
                    <th>
                      <img src={"../images/table3-1.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/table3-1.jpg"}/> */}
                      <h2>Copper Table-Top 2-1</h2>
                    </th>
                    <th>
                       <img src={"../images/table3-2.jpg"}/>
                      {/* // <img src={"/Users/chadhaselden/website-build/public/images/table3-2.jpg"}/> */}
                      <h2>Copper Table-Top 2-2</h2>
                    </th>
                    <th>
                      <img src={"../images/table3-3.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/table3-3.jpg"}/> */}
                      <h2>Copper Table-Top 2-3</h2>
                    </th>
                    <th>
                      <img src={"../images/backsplash.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/backsplash.jpg"}/> */}
                      <h2>Copper Tile Backsplash</h2>
                    </th>
                    <th>
                      <img src={"../images/bamboo-1.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/bamboo-1.jpg"}/> */}
                      <h2>Commissioned Bamboo Butcherblock Kitchen-Cart 1-1</h2>
                    </th>
                    <th>
                      <img src={"../images/bamboo-2.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/bamboo-2.jpg"}/> */}
                      <h2>Commissioned Bamboo Butcherblock Kitchen-Cart 1-2</h2>
                    </th>
               			<th>
                      <img src={"../images/light-1.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/light-1.jpg"}/> */}
                      <h2>Commissioned Light Fixture for Restaurant 'Lotus'</h2>
                    </th>
                    <th>
                      <img src={"../images/light-bracket.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/light-bracket.jpg"}/> */}
                      <h2>Bracket for Hanging Light Fixture (detail of patina)</h2>
                    </th>
                    <th>
                      <img src={"../images/light-installed.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/light-installed.jpg"}/> */}
                      <h2>Light Fixture (installed)</h2>
                    </th>
                    <th>
                      <img src={"../images/heart.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/heart.jpg"}/> */}
                      <h2>Hand-Hammered Heart -Valentines Day Commission</h2>
                    </th>
                    <th>
                      <img src={"../images/menus.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/menus.jpg"}/> */}
                      <h2> Copper-Plated Steel Menus for Restaurant 'Fish'</h2>
                    </th>
                    <th>
                      <img src={"../images/room-divider panels.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/room-divider panels.jpg"}/> */}
                      <h2>Commissioned Panels for Room Divider</h2>
                    </th>
                    <th>
                      <img src={"../images/lollipop.jpg"}/>
                      {/* <img src={"/Users/chadhaselden/website-build/public/images/lollipop.jpg"}/> */}
                      <h2>Commissioned Sineage for Mural</h2>
                    </th>
                  </tr>
                </tbody>
              </table>
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

module.exports = HomeView
