import { NewsPage } from "../NewsPage";
import { render, screen } from "@testing-library/react";
import { NewsPageProps } from "../NewsPage";
import "@testing-library/jest-dom";

describe("NewsPage", () => {
  let newsPageProps: NewsPageProps;

  beforeEach(() => {
    newsPageProps = {
      areCommentsLoaded: true,
      currentNews: {
        title: "Hello, there are some awesome news!",
        score: 565,
        by: "Egor",
        time: 1667214534,
        id: 1,
        descendants: 10,
        url: "https://spectrumlocalnews.com/nys/central-ny/politics/2022/10/26/new-york-could-become-first-state-with-a--right-to-repair--law",
        kids: [1213, 1232, 12355, 5324234, 3241, 3123, 5211, 5454, 123, 532],
        text: "The weather is going to be good today!",
      },
      parentComments: [
        {
          by: "Alexey Sidorov",
          kids: [2323, 13132],
          parent: 2312,
          text: "This is such a great news!",
          time: 232,
          type: "comment",
          id: 123123,
        },
      ],
      currentNewsComments: [
        {
          by: "Petr Ivanov",
          kids: [2223, 5132],
          parent: 1,
          text: "I can not believe in that!",
          time: 456,
          type: "comment",
          id: 52321,
        },
      ],
      handleClickOnComment: jest.fn(),
    };
  });

  it("should display the news title", () => {
    render(<NewsPage {...newsPageProps} />);
    expect(
      screen.getByText("Hello, there are some awesome news!")
    ).toBeVisible();
  });

  it("should display the comment's text", () => {
    render(<NewsPage {...newsPageProps} />);
    expect(screen.getByText("This is such a great news!")).toBeVisible();
  });

  it("should display how many child comments the parent comment has", () => {
    render(<NewsPage {...newsPageProps} />);
    expect(screen.getByText("2 child comments ▼")).toBeVisible();
  });

  it("should display how many comments the news has", () => {
    render(<NewsPage {...newsPageProps} />);
    expect(screen.getByText("| 10 comments")).toBeVisible();
  });

  it("should display the news score", () => {
    render(<NewsPage {...newsPageProps} />);
    expect(screen.getByText("565 points")).toBeVisible();
  });

  it("should display the news author's name", () => {
    render(<NewsPage {...newsPageProps} />);
    expect(screen.getByText("by Egor")).toBeVisible();
  });

  it("should display the news URL", () => {
    render(<NewsPage {...newsPageProps} />);
    expect(screen.getByText("(spectrumlocalnews.com)")).toBeVisible();
  });
});
