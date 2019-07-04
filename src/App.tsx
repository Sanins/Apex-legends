import React from 'react';
import './App.scss';
import Counter from "./components/Counter";
import Counter5 from "./components/Counter5";

export default function App() {
  return (
    <div className="container">
      <Counter />
      <Counter5 />
    </div>
  )
}
