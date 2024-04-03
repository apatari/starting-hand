import React from "react";
import { Button } from "react-bootstrap";
import { make_blank, make_range } from "./helpers";
import { ranges } from "./range_templates";


function Guesses({ cards, setResult, show, setShowGuessButtons, pos, setStreak }) {

    const range_template = make_blank()

    const shouldRaise = () => {
        let pairCode = cards[0].code[0] + cards[1].code[0]
        if (!Object.keys(range_template).includes(pairCode)) {
            pairCode = pairCode[1] + pairCode[0]
            
        }

        if (cards[0].suit === cards[1].suit) {
            pairCode += 's'
        }
        return (ranges[pos][pairCode])
    }

        const handleFold = () => {
            setShowGuessButtons(false)
            if (shouldRaise() == false) {
                setResult("Correct - Fold")
                setStreak(current => current + 1)
            } else {
                setResult("Fold is Wrong")
                setStreak(0)
            }
        }

        const handleRaise = () => {
            setShowGuessButtons(false)
            if (shouldRaise() == true) {
                setResult("Correct - Raise")
                setStreak(current => current + 1)
            } else {
                setResult("Raise is Wrong")
                setStreak(0)
            }
        }

    if (show == false) {
        return (
            <div className="" >
                <Button className="m-3 ms-4" disabled >Fold</Button>
                <Button className="m-3" disabled >Raise</Button>
            </div>
        )
    }

    return (
        <div className="" >
            <Button className="m-3 ms-4" onClick={handleFold} >Fold</Button>
            <Button className="m-3" onClick={handleRaise} >Raise</Button>
        </div>
    )
}

export default Guesses