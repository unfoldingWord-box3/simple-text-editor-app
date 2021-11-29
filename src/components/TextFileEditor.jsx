import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { UsfmEditor, MarkdownEditor } from 'simple-text-editor-rcl';

import OpenFile from './OpenFile';
import SaveFile from './SaveFile';

import './Usfm.css';
import './Markdown.css';

export default function TextFileEditor ({file, onFile, editable, sectionIndex, onSectionIndex}) {
  const initialState = file || {
    name: undefined, content: undefined, lastModified: undefined
  };
  const [state, setState] = useState(initialState);
  const [sectionable, setSectionable] = useState(true);
  const [blockable, setBlockable] = useState(true);

  const onSectionable = () => { setSectionable(!sectionable); };

  const onBlockable = () => { setBlockable(!blockable); };

  const onText = useCallback((text) => {
    setState({
      name: state.name,
      content: text,
      lastModified: state.lastModified,
    });
  }, [state.name, state.lastModified]);

  const onSectionClick = useCallback(({text: _text, index}) => {
    onSectionIndex(index);
  }, [onSectionIndex]);

  const textEditor = useMemo(() => {
    const textEditorProps = {
      text: state.content,
      onText,
      editable,
      sectionable,
      blockable,
      sectionIndex,
      onSectionClick,
    };
    const isUSFM = /\.usfm$/.test(state.name);
    const textEditor = isUSFM ? <UsfmEditor {...textEditorProps} /> : <MarkdownEditor {...textEditorProps} />;

    return textEditor;
  }, [state.content, state.name, onText, editable, sectionable, blockable, sectionIndex, onSectionClick]);

  const textFileEditorStyle = {
    width: '100%',
  };

  return (
    <div style={textFileEditorStyle}>
      <div style={{textAlign: 'center', paddingTop: '0.5em' }}>
        <OpenFile onFile={setState} />
        <button onClick={onSectionable}>Sections</button>
        <button onClick={onBlockable}>Paragraphs</button>
        { editable && <SaveFile file={state} /> }
      </div>
      <hr />
      <h2 style={{textAlign: 'center'}}>{state.name}</h2>
      {textEditor}
    </div>
  );
};

TextFileEditor.propTypes = {
  /** Preload file content if need to file open bypass */
  file: PropTypes.object,
  /** Function triggered on file open */
  onFile: PropTypes.func,
  /** Editable? */
  editable: PropTypes.bool,
};

TextFileEditor.defaultProps = {
  file: {},
  editable: true,
  onFile: (file) => {},
};