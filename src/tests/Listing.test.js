import { render, fireEvent } from '@testing-library/react';
import ListingList from '../components/Listing.js'

test('ListingList is rendered', () => {

    const { getByTestId } = render(
        <ListingList items={[1, 2, 3, 4, 5]}/>
    );

    const value = getByTestId("listings-grid");
    expect(value.items === [1, 2, 3, 4, 5])
})
