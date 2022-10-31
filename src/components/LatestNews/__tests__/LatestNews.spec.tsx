import "@testing-library/jest-dom";
import { LatestNews, LatestNewsProps } from "../LatestNews";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

describe("LatestNews", () => {
  let latestNewsProps: LatestNewsProps;

  beforeEach(() => {
    latestNewsProps = {
      areNewsLoaded: true,
      detailedNewsInfo: [
        {
          title: "Hello, there are some awesome news!",
          score: 123,
          by: "Egor",
          time: 1667223496,
          id: 1,
          descendants: 2,
          url: "https://www.sandboxx.us/blog/why-did-the-f-14-tomcat-retire-decades-before-its-peers/",
          kids: [1213, 1232],
          text: "The weather is going to be good today!",
        },
      ],
    };
  });

  it("should display the news author", () => {
    render(
      <MemoryRouter>
        <LatestNews {...latestNewsProps} />
      </MemoryRouter>
    );
    expect(screen.getByText("by Egor")).toBeVisible();
  });

  it("should display the news title", () => {
    render(
      <MemoryRouter>
        <LatestNews {...latestNewsProps} />
      </MemoryRouter>
    );
    expect(
      screen.getByText("Hello, there are some awesome news!")
    ).toBeVisible();
  });

  it("should display the news rating", () => {
    render(
      <MemoryRouter>
        <LatestNews {...latestNewsProps} />
      </MemoryRouter>
    );
    expect(screen.getByText("123 points")).toBeVisible();
  });

  it("should display the short news URL", () => {
    render(
      <MemoryRouter>
        <LatestNews {...latestNewsProps} />
      </MemoryRouter>
    );
    expect(screen.getByText("(sandboxx.us)")).toBeVisible();
  });

  it("should display the number of comments", () => {
    render(
      <MemoryRouter>
        <LatestNews {...latestNewsProps} />
      </MemoryRouter>
    );
    expect(screen.getByText("2 comments")).toBeVisible();
  });

  it("should allow you to click the news", () => {
    render(
      <MemoryRouter>
        <LatestNews {...latestNewsProps} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Hello, there are some awesome news!"));
  });
});
