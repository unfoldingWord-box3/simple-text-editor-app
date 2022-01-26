import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { UsfmEditor } from 'simple-text-editor-rcl';

import OpenFile from './OpenFile';
import ExportFile from './ExportFile';
import { styles } from './UsfmFileEditor.styles';
import { getSectionChapter, getBlockVerse } from '../helpers/getChapterVerse';
import './Usfm.css';

export default function UsfmFileEditor ({
  target,
  align,
  sectionIndex,
  onSectionIndex,
  reference,
  onReference,
  file,
  onFile: _onFile,
  type,
}) {
  const [sectionable, setSectionable] = useState(true);
  const [blockable, setBlockable] = useState(true);
  const [editable, setEditable] = useState(false);
  const [preview, setPreview] = useState(false);
  
  const onSectionable = () => { setSectionable(!sectionable); };
  const onBlockable = () => { setBlockable(!blockable); };
  const onEditable = () => { setEditable(!editable); };
  const onPreview = () => { setPreview(!preview); };
 
  const onFile = useCallback((_file) => { _onFile({ file: _file, type }); }, [_onFile, type]);

  const onText = useCallback((text) => {
    onFile({
      name: file.name,
      content: text,
      lastModified: file.lastModified,
    });
  }, [file.name, file.lastModified, onFile]);

  const disabled = (!file.name || !file.content);
  const disabledbyalign = (align || disabled);

  
  const textEditor = useMemo(() => {
    const onVerse = (verse) => {
      onReference({ bookId: reference.bookId, chapter: reference.chapter, verse })
    };
    const onChapter = (chapter) => {
      onReference({ bookId: reference.bookId, chapter, verse: undefined })
    };
    
    const onSectionClick = ({text: _text, index}) => {
      onSectionIndex(index);
      const chapter = getSectionChapter(_text);
      onChapter(chapter);
    };

    const onBlockClick = ({text: _text, index}) => {
      const verse = getBlockVerse(_text);
      onVerse(verse);
    };

    const editorProps = {
      text: file.content || '',
      onText,
      target,
      editable,
      sectionable,
      blockable,
      preview,
      sectionIndex,
      onSectionClick,
      onBlockClick,
    };
    return <UsfmEditor {...editorProps} />;
  }, [file.content, onText, editable, target, sectionable, blockable, preview, sectionIndex, onSectionIndex, onReference, reference.chapter, reference.bookId]);

  return (
    <div style={styles.textFileEditor}>
      <div style={styles.toolbar}>
        <OpenFile onFile={onFile} />
        {/** Chapters are Sections */}
        <button style={(sectionable ? {borderStyle: 'inset'} : {})} disabled={disabledbyalign} onClick={onSectionable}>Chapters</button>
        <button style={(blockable ? {borderStyle: 'inset'} : {})} disabled={disabled} onClick={onBlockable}>Paragraphs</button>
        { target && <button style={(editable ? {borderStyle: 'inset'} : {})} disabled={disabled} onClick={onEditable}>Editable</button> }
        <button style={(preview ? {borderStyle: 'inset'} : {})} disabled={disabled} onClick={onPreview}>Preview</button>  
        { target && <ExportFile file={file} /> }
      </div>
      <hr />
      <h2 style={{textAlign: 'center'}}>{file.name}</h2>
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
  /** Target? */
  target: PropTypes.bool,
  /** Align? */
  align: PropTypes.bool,
  /** Reference: { bookId, chapter, verse } */
  reference: PropTypes.object.isRequired,
  /** Function to update reference */
  onReference: PropTypes.func.isRequired,
};

UsfmFileEditor.defaultProps = {
  editable: false,
  target: false,
  align: true,
  sectionable: true,
};