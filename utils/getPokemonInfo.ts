import { pokeApi } from "../api";
import { PokemonFull } from "../interfaces";

const getPokemonInfo = async (nameOrId: string) => {

  const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${nameOrId}`);

  return  {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }
};


export default getPokemonInfo;
