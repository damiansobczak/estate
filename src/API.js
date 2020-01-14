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
export async function getFaqs() {
    return axios.get(`${process.env.REACT_APP_API_URL}/faq`).then(res => res);
}

//Searches
export async function getSearches(text = "", price = 99999999999, category = "") {
    const estates = await getEstates();

    const estateText = estates.filter(estate => estate.title.rendered.toUpperCase().includes(text.toUpperCase()));

    const estatePrice = estateText.filter(estate => Number(estate.acf.cena.replace(/zł|,| /g, '')) <= price);

    const estateCategory = estatePrice.filter(estate => {
        return (category.toUpperCase() === "WYNAJEM") ? (estate.categories[0] === 2) : ((category.toUpperCase() === "SPRZEDAŻ") ? (estate.categories[0] === 3) : (estate));
    });

    return estateCategory;
}

//Promoted estates in Rent
export async function getPromoRent() {
    const estates = await getEstates();
    return estates.filter(estate => estate.acf.promocja & estate.categories[0] === 2);
}

//Promoted estates in Sale
export async function getPromoSale() {
    const estates = await getEstates();
    return estates.filter(estate => estate.acf.promocja & estate.categories[0] === 3);
}