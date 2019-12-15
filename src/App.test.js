import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./App'); // App is now a mock constructor

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  App.mockClear();
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('We can check if the consumer called the class constructor', () => {
  expect(App).toHaveBeenCalledTimes(0);
});