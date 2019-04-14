import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Sidebar = () => (
  <div style={{ zIndex: -1}}>
    <div style={{ display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between', position: 'fixed',
    background: 'black', height: '140px', width: '10%'}}>
    </div>
    <nav style={{ display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between', position: 'fixed', height: '100%', width: '10%'}}>
        <div style={{ marginTop: 180,
          fontFamily: 'Alegreya SC', fontSize: "17px", display: 'flex',
          justifyContent: 'space-between', flexDirection: 'column',
          marginLeft: '15px'}}>
          <Link to='/' href="#top" style={{ textDecoration: 'none', color: 'black', marginTop: '10px' }}><div id="menuOptions" style={{  marginRight:50 }}>Home</div></Link>
          <Link to='/About' style={{ textDecoration: 'none', color: 'black', marginTop: '10px' }}><div id="menuOptions" style={{  marginRight:50 }}>About</div></Link>
          <Link to='/Quiz' href="#top" style={{ textDecoration: 'none', color: 'black', marginTop: '10px' }}><div id="menuOptions" style={{  marginRight:50 }}>Quiz</div></Link>
          <Link to='/Map' href="#top" style={{ textDecoration: 'none', color: 'black', marginTop: '10px' }}><div id="menuOptions" style={{  marginRight:50 }}>2D Map</div></Link>
          <a href="http://3dphilosophymap.surge.sh/" style={{ textDecoration: 'none', color: 'black', marginTop: '10px' }}><div id="menuOptions" style={{  marginRight:50 }}>3D Map</div></a>
        </div>
    </nav>
  </div>
)

export default Sidebar
