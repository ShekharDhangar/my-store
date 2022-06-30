import { getMaxPrice } from '../../components/Filters/Filters.data';

function Reducer(state, { type, payload }) {
  switch (type) {
    case 'LOGGEDIN': {
      return { ...state, userID: payload };
    }
    case 'PRODUCTS': {
      return {
        ...state,
        productsList: [...payload],
      };
    }
    case 'SORT': {
      return { ...state, sortBy: payload };
    }
    case 'FILTER': {
      console.log(payload);
      console.log(state.filterBy);
      let newFilterProperty = state.filterBy[payload.property];
      console.log(newFilterProperty, 'NEW');

      const selectedFilter = payload.selection;
      console.log(selectedFilter, 'seelcted');

      if (state.filterBy[payload.property].includes(selectedFilter)) {
        newFilterProperty = newFilterProperty.filter(
          (item) => item !== selectedFilter
        );
      } else {
        newFilterProperty = newFilterProperty.concat(selectedFilter);
      }

      console.log(newFilterProperty, 'NEWFILTER');
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          [payload.property]: newFilterProperty,
        },
      };
    }
    case 'PRICE': {
      return { ...state, price: payload };
    }
    case 'CLEAR FILTER': {
      return {
        ...state,
        sortBy: '',
        filterBy: { categories: [], color: [] },
        price: getMaxPrice(),
      };
    }

    default:
      return state;
  }
}

function dispatchFilterProperties(dispatch, payload) {
  dispatch({
    type: 'FILTER',
    payload: {
      property: payload.property,
      selection: payload.category,
    },
  });
}

function dispatchSort(dispatch, sortItem) {
  dispatch({ type: 'SORT', payload: sortItem });
}

function dispatchPrice(dispatch, event) {
  dispatch({ type: 'PRICE', payload: event.target.value });
}

function dispatchClearFilters(dispatch) {
  dispatch({ type: 'CLEAR FILTER' });
}
export {
  Reducer,
  dispatchFilterProperties,
  dispatchSort,
  dispatchPrice,
  dispatchClearFilters,
};
