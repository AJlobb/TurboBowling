import { render, screen } from "@testing-library/react";
import Board from "../board.js";

describe('Checking Boarling Scorecard', () => {
    it('checking the scorecard displays', () => {
        render(<Board />)

        const table = screen.getByTestId("scorecardTable")

        expect(table).toContainHTML('<tr></tr>')
    })
})