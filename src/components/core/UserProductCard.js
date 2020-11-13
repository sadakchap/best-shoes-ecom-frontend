import React from 'react';
import styled from 'styled-components';
import { CgShoppingCart } from 'react-icons/cg'

const RemoveFromCart = styled.button`
    width: 100%;
    padding: 10px 15px;
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    border: none;
    outline: none;
    cursor: pointer;
    border: 2px solid #ffba08;
    background: transparent;
    background: -webkit-linear-gradient(45deg, #ffba08, #fb6455);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const AddToCart = styled.button`
    width: 100%;
    padding: 10px 15px;
    border-radius: 20px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(45deg, #ffba08, #fb6455);
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 500ms ease-in-out;

    &:hover{

    }
`;

const CardFooter = styled.div`
    width: 100%;
    padding-top: 10px;
`;

const ProductPrice = styled.span`
    position: absolute;
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    color: #1c1c1c;
    font-size: 1rem;
    text-align: center;
    bottom: 2%;
    right: 5%;
    transition: 400ms ease-in-out;
`
const ProductDesc = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    color: #777;
    font-size: 0.7rem;
`;

const ProductTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #ffba08;
    font-size: 1rem;
`;

const CardBody = styled.div`
    width: 100%;
    padding: 0.5em;
`;

const ProductImg = styled.img`
    position: relative;
    left: -5%;
    width: 110%;
    height: 100%;
    object-fit: contain;
    transition: 600ms ease-in-out;
`;

const ImgWrapper = styled.div`
    position: relative;
    background: #e7e7e7;
    width: 100%;
    height: 250px;
    border-radius: 10px;
`;

const ProductCardWrapper = styled.div`
    position: relative;
    padding: 0.8rem;
    width: 270px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    border: 2px solid #ffba08;
    transition: 0.5s ease;
    &:hover{
        ${ProductImg}{
            transform: rotate(30deg) scale(1.1);
            left: 3%;
        }
        ${ProductPrice}{
            right: 80%;
        }
        box-shadow: 0 0 30px rgba(0, 0, 0, .1);
        transform: scale(1.06);
    }
`;

const UserProductCard = ({ product, addToCart = true, removeFromCart = false }) => {
    const showAddToCart = () => (
        addToCart && (<AddToCart> <CgShoppingCart size="1.3rem" /> Add to Cart</AddToCart>)
    );

    const showRemoveFromCart = () => (
        removeFromCart && (<RemoveFromCart> Remove from Cart</RemoveFromCart>)
    )
    return (
        <ProductCardWrapper>
            <ImgWrapper>
                <ProductImg src={product.photo_url} />
                <ProductPrice>$ {product.price}</ProductPrice>
            </ImgWrapper>
            <CardBody>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc.substring(0, 50) + ' ...'}</ProductDesc>
            </CardBody>
            <CardFooter>
                {showAddToCart()}
                {showRemoveFromCart()}
            </CardFooter>

        </ProductCardWrapper>
    )
}

export default UserProductCard
