export const getProducts = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/products?offset=1&limit=12`);
    return res.json();
}