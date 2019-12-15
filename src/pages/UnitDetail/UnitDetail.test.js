import React from 'react';
import ReactDOM from 'react-dom';
import UnitDetail from ".";
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from "redux-mock-store";
import "../../setupTests"
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



Enzyme.configure({ adapter: new Adapter() })

it('should render correctly <UnitDetail>', () => {
  const mockStore = configureStore();
  const store = mockStore({
    news: {
      title: "Mock Title",
      urlToImage: "www.google.com",
      description: "Mock Description",
      url: "bbc.com"
    },
    loading: false
  });
  const wrapper = mount(
    <Provider store={store}>
      <UnitDetail />
    </Provider>);
  expect(wrapper).toMatchSnapshot();
});