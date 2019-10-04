import * as React from 'react';
import { string } from 'prop-types';

export interface HelloProps {
  compiler: string;
  framework: string;
}

// class component
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}
      </h1>
    );
  }
}

// function component
// export const HelloFunction = (props:HelloProps) => <h1>Hello from {props.compiler} and {props.framework}</h1>
