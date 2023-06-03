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
  const [order, setOrder] = useState(['Order is empty please! Please add some items!']);
  const [items, setItems] = useState([
      {name: 'Latte', count: 0, id: nanoid()},
      {name: 'Pasta', count: 0, id: nanoid()},
      {name: 'Pizza', count: 0, id: nanoid()},
      {name: 'Ice-cream', count: 0, id: nanoid()},
      {name: 'Fries', count: 0, id: nanoid()},
      {name: 'Juice', count: 0, id: nanoid()},
  ]);
  const [price, setPrice] = useState([0]);

  const itemBtns = items.map((ingredient, index) => {
     return(
         <div key={ingredient.id}>
             <button className="btn">
                 <img className="btn-img" alt={ingredient.name} src={ITEMS[index].image}/>
                 <span>
                     {ingredient.name}
                     <span className="btn-price"><b>Price: {ITEMS[index].price} KGS</b></span>
                 </span>
             </button>
         </div>
     );
  });


  return (
    <div className="App">
      <div className="order-block">
          <h2 className="order-title">Order details:</h2>
          {order[0]}
      </div>
      <div>
          <h2 className="items-title">Add items:</h2>
          {itemBtns}
      </div>
    </div>
  );
};

export default App;
