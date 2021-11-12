import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { DocumentEditor } from 'simple-text-editor-rcl';

import OpenFile from './OpenFile';
import SaveFile from './SaveFile';
import { segmenter } from '../helpers/segmenter';
import { styles } from './UsfmFileEditor.styles';

import BlockEditor from './BlockEditor';
import SectionHeading from './SectionHeading';

export default function UsfmFileEditor ({
  editable,
  sectionIndex,
  onSectionIndex,
  reference,
  onReference,
}) {
  const initialFile = {
    name: undefined, content: undefined, lastModified: undefined
  };
  const [file, setFile] = useState(initialFile);
  const [sectionable, setSectionable] = useState(true);
  const [blockable, setBlockable] = useState(true);

  const onSectionable = () => { setSectionable(!sectionable); };
  const onBlockable = () => { setBlockable(!blockable); };

  const onText = useCallback((text) => {
    setFile({
      name: file.name,
      content: text,
      lastModified: file.lastModified,
    });
  }, [file.name, file.lastModified]);
  
  const textEditor = useMemo(() => {
    const onVerse = (verse) => {
      onReference({ bookId: reference.bookId, chapter: reference.chapter, verse })
    };
    const blockComponent = (props) => (<BlockEditor {...props} onVerse={onVerse} />);
    const onChapter = (chapter) => {
      onReference({ bookId: reference.bookId, chapter, verse: undefined })
    };
    const headingComponent = (props) => (<SectionHeading {...props} onChapter={onChapter} />);
    const textEditorProps = {
      blockComponent,
      titleComponent: () => (<h2 style={{textAlign: 'center'}}>{file.name}</h2>),
      headingComponent,
      text: file.content,
      onText,
      editable,
      sectionable,
      blockable,
      sectionIndex,
      onSectionIndex,
      sectionParser: (_text) => (
        segmenter({ text: _text, regex: /(^|\\c +\d+)(\n|.)+?(\n|$)?(?=(\\c +\d+|$))/g })
      ),
      sectionJoiner: '',
      blockParser: (_text) => (
        segmenter({ text: _text, regex: /(^|\\[cspv])(\n|.)+?(\n|$)?(?=(\\[cspv]|$))/g })
      ),
      blockJoiner: '',
    };
    return <DocumentEditor {...textEditorProps} />;
  }, [file.content, file.name, onText, editable, sectionable, blockable, sectionIndex, onSectionIndex, onReference, reference.chapter, reference.bookId]);

  return (
    <div style={styles.textFileEditor}>
      <div style={styles.toolbar}>
        <OpenFile onFile={setFile} />
        <button onClick={onSectionable}>Sections</button>
        <button onClick={onBlockable}>Paragraphs</button>
        { editable && <SaveFile file={file} /> }
      </div>
      <hr />
      {textEditor}
    </div>
  );
};

UsfmFileEditor.propTypes = {
  /** Preload file content if need to file open bypass */
  file: PropTypes.object,
  /** Function triggered on file open */
  onFile: PropTypes.func,
  /** Editable? */
  editable: PropTypes.bool,
  /** Reference: { bookId, chapter, verse } */
  reference: PropTypes.object.isRequired,
  /** Function to update reference */
  onReference: PropTypes.func.isRequired,
};

UsfmFileEditor.defaultProps = {
  editable: true,
};