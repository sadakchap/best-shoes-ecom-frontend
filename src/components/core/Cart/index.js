import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '../../reuseableComponents/Buttons';
import { AiFillSafetyCertificate } from "react-icons/ai";
import Base from '../Base';
import { getTotalAmount, loadCart, removeItemFromCart } from '../helpers/cartHelper';
import { 
    CartLeftPanel, 
    PriceTableWrapper, 
    HelpText,
    CartPageWrapper, 
    CartRightPanel, 
    CartListBody, 
    RemoveButton, 
    CartListHeader, 
    CartItem, 
    CartListFooter, 
    ItemDetail, 
    ItemImg, 
    ItemImgWrapper, 
    ItemName, 
    ItemCategory, 
    ItemPrice, 
    PriceTable,
    CartContainer
} from './CartPageElements';
import { isAuth } from '../../auth/helpers/auth';
import PaytmCheckout from '../PaytmCheckout';
import { toast, ToastContainer } from 'react-toastify';
import EmptyCartImg from '../../../assets/img/emptycart.png';


const Cart = () => {
    
    const [cartItems, setCartItems] = useState([]);
    const [reload, setReload] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setCartItems(loadCart());
        setTotalAmount(getTotalAmount());
    }, [reload]);

    const leftPanel = () => (
        <CartLeftPanel>
            <PriceTableWrapper> 
                <CartListHeader>
                   My Cart ({cartItems.length})
                </CartListHeader>
                
                <CartListBody>
                    {cartItems.map((item, idx) => (
                        <CartItem key={idx}>
                            <ItemImgWrapper>
                                <ItemImg src={item.photo_url} />
                            </ItemImgWrapper>
                            <ItemDetail>
                                <ItemName>{item.name}</ItemName>
                                <ItemCategory>Category: <span>{item.category.name}</span></ItemCategory>
                                <ItemPrice>₹ {item.price}</ItemPrice> 
                                <RemoveButton onClick={() => {
                                    removeItemFromCart(item);
                                    setReload(!reload);
                                }} >REMOVE</RemoveButton>
                            </ItemDetail>
                        </CartItem>
                    ))}
                </CartListBody>
                
                <CartListFooter>
                    <Link to="/">
                        <SecondaryButton width="220px">Continue Shopping</SecondaryButton>
                    </Link>
                </CartListFooter>
            </PriceTableWrapper>
        </CartLeftPanel>
    );

    const rightPanel = () => (
        <CartRightPanel>
            <PriceTableWrapper>
                <CartListHeader style={{ color: '#777' }}>PRICE DETAILS</CartListHeader>
                <PriceTable>
                    <tbody>
                        <tr>
                            <td>Price ({cartItems.length} item)</td>
                            <td style={{ textAlign: 'right'}}> ₹ {totalAmount}</td>
                        </tr>
                        <tr>
                            <td>Delivery Charges</td>
                            <td style={{ textAlign: 'right'}}>{totalAmount > 500 ? (<span style={{ color: "#45e545", fontWeight: "600" }}>FREE</span>) : ' ₹ 20'}</td>
                        </tr>
                        <tr className="amount">
                            <td>Total Amount</td>
                            <td style={{ textAlign: 'right'}}> ₹ {totalAmount > 500 ? totalAmount: ` ${totalAmount+20}`}</td>
                        </tr>
                    </tbody>
                </PriceTable>
                <div style={{padding: "0.5em 2em"}}>
                    {isAuth() ? (
                        <PaytmCheckout toast={toast} />
                    ) : (
                        <Link to="/signin">
                            <PrimaryButton width="100%">Sign In</PrimaryButton>
                        </Link>
                    )}
                </div>
                <HelpText><AiFillSafetyCertificate size="2rem" style={{marginRight: "0.5em"}} /> Safe and Secure Payments. Easy returns. 100% Authenticate products.</HelpText>
            </PriceTableWrapper>
        </CartRightPanel>
    );

    return (
        <Base>
            <ToastContainer />
            <CartPageWrapper>
                { cartItems.length ? (
                    <>
                        {leftPanel()}
                        {rightPanel()}
                    </>
                ) : (
                    <CartContainer>
                        <ItemImgWrapper style={{width: '200px', background: 'transparent'}}>
                            <ItemImg src={EmptyCartImg} alt="Empty Cart" style={{boxShadow: '0 0 3px rgba(0, 0, 0, .1)'}} />
                        </ItemImgWrapper>
                        <p style={{color: '#555', margin: '0.5em auto'}}>Your cart is empty</p>                        
                        <Link to="/">
                            <PrimaryButton>Happy Shopping</PrimaryButton>
                        </Link>
                    </CartContainer>
                )}
            </CartPageWrapper>
        </Base>
    )
}

export default Cart
