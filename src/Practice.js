
import React, { useEffect, useState } from 'react';

import { make_blank, make_range } from './helpers';
import { Button, Row, Col } from 'react-bootstrap';
import CardDisplay from './practiceComps/CardDisplay';
import { utgRange } from './range_templates';
import Guesses from './Guesses';

function Practice() {

    const [cards, setCards] = useState([])
    const [deckId, setDeckId] = useState("")
    const [result, setResult] = useState(" ")
    const [showGuessButtons, setShowGuessButtons] = useState(false)

    useEffect(() => {
        
        fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => setDeckId(data.deck_id))
    }, [])

    const shuffleCards = () => fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/shuffle/`)

    const handleDrawClick = () => {
        shuffleCards().then(drawCards)
        setShowGuessButtons(true)
    }   

    const drawCards = () => {
        setResult("")
        fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => setCards(data.cards))
    }
    

    return (
        <div>
            <Col>
                <Row className='p-2' >
                    <h2 className='m-3' >Starting Hand Practice - 6max</h2>
                </Row>
                <Row className='p-2' >
                    <Col md={2}></Col>
                    <Col className='d-flex'md={1} >
                        <Button className='' onClick={handleDrawClick} >Draw</Button>
                    </Col>
                    <Col  className='' md={2} >
                        Position: 
                    </Col>
                    <Col md={2} >
                        Current Streak:
                    </Col>
                    
                    
                </Row>
                <Row className='p-2 m-3' >
                    <Col md={2} ></Col>
                    <Col >
                        <Row className='bg-warning' >  
                        <Col>
                        
                            <Guesses 
                                cards={cards} 
                                setResult={setResult}
                                show={showGuessButtons}
                                setShowGuessButtons={setShowGuessButtons}
                                />  
                        </Col>
                        <Col>
                            <h2 className='m-3' >{result}</h2>
                        </Col>
                            
                        </Row>
                        
                        <Row><CardDisplay cards={cards} /></Row>
 
                    </Col>
                    <Col md={5}></Col>
                </Row>
                        
            </Col>
        </div>
    )
}

export default Practice



   
