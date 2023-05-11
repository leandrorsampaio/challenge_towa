import React from 'react';
import ButtonComponent from '../buttonComponent';
import './style.scss'

const Slides = (props) => {

    return (
        <>
            <div className='slideContent'>
                <div className='slideContent__info'>
                    <h2 className='slideContent__title'>{props.productTitle}</h2>
                    <p className='slideContent__text'>{props.productDescription}</p>
                    <div className='slideContent__buttons'>
                        <ButtonComponent buttonLink="#" buttonText="Learn more" hasIcon="true"></ButtonComponent>
                        <ButtonComponent buttonLink="#" buttonStyle="--secondary" buttonText="Contact"></ButtonComponent>
                    </div>
                </div>
                <img className='slideContent__image' src={props.productImage} alt={props.productDescription} />
            </div>

        </>
    );
};

export default Slides;
