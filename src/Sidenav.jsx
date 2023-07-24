import React, { useState } from "react";    


import { IconContext } from "react-icons";

// ROUTING

import { Link,Outlet } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Sidenav.css";

export default function Sidenav() {
  const [sidebar] = useState(true);

 

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
       
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        
          <ul className="nav-menu-items">
        

            {SidebarData.map((item, index) => {
              return (
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Outlet />
      </IconContext.Provider>
    </>
  );
}
