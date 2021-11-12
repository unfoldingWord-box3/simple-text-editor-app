import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { DocumentEditor } from 'simple-text-editor-rcl';

import OpenFile from './OpenFile';
import SaveFile from './SaveFile';
import { segmenter } from '../helpers/segmenter';

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
  
  const textEditor = useMemo(() => {
    const editorStyle = { width: '100%', whiteSpace: 'pre-wrap', padding: '0 0.2em' };
    const blockComponent = (props) => <><div {...props} style={editorStyle}></div><hr /></>;
    const headingComponent = (props) => {
      const headingText = props.text.replace(/^\n+/, '').split('\n')[0];
      const component = (<div {...props}><button>{headingText}</button><hr /></div>);
      return component;
    };

    let textEditorProps = {
      sectionParser: (_text) => {
        const regex = /(^|\\c +\d+)(\n|.)+?(\n|$)?(?=(\\c +\d+|$))/g;
        const segments = segmenter({ text: _text, regex });
        return segments;
      },
      sectionJoiner: '',
      blockParser: (_text) => {
        const regex = /(^|\\[cspv])(\n|.)+?(\n|$)?(?=(\\[cspv]|$))/g;
        const segments = segmenter({ text: _text, regex });
        return segments;
      },
      blockJoiner: '',
    };
    
    textEditorProps = {
      ...textEditorProps,
      blockComponent,
      titleComponent: () => (<h2 style={{textAlign: 'center'}}>{state.name}</h2>),
      headingComponent,
      text: state.content,
      onText,
      editable,
      sectionable,
      blockable,
      sectionIndex,
      onSectionIndex,
    };
    return <DocumentEditor {...textEditorProps} />
  }, [state.name, state.content, onText, editable, sectionable, blockable, sectionIndex, onSectionIndex]);

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