import React from 'react';
import RestaurantImg from '../RestaurantImg';
import RestaurantDetails from '../RestaurantDetails';
import { RestaurantType } from '../RestuarantListBuilder/RestaurantListBuilder';

import './Restaurant.scss';

const Restuarant: React.FC<RestaurantPropsType> = (props) => {
  return (
    <div className="restaurant">
      <RestaurantImg restaurantImg={props.details.image}/>
      <RestaurantDetails details={props.details}/>
    </div>
  );
};

type RestaurantPropsType = {
  details: RestaurantType;
};

export default Restuarant;