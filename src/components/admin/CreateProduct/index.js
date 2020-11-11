import React, { useEffect, useState } from 'react';
import { InputWrapper, StyledInput } from '../../auth/Signup/SignupElements';
import AdminBase from '../../core/AdminBase';
import { getCategories } from '../helpers/adminApicalls';
import { AdminForm, AdminFormWrapper, FormTextArea, InputFormGroup, InputSelect } from './AdminForm';

const CreateProduct = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(data => {
            console.log(data);
            setCategories(data);
        }).catch(err => {

        });
        // eslint-disable-next-line
    }, [])

    return (
        <AdminBase title="Add new products" desc="you can add info about new stock here!">
            <AdminFormWrapper>
                <AdminForm>
                    <InputWrapper>
                        <StyledInput placeholder="Name" />
                    </InputWrapper>
                    <InputWrapper>
                        <FormTextArea  cols="30" rows="10" placeholder="Add Product desciption"></FormTextArea>
                    </InputWrapper>
                    <InputFormGroup>
                        <InputWrapper>
                            <StyledInput placeholder="Price" type="Number" />
                        </InputWrapper>
                        <InputWrapper>
                            <StyledInput placeholder="Stock" type="Number" />
                        </InputWrapper>
                    </InputFormGroup>
                    <InputFormGroup>
                        <InputWrapper>
                            <StyledInput placeholder="Stock" type="file" />
                        </InputWrapper>
                        <InputSelect name="category">
                            <option value="">Select Category</option>
                            {categories && categories.map((cate, idx) => (
                                <option key={idx} value={cate._id}>{cate.name}</option>
                            ))}
                        </InputSelect>
                    </InputFormGroup>
                </AdminForm>
            </AdminFormWrapper>
        </AdminBase>
    )
}

export default CreateProduct
