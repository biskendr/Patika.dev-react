import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SearchInput from '../components/SearchInput/SearchInput';
import EmojiResults from '../components/EmojiResult/EmojiResult';
import filterEmoji from '../filterEmoji';

describe('Search Input test', () => {
    let searchInput;
    //setting up the component for testing before each test case
    beforeEach(() => {
        const handleTextChange = jest.fn();
        render(<SearchInput textChange={handleTextChange} />);
        searchInput = screen.getByLabelText('input');
    });

    //check filtered emoji results are rendered correctly
    it('renders filtered emoji results', () => {        
        const inputValue = 'Tada';
        //get filtered emoji data by input value
        const filteredData = filterEmoji(inputValue, 20);        
        render(<EmojiResults emojiData={filteredData} />);
        //event onChange the search input with the input value
        fireEvent.change(searchInput, { target: { value: inputValue } });

        //check emoji in the filtered data is rendered in the component
        filteredData.forEach((emoji) => {
            expect(screen.getByText(emoji.title)).toBeInTheDocument();
        });
    });
});
