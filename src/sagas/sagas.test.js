import { put, takeLatest } from 'redux-saga/effects';
import watcher from './units';

describe('SAGAS', () => {
  it('should dispatch action "GET_UNITS" with result from fetch News API', () => {
    const mockResponse = { "articles": "Some content" };
    const generator = watcher();
    generator.next();
    expect(generator.next(mockResponse).value)
      .toEqual(put({ type: "GET_UNITS", json: "Some content" }))
    expect(generator.next().done).toBeTruthy();
  })
});