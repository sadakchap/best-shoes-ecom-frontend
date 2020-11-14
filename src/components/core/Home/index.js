import React, { useEffect, useState} from 'react'
import { getProducts } from '../../admin/helpers/adminApicalls';
import Base from '../Base'
import HeroSection from '../HeroSection';
import UserProductCard from '../UserProductCard';
import { ProductCardsWrapper } from './HomeElements';
import { toast, ToastContainer } from "react-toastify";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getProducts().then(data => {
            if(data.error){
                return toast.error('Unable to fetch products info. Please try again later!')
            }
            setProducts(data);
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error)
            return toast.error('Unable to fetch products info. Please try again later!')
        });
    }, []);

    return (
        <Base>
            <ToastContainer />
            {/* <HeroSection /> */}

            <ProductCardsWrapper>
        
                {products && products.map((product, idx) => (
                    <UserProductCard product={product} key={idx} setReload={setReload} reload={reload} />
                ))}
            </ProductCardsWrapper>
        </Base>
    )
}

export default Home
