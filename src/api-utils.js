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

export async function getSingleTea(id) {
    const response = await request.get(`${URL}/teas/${id}`);

    return response.body;
}

export async function updateTea(id, teaObject) {
    const response = await request.put(`${URL}/teas/${id}`)
    .send(teaObject);

    return response.body;
}

export async function addTea(teaObject) {
    const response = await request.post(`${URL}/teas`)
    .send(teaObject);

    return response.body;
}

export async function deleteTea(id) {
    const response = await request.delete(`${URL}/teas/${id}`);

    return response.body;
}