import React, { useState } from "react";
import "./AllProducts.css";

const AllProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: "Party Balloons Pack",
      price: "$75.00",
      originalPrice: "$100.00",
      image: "https://images.unsplash.com/photo-1599350458323-39e8e3dbd3ac?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Party Chair Set",
      price: "$50.00",
      originalPrice: "$75.00",
      image: "https://images.unsplash.com/photo-1580528142519-ead80881deff?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Cake Display Stand",
      price: "$30.00",
      originalPrice: "$45.00",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Party Bed Decor",
      price: "$82.00",
      originalPrice: "$110.00",
      image: "https://images.unsplash.com/photo-1540932239986-7ffaaea56fdf?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Party Storage Box",
      price: "$50.00",
      originalPrice: "$75.00",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Decoration Frame",
      price: "$55.00",
      originalPrice: "$80.00",
      image: "https://images.unsplash.com/photo-1579182172519-e11f3e3a6dd1?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Party Table Desk",
      price: "$50.00",
      originalPrice: "$100.00",
      image: "https://images.unsplash.com/photo-1598928506323-70ce83fcdc1f?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Kids Party Crib",
      price: "$225.00",
      originalPrice: "$300.00",
      image: "https://images.unsplash.com/photo-1584622614875-2f342474ddac?q=80&w=500&auto=format&fit=crop"
    }
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
