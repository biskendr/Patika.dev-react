import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import EmojiResultRow from '../components/EmojiResultRow/EmojiResultRow'

describe("Copy Emoji", () => {
    let copyEmoji;
    let emoji = {
        "title": "100",
        "symbol": "💯",
        "keywords":
            "hundred points symbol symbol wow wow win win perfect perfect parties parties"
    }
    beforeEach(() => {
        //render the EmojiResultRow component with the emoji props 
        render(<EmojiResultRow key={emoji.title} title={emoji.title} symbol={emoji.symbol} />);
        //get the element emoji title "100" and store it in the copyEmoji variable
        copyEmoji = screen.getByText("100")
    })
    test("copy to clickboard test", () => {
        //simulate a click on the element containing the emoji title
        userEvent.click(copyEmoji)
        //expect the "data-clipboard-text" attribute of the parent element of the copyEmoji variable to match the "symbol" property of the emoji
        expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("💯")
    })
})