import styled from "styled-components"

export const FooterStyled = styled.footer`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 10px;
    align-items: center;
    border: 4px solid #6950A1;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    p {
        font-weight: 600;
        font-size: 12px;
    }

    img {
        display: block;
        height: 40px;
    }
`