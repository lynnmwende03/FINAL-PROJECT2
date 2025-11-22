import React, { useState } from "react";
import "./AllProducts.css";

const AllProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const displayedProducts = products.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="all-products-section">
      <div className="all-products-container">
        <h2 className="all-products-title">All Product</h2>
        <p className="all-products-subtitle">
          The products we provide are only for you to on special are selected from the
          best products with number 1 quality in the world
        </p>

        <div className="products-grid">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">
                <span className="current-price">{product.price}</span>
                <span className="original-price">{product.originalPrice}</span>
              </div>
              <button className="add-to-cart">+</button>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="prev-btn" onClick={prevSlide}>
            ‹
          </button>
          <div className="dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
          <button className="next-btn" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;import React, { useState } from "react";
import "./AllProducts.css";

const AllProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const displayedProducts = products.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="all-products-section">
      <div className="all-products-container">
        <h2 className="all-products-title">All Product</h2>
        <p className="all-products-subtitle">
          The products we provide are only for you to on special are selected from the
          best products with number 1 quality in the world
        </p>

        <div className="products-grid">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">
                <span className="current-price">{product.price}</span>
                <span className="original-price">{product.originalPrice}</span>
              </div>
              <button className="add-to-cart">+</button>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="prev-btn" onClick={prevSlide}>
            ‹
          </button>
          <div className="dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
          <button className="next-btn" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
