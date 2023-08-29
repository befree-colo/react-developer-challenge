import * as React from 'react';
import './style.css';

import Requirements from './Requirements';
import Workspace from './Workspace';

export default function App() {
  return (
    <div>
      <div>
        <h1>React Developer challenge</h1>
        <h4>Build a real working timer</h4>
        <hr />
        <Requirements />
      </div>
      <hr />
      <Workspace />
    </div>
  );
}
