// src/components/Tarea.jsx
const Tarea = ({ id, texto, onEliminar }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', background: '#eee', margin: '5px 0', borderRadius: '4px', maxWidth: '300px' }}>
      <span>{texto}</span>
      <button onClick={() => onEliminar(id)} style={{ background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
        X
      </button>
    </div>
  );
};

export default Tarea;