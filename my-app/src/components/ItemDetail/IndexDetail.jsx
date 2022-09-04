import React from 'react';
import './ItemDetail.css';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({data}) => {
    return(
        <div className='container'>
            <div className='detail'>
                <img className='detail__image' src={data.image} alt="" />
                <div className='content-between'>
                    <h1>{data.title}</h1>
                    <h6>{data.subtitle}</h6>
                    <h2>{data.price}</h2>
                    <Button variant="success">Buy it</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;