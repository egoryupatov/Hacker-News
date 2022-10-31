import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NewsPageHeader, NewsPageHeaderProps } from "../NewsPageHeader";

describe("NewsPageHeader", () => {
  let newsPageHeaderProps: NewsPageHeaderProps;

  beforeEach(() => {
    newsPageHeaderProps = {
      currentNews: {
        title:
          "Protobuf-ES – Implementation of Protocol Buffers for TypeScript and JavaScript",
        score: 125,
        by: "Jason Peterson",
        time: 1667223496,
        id: 1,
        descendants: 51,
        url: "https://buf.build/blog/protobuf-es-the-protocol-buffers-typescript-javascript-runtime-we-all-deserve",
        kids: [],
        text: "",
      },
    };
  });

  it("should display the news title", () => {
    render(<NewsPageHeader {...newsPageHeaderProps} />);

    expect(
      screen.getByText(
        "Protobuf-ES – Implementation of Protocol Buffers for TypeScript and JavaScript"
      )
    ).toBeVisible();
  });

  it("should display the news URL", () => {
    render(<NewsPageHeader {...newsPageHeaderProps} />);

    expect(screen.getByText("(buf.build)")).toBeVisible();
  });

  it("should display the news rating", () => {
    render(<NewsPageHeader {...newsPageHeaderProps} />);

    expect(screen.getByText("125 points")).toBeVisible();
  });

  it("should display the number of comments", () => {
    render(<NewsPageHeader {...newsPageHeaderProps} />);

    expect(screen.getByText("| 51 comments")).toBeVisible();
  });

  it("should display the news author's name", () => {
    render(<NewsPageHeader {...newsPageHeaderProps} />);

    expect(screen.getByText("by Jason Peterson")).toBeVisible();
  });
});
