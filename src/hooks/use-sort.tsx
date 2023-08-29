import {useState, useEffect} from 'react';
import {Offer} from '../types/offer';

function useSort(initialState: string, data: Offer[]) {
  const [value, setValue] = useState(data);

  useEffect(() => {
    let result;
    switch(initialState) {
      case 'Price: low to high':
    result = [...data].sort((a, b) => a.price - b.price);
    break;
    case 'Price: high to low':
    result = [...data].sort((a, b) => b.price - a.price);
    break;
    case 'Top rated first':
    result = [...data].sort((a, b) => b.rating - a.rating);
    break;
    default:
      result = data;
    break;
    }
    setValue(result);
  }, [initialState, data]);

   return value;
}

export default useSort;
