export const generateMockingProducts =  () => {
    const products = [];
    for (let i = 1; i <= 100; i++) {
      const product = {
        _id: `product_${i}`,
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 100) + 1,
        description: `Description of Product ${i}`,
      };
      products.push(product);
    }
    return products;
};