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

  const onEdit = useCallback((text) => {
    setState({
      name: state.name,
      content: text,
      lastModified: state.lastModified,
    });
  }, [state.name, state.lastModified]);

  const textEditor = useMemo(() => {
    const editorStyle = { width: '100%', whiteSpace: 'pre-wrap' };
    const blockComponent = (props) => <div {...props} style={editorStyle}></div>;
    const headingComponent = (props) => (<h3 {...props}>{props.text.split('\n')[0]}</h3>);
    const textEditorProps = {
      sectionParser: (_text) => (_text.split('\\c ')),
      sectionJoiner: '\\c ',
      blockParser: (_text) => (_text.split('\\p')),
      blockJoiner: '\\p',
      blockComponent,
      headingComponent,
      text: state.content,
      onEdit,
      editable,
      sectionable: true,
      blockable: true,
    };
    return <DocumentEditor {...textEditorProps} />
  }, [state.content, onEdit, editable]);

  const textFileEditorStyle = {
    width: '100%',
  };

  return (
    <div style={textFileEditorStyle}>
      <h2 style={{textAlign: 'center'}}>
        <OpenFile onFile={setState} />
        <span style={{margin: '0 1em'}}>{state.name}</span>
        { editable && <SaveFile file={state} /> }
      </h2>
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