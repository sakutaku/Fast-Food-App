import React from 'react';

interface ICount {
    price: number;
}
const Count: React.FC<ICount> = ({price}) => {
    return (
        <div className="total-price">Price: {price} KGS</div>
    );
};

export default Count;