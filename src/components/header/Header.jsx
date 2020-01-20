import React from 'react';
import '../../css/header.css';


const Header = () => {

    return (
        <header className="row w-100 position-relative">            
            <div className="col-3 p-0 header-bg">
                
            </div>           
            <div className="col-9 p-0 watch position relative">
               <a href="#about"> <i class="far fa-arrow-alt-circle-down fa-4x position-absolute"></i></a>
            </div> 
            <div className="position-absolute title">
                <p className="mb-1">
                    Ryan Fry-Nelson
                </p>
                <span className="sub">Web Developer</span>
            </div>             
        </header>
    )

}

export default Header;
