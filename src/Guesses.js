import React from "react";
import { Button } from "react-bootstrap";
import { make_blank, make_range } from "./helpers";
import { utgRange } from "./range_templates";


function Guesses({ cards, setResult }) {

    const range_template = make_blank()

    const shouldRaise = () => {
        let pairCode = cards[0].code[0] + cards[1].code[0]
        if (!Object.keys(range_template).includes(pairCode)) {
            pairCode = pairCode[1] + pairCode[0]
            
        }

        if (cards[0].suit === cards[1].suit) {
            pairCode += 's'
        }
        return (utgRange[pairCode])
    }

        const handleFold = () => {
            if (shouldRaise() == false) {
                setResult("Correct")
            } else {
                setResult("Wrong")
            }
        }

        const handleRaise = () => {
            if (shouldRaise() == true) {
                setResult("Correct")
            } else {
                setResult("Wrong")
            }
        }


    return (
        <div className="" >
            <Button className="m-3 ms-4" onClick={handleFold} >Fold</Button>
            <Button className="m-3" onClick={handleRaise} >Raise</Button>
        </div>
    )
}

export default Guesses