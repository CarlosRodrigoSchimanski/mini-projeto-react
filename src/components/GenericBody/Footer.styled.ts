import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-around;
    bottom: 0;
    padding: 10px;
    align-items: center;
    border: 4px solid #6950A1;
    z-index: 10;

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