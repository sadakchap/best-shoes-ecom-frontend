import React, { useState } from 'react'
import Base from '../../core/Base';
import { toast, ToastContainer } from "react-toastify";
import { authenticate, signin } from '../helpers/auth';
import { Button, SpinnerWrapper, Spinner } from "../../reuseableComponents/SpinnerButton";
import { FiCheck } from "react-icons/fi";
import { StyledForm, InputWrapper, StyledInput, FormWrapper, FormHeaderText } from '../Signup/SignupElements';
import { useHistory } from 'react-router-dom';


const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        isLoading: false,
        isComplete: false
    });
    const history = useHistory();
    
    const handleChange = name => e => setValues({ ...values, [name]: e.target.value });

    const { email, password, isLoading, isComplete } = values;
    const handleSubmit = e => {
        e.preventDefault();
        if(!email || !password){
            return toast.error('All fields are required!');
        }
        
        setValues({ ...values, isLoading: true });
        signin({ email , password }).then(data => {
            if(data.error)  return toast.error(data.error);

            authenticate(data, () => {
                setValues({ 
                    ...values, 
                    isLoading: false, 
                    isComplete: true,
                    email: '',
                    password: '',
                });
                toast.success('Sign in success😎!');
                return setTimeout(() => {
                    history.push('/');
                }, 2000);
            })
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error);
            return toast.error('Sorry, something went wrong!');
        })

        return setValues({ ...values, isComplete: false });

    }

    return (
        <Base>
            <ToastContainer />
            <FormWrapper>
                <FormHeaderText>Welcome Back!</FormHeaderText>
                <StyledForm>
                    <InputWrapper>
                        <StyledInput type="email" placeholder="Email" onChange={handleChange("email")} value={email} />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledInput type="password" placeholder="Password" onChange={handleChange("password")} value={password} />
                    </InputWrapper>
                    <Button type="submit" onClick={handleSubmit} disabled={isLoading || isComplete}>
                        {!isComplete && "Sign in"}
                        {isComplete && (
                            <>
                                <FiCheck size="1.5rem" style={{ marginRight: '0.6em'}} />
                                Success
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


export default Signin
