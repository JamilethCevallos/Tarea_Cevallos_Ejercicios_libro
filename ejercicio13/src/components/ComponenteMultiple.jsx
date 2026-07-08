
const ComponenteMultiple = ({ opcion, dato1, dato2 }) => {
 
  const calculaDolares = () => <p>Dolares: {dato1 * 2}$</p>;
  const calculaFahrenheit = () => <p>Grados Fahrenheit: {(9 / 5) * dato1 + 32}°F</p>;
  const calculaSuperficie = () => <p>Superficie: {dato1 * dato2}m²</p>;

  return (
    <div style={{ padding: '10px', background: '#f4f4f4', margin: '5px 0', borderRadius: '5px' }}>
      {/* Renderizado condicional mediante operador ternario */}
      {opcion === 1 ? calculaDolares() :
       opcion === 2 ? calculaFahrenheit() :
       opcion === 3 ? calculaSuperficie() : null}
    </div>
  );
};

export default ComponenteMultiple;