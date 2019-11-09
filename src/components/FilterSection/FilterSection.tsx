import React from 'react';

import './FilterSection.scss';

const FilterSection:React.FC<FilterSectionType>= (props) => {
  const getTags = () => {
    const tags = [];
    console.log(props);
    tags.push(<li onClick={(event: React.MouseEvent<HTMLLIElement>) => props.doFilter(event, '')}>View All</li>);
    for(let key in props.tags) {
      tags.push(<li onClick={(event: React.MouseEvent<HTMLLIElement>) => props.doFilter(event, key)}>{key}({props.tags[key]})</li>)
    }
    return tags;
  };
  
  return (
    <ul>
      {getTags()}
    </ul>
  )
};

type FilterSectionType = {
  tags: {
    [key: string]: number;
  },
  doFilter: (event: React.MouseEvent<HTMLLIElement>, key: string) => any
}
export default FilterSection;