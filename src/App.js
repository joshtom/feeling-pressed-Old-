import React from 'react';
import './App.css';
import { Btn } from './elements/Button/Button'

function App() {
  return (
    <div className="App">
      <h1 class="display-4"> Hello Ninja <span role="img" aria-label="smiling-face">😸</span> , Start contributing... <span role="img" arial-label="keyboard"> ⌨ </span> </h1>
      <Btn
      color="secondary"
      type="submit"
      name="example"
      >
        ❣
      </Btn>
    </div>
  );
}

export default App;
