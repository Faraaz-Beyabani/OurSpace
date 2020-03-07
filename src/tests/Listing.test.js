import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App.js'

test('ListingList is rendered', () => {
    const { getByTestId } = render(<App />);
    const list = getByTestId("listings-grid");
    expect(list).toBeInTheDocument()
})
