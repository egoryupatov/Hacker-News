export const getShortURL = (longURL: string) => {
  const shortURL = longURL.replace(/(https?:\/\/)?(www.)?/i, "");
  return shortURL.slice(0, shortURL.indexOf("/"));
};
