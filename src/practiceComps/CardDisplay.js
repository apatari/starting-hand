import React from "react";
import CardImage from "./CardImage";

function CardDisplay({ cards }) {
    return (
        <div className="p-2 bg-info" > <p>Cards:</p>
            {cards.map(card => <CardImage key={card.code} card={card}/>)}
        
        </div>
    )
}

export default CardDisplay