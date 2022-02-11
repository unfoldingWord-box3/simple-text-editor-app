import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { UsfmEditor } from 'simple-text-editor-rcl';

import OpenFile from './OpenFile';
import ExportFile from './ExportFile';
import { styles } from './UsfmFileEditor.styles';
import { getSectionChapter, getBlockVerse } from '../helpers/getChapterVerse';
import FontDropdown from './FontDropdown';

export default function UsfmFileEditor ({
  target,
  align,
  sectionIndex,
  onSectionIndex,
  reference,
  onReference,
  file,
  onFile: _onFile,
  type
}) {
  const [sectionable, setSectionable] = useState(true);
  const [blockable, setBlockable] = useState(true);
  const [editable, setEditable] = useState(false);
  const [preview, setPreview] = useState(true);
  
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
  useEffect(() => {
    if (align) setSectionable(true);
  }, [align]);
  
  const [font, setFont] = useState('');
 
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
      font,
      setFont
    };
    return <div class={font}><UsfmEditor {...editorProps} /></div>;
  }, [file.content, onText, editable, target, sectionable, blockable, preview, sectionIndex, onSectionIndex, onReference, reference.chapter, reference.bookId, font, setFont]);

  return (
    <div style={styles.textFileEditor}>
      <div style={styles.toolbar}>
        <div class="btnGroup" role="group">
          <OpenFile onFile={onFile} />
          {/** Chapters are Sections */}
          <button  type="button" class={(sectionable ? "btnAll btnMiddle on" : "btnAll btnMiddle")} disabled={disabledbyalign} onClick={onSectionable}>Chapters</button>
          <button  type="button" class={(blockable ? "btnAll btnMiddle" : "btnAll btnMiddle on")} disabled={disabled} onClick={onBlockable}>Paragraphs</button>
          { target && <button  type="button" class={(editable ? "btnAll btnMiddle on" : "btnAll btnMiddle")} disabled={disabled} onClick={onEditable}>Editable</button> }
          <button  type="button" class={(preview ? "btnAll btnMiddle on" : "btnAll btnMiddle")} disabled={disabled} onClick={onPreview}>Preview</button>  
          { target && <ExportFile file={file} /> }
          { <FontDropdown font={font} setFont={setFont} /> }
        </div>
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