
import React, { useEffect, useState } from 'react';

import { make_blank, make_range } from './helpers';
import { Button, Row, Col } from 'react-bootstrap';
import CardDisplay from './practiceComps/CardDisplay';
import { utgRange } from './range_templates';

function Practice() {


    const [cards, setCards] = useState([])
    const [deckId, setDeckId] = useState("")
    const [result, setResult] = useState("")

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
        setResult("TEST")
        fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => setCards(data.cards))
    }

    const checkRange = () => {
        let pairCode = cards[0].code[0] + cards[1].code[0]
        if (!Object.keys(range_template).includes(pairCode)) {
            pairCode = pairCode[1] + pairCode[0]
            
        }

        if (cards[0].suit === cards[1].suit) {
            pairCode += 's'
        }
        console.log(utgRange[pairCode])
    }

    const range_template = make_blank()



    return (
        <div>
            <Col>
                <Row className='p-2' >
                    <h2 className='m-3' >Starting Hand Practice - 6max</h2>
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
                <Row>
                    <Col className='d-flex' >
                        
                        <Button className='mx-auto' onClick={checkRange} >Check</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex' >
                    <h2 className='mx-auto' >{result}</h2>
                    </Col>
                </Row>
                        
            </Col>
        </div>
    )
}

export default Practice



   
