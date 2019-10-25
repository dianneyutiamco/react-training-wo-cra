import * as React from "react";
import { NewValidation } from "./NewValidation";
import { useHistory } from "react-router";

export const Validations = () => {
  const history = useHistory();

  const newButtonOnClick = () => {
    history.push("/validations/new");
  }

  return(
    <div>
      <h3>Validations</h3>
      <button onClick={newButtonOnClick}>New</button>

      {
        // TODO : use <List>...</List>
      }
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