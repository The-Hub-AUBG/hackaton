import React from 'react';



export default function Navbar():JSX.Element {
  return (
    <div>
       <nav className="navbar">
    <ul className="navbar-nav">
      <li >
        <a href="#" className="nav-link">
        <img  className="svg-inline--fa"  src="https://img.icons8.com/cotton/64/000000/menu.png"/>
         
         
         
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">
        
          <span className="link-text">Page1</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">
          
          <span className="link-text">Page2</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">
          
          <span className="link-text">Page3</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">
        
          <span className="link-text">Page4</span>
        </a>
      </li>

      <li className="nav-item" id="themeButton">
        <a href="#" className="nav-link">
        
            
      
        
         
          <span className="link-text">Page5</span>
        </a>
      </li>
    </ul>
  </nav>

    </div>
  )
}


