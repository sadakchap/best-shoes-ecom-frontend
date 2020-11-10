import React, { useState, useCallback } from 'react';
import Base from '../../core/Base';
import { Button, SpinnerWrapper, Spinner } from '../../reuseableComponents/SpinnerButton';
import { FormWrapper, StyledForm, InputWrapper, StyledInput, FormHeaderText } from './SignupElements';
import { FiCheck } from 'react-icons/fi'

const Signup = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const handleClick = useCallback(() => {
        setIsLoading(true);
        setTimeout(() => {
        setIsLoading(false);
        setIsComplete(true);
        setTimeout(() => {
            setIsComplete(false);
        }, 3000);
        }, 2500);
    });

    return (
        <Base>
            <FormWrapper>
                <FormHeaderText>Join Us!</FormHeaderText>
                <StyledForm>
                    <InputWrapper>
                        <StyledInput type="text" placeholder="Name" />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledInput type="email" placeholder="Email" />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledInput type="password" placeholder="Password" />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledInput type="password" placeholder="Password Confirm" />
                    </InputWrapper>
                    <Button type="submit" onClick={handleClick} disabled={isLoading || isComplete}>
                        {!isComplete && "Sign up"}
                        {isComplete && (
                            <>
                                <FiCheck size="1.5rem" style={{ marginRight: '0.6em'}} />
                                Finished
                            </>
                        )}
                        <SpinnerWrapper isClicked={isLoading}>
                            <Spinner />
                        </SpinnerWrapper>
                    </Button>
                </StyledForm>
            </FormWrapper>
        </Base>
    )
}

export default Signup
