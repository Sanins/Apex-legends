import React from 'react';
import './App.scss';
import Counter from "./components/CounterReducer";

const App = () => {
  return (
    <div className="container">
      <Counter />
    </div>
  )
}

export default App;