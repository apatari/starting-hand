import React, { useState }  from "react";
import { rangeRows } from "./range_visual";
import { Table, Button, ButtonGroup, Row, Col } from "react-bootstrap";
import { ranges } from "./range_templates";


export default function Ranges({ custom, setCustom }) {

    const [selectedRange, setSelectedRange] = useState(0)
    

    const rangeNames = ["UTG", "MP", "CO", "BTN", "SB", "BB"]
    const btns = [0,1,2,3,4,5]

    const handleRangeClick = (e) => {
        setSelectedRange(e.target.value)
        
    }

    const handleCellClick = (e) => {
        const hand = e.target.id
        fetch('/api/ranges', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"hand": hand})
        })
        .then(res => res.json())
        .then(data => setCustom(data))
    }


    return (
        <div className="m-3" >
            <Row>
                <Col>
                    
                    <div><ButtonGroup className="m-3"  >
                        {btns.map(btn => {
                            return (
                                <Button 
                                    disabled={selectedRange==btn} 
                                    key={rangeNames[btn]} 
                                    onClick={handleRangeClick} 
                                    value={btn} 
                                >
                                    {rangeNames[btn]}
                                </Button>
                            )
                        })}
                    </ButtonGroup></div>
                    
                </Col>

                <Col>
                        <div className="m-3" >
                            <Button disabled={selectedRange==="Custom"}  onClick={() => setSelectedRange("Custom")} >Custom</Button>
                        </div> 
                </Col>

            </Row>

            <h3>Raise Range:</h3>

            <Table size="sm" variant="dark" bordered>
                <tbody>
                    {rangeRows.map(row => {
                        return(
                            <tr key={row[0] + row[1]}  >
                                {row.map(hand => {
                                        
                                        if (selectedRange === "Custom") {
                                            return ( <td 
                                                        key={hand} 
                                                        className={(custom[hand]===true)?"bg-info":""} 
                                                        onClick={handleCellClick}
                                                        id={hand}
                                                    >{hand}</td> )
                                        }
                                    
                                        if(ranges[selectedRange][hand]===true){
                                            return (<td key={hand} className="bg-info" >{hand}</td>)
                                        } else {
                                            return (<td key={hand} >{hand}</td>)
                                        }
                                      
                                         
                                    
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>

    )
}