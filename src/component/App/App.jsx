
import React, { useEffect, useState } from 'react';
import { Cards } from '../Cards/Cards';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.css';
import Data from '../../Data/Data.json'

function App() {
  const [cards, setCards] = useState(Data);
  const [statSarch, setSarch] = useState('');

  useEffect(()=> {
    if(!statSarch){
      setCards(Data)
    }

const newState = Data.filter((e)=>(e.name.toLowerCase()).includes(statSarch.toLowerCase()));
setCards(newState)
  }, [statSarch]);

  function getAnswer(numb) {
const n = numb % 100;
const n1 = numb % 10;
if (n > 10 && n < 20) return 'товаров';
if (n1 === 1) return 'товар';
if (n1 > 1 && n1 < 5) return 'товара';
if (n1 > 4 || !n1) return 'товаров';
  }
  
  return (
    <>
<Header setSarch={setSarch}/>
<main className='content contain'>
  {statSarch && <p>По запросу {statSarch} найдено {cards.length} {getAnswer(cards.length)}</p>}
<Cards cards={cards} />
</main>
<Footer/>
    </>
  );
}

export default App;
