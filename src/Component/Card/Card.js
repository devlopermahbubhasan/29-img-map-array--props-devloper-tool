import React from 'react';
import './Card.css'
const Card = (props) => {
    
    return (
        <div>
            <div className='card'>
                <div className='img-card'>
                    <img className='size' src={props.download_url} alt="random img" />
                    <div className="img-titel">
                        <h5>Author =  {props.author}</h5>
                    </div>
                    <div className='id'>
                        <p>Serial : {props.id}</p>
                    </div>
                    <div className='info'>
                        <div className='View'>
                            <a href={props.download_url}>View</a>
                        </div>
                        <div className='down'>
                            <a href={props.url}>Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;    