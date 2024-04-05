import React, { useState }  from "react";
import { rangeRows } from "./range_visual";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import { ranges } from "./range_templates";

export default function Ranges() {

    const [selectedRange, setSelectedRange] = useState(0)

    const rangeNames = ["UTG", "MP", "CO", "BTN", "SB", "BB"]
    const btns = [0,1,2,3,4,5]

    const handleRangeClick = (e) => {
        console.log(e.target.value)
    }

    console.log(ranges[selectedRange])


    return (
        <div>
            <ButtonGroup className="m-3"  >
                {btns.map(btn => {
                    return (
                        <Button key={rangeNames[btn]} onClick={handleRangeClick} value={btn} >{rangeNames[btn]}</Button>
                    )
                })}
            </ButtonGroup>

            {/* <ButtonGroup>
                <Button value={0}>UTG</Button>
                <Button value={1}>MP</Button>
                <Button value={2}>CO</Button>
                <Button value={3}>BTN</Button>
                <Button value={4}>SB</Button>
                <Button value={5}>BB</Button>
            </ButtonGroup> */}

            <Table size="sm" variant="dark" bordered>
                <tbody>
                    {rangeRows.map(row => {
                        return(
                            <tr key={row[0] + row[1]}  >
                                {row.map(hand => {
                                    
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