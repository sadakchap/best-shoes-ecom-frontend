import React, { useState, useEffect } from 'react';
import { isAuth } from '../../auth/helpers/auth';
import { PrimaryButton } from '../../reuseableComponents/Buttons';
import { getTotalAmount, loadCart } from '../helpers/cartHelper';
import { initiateTransaction } from '../helpers/paytmPaymentHelper';


const PaytmCheckout = () => {
    
    const { user: {_id: userId}, token } = isAuth();
    const [cartProducts, setCartProducts] = useState([]);
    const [paytmParam, setPaytmParam] = useState({
        MID: '',
        ORDER_ID: '',
        TXN_TOKEN: ''
    });

    useEffect(() => {
        setCartProducts(loadCart());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalAmount = getTotalAmount();
        initiateTransaction(userId, token, totalAmount).then(data => {
            setPaytmParam({
                MID: process.env.REACT_APP_PAYTM_MERCHANT_ID,
                ORDER_ID: data.orderId,
                TXN_TOKEN: data.txnToken
            });
            e.target.submit();
        }).catch(err => {
            console.log(err);
        })
    }   
    const {
        MID,
        ORDER_ID,
        TXN_TOKEN
     } = paytmParam;


    return (
        <>
            <form action={`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${process.env.REACT_APP_PAYTM_MERCHANT_ID}&orderId=${ORDER_ID}`} method="post" onSubmit={handleSubmit}>
                <input type="hidden" name="mid" value={MID} />
                <input type="hidden" name="orderId" value={ORDER_ID} />
                <input type='hidden' name='txnToken' value={TXN_TOKEN} />

                <PrimaryButton type="submit">Pay with Patym</PrimaryButton>
            </form>
        </>
    )
}

export default PaytmCheckout

// orderId: "ORDER_ID_1605521397071"
// txnToken: "06f63f34ca7347c484b3f3dec9d16a5c1605521398298"
