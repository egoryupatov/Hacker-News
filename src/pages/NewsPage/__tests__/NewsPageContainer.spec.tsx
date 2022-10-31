import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { NewsPageContainer } from "../NewsPageContainer";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { createTestStore } from "../../../utils/createTestStore";
import { MemoryRouter } from "react-router-dom";

const testStore = createTestStore();

describe("NewsPageContainer", () => {
  let store: Store<RootState>;

  beforeEach(() => {
    jest.clearAllMocks();
    store = testStore;
    store.dispatch = jest.fn(store.dispatch);
  });

  it("should load the news comments", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    ) as jest.Mock;
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NewsPageContainer />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(store.getState().news.areCommentsLoaded).toBe(true);
    });
  });
});
