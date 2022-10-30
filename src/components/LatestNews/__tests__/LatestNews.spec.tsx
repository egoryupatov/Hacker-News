import "@testing-library/jest-dom";
import { LatestNews, LatestNewsProps } from "../LatestNews";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("LatestNews", () => {
  let latestNewsProps: LatestNewsProps;

  beforeEach(() => {
    latestNewsProps = {
      areNewsLoaded: true,
      detailedNewsInfo: [
        {
          title: "This is a test news",
          score: 123,
          by: "Egor",
          time: 2131,
          id: 1,
          descendants: 123,
          url: "https://amazingwebsite.com",
        },
      ],
    };
  });

  it("should be rendered", () => {
    render(
      <MemoryRouter>
        <LatestNews {...latestNewsProps} />
      </MemoryRouter>
    );
    expect(screen.getByText("by Egor")).toBeVisible();
  });
});
