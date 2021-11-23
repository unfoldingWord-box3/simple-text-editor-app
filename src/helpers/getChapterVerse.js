export const getSectionChapter = (_text) => {
  const match = /\\c *(\d+)/.exec(_text);
  const chapter = match && match[1];
  return chapter;
};

export const getBlockVerse = (_text) => {
  const match = /\\v *(\d+-?\d*)/.exec(_text);
  const verse = match && match[1];
  return verse;
};