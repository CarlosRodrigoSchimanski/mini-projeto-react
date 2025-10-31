import styled from "styled-components";

export const ButtonStyled = styled.div<{ pos: 'flex-start' | 'center' | 'flex-end' }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 100%;
  background-color: gray;
  align-items: ${props => props.pos};

  button {
    color: white;
    background: #6950A1;
    font-weight: 800;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px 20px;
    max-width: 200px;
  }
`
