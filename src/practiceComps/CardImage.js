import React from "react";
import { Card } from "react-bootstrap";

function CardImage({ card }) {
    return (
        <Card style={{width: '10rem'}} className="m-1 mx-auto" >
            <Card.Img src={card.image} alt={card.code} className="" />
        </Card>
        
    )
}

export default CardImage