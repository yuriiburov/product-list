const baseUrl = 'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/bankUsers';

export const addProduct = (productData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });

export const fetchProductList = () =>
  fetch(baseUrl).then((response) => {
    if (!response.ok) {
      alert("Internal Server Error. Can't display products");
    }
    return response.json();
  });

export const deleteProduct = (productId) =>
  fetch(`${baseUrl}/${productId}`, { method: 'DELETE' });
