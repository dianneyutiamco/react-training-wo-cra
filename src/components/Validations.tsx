import * as React from "react";
import { NewValidation } from "./NewValidation";
import { useHistory } from "react-router";
import { List } from "./List";

interface ListRow {
  label: string;
  rule: string;
  description: string;
}

export const Validations = () => {
  const history = useHistory();

  const newButtonOnClick = () => {
    history.push("/validations/new");
  }

  return(
    <div>
      <header>
        <h3>Validations</h3>
      </header>
      
      
      <button onClick={newButtonOnClick}>New</button>

      {/* <List 
        columns={['label', 'rule', 'description']} 
        customRenderRow={(list:any[]) => {
          // TODO : need to know the type of data here inorder to render the rows correctly
          list.map((item:any) => {
            <div style={{display: "inline"}}>{item.label}</div>
          });
        }} 
      /> */}
         
      <table>
        <thead>
          <tr>
            <td>Label</td>
            <td>Rule</td>
            <td>Description</td>
            <td></td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>label</td>
            <td>rule</td>
            <td>description</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <span>Pagination here</span>
      </div>
    </div>
  );
}