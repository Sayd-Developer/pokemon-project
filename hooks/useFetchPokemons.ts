import { useEffect, useState } from "react"
import axios from "axios"

type Pokemon = {
  name: string
  category: string
  abilities: string[]
  image: string
}

export const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        )
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon: { name: string }) => {
            const pokeDetails = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            )
            return {
              name: pokeDetails.data.name,
              category: pokeDetails.data.types
                .map((type: { type: { name: string } }) => type.type.name)
                .join(", "),
              abilities: pokeDetails.data.abilities.map(
                (ability: { ability: { name: string } }) => ability.ability.name
              ),
              image:
                pokeDetails.data.sprites.other["official-artwork"]
                  .front_default || pokeDetails.data.sprites.front_default,
            }
          })
        )
        setPokemons(pokemonData)
      } catch (error) {
        console.error("Erro ao buscar Pokémons:", error)
      }
    }

    fetchPokemons()
  }, [])

  return pokemons
}
