import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmojiResults from "../components/EmojiResult/EmojiResult";
import EmojiResultsRow from "../components/EmojiResultRow/EmojiResultRow";
import emojilist from "../emojiList.json";

describe("EmojiResults component", () => {
    //define the data to be used for testing
    const emojiData = emojilist.slice(0, 20);

    //check EmojiResults component renders the correct length
    it("renders the emoji list", () => {
        const { container } = render(<EmojiResults emojiData={emojiData} />);
        const emojiRows = container.getElementsByClassName("component-emoji-result-row");
        expect(emojiRows).toHaveLength(20);
    });

    //check EmojiResultsRow component renders the correct title and emoji
    it("renders the correct title and symbol for each EmojiResultRow component", () => {
        emojiData.forEach((emoji) => {
            render(<EmojiResultsRow key={emoji.title} title={emoji.title} symbol={emoji.symbol} />);
            const title = screen.getByText(emoji.title);
            const symbol = screen.getByRole("img", { name: emoji.title });
            expect(title).toBeInTheDocument();
            expect(symbol).toBeInTheDocument();
        });
    });
});
