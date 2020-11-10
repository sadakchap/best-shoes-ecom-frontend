import styled from 'styled-components';

export const FormWrapper = styled.div`
    max-width: 500px;
    margin: 1.5em auto;
    padding: 2rem 3rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .1);
`;
export const FormHeaderText = styled.h2`
    margin: 1rem auto;
    font-size: 2.3rem;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-family: 'Poppins', sans-serif;
`;

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const InputWrapper = styled.div`
    width: 100%;
    margin: 1.2em auto;
`;

export const StyledInput = styled.input`
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    height: 40px;
    padding: 0 1rem;
`;