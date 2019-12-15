import {
  GET_UNITS,
  GET_UNITS_SUCCESS,
  GET_UNITS_FAILURE,
  FILTER_UNIT,
  SET_UNIT_DETAIL
} from '../symbols/units';

export const handleFilter = (list, filter) => list ?.filter(l => (filter.age === 'All'
  ? l
  : l.age === filter.age)
  && (filter.woodChecked ? l ?.cost ?.Wood >= filter ?.woodValue : l)
  && (filter.foodChecked ? l ?.cost ?.Food >= filter ?.foodValue : l)
  && (filter.goldChecked ? l ?.cost ?.Gold >= filter ?.goldValue : l));

export default (state = {}, action) => {
  switch (action.type) {
    case GET_UNITS:
      return {
        error: false,
        loading: true,
        data: null,
        filteredData: null,
      };
    case GET_UNITS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        filteredData: action.data
      };
    case GET_UNITS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FILTER_UNIT:
      return {
        ...state,
        filteredData: handleFilter(state.data, action.payload),
      };
    case SET_UNIT_DETAIL:
      return {
        ...state,
        unitDetail: action.payload,
      };
    default:
      return state;
  }
}
