import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

describe('Header component', () => {
    beforeEach(() => {
        render(<Header />);
    });

    //check header text "Emoji Search", smiling cat image and winking cat image is rendered
    it('renders the header text', () => {
        const header = screen.getByText('Emoji Search');
        const smilingCatImage = screen.getByAltText('Smiling cat emoji');
        const winkingCatImage = screen.getByAltText('Winking cat emoji');
        expect(header).toBeInTheDocument();
        expect(smilingCatImage).toBeInTheDocument();
        expect(winkingCatImage).toBeInTheDocument();
    });

});
