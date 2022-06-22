import styled, { css } from "styled-components";

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
        margin: 10px 0;
        margin-right: 20px;
        font-size: ${({ theme }) => theme.fontSize.normal};
    `}

    ${(props) => props.smallText && css`
        font-size: ${({ theme }) => theme.fontSize.smaller};
        margin-left: 12px;
    `}

    ${(props) => props.apiDate && css`
        font-size: ${({ theme }) => theme.fontSize.smaller};
        text-align: center;
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
