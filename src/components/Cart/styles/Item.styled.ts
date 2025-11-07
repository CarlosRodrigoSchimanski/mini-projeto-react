import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;

  img {
    width: 200px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;

    .quantity {
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        display: flex;
        width: 50px;
        height: 50px;
        background: #6950A1;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        cursor: pointer;

        img {
          display: block;
          width: 40px;
          background-color: #6950A1;
          color: white;
        }
      }
    }

    .name {
        text-transform: uppercase;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 20px;
    }
    .price {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 16px;
      text-transform: capitalize;

    }

    .remove {
      background: #6950A1;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`