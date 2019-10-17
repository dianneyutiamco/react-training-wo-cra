import * as React from "react";
import { calculationData } from "../data/calculationdata";

export const CalculationTable = () => {
    const [calculationList, setCalculationList] = React.useState(null);
    // const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setCalculationList(calculationData);
            // setIsLoading(false);
        }, 1500);
         
    }, []);

    return (
        <div>
            {
                // TODO : loader, pagination
            }
            {calculationList && calculationList[0].id}
        </div>
    );
}