export default function SectionHeading ({ onChapter, ...props }) {
  const onHeadingClick = (e) => {
    const regex = /\\c *(\d+)/;
    const text = e.target.innerText;
    const match = regex.exec(text);
    const chapter = match && match[1];
    onChapter(chapter);
  };
  const headingText = props.text.replace(/^\n+/, '').split('\n')[0];
  const component = (<div {...props}><button onClick={onHeadingClick}>{headingText}</button><hr /></div>);
  return component;
};