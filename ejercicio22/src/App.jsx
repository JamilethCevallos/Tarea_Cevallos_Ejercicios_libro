// src/App.jsx
import { useState } from 'react';
import Dollars from './components/Dollars';

const App = () => {
  const [resultadoDolares, setResultadoDolares] = useState(0);

  return (
    <div>
      <h1>Conversor de Euros a Dólares</h1>
      <Dollars onCalcular={setResultadoDolares} />
      <p>El resultado en dólares es: {resultadoDolares}</p>
    </div>
  );
};

export default App;