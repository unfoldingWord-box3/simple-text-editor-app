export default function SectionHeading ({ text, onChapter, ...props }) {
  
  const onHeadingClick = (e) => {
    const regex = /\\c *(\d+)/;
    const _text = e.target.innerText;
    const match = regex.exec(_text);
    const chapter = match && match[1];
    onChapter(chapter);
  };

  const headingText = text.replace(/^\n+/, '').split('\n')[0];

  return (
    <div {...props}>
      <button onClick={onHeadingClick}>{headingText}</button>
      <hr />
    </div>
  );
};