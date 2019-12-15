import { filterUnitAction } from './units/filter';
import {
  getUnitsAction, getUnitsActionSuccess,
  getUnitsActionFailure,
} from './units/get';
import { setUnitDetail } from './units/set-unit-detail';

describe('ACTIONS', () => {
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'FILTER_UNIT'
    }
    expect(filterUnitAction()).toEqual(expectedAction)
  });

  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'GET_UNITS'
    }
    expect(getUnitsAction()).toEqual(expectedAction)
  });

  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'GET_UNITS_SUCCESS'
    }
    expect(getUnitsActionSuccess()).toEqual(expectedAction)
  });

  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'GET_UNITS_FAILURE'
    }
    expect(getUnitsActionFailure()).toEqual(expectedAction)
  })

  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'SET_UNIT_DETAIL'
    }
    expect(setUnitDetail()).toEqual(expectedAction)
  })
})