import * as React from "react";
import { useHistory } from "react-router";
import { ValidationTagList } from "./ValidationTagList";
import { ValidationTagModel } from "./ValidationTagModel";
import { validationRules } from "../data/validationRules";
import { ValidationDropDown, ValidationRuleModel } from "./ValidationDropDown";

export const NewInputParameter:React.FunctionComponent = () => {
  const [name, setName] = React.useState<string>("");
  // TODO : use enums
  const [inputType, setInputType] = React.useState<string>("");
  const [validationTagList, setValidationTagList] = React.useState<ValidationTagModel[]>([]);
  const [defaultValue, setDefaultValue] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    // TODO : validation
    // TODO : save
    e.preventDefault();
    // TODO : use id from props instead of hardcoding 0
    history.push("/calculations/0");
  }

  const addValidationTagOnClick = (validationRule: ValidationRuleModel) => {
    let {id, label} = validationRule;
    if (validationTagList.length <= 0 
      || validationTagList.filter((item) => item.id === id).length <= 0) {
      setValidationTagList([...validationTagList, new ValidationTagModel({id, label})]);
    }
    // TODO : display warning/error message    
  }

  const removeValidationTagOnClick = (validationTag: ValidationTagModel) => {
    setValidationTagList(validationTagList.filter((item) => item.id !== validationTag.id));
  }

  return(
    <>
      <h3>New Input Parameter</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>
        </div>

        {
          // TODO : use a list of values for options
        }
        <div>
          <label>Input Type</label>
          <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
            <option value="String">String</option>
            <option value="Money">Money</option>
            <option value="Date">Date</option>
            <option value="Agreement">Agreement</option>
            <option value="Cover">Agreement</option>
            <option value="Custom Object">Custom Object</option>
          </select>
        </div>

        {
          // TODO : dropdown and taglist can be in one component
        }
        <div>
          <label>Validations</label>
          <ValidationDropDown validationRules={validationRules} addValidationOnClick={addValidationTagOnClick} />
          <ValidationTagList validations={validationTagList} removeValidationTag={removeValidationTagOnClick}/>
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

        <button>Save</button>
      </form>

      <button onClick={() => history.goBack()}>Cancel</button>
    </>
  );
}