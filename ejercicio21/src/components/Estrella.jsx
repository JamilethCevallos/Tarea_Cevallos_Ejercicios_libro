// src/components/Estrella.jsx
const Estrella = ({ posicion, marcada, onCalificar }) => {
  return (
    <span
      onClick={() => onCalificar(posicion)}
      style={{
        fontSize: '35px',
        cursor: 'pointer',
        color: marcada ? '#ffc107' : '#e4e5e9',
        marginRight: '5px'
      }}
    >
      ★
    </span>
  );
};

export default Estrella;