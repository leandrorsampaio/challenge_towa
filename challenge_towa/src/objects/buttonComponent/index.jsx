import React from 'react';
import { ReactComponent as IconArrrow } from '../../assets/icons/arrow.svg';
import './style.scss'

const buttonComponent = (props) => {



    return (
        <>
            <a href={props.buttonLink} className={(props.buttonStyle) ? 'button ' + props.buttonStyle : 'button' }>
                {props.buttonText}
                {props.hasIcon ? 
                    <IconArrrow className='button__icon' />
                : ''}
            </a>

        </>
    );
};

export default buttonComponent;
