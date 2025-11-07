import styled from "styled-components"

export const CheckoutContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: 'Poppins', sans-serif;

    h1, h2 {
        font-weight: 700px;
        font-size: 24px;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
    }

    li {
        font-weight: 700;
        img {
            width: 200px;
        }
    }
`