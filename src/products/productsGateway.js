const baseUrl = 'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/bankUsers';

export const addProduct = productData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  }).then(response => {
    if (!response.ok) {
      alert("Internal Server Error. Can't create product");
    }
    return response.json();
  });

export const fetchProductList = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      alert("Internal Server Error. Can't display products");
    }
    return response.json();
  });

export const deleteProduct = productId =>
  fetch(`${baseUrl}/${productId}`, { method: 'DELETE' }).then(response => {
    if (!response.ok) {
      alert("Internal Server Error. Can't delete product");
    }
    return response.json();
  });
