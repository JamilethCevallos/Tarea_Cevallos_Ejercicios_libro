import MiComponente from './components/MiComponente';

const App = () => {
  // Esta función recibirá el dato del hijo
  const changePadre = (param) => {
    alert(param);
  };

  return (
    <div>
      {/* Pasamos la función como una prop */}
      <MiComponente onSomeEvent={changePadre} />
    </div>
  );
};

export default App;