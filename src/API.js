import axios from "axios";

//All estates
export const getEstates = () => {
    return axios.get('http://localhost:8888/estate/wp-json/wp/v2/nieruchomosci').then(res => res.data);
}

//Estate with particular ID
export const getEstateByID = (id) => {
    return axios.get(`http://localhost:8888/estate/wp-json/wp/v2/nieruchomosci/${id}`).then(res => res.data);
}

//Estates in category
export const getPostsInCategory = async (name) => {
    const categories = await axios.get(`http://localhost:8888/estate/wp-json/wp/v2/categories`).then(res => res.data);
    const category = categories.filter(estate => {
        return estate.name === name;
    });
    return await axios.get(`http://localhost:8888/estate/wp-json/wp/v2/nieruchomosci?categories=${category[0].id}`).then(res => res.data);
}

//All FAQs
export const getFaqs = (id) => {
    return axios.get('http://localhost:8888/estate/wp-json/wp/v2/faq').then(res => res.data);
}
