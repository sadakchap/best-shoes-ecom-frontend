import styled from 'styled-components';

export const PrimaryButton = styled.button`
    width: ${({width}) => width ? width : '100%'};
    padding: 10px 15px;
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(45deg, #ffba08, #fb6455);
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 500ms ease-in-out;
`;

export const SecondaryButton = styled.button`
    width: ${({width}) => width ? width : '100%'};
    padding: 10px 15px;
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    border: none;
    outline: none;
    cursor: pointer;
    border: 2px solid #ffba08;
    background: transparent;
    background: -webkit-linear-gradient(45deg, #ffba08, #fb6455);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;