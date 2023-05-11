import React from 'react';
import './style.scss'



const Slides = (props) => {

    return (
        <>

            <div className='slideContent'>
                <div className='slideContent__info'>
                    <h2 className='slideContent__title'>{props.productTitle}</h2>
                    <p className='slideContent__text'>{props.productDescription}</p>
                    <div className='slideContent__buttons'>
                        <button className='button'>Learn more</button>
                        <button className='button --secondary'>Contact</button>
                    </div>
                </div>
                <img className='slideContent__image' src={props.productImage} alt={props.productDescription} />
            </div>

        </>
    );
};

export default Slides;
