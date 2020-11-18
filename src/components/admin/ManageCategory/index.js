import React, { useEffect, useState } from 'react';
import AdminBase from '../../core/AdminBase';
import { toast, ToastContainer } from 'react-toastify';
import { getAllCategories } from '../helpers/adminApicalls';

const ManageCategory = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getAllCategories().then(data => {
            if(data.error){
                return toast.error('Unable to fetch products info. Please try again later!')
            }
            setCategories(data);
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error)
            return toast.error('Unable to fetch Categories info. Please try again later!')
        })
    }, []);

    return (
        <AdminBase  title="Manage Categories" desc="See all of your Categories here.">
            <ToastContainer />
            { categories && categories.map((cate, idx) => (
                <div className="" key={idx}>
                    {cate.name}
                </div>
            ))}
        </AdminBase>
    )
}

export default ManageCategory
