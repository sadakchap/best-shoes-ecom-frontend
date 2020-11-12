import React from 'react'
import styled from 'styled-components';
import { lighten } from 'polished';
import { API } from '../../backend';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const CardActionLink = styled(Link)`
    display: flex;
    margin: 0 1em;
    text-decoration: none;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.7rem;
    gap: 0.3rem;
`;

const CardActions = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1em;
`;

const CardFooter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: ${lighten(0.1, '#000')};
    visibility: hidden;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 300ms ease-in-out;
`;

const ProductDesc = styled.p`
    font-size: 0.7rem;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 0 2em;
    margin: 0 auto 1em auto;
    color: #fff;

`;

const ProductName = styled.h4`
    padding: 0 1em;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: white;
    text-transform: capitalize;
    font-size: 0.95rem;
    visibility: visible;
    transition: 300ms ease-in-out;
`;

const CardBody = styled.div`
    position: absolute;
    bottom: 5%;
    width: 100%;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Card = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 0, .2);
    &:hover{
        ${CardFooter}{
            visibility: visible;
            opacity: 0.9;
        }
        ${ProductName}{
            visibility: hidden;
        }
    }
`;


const ProductCard = ({ product }) => {
    const imageURL = product.photo_url ? product.photo_url : `${API}product/photo/${product._id}`;
    const productDesc = product.desc.length > 101 ? product.desc.substring(0, 100) + ' ...' : product.desc
    return (
        <Card>
            <CardImage src={imageURL} alt="" />
            <CardBody>
                <ProductName>{product.name}</ProductName>
            </CardBody>
            <CardFooter>
                <ProductName style={{textAlign: "center", visibility: "visible"}}>{product.name}</ProductName>
                <ProductDesc>{productDesc}</ProductDesc>
                <CardActions>
                    <CardActionLink to={`/admin/products/edit/${product._id}`} ><AiFillEdit size="1rem" />Edit</CardActionLink>
                    <CardActionLink to={`/admin/products/delete/${product._id}`} ><AiFillDelete size="1rem" />Delete</CardActionLink>
                </CardActions>
            </CardFooter>
        </Card>
    )
}

export default ProductCard
