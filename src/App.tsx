import React from 'react';
import {useState} from "react";
import {nanoid} from "nanoid";
import './App.css';
import LatteImage from './assets/latte.png';
import PastaImage from './assets/pasta.png';
import PizzaImage from './assets/pizza.png';
import IceCreamImage from './assets/icecream.png';
import FriesImage from './assets/fries.png';
import JuiceImage from './assets/juice.png';
import Order from "./Order/Order";
import ItemsList from "./ItemsList/Items";

interface Items {
    name: string,
    price: number,
    image: string,
}

const ITEMS: Items[] = [
    {name: 'Latte', price: 150, image: LatteImage},
    {name: 'Pasta', price: 300, image: PastaImage},
    {name: 'Pizza', price: 350, image: PizzaImage},
    {name: 'Ice-cream', price: 100, image: IceCreamImage},
    {name: 'Fries', price: 160, image: FriesImage},
    {name: 'Juice', price: 90, image: JuiceImage},
];

const App = ()  => {
  const [order, setOrder] = useState(['Order is empty! Please add some items!']);
  const [items, setItems] = useState([
      {name: 'Latte', count: 0, id: nanoid(), price: 150},
      {name: 'Pasta', count: 0, id: nanoid(), price: 300},
      {name: 'Pizza', count: 0, id: nanoid(), price: 350},
      {name: 'Ice-cream', count: 0, id: nanoid(), price: 100},
      {name: 'Fries', count: 0, id: nanoid(), price: 160},
      {name: 'Juice', count: 0, id: nanoid(), price: 90},
  ]);
  const [price, setPrice] = useState([0]);

  const onItemClick = (name: string, id:number) => {
      const orderCopy = [...order];
      orderCopy[0] = '';

      const itemsCopy = [...items];
      const itemsObjCopy = {...itemsCopy[id]};

      const priceCopy = [...price];
      ITEMS.map(item => {
          if(item.name === name) {
              priceCopy[0] = priceCopy[0] + item.price;}
      });

      itemsCopy.map(item => {
         if(item.name === name) {
             if(item.count === 0) {
                 ITEMS.map(sv => {
                     if(sv.name === name) {
                         itemsObjCopy.price = sv.price;
                     }
                 })
             }
         }
      });
      itemsObjCopy.count = itemsObjCopy.count + 1;

      if(itemsObjCopy.count > 1) {
          itemsObjCopy.price = itemsObjCopy.price + ITEMS[id].price;
      }

      itemsCopy[id] = itemsObjCopy;

      setPrice(priceCopy);
      setItems(itemsCopy);
      setOrder(orderCopy);
  };

  const onItemDelete = (name: string, id: string) => {
      const itemsCopy = [...items];
      const priceCopy = [...price];
      const index = items.findIndex(item => {
          return item.id === id;
      });
      priceCopy[0] = priceCopy[0] - itemsCopy[index].price;

      itemsCopy.map(item => {
          if(name === item.name) {
              item.count = 0;
          }
      });

      setPrice(priceCopy);
      setItems(itemsCopy);
  };


  return (
    <div className="App">
        <Order order={order[0]} items={items} onItemDelete={onItemDelete} price={price[0]}/>
        <ItemsList items={items} onItemClick={onItemClick} itemsConst={ITEMS}/>
    </div>
  );
};

export default App;
