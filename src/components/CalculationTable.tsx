import * as React from "react";
import { calculationData } from "../data/calculationdata";
import { CalculationRow } from "./CalculationRow";

export const CalculationTable = () => {
  const [calculationList, setCalculationList] = React.useState(null);
  // const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
      setCalculationList(calculationData);
      // setIsLoading(false);
  }, []);

  return (
    <div>
      {
          // TODO : loader, pagination
      }
      <table>
        <tbody>
          {calculationList && 
            calculationList.map(
              (item: any) => 
                <CalculationRow 
                  key={item.id} 
                  id={item.id} 
                  name={item.name}
                  formula={item.formula}/>
            )
          }
        </tbody>
      </table>    
    </div>
  );
}