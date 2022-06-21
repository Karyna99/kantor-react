import styled, { css } from "styled-components";

const theme = {
    colors: {
        primaryColor: "#a8c2f1",
        invalidColor: "#eba8a865",
        borderColor: "#929292",
        backgroundColor: "white",
    },
    breakpoints: {
        mobile: 767,
    },
    fontSize: {
        smaller: "12px",
        normal: "20px",
    }
};

export const StyledDate = styled.p`
    display: flex;
    justify-content: flex-end;
`;

export const StyledForm = styled.form`
    padding: 20px 10px;
`;

export const StyledText = styled.p`
    font-size: ${({ theme }) => theme.fontSize.normal};

    ${(props) => props.big && css`
        font-weight: 600;
        font-size: 25px;
        margin: 10px 0;
    `}

    ${(props) => props.regular && css`
        display: inline-block;
        width: 50%;
        margin: 10px 0;
        font-size: ${({ theme }) => theme.fontSize.normal};
    `}

    ${(props) => props.smallText && css`
        font-size: ${({ theme }) => theme.fontSize.smaller};
        margin-left: 12px;
    `}
`;

export const StyledFieldset = styled.fieldset`
    border: none;
    padding: 0 12px;
`;

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;

    &:invalid {
        background-color: ${({ theme }) => theme.colors.invalidColor};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 100%;
        margin: auto;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border: none;
    border-radius: 5px;
    padding: 12px;
    margin: 5px 15px;
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 0 15px;
    }

    &:hover {
        background-color: #7b90b6;
    }

    &:active {
        background-color: #c3d2ec;
    }
`;

export const ResultWrapper = styled.div`
    font-size: ${({ theme }) => theme.fontSize.normal};
    margin-left: 15px;
`;

export const StyledHeader = styled.h1`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 10px;
    font-size: 30px;
    font-weight: 600;
`;

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border-radius: 10px;
    box-shadow: 5px 7px 5px 0px rgba(0, 0, 0, 0.11);
`;

export { theme };