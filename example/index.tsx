import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Botao } from '../.';

const App = () => {
  return (
    <div>
      <Botao />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
