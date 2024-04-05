import React  from "react";
import { rangeRows } from "./range_visual";
import { Table } from "react-bootstrap";
import { ranges } from "./range_templates";

export default function Ranges() {

    console.log(ranges[0])


    return (
        <div>Example UTG Range: 

            <Table size="sm" variant="dark" bordered>
                <tbody>
                    {rangeRows.map(row => {
                        return(
                            <tr key={row[0] + row[1]}  >
                                {row.map(hand => {
                                    
                                        if(ranges[0][hand]===true){
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