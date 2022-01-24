import React, { Fragment } from 'react';

import './Carrito.css';

const CarritoCompras = (props) => {
    return (
        <Fragment className='carrito'>
            CarritoCompras {props.CarritoCompras.id} - CarritoCompras {props.CarritoCompras.title}
        </Fragment> 
    )
};

export default CarritoCompras;


