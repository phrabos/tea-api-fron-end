import request from 'superagent';

const URL = 'https://still-plains-76172.herokuapp.com';

export async function getTeas() {
    const response = await request.get(`${URL}/teas`);

    return response.body;
}

export async function getCategories() {
    const response = await request.get(`${URL}/categories`);

    return response.body;
}

export async function getFilteredCategories(category) {
    const response = await request.get(`${URL}/teas/category/${category}`);

    return response.body;
}