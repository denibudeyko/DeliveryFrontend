import React from 'react';
import { RestaurantInterface } from '../../Interfaces/RestaurantInterface';
import './Food.sass';

const Food:React.FC<RestaurantInterface> = (props: RestaurantInterface) => {
  const {
    id,
    name,
    description,
    minPrice,
    saleValue,
    deliveryTime,
    image,
  } = props;
  return (
    <section className="food">
      <div className="food-image">
        <img src="/images/food/food.jpg" alt="" />
      </div>
      <div className="food-content">
        <div className="food-title">
          <h1>{name}</h1>
        </div>
        <div className="food-items">
          <div className="food-item">
            <span>
              Заказ от
              {minPrice}
              ₽
            </span>
          </div>
          <div className="food-item">
            <span>
              Время доставки:
              {deliveryTime}
            </span>
          </div>
          <div className="food-item food-item__info">
            <span>Информация о ресторане</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;
