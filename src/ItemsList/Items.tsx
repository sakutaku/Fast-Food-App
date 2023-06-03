import React from 'react';

interface Item {
    name: string,
    count: number,
    id: string,
    price: number
}
interface ItemsConst {
    name: string,
    price: number,
    image: string,
}

interface IItemsList {
    items: Item[];
    onItemClick: (name: string, id: number) => void;
    itemsConst: ItemsConst[];
}

const ItemsList: React.FC<IItemsList> = ({items, onItemClick, itemsConst}) => {
    const itemBtns = items.map((item, index) => {
        return(
            <div key={item.id}>
                <button className="btn" onClick={() => onItemClick(item.name, index)}>
                    <img className="btn-img" alt={item.name} src={itemsConst[index].image}/>
                    <span>
                     {item.name}
                        <span className="btn-price"><b>Price: {itemsConst[index].price} KGS</b></span>
                 </span>
                </button>
            </div>
        );
    });

    return (
        <div>
            <h2 className="items-title">Add items:</h2>
            {itemBtns}
        </div>
    );
};

export default ItemsList;