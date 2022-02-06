import { useState } from "react";
// Imutabilidade -->
// usuarios = ["valmir", "Diego", "Alan"]
// [X] usuario.push("Rafa") Mutação no valor original
// [V] novoUsuarios = [...usuarios, "Rafa"]

export function Caunter() {
  //Desestruturacao
  const [counter, setCounter] = useState(0);

  function increment() {
    console.log("Incrementing");
    setCounter(counter + 1);
    // [X] counter++ || counter += 1
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
