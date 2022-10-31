import { getShortURL } from "../getShortURL";

describe("getShortURL", () => {
  it("should return short version of URL", () => {
    const longURL =
      "https://www.sandboxx.us/blog/why-did-the-f-14-tomcat-retire-decades-before-its-peers/";

    expect(getShortURL(longURL)).toEqual("sandboxx.us");
  });
});
