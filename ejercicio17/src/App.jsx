
import { useState } from 'react';
import Contador from './components/Contador';

const App = () => {
  const [contadores, setContadores] = useState([
    { id: 1, valor: 0 },
    { id: 2, valor: 0 },
    { id: 3, valor: 0 }
  ]);

  const incrementarContador = (id) => {
    setContadores(
      contadores.map((c) => (c.id === id ? { ...c, valor: c.valor + 1 } : c))
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.5' }}>
      <h1>Múltiples Contadores</h1>
      <div>
        {contadores.map((c) => (
          <Contador
            key={c.id}
            id={c.id}
            valor={c.valor}
            onIncrementar={incrementarContador}
          />
        ))}
      </div>
    </div>
  );
};

export default App;