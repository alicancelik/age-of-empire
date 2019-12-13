import {
  FILTER_UNIT,
} from '../../symbols/units';

export const filterUnitAction = payload => ({
  type: FILTER_UNIT,
  payload,
});
