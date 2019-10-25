import * as React from "react";
import { ValidationTagModel } from "./ValidationTagModel";

interface ValidationTagListProps {
  validations: ValidationTagModel[];
  removeValidationTag: (tag: ValidationTagModel) => void;
}

interface ValidationTagProps {
  validation: ValidationTagModel
  removeValidationTag: (tag: ValidationTagModel) => void;
}

const ValidationTag = (props: ValidationTagProps) => {
  return(
    <div 
      key={props.validation.id} 
      style={{
        display: "inline-block", 
        marginRight: "5px", 
        border: "1px solid black", 
        borderRadius: "2px"}}
    >

      <div style={{display: "inline-block"}}>
        <span 
          style={{marginLeft: "5px"}}>
          {props.validation.label}
        </span>

        <span 
          style={{margin: "5px", cursor: "pointer"}}
          onClick={() => {props.removeValidationTag(props.validation)}}>
          x
        </span>
      </div>
      
    </div>
  );
}

export const ValidationTagList = (props: ValidationTagListProps) => {
  return (
    <div>
      {props.validations.length > 0 
        && props.validations.map((item) => 
          <ValidationTag 
            key={item.id} 
            validation={item} 
            removeValidationTag={() => {props.removeValidationTag(item)}}
          />
        )
      }
    </div>
  );
}