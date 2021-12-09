import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/actions/asideAction';
import { ProductPointObject } from '../ProductsPoint/ProductsPointInterface';
import { ProductsItemStyled } from './ProductsItemStyled';
import placeholder from '../../../assets/img/placeholder.svg';

const ProductsItem:React.FC<ProductPointObject> = (
  { id, name, weight, description, price, image }: ProductPointObject,
) => {
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(addProduct(id, name, price, weight));
  };
  return (
    <ProductsItemStyled onClick={addProductHandler}>
      <div className={`products-item__photo ${(image && image.medium) ? '' : 'product-photo__placeholder'}`}>
        {(image && image.medium) ? (
          <img src={`http://localhost:5000/${image?.medium}`} alt="Product" />
        ) : (
          <img src={placeholder} alt="Product" />
        )}
      </div>
      <div className="products-item__content">
        <div className="products-item__name">{name}</div>
        <div className="products-item__price">{`${price} $`}</div>
        <div className="products-item__description">{description}</div>
      </div>
    </ProductsItemStyled>
  );
};

export default ProductsItem;
