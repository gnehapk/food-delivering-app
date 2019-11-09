import React from 'react';

const RestaurantImg: React.FC<RestaurantImgPropsType> = (props) => (
  <img src={props.restaurantImg} alt="RestaurantImg" />
);

type RestaurantImgPropsType = {
  restaurantImg: string;
};

export default RestaurantImg;