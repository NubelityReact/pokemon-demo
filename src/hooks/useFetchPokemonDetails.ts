import { useFetch } from "./useFetch";
import { getPokemonbyId, getPokemonbyUrl } from "../services/pokemon";
import { useCallback } from "react";

export const useFetchPokemonDetailsWithId = (id: number) => {
  const fn = useCallback(() => getPokemonbyId(id), [id]);
  return useFetch(fn);
};

export const useFetchPokemonDetailsWithUrl = (url: string) => {
  const fn = useCallback(() => getPokemonbyUrl(url), [url]);
  return useFetch(fn);
};
