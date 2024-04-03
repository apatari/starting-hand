import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { ranges } from "./range_templates";

function Position({ pos, setPos }) {

    const RANGES_LENGTH = 6
    

    const handleLeftClick = () => {
        if (pos < 1) {
            setPos(RANGES_LENGTH - 1)
        } else {setPos(current => current - 1)}
        
    }

    const handleRightClick = () => {
        if (pos >= RANGES_LENGTH - 1) {
            setPos(0)
        } else {setPos(current => current + 1)}
    }
    
    const rangeNames = ["UTG", "MP", "CO", "BTN", "SB", "BB"]

    return (
        <div>
            <Row  >
                <Col>                     
                    <div className="text-end"  >Position:</div> 
                    
                </Col>
                <Col>
                        
                    <ButtonGroup>

                        <Button onClick={handleLeftClick} >{"<-"}</Button>

                        <Button variant="info" disabled style={{width: "80px"}} >{rangeNames[pos]}</Button>
                        <Button onClick={handleRightClick} >{"->"}</Button> 
                    </ButtonGroup>
                        

                </Col>
                
            </Row>
             

        </div>
    )
}

export default Position