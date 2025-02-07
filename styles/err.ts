import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const ButtonBackHome = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`
