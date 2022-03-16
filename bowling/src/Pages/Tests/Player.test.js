import { render, screen, fireEvent } from "@testing-library/react";
import userEvents from "@testing-library/user-event"
import Player from "../player.js";


describe('Get player name', () => {
  it('A player can retieve their name', () => {
    const player = new Player("alex");
    expect(player.getName()).toEqual("alex");
  });
  xit('A player can be added to the game', () => {
    const player = new Player(["alex", "tom"]);
    expect(player.players.length).toEqual(2)
  });
  xit('A player can be added to the game', () => {
    const player = new Player(["alex", "tom"]);
    expect(player.players.length).toEqual(2)
  });
});

describe("Checking input value and testing component", () => {
  it("Input is valid within file", () => {
    //Rendering Player Component within the virtual dom
    render(<Player />);

    //Calling the input in a variable
    const playerInput = screen.getByRole("textbox");

    //Expecting element to be found within component
    expect(playerInput).toBeInTheDocument();
  });

  it("Updates input value when value passed", () => {
    //Rendering Player Component within the virtual dom
    render(<Player />);

    //Calling the input in a variable
    const playerInput = screen.getByRole("textbox");

    //Calling event to update input value
    userEvents.type(playerInput, 'Alex');

    //Expecting value within input to have value Alex
    expect(playerInput).toHaveValue('Alex');
  });

  it('Given a player types their name in it inputs their name', () => {
    // const mockSubmit = jest.fn();
    render(<Player />)
    // const { debug, queryByTestId } = render(<Player onSubmit={mockSubmit} />)
    fireEvent.change(screen.getByTestId('input'), { target: { value: 'alex' } })
    fireEvent.click(screen.getByTestId('button'))

    //expect(mockSubmit).toHaveBeenCalled()
  })
});

describe('Player game tests', () => {
  it('Given a player has had 2 balls and it is not a strike it will return the score', () => {
    const player = new Player();
    player.recordBall(7)
    player.recordBall(2)
    expect(player.frameScoring(1)).toEqual(9)
  });
  it('Given a player has had 2 balls for 2 frames and it is not a strike it will return the score', () => {
    const player = new Player();
    player.recordBall(7)
    player.recordBall(2)
    player.recordBall(2)
    player.recordBall(6)
    expect(player.frameScoring(2)).toEqual(17)
  });
  it('Given a player has rolled a ball for 1 frames and its not complete return an empty string', () => {
    const player = new Player();
    player.recordBall(7)
    expect(player.frameScoring(1)).toEqual("")
  });
  it('Given a player has hit a spare it will return a / if the next ball has not been bowled yet', () => {
    const player = new Player();
    player.recordBall(7)
    player.recordBall(3)
    expect(player.frameScoring(1)).toEqual("/")
  });
  it('Given a player has hit a spare it will add the next pin to the score', () => {
    const player = new Player();
    player.recordBall(7)
    player.recordBall(3)
    player.recordBall(3)
    expect(player.frameScoring(1)).toEqual(13)
  });
  it('Given a player has hit a strike it will return an X if the next frame isnt complete', () => {
    const player = new Player();
    player.recordBall(10)
    expect(player.frameScoring(1)).toEqual("X")
  });
  it('Given a player has hit a strike it will return an X if the next frame isnt complete', () => {
    const player = new Player();
    player.recordBall(10)
    player.recordBall(5)
    expect(player.frameScoring(1)).toEqual("X")
  });
  it('Given a player has hit a strike  it will add the next frame to the score', () => {
    const player = new Player();
    player.recordBall(10)
    player.recordBall(3)
    player.recordBall(0)
    expect(player.frameScoring(1)).toEqual(13)
  });
});
