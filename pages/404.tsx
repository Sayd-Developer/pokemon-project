import { Container, Title, PokemonImage, ButtonContainer, ButtonBackHome } from "../styles/err";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <Container>
            <Title>Página Não Encontrada</Title>
            <PokemonImage src="/images/pokemon-404.png" alt="Pokémon 404" width={150} height={150} />
            <ButtonContainer>
                <Link href="/">
                    <ButtonBackHome>Voltar para Home</ButtonBackHome>
                </Link>
            </ButtonContainer>
        </Container>
    );
};

export default NotFoundPage;
