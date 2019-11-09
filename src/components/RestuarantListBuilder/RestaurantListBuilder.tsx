import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import Header from '../Header';
import getRestaurantList from '../../assets/restaurant-list';
import Restaurant from '../Restaurant';

import FilterSection from '../FilterSection';

import './RestaurantListBuilder.scss';

interface ObjectLiteral {
  [key: string]: number;
}

const RestaurantListBuilder: React.FC = () => {
  const [loadingState, setLoadingState] = React.useState<boolean>(false);
  const [restaurantList, setRestaurantList] = React.useState<RestaurantType[]>(
    []
  );
  const [filters, setFilters] = React.useState<ObjectLiteral>({});
  const [location, setLocation] = React.useState<string>('');

  React.useEffect(() => {
    setLoadingState(true);
    //actual request will look like this
    // http.get('url')
    //   .then(list =>  {
    //     console.log(list);
    //   }).catch(err => console.log(err.message));

    // hardcoding for now
    const { location, restaurants } = getRestaurantList();
    setLocation(location);
    setRestaurantList(restaurants);
    setLoadingState(false);

    let tempMap: ObjectLiteral = {};
    for(const restaurant of restaurants) {
      
      for(const tag of restaurant.tags) {
        if(tempMap.hasOwnProperty(tag)) {
          tempMap[tag] += 1;
        } else {
          tempMap[tag] = 1;
        }
      }
    }
    setFilters(tempMap);
  }, []);

  const doFilter = (event: React.MouseEvent<HTMLLIElement>, tag: string) => {
    let sortedList = [];

    if(!tag) {
      sortedList = getRestaurantList().restaurants;
    } else {
      sortedList = restaurantList.filter((r: RestaurantType) => {
        return r.tags.includes(tag);
      });
    }
    setRestaurantList(sortedList);
  };

  
  return (
    <div>
      <Header location={location} />
      {loadingState && <Spinner animation="border" variant="info" />}
      <FilterSection tags={filters} doFilter={doFilter}/>
      {!loadingState && (
        <div>
          <div className="restaurant-count">
            {restaurantList.length} Restaurants
          </div>
          <div className="restaurant-list">
            {restaurantList.map((restaurant: RestaurantType) => (
              <Restaurant key={restaurant.id} details={restaurant} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export type RestaurantType = {
  id: string;
  name: string;
  image: string;
  url: string;
  price: number;
  tags: string[];
};

export default RestaurantListBuilder;
