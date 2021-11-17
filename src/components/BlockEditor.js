import { useMemo } from "react";
import PropTypes from 'prop-types';

export default function BlockEditor ({ onVerse, text, dangerouslySetInnerHTML, ...props }) {

  const onBlockClick = (e) => {
    const regex = /\\v *(\d+-?\d*)/;
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
    const markerRegex = /(\\([\w-]*)\** *)(\d*-?\d*)(?=[^:.])/g;
    const replacer = "<span class='marker $2'>$1<span class='digit'>$3</span></span>";
    _markerText = _markerText.replace(markerRegex, replacer);
    const attrRegex = /(x?-?[\w-]+=".*")/g;
    const attrReplacer = "<span class='attribute'>$1</span>";
    _markerText = _markerText.replace(attrRegex, attrReplacer);
    return _markerText;
  }, [text]);

  const blockMarkerRegex = /^ *\\([\w-]+)/;
  const blockMarkerMatch = blockMarkerRegex.exec(text);
  const blockClass = `block ${blockMarkerMatch[1]}`;
  
  return (
    <>
      <div
        {...props}
        onClick={onBlockClick}
        style={editorStyle}
        class={blockClass}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: markerText }}
      >
      </div>
      <hr />
    </>
  );
};

BlockEditor.propTypes = {
  /** Function called when block is clicked and verse returned*/
  onVerse: PropTypes.func,
  /** String of text for the block. */
  text: PropTypes.string,
  /** HTML Attribute for setting editable loop. */
  dangerouslySetInnerHTML: PropTypes.object,
}

BlockEditor.defaultProps = {
  text: '',
};