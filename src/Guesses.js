import React from "react";
import { Button } from "react-bootstrap";
import { make_blank, make_range } from "./helpers";
import { utgRange } from "./range_templates";


function Guesses({ cards }) {

    const range_template = make_blank()

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



    return (
        <div className="" >
            <Button className="m-3 ms-4" >Fold</Button>
            <Button className="m-3" >Raise</Button>
        </div>
    )
}

export default Guesses