import { useFetch } from "./useFetch";
import { getAllPokemons } from "../services/pokemon";
// import { useCallback } from "react";

export const useFetchAllPokemons = () => {
  // const fn = useCallback(getAllPokemons, []);
  // return useFetch(fn);
  return useFetch(getAllPokemons);
};
