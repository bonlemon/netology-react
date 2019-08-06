import React from "react";

const ShopCard = props => {
  const { title, caption, img, price } = props;

  return (
    <div className="shop-card">
      <div className="title">{title}</div>
      <div className="desc">{caption}</div>
      <div className="slider">
        <figure>
          <img src={img} alt={title} />
        </figure>
      </div>
      <div className="cta">
        <div className="price">{price}</div>
        <button className="btn">
          Add to cart
          <span className="bg" />
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
