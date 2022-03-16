import { render, screen } from "@testing-library/react";
import Board from "../board.js";

describe("Checking Bowling Scorecard", () => {
  it("Checks title", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Title by test-id
    const title = screen.getByTestId("bowling-header");

    //Checks that it displays text
    expect(title.textContent).toBe("Bowling Game");
  });
  
  it("Checks ScoreCard", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Table by test-id
    const table = screen.getByTestId("scorecardTable");

    //Checks that scorecard table renders
    expect(table).toContainHTML("<tr></tr>");
  });

  it("Checks ScoreCard body", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Table body by test-id
    const tableBody = screen.getByTestId("score-tbody");

    //Checks that scorecard body renders
    expect(tableBody).toContainHTML("<tbody></tbody>");
  });

  it("Checks Frame 1", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Frame 1 by test-id
    const frameTh1 = screen.getByTestId("frame1-th");
    const frameTd1 = screen.getByTestId("frame1-td1");
    const frameTd2 = screen.getByTestId("frame1-td2");
    const frameTd3 = screen.getByTestId("frame1-td3");

    //Checks that frame 1 renders
    expect(frameTh1).toContainHTML("<th></th>");
    expect(frameTd1).toContainHTML("<td></td>");
    expect(frameTd2).toContainHTML("<td></td>");
    expect(frameTd3).toContainHTML("<td></td>");
  });

  it("Checks Frame 2", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Frame 2 by test-id
    const frameTh1 = screen.getByTestId("frame2-th");
    const frameTd1 = screen.getByTestId("frame2-td1");
    const frameTd2 = screen.getByTestId("frame2-td2");
    const frameTd3 = screen.getByTestId("frame2-td3");

    //Checks that frame 2 renders
    expect(frameTh1).toContainHTML("<th></th>");
    expect(frameTd1).toContainHTML("<td></td>");
    expect(frameTd2).toContainHTML("<td></td>");
    expect(frameTd3).toContainHTML("<td></td>");
  });

  it("Checks Frame 3", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Frame 3 by test-id
    const frameTh1 = screen.getByTestId("frame3-th");
    const frameTd1 = screen.getByTestId("frame3-td1");
    const frameTd2 = screen.getByTestId("frame3-td2");
    const frameTd3 = screen.getByTestId("frame3-td3");

    //Checks that frame 3 renders
    expect(frameTh1).toContainHTML("<th></th>");
    expect(frameTd1).toContainHTML("<td></td>");
    expect(frameTd2).toContainHTML("<td></td>");
    expect(frameTd3).toContainHTML("<td></td>");
  });

  it("Checks Frame 4", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Frame 4 by test-id
    const frameTh1 = screen.getByTestId("frame4-th");
    const frameTd1 = screen.getByTestId("frame4-td1");
    const frameTd2 = screen.getByTestId("frame4-td2");
    const frameTd3 = screen.getByTestId("frame4-td3");

    //Checks that frame 4 renders
    expect(frameTh1).toContainHTML("<th></th>");
    expect(frameTd1).toContainHTML("<td></td>");
    expect(frameTd2).toContainHTML("<td></td>");
    expect(frameTd3).toContainHTML("<td></td>");
  });

  it("Checks Frame 5", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Frame 5 by test-id
    const frameTh1 = screen.getByTestId("frame5-th");
    const frameTd1 = screen.getByTestId("frame5-td1");
    const frameTd2 = screen.getByTestId("frame5-td2");
    const frameTd3 = screen.getByTestId("frame5-td3");

    //Checks that frame 5 renders
    expect(frameTh1).toContainHTML("<th></th>");
    expect(frameTd1).toContainHTML("<td></td>");
    expect(frameTd2).toContainHTML("<td></td>");
    expect(frameTd3).toContainHTML("<td></td>");
  });

  it("Checks Frame 6", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Frame 6 by test-id
    const frameTh1 = screen.getByTestId("frame6-th");
    const frameTd1 = screen.getByTestId("frame6-td1");
    const frameTd2 = screen.getByTestId("frame6-td2");
    const frameTd3 = screen.getByTestId("frame6-td3");

    //Checks that frame 6 renders
    expect(frameTh1).toContainHTML("<th></th>");
    expect(frameTd1).toContainHTML("<td></td>");
    expect(frameTd2).toContainHTML("<td></td>");
    expect(frameTd3).toContainHTML("<td></td>");
  });

  it("Checks Frame 7", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Frame 7 by test-id
    const frameTh1 = screen.getByTestId("frame7-th");
    const frameTd1 = screen.getByTestId("frame7-td1");
    const frameTd2 = screen.getByTestId("frame7-td2");
    const frameTd3 = screen.getByTestId("frame7-td3");

    //Checks that frame 7 renders
    expect(frameTh1).toContainHTML("<th></th>");
    expect(frameTd1).toContainHTML("<td></td>");
    expect(frameTd2).toContainHTML("<td></td>");
    expect(frameTd3).toContainHTML("<td></td>");
  });

  it("Checks Frame 8", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Frame 8 by test-id
    const frameTh1 = screen.getByTestId("frame8-th");
    const frameTd1 = screen.getByTestId("frame8-td1");
    const frameTd2 = screen.getByTestId("frame8-td2");
    const frameTd3 = screen.getByTestId("frame8-td3");

    //Checks that frame 8 renders
    expect(frameTh1).toContainHTML("<th></th>");
    expect(frameTd1).toContainHTML("<td></td>");
    expect(frameTd2).toContainHTML("<td></td>");
    expect(frameTd3).toContainHTML("<td></td>");
  });

  it("Checks Frame 9", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Frame 9 by test-id
    const frameTh1 = screen.getByTestId("frame9-th");
    const frameTd1 = screen.getByTestId("frame9-td1");
    const frameTd2 = screen.getByTestId("frame9-td2");
    const frameTd3 = screen.getByTestId("frame9-td3");

    //Checks that frame 9 renders
    expect(frameTh1).toContainHTML("<th></th>");
    expect(frameTd1).toContainHTML("<td></td>");
    expect(frameTd2).toContainHTML("<td></td>");
    expect(frameTd3).toContainHTML("<td></td>");
  });

  it("Checks Frame 10", () => {
    //Renders Board.js
    render(<Board />);

    //Grabs Frame 10 by test-id
    const frameTh1 = screen.getByTestId("frame10-th");
    const frameTd1 = screen.getByTestId("frame10-td1");
    const frameTd2 = screen.getByTestId("frame10-td2");
    const frameTd3 = screen.getByTestId("frame10-td3");

    //Checks that frame 10 renders
    expect(frameTh1).toContainHTML("<th></th>");
    expect(frameTd1).toContainHTML("<td></td>");
    expect(frameTd2).toContainHTML("<td></td>");
    expect(frameTd3).toContainHTML("<td></td>");
  });
});
