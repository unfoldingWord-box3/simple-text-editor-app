import { useMemo } from "react";

export default function BlockEditor ({ onVerse, text, dangerouslySetInnerHTML, ...props }) {

  const onBlockClick = (e) => {
    const regex = /\\v *(\d+)/;
    const _text = e.target.innerText;
    const match = regex.exec(_text);
    const verse = match && match[1];
    onVerse(verse);
  };

  const editorStyle = {
    width: '100%',
    whiteSpace: 'pre-wrap',
    padding: '0 0.2em'
  };

  const markerText = useMemo(() => {
    let _markerText = text.replace(/</g, '&lt;');
    const markerRegex = /(\\[\w-]*\** *\d*)(?=[^:.])/g;
    const replacer = "<strong>$1</strong>";
    _markerText = _markerText.replace(markerRegex, replacer);
    const attrRegex = /(x?-?[\w-]+=".*")/g;
    const attrReplacer = "<em>$1</em>";
    _markerText = _markerText.replace(attrRegex, attrReplacer);
    return _markerText;
  }, [text]);
  
  return (
    <>
      <div
        {...props}
        onClick={onBlockClick}
        style={editorStyle}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: markerText }}
      >
      </div>
      <hr />
    </>
  );
};