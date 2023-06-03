import React from 'react';
import Count from "../Count/Count";
interface Item {
    name: string,
    count: number,
    id: string,
    price: number
}

interface IOrder {
    order: string;
    items: Item[];
    onItemDelete: (name: string, id: string) => void;
    price: number;
}

const Order: React.FC<IOrder> = ({order, items, onItemDelete, price}) => {
    let priceCount: React.ReactNode;

    const itemsDetails = items.map((item) => {
        if(order === '') {
            if(item.count > 0) {
                return(
                    <div key={item.id} className="item-list">
                        <div>
                            {item.name}
                            <span> x{item.count}</span>
                            <div className="item-price"><b>{item.price} KGS</b></div>
                        </div>
                        <div>
                            <button type="button" className="item-delete" onClick={() => onItemDelete(item.name, item.id)}></button>
                        </div>
                    </div>
                );
            } else {
                return(
                    <div className="item-hidden"></div>
                );
            }
        }
    });

    if(order === '') {
        priceCount = <Count price={price}/>;
    }

    return (
        <div className="order-block">
            <h2 className="order-title">Order details:</h2>
            {order}
            {itemsDetails}
            {priceCount}
        </div>
    );
};

export default Order;