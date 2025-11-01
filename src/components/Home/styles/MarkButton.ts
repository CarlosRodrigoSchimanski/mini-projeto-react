import styled from "styled-components";

export const MarkButton = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    align-items: center;


    button {
        background-color: white;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #6950A1;
    }

    button.active {
    background-color: #6950A1;
    }

    span {
        font-size: 16px;
        font-weight: 700;
    }
`