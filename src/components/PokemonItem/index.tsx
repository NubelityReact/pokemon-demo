import React, { useState } from "react";
import ModalPokemonDetails from "../Modal/PokemonDetails";
import { useFetchPokemonDetailsWithUrl } from "../../hooks/useFetchPokemonDetails";

interface IPokemmonItemProps {
  url: string;
}

const PokemonItem: React.FC<IPokemmonItemProps> = (props) => {
  const { url } = props;
  const { data, error, loading } = useFetchPokemonDetailsWithUrl(url);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return <div>Loading pokemon id: {url.split("").at(-2)}</div>;
  }

  if (error) {
    return (
      <div>Hubo un error al cargar el pokemon {JSON.stringify(error)}</div>
    );
  }

  const handleClick = () => {
    setIsModalOpen(true);
  };

  if (data) {
    return (
      <>
        <div onClick={handleClick}>
          <table>
            <tr>
              <td>id</td>
              <td>Nombre</td>
              <td>Peso</td>
              <td>Altura</td>
              <td>frontal</td>
              <td>Trasera</td>
              <td>Eliminar</td>
            </tr>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.weight}</td>
              <td>{data.height}</td>
              <td>
                <img
                  src={data.sprites.front_default}
                  alt={`${data.name} front image`}
                />
              </td>
              <td>
                <img
                  src={data.sprites.back_default}
                  alt={`${data.name} back image`}
                />
              </td>
              <td>x</td>
            </tr>
          </table>
        </div>

        <ModalPokemonDetails
          modalProps={{
            isOpen: isModalOpen,
            onClose: () => setIsModalOpen(false),
          }}
          pokemon={data}
        />
      </>
    );
  }
};

export default PokemonItem;
