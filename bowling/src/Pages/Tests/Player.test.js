import { render, screen } from "@testing-library/react";
import Player from "../player.js";

describe('Get player name', () => {
    it('A player can retieve their name', () => {
        const player = new Player();
         expect(player.getName()).toEqual("alex");
    });
    it('A player can be added to the game', () => {
        const player = new Player();
        expect(player.players.length).toEqual(2)
    });
 });

describe("Checking input value and testing component", () => {
  test("Input is valid within file", () => {
    //Rendering Player Component within the virtual dom
    render(<Player />);

    //Calling the input in a variable
    const playerInput = screen.getByRole("textbox");

    //Expecting element to be found within component
    expect(playerInput).toBeInTheDocument();
  });
});
