
import React, { useEffect, useState } from 'react';

import { make_blank, make_range } from './helpers';
import { Button } from 'react-bootstrap';

function Practice() {
    return (
        <div>
            Practice
        </div>
    )
}

export default Practice

  // const [cards, setCards] = useState([])
  // const [deckId, setDeckId] = useState(null)

  // useEffect(() => {
  //   const range = make_range(['AK', 'AKs'])
  //   console.log(Object.keys(range).length)
  //   fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  //   .then(res => res.json())
  //   .then(data => setDeckId(data.deck_id))
  // }, [])

  // const drawCard = () => {
  
    
  //   fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  //   .then(res => res.json())
  //   .then(data => setCards(cards.concat(data.cards)))
  // }



 
      // {/* {deckId}
      // <Button onClick={drawCard} >Draw</Button>
      // {cards.map(card => <p key={card.code} >{card.code}</p> )} */}

   
