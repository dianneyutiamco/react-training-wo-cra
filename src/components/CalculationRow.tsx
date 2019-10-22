import * as React from "react";
import { string } from "prop-types";
import { Redirect, useRouteMatch, useHistory } from "react-router";
import { Link } from "react-router-dom";

// TODO : organize interfaces/models into separate folders
export interface CalculationProps {
  id: number;
  name: string;
  formula: string;
}

export const CalculationRow = (props: CalculationProps) => {
  let history = useHistory();
  return (
    <tr onClick={() => {
      history.push(`/calculations/${props.id}`);
    }}>
      <td>{props.id}</td>
      <td>{props.name}</td>
    </tr>
  );
}