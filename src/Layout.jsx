/* eslint-disable test-selectors/button */
/* eslint-disable test-selectors/onClick */
import React, { useState } from 'react';

import preval from 'preval.macro';
import UsfmFileEditor from './components/UsfmFileEditor';
import { styles } from './Layout.styles';

function Layout() {
  const [sectionIndex, setSectionIndex] = useState(1);
  const [reference, setReference] = useState({ bookId: undefined, chapter: 1, verse: undefined });
  const [align, setAlign] = useState(true);

  const initialFile = { name: undefined, content: undefined, lastModified: undefined };
  const initialFiles = { original: initialFile, bridge: initialFile, target: initialFile };
  const [files, setFiles] = useState(initialFiles);

  const onAlign = () => { setAlign(!align); };
  
  const onFile = ({ file, type }) => {
    const myfiles = { ...files };
    myfiles[type] = file;
    setFiles(myfiles);
  };

  const editorProps = {
    sectionIndex,
    onSectionIndex: setSectionIndex,
    reference,
    onReference: setReference,
    onFile,
    align,
  };

  return (
    <div style={styles.container}>
      <div style={(align ? styles.upperAlignOn : styles.upperAlignOff)}>
        <div style={styles.workspace}>
          <div style={styles.editor}>
            <div style={styles.heading}>Original</div>
            <UsfmFileEditor {...editorProps} file={files.original} type="original" />
          </div>
          <div style={styles.editor}>
            <div style={styles.heading}>Bridge</div>
            <UsfmFileEditor {...editorProps} file={files.bridge} type="bridge" />
          </div>
          <div style={styles.editor}>
            <div style={styles.translationHeading}>
              <div style={styles.translationHeadingL}>Translation</div>
              <div style={styles.translationHeadingR}>
                Built
                {preval`module.exports = new Date().toLocaleString('en-GB', {day: 'numeric', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'UTC', timeZoneName: 'short'} );`}

              </div>
            </div>
            <UsfmFileEditor {...editorProps} file={files.target} type="target" />
          </div>
        </div>
      </div>
      <div style={(align ? styles.lowerAlignOn : styles.lowerAlignOff)}>
        <button type="button" className={(align ? 'btnAll btnAlone on' : 'btnAll btnAlone')} onClick={onAlign}>Alignment Workspace</button>
        <br />
        [Alignment Workspace Placeholder]
        <br />
        Reference:
        { JSON.stringify(reference) }
      </div>
    </div>
  );
}

export default Layout;
