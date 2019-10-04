import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

ReactDOM.render(
  <Hello compiler="Compiler Prop" framework="Framework Prop" />,
  document.getElementById('root')
);
