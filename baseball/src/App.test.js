import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getByTestId, render } from '@testing-library/react';
import HomeTeam from './components/HomeTest/HomeTeam.component';

import App from './App';



test('renders "american" text of header element', () => {
  const wrapper = rtl.render(<App />);
  const headerElement = wrapper.queryByText(/american/i);
  expect(headerElement).toBeInTheDocument();
})

test('Hit button renders', () => {
  const wrapper = rtl.render(<App />);
  const hitBtnTxt = wrapper.getByText(/hit/i);
  expect(hitBtnTxt).toBeInTheDocument();
})

test('render the home hit label on home component', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId('home-label');
  expect(element).toBeInTheDocument();
})