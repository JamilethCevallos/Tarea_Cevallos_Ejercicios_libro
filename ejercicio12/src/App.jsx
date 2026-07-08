// src/App.jsx
import Post from './components/Post'; // <-- Corregido aquí

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mis Publicaciones</h1>
      
      {/* Primera llamada al componente */}
      <Post postTitle="Viaje a la luna" author="Julio Verne">
        <p>Un increíble viaje de exploración científica hacia el satélite de la Tierra.</p>
      </Post>

      {/* Segunda llamada al componente */}
      <Post postTitle="Viaje a Marte" author="Pablo Mon">
        <p>Una aventura futurista sobre la colonización del planeta rojo.</p>
      </Post>
    </div>
  );
};

export default App;