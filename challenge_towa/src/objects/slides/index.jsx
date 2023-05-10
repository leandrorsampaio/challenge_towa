import React from 'react';
import './style.scss'



const Slides = (props) => {

    return (
        <>

            <div>
                <div>
                    <h2>{props.productTitle}</h2>
                    <p>{props.productDescription}</p>
                    <button>Learn more</button>
                    <button>Contact</button>
                </div>
                <img src={props.productImage} alt={props.productDescription} />
            </div>

        </>
    );
};

export default Slides;
