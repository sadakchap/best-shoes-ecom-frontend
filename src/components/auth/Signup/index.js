import React, { useState } from 'react';
import Base from '../../core/Base';
import { Button, SpinnerWrapper, Spinner } from '../../reuseableComponents/SpinnerButton';
import { FormWrapper, StyledForm, InputWrapper, StyledInput, FormHeaderText } from './SignupElements';
import { FiCheck } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import { signup } from '../helpers/auth';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        isLoading: false,
        isComplete: false
    });
    
    const handleChange = name => e => setValues({ ...values, [name]: e.target.value });

    const { name, email, password, passwordConfirm, isLoading, isComplete } = values;
    const handleSubmit = e => {
        e.preventDefault();
        if(!name || !email || !password){
            return toast.error('All fields are required!');
        }
        if(password !== passwordConfirm){
            return toast.error('Passwords must match!');
        }
        
        setValues({ ...values, isLoading: true });
        signup({ email, name, password }).then(data => {
            if(data.error)  return toast.error(data.error);
            setValues({ 
                ...values, 
                isLoading: false, 
                isComplete: true,
                name: '',
                email: '',
                password: '',
                passwordConfirm: ''
            });
            toast.success(data.message);
            setTimeout(() => {
                setValues({ ...values, isComplete: false });
            }, 1000);
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error);
            return toast.error('Sorry, something went wrong!');
        })


        setTimeout(() => {
            setValues({ ...values, isLoading: false, isComplete: true });
            setTimeout(() => {
                setValues({ ...values, isComplete: false });
            }, 3000);
        }, 2500);
    }

    return (
        <Base>
            <ToastContainer />
            <FormWrapper>
                <FormHeaderText>Join Us!</FormHeaderText>
                <StyledForm>
                    <InputWrapper>
                        <StyledInput type="text" placeholder="Name" onChange={handleChange("name")} value={name} style={{ textTransform: 'capitalize'}} />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledInput type="email" placeholder="Email" onChange={handleChange("email")} value={email} />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledInput type="password" placeholder="Password" onChange={handleChange("password")} value={password} />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledInput type="password" placeholder="Password Confirm" onChange={handleChange("passwordConfirm")} value={passwordConfirm} />
                    </InputWrapper>
                    <Button type="submit" onClick={handleSubmit} disabled={isLoading || isComplete}>
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
