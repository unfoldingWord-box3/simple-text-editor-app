import { useState } from 'react';
import TextFileEditor from './TextFileEditor';

function Layout() {
  const [sectionIndex, setSectionIndex] = useState(0);

  const workspaceStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
  };
  return (
    <div style={workspaceStyle}>
      <div style={{ width: '100%', overflowY: 'scroll', padding: '0 1em', }}>
        <TextFileEditor editable={false} sectionIndex={sectionIndex} onSectionIndex={setSectionIndex} />
      </div>
      <div style={{ width: '100%', overflowY: 'scroll', padding: '0 1em', }}>
        <TextFileEditor sectionIndex={sectionIndex} onSectionIndex={setSectionIndex} />
      </div>
    </div>
  );
}

export default Layout;
