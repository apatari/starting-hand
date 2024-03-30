import React from "react";

function CardDisplay({ cards }) {
    return (
        <div className="p-2 bg-info" > <p>Cards:</p>
            {cards.map(card => <p key={card.code} >{card.code}</p>)}
        
        </div>
    )
}

export default CardDisplay