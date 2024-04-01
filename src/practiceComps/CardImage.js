import React from "react";
import { Card } from "react-bootstrap";

function CardImage({ card }) {
    return (
        <Card style={{width: '10rem'}} >
            <Card.Img src={card.image} alt={card.code} />
        </Card>
        
    )
}

export default CardImage