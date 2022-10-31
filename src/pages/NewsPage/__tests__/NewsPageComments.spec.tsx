import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NewsPageComments, NewsPageCommentsProps } from "../NewsPageComments";

describe("NewsPageComments", () => {
  let newsPageCommentsProps: NewsPageCommentsProps;

  beforeEach(() => {
    newsPageCommentsProps = {
      parentComments: [
        {
          by: "Alexey Sidorov",
          kids: [52321, 13132],
          parent: 2312,
          text: "This is such a great news!",
          time: 1667042037,
          type: "comment",
          id: 2,
        },
      ],
      currentNewsComments: [
        {
          by: "Petr Ivanov",
          kids: [],
          parent: 2,
          text: "I can not believe in that!",
          time: 456,
          type: "comment",
          id: 52321,
        },
      ],
      handleClickOnComment: jest.fn(),
    };
  });

  it("should display the comment author's name", () => {
    render(<NewsPageComments {...newsPageCommentsProps} />);
    expect(screen.getByText("Alexey Sidorov")).toBeVisible();
  });

  it("should display the comment's text", () => {
    render(<NewsPageComments {...newsPageCommentsProps} />);
    expect(screen.getByText("This is such a great news!")).toBeVisible();
  });

  it("should display the number of child comments", () => {
    render(<NewsPageComments {...newsPageCommentsProps} />);
    expect(screen.getByText("2 child comments ▼")).toBeVisible();
  });
});
