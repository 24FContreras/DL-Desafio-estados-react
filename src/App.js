import Input from "./components/Input";
import Boton from "./components/Boton";
import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errorNombre, setErrorNombre] = useState("");

  const validarInputs = (e) => {
    e.preventDefault();

    if (nombre === "" || nombre.trim() === "") {
      setErrorNombre(true);
      return;
    }

    setErrorNombre(false);
  };

  return (
    <div className="App">
      <main className="bg-light">
        <h1>Desafío N°2 - Estados</h1>
        <section className="card p-3 mt-3">
          <form onSubmit={validarInputs}>
            <Input
              changeName={(e) => setNombre(e.target.value)}
              changePassword={(e) => setContraseña(e.target.value)}
              nameError={
                errorNombre ? (
                  <p className="text-danger mb-0">Debes ingresar tu nombre</p>
                ) : null
              }
            />
            {contraseña === "252525" ? <Boton text="Enviar" /> : null}
          </form>
        </section>
        {errorNombre === false ? (
          <div className="alert alert-success mt-3 w-50" role="alert">
            Ingreso Correcto
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
