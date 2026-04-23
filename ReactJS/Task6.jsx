function Product({ name, price }) {
  return (
    <li>{name} - ₹{price}</li>
  );
}

function ProductList() {
  const products = [
    { name: "Laptop", price: 55000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 2500 }
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p, index) => (
          <Product key={index} name={p.name} price={p.price} />
        ))}
      </ul>
    </div>
  );
}