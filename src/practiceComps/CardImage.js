import React from "react";

function CardImage({ card }) {
    return (
        <img src={card.image} alt={card.code} />
    )
}

export default CardImage