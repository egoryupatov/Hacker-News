import "@testing-library/jest-dom";
import { Navbar, NavbarProps } from "../Navbar";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  let navBarProps: NavbarProps;

  beforeEach(() => {
    navBarProps = {
      handleRefreshCommentsClick: jest.fn(),
      handleRefreshNewsClick: jest.fn(),
      location: {
        key: "ac3df4",
        pathname: "/",
        search: "?some=search-string",
        hash: "#howdy",
        state: {
          state: true,
        },
      },
    };
  });

  it("should be rendered", () => {
    render(
      <MemoryRouter>
        <Navbar {...navBarProps} />
      </MemoryRouter>
    );
    expect(screen.getByText("Hacker News")).toBeVisible();
  });

  it("should render the Refresh news button at the LatestNews page", () => {
    render(
      <MemoryRouter>
        <Navbar {...navBarProps} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Refresh news"));
    expect(screen.getByText("Refresh news")).toBeVisible();
  });

  it("should render the Refresh comments button at the NewsPage page", () => {
    navBarProps.location.pathname = "/news/12345";

    render(
      <MemoryRouter>
        <Navbar {...navBarProps} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Refresh comments"));
    expect(screen.getByText("Refresh comments")).toBeVisible();
  });

  it("should render the Go home page", () => {
    render(
      <MemoryRouter>
        <Navbar {...navBarProps} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Go home"));
    expect(screen.getByText("Go home")).toBeVisible();
  });

  it("should render the logo", () => {
    render(
      <MemoryRouter>
        <Navbar {...navBarProps} />
      </MemoryRouter>
    );

    expect(screen.getByText("Hacker News")).toBeVisible();
  });
});
