import React from "react";
import PropTypes from "prop-types";
import deafultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  return (
    <article className="product">
      <img src={image.url} alt={'ok'}/>
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: deafultImage,
};

export default Product;
