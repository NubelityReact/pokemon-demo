import { PaginatedData, Pokemon } from "../interfaces/api";

export const getAllPokemons = async (): Promise<PaginatedData> => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    const e = err as { message: string };
    throw new Error(e.message);
  }
};

export const getPokemonbyId = async (id: number): Promise<Pokemon> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    const e = err as { message: string };
    throw new Error(e.message);
  }
};

export const getPokemonbyUrl = async (url: string): Promise<Pokemon> => {
  try {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }

    return response.json();
  } catch (err) {
    const e = err as { message: string };
    throw new Error(e.message);
  }
};
