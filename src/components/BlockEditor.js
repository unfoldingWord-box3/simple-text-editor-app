
export default function blockComponent ({ onVerse, ...props }) {
  
  const onBlockClick = (e) => {
    const regex = /\\v *(\d+)/;
    const text = e.target.innerText;
    const match = regex.exec(text);
    const verse = match && match[1];
    onVerse(verse);
  };

  const editorStyle = {
    width: '100%',
    whiteSpace: 'pre-wrap',
    padding: '0 0.2em'
  };

  return (
    <>
      <div
        {...props}
        onClick={onBlockClick}
        style={editorStyle}
      />
      <hr />
    </>
  );
};