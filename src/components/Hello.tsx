import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

// class component
// export class Hello extends React.Component<HelloProps, {}> {
//   render() {
//     return (
//       <h1>
//         Hello from {this.props.compiler} and {this.props.framework}
//       </h1>
//     );
//   }
// }

// function component
export const Hello = (props:HelloProps) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log(count);
  });

  React.useEffect(() => {
    console.log(count);
  }, [count]);

  React.useEffect(() => {
    console.log(count);
  }, []);

  return (
    <h1>Hello from {props.compiler} and {props.framework}</h1>
  );
}
