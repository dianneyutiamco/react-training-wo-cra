// TODO : Component for List Components in the Menu
// Look into https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64
// Consumer will use <List>...</List> this way:
{/* <List>
  Children
</List> */}

import * as React from 'react';

export class ListProps {
  headers?: string[];
  columns: string[];
  customRenderRow?: (arg: any[]) => void;
  url?: string;
}

export const List = (props: ListProps) => {
  const [list, setList] = React.useState([]);

  return (
    <div>
      {
        props.headers.map(item => <div>{item}</div>)
      }
      {/* 
        props.renderContents()
       */}
    </div>
  );
};