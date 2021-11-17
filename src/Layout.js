import { useState } from 'react';

import UsfmFileEditor from './components/UsfmFileEditor';
import { styles } from './Layout.styles';
import preval from 'preval.macro';

function Layout() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [reference, setReference] = useState({ bookId: undefined, chapter: undefined, verse: undefined });

  const initialFile = { name: undefined, content: undefined, lastModified: undefined };
  const initialFiles = { original: initialFile, bridge: initialFile, target: initialFile };
  const [files, setFiles] = useState(initialFiles);

  const onFile = ({file, type}) => {
    let _files = {...files};
    _files[type] = file;
    setFiles(_files);
  }

  const editorProps = {
    sectionIndex,
    onSectionIndex: setSectionIndex,
    reference,
    onReference: setReference,
    onFile,
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.upper}>
        <div style={styles.workspace}>
          <div style={styles.editor}>
            <UsfmFileEditor {...editorProps} editable={false} file={files.original} type={'original'} />
          </div>
          <div style={styles.editor}>
            <UsfmFileEditor {...editorProps} editable={false} file={files.bridge} type={'bridge'} />
          </div>
          <div style={styles.editor}>
            <UsfmFileEditor {...editorProps} file={files.target} type={'target'} />
          </div>
       </div>
      </div>
      <div style={styles.lower}>
        <hr />
        [Alignment Workspace Placeholder...Build Date: {preval`module.exports = new Date().toLocaleString();`}]
        <hr style={{ width: '35%', }} />
        Reference: { JSON.stringify( reference ) }
      </div>
    </div>
  );
};

export default Layout;
