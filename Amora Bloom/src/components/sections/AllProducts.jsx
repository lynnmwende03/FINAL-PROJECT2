import React from "react";
import ProductCard from "./ProductCard"; // ✅ Make sure the path is correct
import "./Allproducts.css";

export default function ProductGrid() {
  const products = [
    {
      name: "Colorful Balloons",
      price: 12,
      oldPrice: 18,
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      name: "Birthday Cake",
      price: 25,
      oldPrice: 30,
      image:
        "https://images.unsplash.com/photo-1558301211-0d8c0f9fa1f9",
    },
    {
      name: "Party Hats Pack",
      price: 7.5,
      oldPrice: 10,
      image:
        "https://images.unsplash.com/photo-1604014237800-d397d5f179b6",
    },
    {
      name: "Gift Bags Set",
      price: 9,
      oldPrice: 12,
      image:
        "https://images.unsplash.com/photo-1585669737065-9fddf5a02c97",
    },
    {
      name: "Confetti",
      price: 5,
      oldPrice: 8,
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
    },
    {
      name: "Birthday Banner",
      price: 10,
      oldPrice: 14,
      image:
        "https://images.unsplash.com/photo-1589219534449-15d3b8b1a29e",
    },
  ];

  return (
    <section className="products">
      <h1>Birthday Party Items</h1>
      <p>Everything you need to create a fun and unforgettable birthday celebration!</p>

      <div className="grid">
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
