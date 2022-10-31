import "@testing-library/jest-dom";
import { NavbarContainer } from "../NavbarContainer";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createTestStore } from "../../../utils/createTestStore";
import { Store } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";

const testStore = createTestStore();

describe("NavbarContainer", () => {
  let store: Store<RootState>;

  beforeEach(() => {
    jest.clearAllMocks();
    store = testStore;
    store.dispatch = jest.fn(store.dispatch);
  });

  it("should refresh the news after clicking the Refresh news button", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    ) as jest.Mock;
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarContainer />
        </MemoryRouter>
      </Provider>
    );
    fireEvent.click(screen.getByText("Refresh news"));
    expect(store.dispatch).toHaveBeenCalled();

    await waitFor(() => {
      expect(store.getState().news.areNewsLoaded).toBe(true);
    });
  });
});
