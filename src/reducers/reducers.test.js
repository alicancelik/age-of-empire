import units from "./units";
import { handleFilter } from './units';

describe('REDUCER', () => {
  it('should return the initial state', () => {
    expect(units(undefined, {})).toEqual({})
  })
  it('should handle "GET_UNITS" action', () => {
    expect(units({}, { type: 'GET_UNITS' })).
      toEqual({
        error: false,
        loading: true,
        data: null,
        filteredData: null,
      })
  });

  it('should handle "GET_UNITS_FAILURE" action', () => {
    expect(units({}, { type: 'GET_UNITS_FAILURE' })).
      toEqual({
        error: undefined,
        loading: false,
      })
  });

  it('should handle "SET_UNIT_DETAIL" action', () => {
    const mockData = [{
      age: "All",
      id: 0,
    }];
    expect(units({}, { type: 'SET_UNIT_DETAIL', payload: mockData })).
      toEqual({
        unitDetail: mockData,
      })
  });

  it('should handle "FILTER_UNIT" action', () => {
    const mockData = [{
      age: "All",
      id: 0,
    }];
    expect(units({}, { type: 'FILTER_UNIT', payload: { age: "All" } })).
      toEqual({
        filteredData: undefined
      })
  });

  it('Adding 1 + 1 equals 2', () => {
    const mockData = [{
      age: "All",
      id: 0,
    }];
    expect(handleFilter(mockData, { age: "All" })).toEqual(mockData)
  })

  it('should handle "GET_UNITS_SUCCESS" action', () => {
    const mockData = [{
      age: "All",
      id: 0,
    }];
    expect(units({}, { type: "GET_UNITS_SUCCESS", data: mockData }))
      .toEqual({ filteredData: mockData, data: mockData, loading: false })
  });
})