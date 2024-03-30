
import React, { useEffect, useState } from 'react';

import { make_blank, make_range } from './helpers';
import { Button, Row, Col } from 'react-bootstrap';
import CardDisplay from './practiceComps/CardDisplay';

function Practice() {


    const [cards, setCards] = useState([])
    const [deckId, setDeckId] = useState("")

    useEffect(() => {
        
        fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => setDeckId(data.deck_id))
    }, [])


    const shuffleCards = () => fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/shuffle/`)

    const handleDrawClick = () => {
        shuffleCards().then(drawCards)
    }   

    const drawCards = () => {
        
        fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => setCards(data.cards))
    }


    return (
        <div>
            <Col>
                <Row className='p-2' >
                    <h2 className='m-3' >Starting Hand Practice</h2>
                </Row>
                <Row className='p-2' >
                    <Col md={2}></Col>
                    <Col className='d-flex'md={2} >
                        <Button className='' onClick={handleDrawClick} >Draw</Button>
                    </Col>
                    <Col  className='' md={3} >
                        Position: 
                    </Col>
                    <Col md={3} >
                        Current Streak:
                    </Col>
                    
                </Row>
                <Row className='p-2 m-3' >
                    <Col md={3} ></Col>
                    <Col>
                        <Row><CardDisplay cards={cards} /></Row>
                        <Row> <div  className='bg-warning'>Guess Buttons</div> </Row>
                        <Row> <div  className='bg-secondary'>Answer Here</div> </Row>
                        
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Col>
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

   
