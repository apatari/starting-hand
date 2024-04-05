import React  from "react";
import { rangeRows } from "./range_visual";
import { Table } from "react-bootstrap";

export default function Ranges() {
    return (
        <div>Example UTG Range: 

            <Table size="sm" variant="dark">
                <tbody>
                    {rangeRows.map(row => {
                        return(
                            <tr>
                                {row.map(hand => {
                                    
                                        if(hand==="AA"){
                                            return (<td className="bg-info" >{hand}</td>)
                                        } else {
                                            return (<td >{hand}</td>)
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