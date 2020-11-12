import { API } from '../../../backend';

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    }).then(res => res.json())
    .catch(err => console.log(err));
};

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(res => res.json())
    .catch(err => console.log(err))
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