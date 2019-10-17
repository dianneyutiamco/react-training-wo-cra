import * as React from "react";
import { string } from "prop-types";

export interface Calculation {
    id: number;
    name: string;
    inputFields: string[];
    outputFields: string[];
    formula: string;
}
const CalculationRow = (item: Calculation) => {
    return (
        <div>
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>Edit</td>
            </tr>
        </div>
    );
}