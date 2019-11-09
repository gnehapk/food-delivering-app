import React from 'react';

import RestaurantTags from '../RestaurantTags';
import { RestaurantType } from '../RestuarantListBuilder/RestaurantListBuilder';

import './RestaurantDetails.scss';

const RestaurantDetails: React.FC<RestaurantDetailsPropsType> = (props) => (
  <div>
    <div className="restuarant-name">{props.details.name}</div>
    <div className="tags">
      <RestaurantTags tags={props.details.tags} />
      <div>&pound;&nbsp;{props.details.price}</div>
    </div>
  </div>
);

type RestaurantDetailsPropsType = {
  details: RestaurantType;
}

export default RestaurantDetails;