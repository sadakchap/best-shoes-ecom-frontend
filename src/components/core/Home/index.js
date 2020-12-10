import React, { useEffect, useState, useRef, useCallback } from "react";
import { getFilteredProducts } from "../../admin/helpers/adminApicalls";
import Base from "../Base";
import HeroSection from "../HeroSection";
import UserProductCard from "../UserProductCard";
import { ProductCardsWrapper } from "./HomeElements";
import { toast, ToastContainer } from "react-toastify";
import useDebounce from "../../../hooks/useDebounce";
import SearchInput from "../SearchInput.js";
import useFetchProducts from "../../../hooks/useFetchProducts";
import Spinner from "../../util/Spinner";

const Home = () => {
  const [reload, setReload] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredPrdoucts, setFilteredPrdoucts] = useState([]);
  const debouncedSearch = useDebounce(searchText, 500);
  const [pageNumber, setPageNumber] = useState(1);

  const { products, hasMore, isFetching, error } = useFetchProducts(pageNumber);
  const observer = useRef();
  const lastProductCardRef = useCallback(
    (node) => {
      if (isFetching || isSearching) return;
      if (!node) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      observer.current.observe(node);
    },
    [isFetching, isSearching, hasMore]
  );

  useEffect(() => {
    if (debouncedSearch) {
      setIsSearching(true);
      getFilteredProducts(debouncedSearch)
        .then((data) => {
          setIsSearching(false);
          setFilteredPrdoucts(data);
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.data?.error)
            return toast.error(err.response.data.error);
          return toast.error("Counldn't find any results now!");
        });
    }
  }, [debouncedSearch]);

  const data = searchText ? filteredPrdoucts : products;

  if (error) {
    return toast.error(error);
  }

  return (
    <Base>
      <ToastContainer />
      <HeroSection />
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      {isSearching && <Spinner />}
      <ProductCardsWrapper>
        {data.length ? (
          data.map((product, idx) => {
            if (data.length === idx + 1) {
              return (
                <UserProductCard
                  key={idx}
                  product={product}
                  setReload={setReload}
                  reload={reload}
                  childRef={lastProductCardRef}
                />
              );
            }
            return (
              <UserProductCard
                product={product}
                key={idx}
                setReload={setReload}
                reload={reload}
              />
            );
          })
        ) : (
          <div style={{ textAlign: "center" }}>No results found!</div>
        )}
      </ProductCardsWrapper>
      {isFetching && <Spinner />}
      {!hasMore && (
        <div style={{ textAlign: "center" }}>Yeh! You have seen it all!</div>
      )}
    </Base>
  );
};

export default Home;
