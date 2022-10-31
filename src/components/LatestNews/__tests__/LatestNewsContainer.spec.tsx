import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { createTestStore } from "../../../utils/createTestStore";
import { LatestNewsContainer } from "../LatestNewsContainer";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { waitFor } from "@testing-library/react";

const testStore = createTestStore();

describe("LatestNewsContainer", () => {
  let store: Store<RootState>;

  beforeEach(() => {
    jest.clearAllMocks();
    store = testStore;
    store.dispatch = jest.fn(store.dispatch);
  });

  it("should load the news", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    ) as jest.Mock;
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LatestNewsContainer />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(store.getState().news.areNewsLoaded).toBe(true);
    });
  });
});
