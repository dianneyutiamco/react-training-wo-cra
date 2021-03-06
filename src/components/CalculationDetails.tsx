import * as React from "react";
import { useParams, useHistory, useRouteMatch } from "react-router";
import { calculationDetailsList } from "../data/calculationdetails";
import { ReadOnlyInputObject } from "./ReadOnlyInputObject";
import { Link } from "react-router-dom";

export const CalculationDetails:React.FunctionComponent = () => {
  const { id } = useParams();
  const history = useHistory();
  const { url, path } = useRouteMatch();

  // TODO : maybe make this a typed useState
  const [calculationDetails, setCalculationDetails] = React.useState(undefined);

  React.useEffect(() => {

    setCalculationDetails(calculationDetailsList[0]);

  }, []);

  // TODO : css
  const border = {
    border: "1px solid black"
  }

  return(
    <div>
      {
        calculationDetails? (
          <form>
            <label>Name: </label>
            <input type="text" value={calculationDetails.name} readOnly/>
            <br />

            <h3>Input Parameters</h3>
            <table style={{border: "1px solid black", borderCollapse: "collapse"}}>
              <thead>
                <tr>
                  <th style={border}>Name</th>
                  <th style={border}>Type</th>
                  <th style={border}>Validation</th>
                  <th style={border}></th>
                </tr>
              </thead>
            
              <tbody>
                {calculationDetails.inputParameters
                  .map((item: any) => 
                    <ReadOnlyInputObject 
                      key={item.id}
                      id={item.id} 
                      name={item.name} 
                      inputType={item.inputType} 
                      validation={item.validation}
                      fields={item.fields}
                    />
                  )
                }
              </tbody>
            </table>

            <Link to={`${url}/inputparameter/new`}>
              <span>Add Input  </span>
            </Link>

            <h3>Output Parameters</h3>
            
            <button onClick={() => {history.goBack()}}>Add Output</button>
            <br />

            <textarea value={calculationDetails.formula} readOnly/>
            <br />

            
          </form>
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