import { useState, useEffect } from "react";
import "./styles.css";

export default function ProductsCar() {
  const [products, setProducts] = useState([]);
  const [car, setCar] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error("Erro na Api: ", err));
  }, []);

  const AddCar = (product) => {
    setCar((prev) => [...prev, product]);
  };

  const RemoveFromCar = (idx) => {
    setCar((prev) => prev.filter((_, i) => i !== idx));
  };

  let total = 0;
  for (let i = 0; i < car.length; i++) {
    total += car[i].price;
  }
  return (
    <div>
      <h2 className="Titulo-vermelho App">Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h5>
              {product.title} - ${product.price}
            </h5>
            <button onClick={() => AddCar(product)}>Adicionar</button>
          </li>
        ))}
      </ul>

      <h2 className="Titulo-vermelho">Carrinho</h2>
      <ul>
        {car.map((item, idx) => (
          <li key={idx}>
            <h5>
              {item.title} - ${item.price}
            </h5>

            <button onClick={() => RemoveFromCar(idx)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>
        <strong>Total:</strong> ${total}
      </p>
    </div>
  );
}
