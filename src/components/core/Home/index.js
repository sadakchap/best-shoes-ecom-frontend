import React, { useEffect, useState} from 'react'
import { getFilteredProducts, getProducts } from '../../admin/helpers/adminApicalls';
import Base from '../Base'
import HeroSection from '../HeroSection';
import UserProductCard from '../UserProductCard';
import { ProductCardsWrapper } from './HomeElements';
import { toast, ToastContainer } from "react-toastify";
import useDebounce from '../../../hooks/useDebounce';
import SearchInput from '../SearchInput.js';
import Spinner from '../../util/Spinner';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [filteredPrdoucts, setFilteredPrdoucts] = useState([]);
    const [isComplete, setIsComplete] = useState(false);
    const debouncedSearch = useDebounce(searchText, 500);

    useEffect(() => {
        getProducts().then(data => {
            if(data.error){
                return toast.error('Unable to fetch products info. Please try again later!')
            }
            setProducts(data);
            setIsComplete(true);
        }).catch(err => {
            if(err?.response?.data?.error) return toast.error(err.response.data.error)
            return toast.error('Unable to fetch products info. Please try again later!')
        });
    }, []);

    useEffect(() => {
        if(debouncedSearch){
            setIsSearching(true);
            getFilteredProducts(debouncedSearch).then(data => {
                setIsSearching(false);
                setFilteredPrdoucts(data);
            }).catch(err => {

            })
        }
    }, [debouncedSearch]);

    const data = searchText ? filteredPrdoucts : products;

    return (
      <Base>
        <ToastContainer />
        <HeroSection />
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
        {!isComplete || isSearching ? (
          <Spinner />
        ) : (
          <ProductCardsWrapper>
            {data.length ? (
              data.map((product, idx) => (
                <UserProductCard
                  product={product}
                  key={idx}
                  setReload={setReload}
                  reload={reload}
                />
              ))
            ) : (
              <>No results found!</>
            )}
          </ProductCardsWrapper>
        )}
      </Base>
    );
}

export default Home
