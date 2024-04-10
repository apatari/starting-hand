
import React, { useEffect, useState } from 'react';

import { Button, Row, Col, Form } from 'react-bootstrap';
import CardDisplay from './practiceComps/CardDisplay';

import Guesses from './Guesses';
import Position from './Position';

function Practice() {

    const [cards, setCards] = useState([])
    const [deckId, setDeckId] = useState("")
    const [result, setResult] = useState("")
    const [showGuessButtons, setShowGuessButtons] = useState(false)
    const [streak, setStreak] = useState(0)
    const [pos, setPos] = useState(0)
    const [randomize, setRandomize] = useState(false)
    const [usingCustom, setUsingCustom] = useState(false)

    const RANGES_LENGTH = 6

    useEffect(() => {
        
        fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => setDeckId(data.deck_id))
    }, [])

    const shuffleCards = () => fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/shuffle/`)

    const handleDrawClick = () => {
        setResult("")
        shuffleCards().then(drawCards)
        setShowGuessButtons(true)
    }   

    const drawCards = () => {

        if (randomize) {
            setPos(Math.floor(Math.random() * RANGES_LENGTH))
        }
        
        fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => setCards(data.cards))
    }

    const handleRandomizeClick = () => {
        setRandomize(current => !current)
    }

    const handleCustomRangeClick = () => {
        setUsingCustom(current => !current)
    }
    

    return (
        <div>
            <Col>
                <Row className='p-2' >
                    <h2 className='m-3' >Starting Hand Practice - 6max</h2>
                </Row>
                <Row className='p-2 fs-5' >
                   
                    <Col className='ms-3  d-flex' md={1} >
                        <div className=' my-auto'>

                            <Button className='ms-auto' onClick={handleDrawClick} >Draw</Button>
                        </div>
                    </Col>
                    <Col  className='' md={4} >
                        <Position usingCustom={usingCustom} pos={pos} setPos={setPos} randomize={randomize}/> 
                    </Col>
                    <Col md={3}  >
                        <Form.Switch 
                            label={"Randomize Position"}
                            checked={randomize}
                            onChange={handleRandomizeClick}
                        />
                    </Col>
                    <Col md={2}>
                        {usingCustom
                        ? <Button onClick={handleCustomRangeClick} variant='secondary' >Custom Range</Button>
                        :<Button onClick={handleCustomRangeClick}  >Custom Range</Button>}
                        
                    </Col>
                    
                    
                    
                </Row>
                <Row className='p-2 m-3' >
                    <Col md={1} ></Col>
                    <Col >
                        <Row className='bg-warning' >  
                        <Col>
                        
                            <Guesses 
                                cards={cards} 
                                setResult={setResult}
                                show={showGuessButtons}
                                setShowGuessButtons={setShowGuessButtons}
                                streak={streak}
                                setStreak={setStreak}
                                pos={pos}
                                />  
                        </Col>
                        <Col>
                            <h2 className='m-3' >{result}</h2>
                        </Col>
                            
                        </Row>
                        
                        <Row><CardDisplay cards={cards} /></Row>
                        <Row>
                            Current Streak: {streak}
                        
                        </Row>
 
                    </Col>
                    <Col md={5}></Col>
                </Row>
                        
            </Col>
        </div>
    )
}

export default Practice



   
