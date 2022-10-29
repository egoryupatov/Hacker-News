export const getShortURL = (longURL: string) => {
  const shortURL = longURL.replace(/(https?:\/\/)?(www.)?/i, "");
  const result = shortURL.slice(0, shortURL.indexOf("/"));

  return result;
};
