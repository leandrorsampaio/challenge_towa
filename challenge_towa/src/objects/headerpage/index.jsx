import React from 'react';
import './style.scss'

const HeaderPage = () => {
    
    
    return (
        <>
           
            <header className='header'>
                <div className='header__inner'>

                    <div className='header__logo'>
                        <p className='header__logoText'>Towa Code Challenge</p>
                    </div>
                
                    <div className='header__profile'>
                        <div className='header__profileWrapper'>
                            <p className='header__profileText --name js-profileName'>Leandro Sampaio</p>
                            <p className='header__profileText --role'>Frontend Developer</p>
                        </div>
                    </div>

                </div>
            </header>
        </>
    );
};

export default HeaderPage;
