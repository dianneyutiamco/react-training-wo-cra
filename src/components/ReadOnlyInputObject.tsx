import * as React from "react";

interface ReadOnlyInputField {
  id: number;
  name: string;
  inputType: string; // Object, String, etc.
  validation: string; 
  fields?: ReadOnlyInputField[];
}

const ReadOnlyInputField = (props: ReadOnlyInputField) => {
  // TODO : css
  const border = {
    border: "1px solid black"
  }

  return (
    <tr>
      <td style={border}>{props.name}</td>
      <td style={border}>{props.inputType}</td>
      <td style={border}>{props.validation}</td>
      <td>
        <button onClick={(e) => e.preventDefault()}>Edit</button>
        <button onClick={(e) => e.preventDefault()}>Delete</button>
      </td>
    </tr>
  )
}

export const ReadOnlyInputObject = (props: ReadOnlyInputField) => {
  return(
      props.inputType === "Object" ? (
        <>
          <tr>
            <td colSpan={4}>{props.name}</td>
          </tr>

          {props.fields
            .map((item) =>
              <ReadOnlyInputField 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                inputType={item.inputType} 
                validation={item.validation}
              />
            )
          }
        </>
      ) 
      : (
          <ReadOnlyInputField 
            id={props.id} 
            name={props.name} 
            inputType={props.inputType} 
            validation={props.validation} 
          />
      )
  )
}