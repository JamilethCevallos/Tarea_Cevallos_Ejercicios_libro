import { useState } from "react";

const ANIMAL_IMAGES = {
  img1: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
  img2: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",
  img3: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400",
};
function App() {
  const [imagen, setImagen] = useState(ANIMAL_IMAGES.img1);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <button onClick={() => setImagen(ANIMAL_IMAGES.img1)}>
        img1
      </button>

      <button onClick={() => setImagen(ANIMAL_IMAGES.img2)}>
        img2
      </button>

      <button onClick={() => setImagen(ANIMAL_IMAGES.img3)}>
        img3
      </button>

      <h2>Imagen Seleccionada:</h2>

      <img src={imagen} alt="Imagen" />
    </div>
  );
}

export default App;
