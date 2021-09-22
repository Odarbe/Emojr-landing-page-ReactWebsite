import React from 'react';

const Header = () => {
    return(
        <div className="header fixed-top bg-white p-2">
            <div className="col-12">
                <div className="container">
                    <div className="text-left">
                        <a href="https://emojr.netlify.app/">
                            <b className="logo">EMO</b><span>JR.</span>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Header;