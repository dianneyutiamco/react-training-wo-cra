import * as React from "react";
import { useHistory, Redirect } from "react-router";

export const NewInputParameter:React.FunctionComponent = () => {
  const [name, setName] = React.useState<string>("");
  // TODO : use enums
  const [inputType, setInputType] = React.useState<string>("");
  const [validation, setValidation] = React.useState<string>("");
  const [validations, setValidations] = React.useState<string[]>(["Required", "Date Format"]);
  const [defaultValue, setDefaultValue] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const history = useHistory();

  const handleSubmit = (e:any) => {
    // TODO : save
    console.log("handleSubmit");
    // history.goBack();
    e.preventDefault();
    <Redirect to="/calculations/0" />
  }

  return(
    <>
      <h3>New Input Parameter</h3>
      <form>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>

          {
            // TODO : use a list of values for options
          }
        </div>

        <div>
          <label>Input Type</label>
          <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
            <option value="String">String</option>
            <option value="Object">Object</option>
            <option value="Money">Money</option>
            <option value="Date">Date</option>
            <option value="Custom Enum1">Custom Enum1</option>
          </select>
        </div>

        <div>
          <label>Validations</label>
          <input 
            type="text" 
            value={validation}
            onChange={(e) => setValidation(e.target.value)}/>
          <span onClick={() => validation && setValidations([...validations, validation])}>+ Add</span>

          <div>
            {validations.length > 0 
              && validations.map((item) => 
                <div key={item} style={{
                  display: "inline-block", 
                  marginRight: "5px", 
                  border: "1px solid black", 
                  borderRadius: "2px"}}>
                  <span>{item} x</span>
                </div>
              )
            }
          </div>
        </div>

        <div>
          <label>Default Value</label>
          <input
            type="text"
            value={defaultValue}
            onChange={(e) => setDefaultValue(e.target.value)}
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button onClick={(e) => handleSubmit(e)}>Save</button>
      </form>

      <button onClick={() => history.goBack()}>Cancel</button>
      
    </>
  );
}