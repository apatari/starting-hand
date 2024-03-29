import React, { useEffect, useState } from 'react';
import './App.css';





function App() {

  

  const [cards, setCards] = useState([])
  const [deckId, setDeckId] = useState(null)

  useEffect(() => {
    fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => setDeckId(data.deck_id))
  }, [])

  const drawCard = () => {
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(res => res.json())
    .then(data => setCards(cards.concat(data.cards)))
  }


  return (
    <div className="App">
      {deckId}
      <button onClick={drawCard} >Draw</button>
      {cards.map(card => <p key={card.code} >{card.code}</p> )}
    </div>
  );
}

export default App;
