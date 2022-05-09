import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className='Card'>
            <div className="imgBox">
                <img src={props.img} alt='' />
            </div>
            <div className="Content">
                <div className='Title'><h2> {props.title} </h2></div>
                <div className='Details'><p> {props.details}</p></div>
            </div>
        </div>


    );
}