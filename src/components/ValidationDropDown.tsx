import * as React from "react";

interface ValidationRuleInterface {
  id: number;
  label: string;
}

export class ValidationRuleModel implements ValidationRuleInterface {
  id: number;
  label: string;

  constructor(data?: any) {
    this.id = data.id;
    this.label = data.label;
  }
}

export interface ValidationDropDownProps {
  validationRules: ValidationRuleModel[];
  addValidationOnClick: (validationRule: ValidationRuleModel) => void;
}

export const ValidationDropDown = (props: ValidationDropDownProps) => {
  const [validation, setValidation] = React.useState<ValidationRuleModel>(new ValidationRuleModel({id: -1}));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValidation(new ValidationRuleModel({id: event.target.value, 
      label: event.target.selectedOptions[0].innerHTML}));
  }

  return(
    // TODO : allow consumer to pass the first option (---Select--- or maybe empty)
    // TODO : make this editable, or autoselect/autosuggest
    <div>
      <select value={validation.id} onChange={(e) => handleChange(e)}>
        <option value="-1">---Select---</option>
        {props.validationRules.map((item) => {
          return <option key={item.id} value={item.id}>{item.label}</option>
        })}
      </select>

      <span 
        style={{cursor: "pointer"}}
        onClick={(event) => validation && props.addValidationOnClick(validation)}>
        + Add
      </span>
    </div>
  );
}