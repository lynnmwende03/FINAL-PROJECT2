import React from "react";
import "./NewInstore.css";

const items = [
  { id: 1, title: "Party Kits", image: "/images/birthday-party.jpg", caption: "Everything you need to throw a kid-friendly party" },
  { id: 2, title: "Gift Bundles", image: "/images/gift-bundles.jpg", caption: "Thoughtful bundles for all ages" },
  { id: 3, title: "Decorations", image: "/images/decorations.jpg", caption: "Banners, balloons, and tableware" },
  { id: 4, title: "Treats & Cakes", image: "/images/cakes.jpg", caption: "Ready-made cakes and sweet treats" },
];

export default function NewInStore() {
  return (
    <section className="new-section" aria-labelledby="new-section-title">
      <div className="new-inner">
        <aside className="new-side">
          <h3 id="new-section-title" className="new-pretitle">Celebrate</h3>
          <h2 className="new-title">Make Birthdays Unforgettable</h2>
          <p className="new-sub">
            Plan a joyful celebration — party kits, decorations, cakes and gifts to make your day special.
          </p>
          <a className="new-cta" href="/birthday">Plan a Party →</a>
        </aside>

        <div className="new-grid" role="list">
          {items.map((it) => (
            <article key={it.id} className="product-card" role="listitem">
              <div className="product-media">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  className="product-img"
                />
              </div>
              <div className="product-foot">
                <div>
                  <span className="product-title">{it.title}</span>
                  <p className="product-caption">{it.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
