import "./App.css";
import { useFetchAllPokemons } from "./hooks/useFetchAllPokemons";
import PokemonList from "./components/Containers/PokemonList";
import { useMemo, useState } from "react";

function App() {
  const { data, error, loading } = useFetchAllPokemons();

  const [name, setName] = useState<string>("");

  const handleInputChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setName(value);
  };

  const filtered = useMemo(
    () => (data ? data.results.filter((item) => item.name.includes(name)) : []),
    [data, name]
  );

  if (loading) {
    return <p>Cargando lista....</p>;
  }

  if (error) {
    return <p>Hubo un problema al cargar la lista</p>;
  }

  return (
    <>
      <h1>Pokemon List</h1>

      <input
        type="text"
        placeholder="search by name"
        onInput={handleInputChange}
        value={name}
      />

      <PokemonList pokemons={filtered} />
    </>
  );
}

export default App;
