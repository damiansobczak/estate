import axios from "axios";

//All estates
export const getEstates = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/nieruchomosci`).then(res => res.data);
}

//Estate with particular ID
export const getEstateByID = (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/nieruchomosci/${id}`).then(res => res.data);
}

//Estates in category
export const getPostsInCategory = async (name) => {
    const categories = await axios.get(`${process.env.REACT_APP_API_URL}/categories`).then(res => res.data);
    const category = categories.filter(estate => {
        return estate.name === name;
    });
    return await axios.get(`${process.env.REACT_APP_API_URL}/nieruchomosci?categories=${category[0].id}`).then(res => res.data);
}

//All FAQs
export const getFaqs = (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/faq`).then(res => res.data);
}

export async function getSearches(text = "", price = 99999999999, category = "") {
    const estates = await getEstates();

    //Check text
    const estateText = estates.filter(estate => estate.title.rendered.toUpperCase().includes(text.toUpperCase()));

    //Check price
    const estatePrice = estateText.filter(estate => estate.acf.cena.replace(/zł|,/g, '') <= price);

    //Check category
    const estateCategory = estatePrice.filter(estate => {
        return (category.toUpperCase() === "WYNAJEM") ? (estate.categories[0] === 2) : ((category.toUpperCase() === "SPRZEDAŻ") ? (estate.categories[0] === 3) : (estate));
    });

    return estateCategory;
}

