import {
  GET_UNITS,
  GET_UNITS_FAILURE,
  GET_UNITS_SUCCESS
} from '../../symbols/units';

export const getUnitsAction = payload => ({
  type: GET_UNITS,
  payload,
});

export const getUnitsActionSuccess = data => ({
  type: GET_UNITS_SUCCESS,
  data,
});

export const getUnitsActionFailure = error => ({
  type: GET_UNITS_FAILURE,
  error,
});
