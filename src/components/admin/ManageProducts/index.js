import React, { useEffect, useState } from 'react'
import AdminBase from '../../core/AdminBase'
import { getProducts } from '../helpers/adminApicalls';
import ProductCard from '../ProductCard';
import { Wrapper } from './ManageElements';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => {
            if(data.error){

            }
            setProducts(data);
        }).catch(err => {

        })
        
    }, [])

    return (
        <AdminBase title="Manage Products" desc="See all of your products here.">
            <Wrapper>
                {products && (
                    products.map((product, idx) => (
                        <ProductCard product={product} key={idx} />
                    ))
                )}
            </Wrapper>
        </AdminBase>
    )
}

export default ManageProducts
