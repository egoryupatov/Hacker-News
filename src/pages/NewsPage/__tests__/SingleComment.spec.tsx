import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SingleComment } from "../SingleComment";
import { SingleCommentProps } from "../SingleComment";

describe("SingleComment", () => {
  let singleCommentProps: SingleCommentProps;

  beforeEach(() => {
    singleCommentProps = {
      parentComment: {
        by: "Alexey Sidorov",
        kids: [52321, 13132],
        parent: 2312,
        text: "This is such a great news!",
        time: 1667042037,
        type: "comment",
        id: 2,
      },
      handleClickOnComment: jest.fn(),
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
    };
  });

  it("should display the comment author's name", () => {
    render(<SingleComment {...singleCommentProps} />);
    expect(screen.getByText("Alexey Sidorov")).toBeVisible();
  });

  it("should display the news test", () => {
    render(<SingleComment {...singleCommentProps} />);
    expect(screen.getByText("This is such a great news!")).toBeVisible();
  });

  it("should display the number of comments", () => {
    render(<SingleComment {...singleCommentProps} />);
    expect(screen.getByText("2 child comments ▼")).toBeVisible();
  });
});
