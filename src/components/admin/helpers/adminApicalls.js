import { API } from '../../../backend';

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    }).then(res => res.json())
    .catch(err => console.log(err));
};