import React  from "react";
import { rangeRows } from "./range_visual";
import { Table } from "react-bootstrap";

export default function Ranges() {
    return (
        <div>Example UTG Range: 

            <Table size="sm" variant="dark" bordered>
                <tbody>
                    {rangeRows.map(row => {
                        return(
                            <tr key={row[0] + row[1]}  >
                                {row.map(hand => {
                                    
                                        if(hand==="AA"){
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