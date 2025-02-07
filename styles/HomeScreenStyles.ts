import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 20px;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
`

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 15px;
`

export const PokemonName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  color: #007bff;
`

export const PokemonInfo = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 5px 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: white;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

export const ButtonLike = styled(Button)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`

export const ButtonDislike = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #b21f2d;
  }
`
