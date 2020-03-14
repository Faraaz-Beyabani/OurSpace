import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App.js'

test('ListingList is rendered', () => {
    const { getByTestId } = render(<App />);
    const grid = getByTestId("listings-grid");
    expect(grid).toBeInTheDocument();
})

test('Button opens modal', () => {
    const { getByTestId } = render(<App />);
    const card = getByTestId("card-1");
    fireEvent.click(card);
    const view = getByTestId("test-detail-view");
    expect(view).toBeInTheDocument();
})
