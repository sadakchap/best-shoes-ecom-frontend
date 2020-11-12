import { API } from '../../../backend';

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    }).then(res => res.json())
    .catch(err => console.log(err));
};

export const addProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(res => res.json())
    .catch(err => console.log(err))
};