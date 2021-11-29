
export const textSegmenter = ({ text='', regexp }) => {
  let segments = [text];
  if (regexp.test(text)) {
    segments = [];
    var match = regexp.exec(text);
    debugger
    while (match !== null) {
      // console.log('match.groups: ', match?.groups);
      const { segment } = match.groups;
      segments = [...segments, segment];
      match = regexp.exec(text);
    };
  };
  return segments;
};