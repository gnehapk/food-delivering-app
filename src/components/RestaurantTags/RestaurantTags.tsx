import React from 'react';

import './RestaurantTags.scss';

const RestaurantTags: React.FC<RestaurantTagsPropsType> = (props) => (
  <div className="tag-list">
    {
      props.tags.map((tag, index) => (
        <div className="tag" key={index}> {tag}</div>
      ))
    }
  </div>
);

type RestaurantTagsPropsType = {
  tags: string[];
};

export default RestaurantTags;