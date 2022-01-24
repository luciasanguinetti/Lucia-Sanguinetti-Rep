import React, { useState } from 'react';

const ContadorCarrito = () => {
    const [count, setCount] = useState(0);
    const onClick = () => {
        setCount(count + 1);
    }  
    return (
        <div>
            <span>{count}</span>
            <button onClick={onClick}>Agregar</button>
        </div>
    )
};

export default ContadorCarrito;