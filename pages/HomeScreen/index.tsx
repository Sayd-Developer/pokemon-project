"use client";

import { Container, GridContainer, PokemonCard, PokemonImage, PokemonName, PokemonInfo, ButtonContainer, ButtonLike, ButtonDislike } from "../../styles/HomeScreenStyles";
import { useFetchPokemons } from "../../hooks/useFetchPokemons";

const HomeScreen = () => {
    const pokemons = useFetchPokemons();

    const handleLike = (name: string) => {
        window.postMessage(JSON.stringify({ type: "like", name }));
    };

    const handleDislike = (name: string) => {
        window.postMessage(JSON.stringify({ type: "dislike", name }));
    };

    return (
        <Container>
            <GridContainer>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name}>
                        <PokemonImage src={pokemon.image} alt={pokemon.name} />
                        <PokemonName>{pokemon.name}</PokemonName>
                        <PokemonInfo>
                            <strong>Categoria:</strong> {pokemon.category}
                        </PokemonInfo>
                        <PokemonInfo>
                            <strong>Abilidades:</strong> {pokemon.abilities.join(", ")}
                        </PokemonInfo>
                        <ButtonContainer>
                            <ButtonLike onClick={() => handleLike(pokemon.name)}>Like</ButtonLike>
                            <ButtonDislike onClick={() => handleDislike(pokemon.name)}>Dislike</ButtonDislike>
                        </ButtonContainer>
                    </PokemonCard>
                ))}
            </GridContainer>
        </Container>
    );
};

export default HomeScreen;
