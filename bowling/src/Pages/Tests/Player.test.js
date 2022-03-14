import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event"
import Player from "../player.js";

describe('Get player name', () => {
  it('A player can retieve their name', () => {
    const player = new Player("alex");
    expect(player.getName()).toEqual("alex");
  });
  it('A player can be added to the game', () => {
    const player = new Player(["alex", "tom"]);
    expect(player.players.length).toEqual(2)
  });
});
describe('a board has the correct number of sections', () => {
  it('a board has 10 rows', () => {
      const player = new Board();
      player.rendersquare(0);
      player.rendersquare(1);
      player.rendersquare(2);
      player.rendersquare(3);
      player.rendersquare(4);
      player.rendersquare(5);
      player.rendersquare(6);
      player.rendersquare(7);
      player.rendersquare(8);
      player.rendersquare(9);

    expect(player.getName()).toEqual("alex");
  });
  xit('A player can be added to the game', () => {
    const player = new Player(["alex", "tom"]);
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

  test("Updates input value when value passed", () => {
    //Rendering Player Component within the virtual dom
    render(<Player />);

    //Calling the input in a variable
    const playerInput = screen.getByRole("textbox");

    //Calling event to update input value
    userEvents.type(playerInput, 'Alex');

    //Expecting value within input to have value Alex
    expect(playerInput).toHaveValue('Alex');
  });

  it("Updates input value and pushes to player array", () => {
    //Rendering Player Component within the virtual dom
    render(<Player />);

    //Calling the input in a variable
    const playerInput = screen.getByRole("textbox");

    //Calling form button
    const playerSubmit = screen.getByRole("button")

    //Calling new Player Component
    const player = new Player();

    //Calling event to update input value
    userEvents.type(playerInput, 'Alex');

    //Submitting input value
    userEvents.click(playerSubmit)

    expect(player.players()).toEqual(['Alex'])
  })
});
