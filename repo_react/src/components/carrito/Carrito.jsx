import React from 'React';

import ProductIcon1 from 'src/assets/combinado clasico 15 piezas';
import ProductIcon2 from 'src/assets/Niguiri';
import ProductIcon3 from 'src/assets/Sashimi';
import ProductIcon4 from 'src/assets/Emigrante';
import ProductIcon5 from 'src/assets/Negroni';

import Carrito from '../carrito/CarittoCompras';

const CarritoCompras = () => {
    const compras  = [
        {id: 1, title: 'Combinado 15 piezas', icon: ProductIcon1};
        {id: 2; title: 'Niguiri'; icon: ProductIcon2};
        {id: 3; title: 'Sashimi'; icon: ProductIcon3};
        {id: 4; title: 'Enmigrante'; icon: ProductIcon4};
        {id: 5; title: 'Negroni'; icon: ProductIcon5};
    ]; 
    
    return (
        compras.map(CarritoCompras => <CarritoCompras CarritoCompras={CarritoCompras} key={CarritoCompras.id} />)
    )
};

export default CarritoCompras;
