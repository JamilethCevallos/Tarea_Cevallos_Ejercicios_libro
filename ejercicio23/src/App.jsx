// src/App.jsx
import { useState } from 'react';
import Grades from './components/Grades';

const App = () => {
  const [resultadoFahrenheit, setResultadoFahrenheit] = useState(32);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Conversor de Centígrados a Fahrenheit</h1>
      <Grades onCalcular={setResultadoFahrenheit} />
      <p>El resultado en grados Fahrenheit es: {resultadoFahrenheit}°F</p>
    </div>
  );
};

export default App;