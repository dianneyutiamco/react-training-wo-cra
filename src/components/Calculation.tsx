import * as React from "react";
import { useParams, useHistory } from "react-router";
import { calculationDetailsList } from "../data/calculationdetails";

export const Calculation = () => {
  const { id } = useParams();
  const history = useHistory();

  // TODO : maybe make this a typed useState
  const [calculationDetails, setCalculationDetails] = React.useState(undefined);

  React.useEffect(() => {
    setCalculationDetails(calculationDetailsList[0]);
  }, []);

  return(
    <div>
      {
        calculationDetails? (
          <div>
            <span>{calculationDetails.id}</span>
            <span>{calculationDetails.name}</span>
            <span>{calculationDetails.formula}</span>
          </div>
        ) : (
          <span>Details Unavailable</span>
        )
      }
      {
        // TODO : Redirect to "/calculations" instead
      }
      <button onClick={() => {history.goBack()}}>Back</button>
    </div>
  )
}