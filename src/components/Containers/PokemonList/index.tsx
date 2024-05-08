import React from "react";
import { PaginatedPokemonResult } from "../../../interfaces/api";
import PokemonItem from "../../PokemonItem";

interface IPokemonListProps {
  pokemons: PaginatedPokemonResult[];
}

const PokemonList: React.FC<IPokemonListProps> = (props) => {
  const { pokemons } = props;
  return (
    <div>
      <table>
        <tr>
          <td>Datos del pokemon</td>
          <td>Imágenes</td>
          <td>Acciones</td>
        </tr>
      </table>

      <ul>
        {pokemons.map((item) => {
          return <PokemonItem url={item.url} />;
        })}
      </ul>
    </div>
  );
};

export default PokemonList;
