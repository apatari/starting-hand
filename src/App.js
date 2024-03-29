import React, { useEffect, useState } from 'react';
import './App.css';





function App() {

  const [card, setCard] = useState(null)
  const [deckId, setDeckId] = useState(null)

  useEffect(() => {
    fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => setDeckId(data.deck_id))
  }, [])



  return (
    <div className="App">
      {deckId}
    </div>
  );
}

export default App;
