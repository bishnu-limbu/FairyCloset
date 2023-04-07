import React from "react";
import Nav from './Nav'

const arr = ['Home', 'About', 'Contact', 'Service', 'Blogs',"Projects"]
const Header = ()=> {
    return (
        <div style={{display:"flex"}} className="Top">
            {
                arr.map((haawa)=>
                   <Nav item={haawa}/>
                )
            }
            {/* <Nav item="Home" ></Nav>
            <Nav item="ABOUT"></Nav>
            <Nav item="Contact"></Nav>
            <Nav item="Service"></Nav> */}

        </div>

    )
}
export default Header;