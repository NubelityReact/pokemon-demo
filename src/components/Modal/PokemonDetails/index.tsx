import React from "react";
import Modal, { IModalProps } from "../Base/base";
import { Pokemon } from "../../../interfaces/api";
import styles from "./modal.pokemon.details.styles.module.css";

type IModalPokemonDetails = {
  modalProps: Omit<IModalProps, "children">;
  pokemon: Pokemon;
};

const ModalPokemonDetails: React.FC<IModalPokemonDetails> = (props) => {
  const { sprites, name, weight, height, moves } = props.pokemon;
  return (
    <Modal {...props.modalProps}>
      <div style={{ overflowY: "auto", height: "100%" }}>
        <button onClick={props.modalProps.onClose}>X</button>
        <article>
          <div>
            <picture>
              <img src={sprites.back_default} alt="back" />
            </picture>
            <picture>
              <img src={sprites.front_default} alt="front" />
            </picture>
          </div>

          <div className={styles.content}>
            <header>
              <h3>Nombre: {name}</h3>
              <p>
                <span>Peso:</span>
                <span>{weight}</span>
              </p>
              <p>
                <span>Altura:</span>
                <span>{height}</span>
              </p>
            </header>
            <div className="movements">
              <h4>Movimientos:</h4>
              <ul>
                {moves.map((item) => {
                  return <li key={item.move.url}>{item.move.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </Modal>
  );
};

export default ModalPokemonDetails;
