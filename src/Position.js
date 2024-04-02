import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

function Position({ pos, setPos }) {

    const handlePositionChange = (e) => {
        setPos(e.target.value)
    }    

    return (
        <div>
            <Row  >
                <Col className="d-flex" >
                    <strong className="ms-auto"  >Position:</strong> 
                </Col>
                <Col>
                <Form.Select onChange={handlePositionChange} aria-label="Default select example">
                    <option>-</option>
                    <option value="UTG">UTG</option>
                    <option value="MP">MP</option>
                    <option value="CO">CO</option>
                    <option value="BTN">BTN</option>
                    <option value="SB">SB</option>
                    <option value="BB">BB</option>
                </Form.Select>
                </Col>
            </Row>
             

        </div>
    )
}

export default Position