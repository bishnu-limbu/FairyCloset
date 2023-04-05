import React from "react";
import Nav from './Nav'

const arr = ['Home', 'About', 'Contact', 'Service', 'Blogs']
const Header = ()=> {
    return (
        <div className="Top">
            {
                arr.map((element)=>
                   <Nav item={element}/>
                )
            }
            {/* <Nav item="Home" ></Nav>
            <Nav item="ABOUT"></Nav> */}
        </div>

    )
}
export default Header;