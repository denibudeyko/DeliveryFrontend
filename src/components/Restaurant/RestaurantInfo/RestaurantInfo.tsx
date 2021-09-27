import React from 'react';
import { RestaurantCardInterface } from '../../Restaurants/RestaurantsInterface';
import { RestaurantInfoStyled } from './RestaurantInfoStyled';

const RestaurantInfo:React.FC<RestaurantCardInterface> = (
  { name, minPrice, deliveryTime }: RestaurantCardInterface,
) => (
  <RestaurantInfoStyled>
    <div className="restaurant-info__photo">
      <img src="/images/info.jpg" alt="Info" />
    </div>
    <div className="restaurant-info__content">
      <div className="restaurant-content__name">
        {name}
      </div>
      <div className="restaurant-content__bottom">
        <div className="restaurant-content__price">{minPrice}</div>
        <div className="restaurant-content__time">{deliveryTime}</div>
        <div className="restaurant-content__link">Information about restaurant</div>
      </div>
    </div>
  </RestaurantInfoStyled>
);

export default RestaurantInfo;
