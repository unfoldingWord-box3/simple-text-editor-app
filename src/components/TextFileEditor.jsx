import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  DocumentEditor
} from 'simple-text-editor-rcl';

import OpenFile from './OpenFile';
import SaveFile from './SaveFile';

export default function TextFileEditor ({file, onFile, editable}) {
  const initialState = file || {
    name: undefined, content: undefined, lastModified: undefined
  };
  const [state, setState] = useState(initialState);
  const [sectionable, setSectionable] = useState(true);
  const [blockable, setBlockable] = useState(true);


  const onSectionable = () => { setSectionable(!sectionable); };

  const onBlockable = () => { setBlockable(!blockable); };

  const onEdit = useCallback((text) => {
    setState({
      name: state.name,
      content: text,
      lastModified: state.lastModified,
    });
  }, [state.name, state.lastModified]);

  const textEditor = useMemo(() => {
    const editorStyle = { width: '100%', whiteSpace: 'pre-wrap', padding: '0 0.2em' };
    const blockComponent = (props) => <div {...props} style={editorStyle}></div>;
    const headingComponent = (props) => (<div {...props}><button>{props.text.split('\n')[0]}</button><hr /></div>);
    const textEditorProps = {
      sectionParser: (_text) => (_text.split('\\c ')),
      sectionJoiner: '\\c ',
      blockParser: (_text) => (_text.split('\\p')),
      blockJoiner: '\\p',
      blockComponent,
      titleComponent: () => (<h2 style={{textAlign: 'center'}}>{state.name}</h2>),
      headingComponent,
      text: state.content,
      onEdit,
      editable,
      sectionable,
      blockable,
    };
    return <DocumentEditor {...textEditorProps} />
  }, [state.name, state.content, onEdit, editable, sectionable, blockable]);

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