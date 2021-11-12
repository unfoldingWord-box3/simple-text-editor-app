import { useState } from 'react';
import TextFileEditor from './TextFileEditor';

function Layout() {
  const [sectionIndex, setSectionIndex] = useState(0);

  const containerStyle = {
    position: 'absolute',
    left: '0',
    right: '0',
    height: '100%',
    minHeight: '100%',
  };

  const upperStyle = {
    top: '0',
    height: '50%',
    minHeight: '50%',  
    overflowY: 'scroll',
  };

  const lowerStyle = {
    bottom: '0',
    height: '50%',
    minHeight: '50%',
    overflowY: 'scroll',
  };

  const workspaceStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
  };
  return (
    <div style={containerStyle}>
      <div style={upperStyle}>
        <div style={workspaceStyle}>
          <div style={{ width: '100%', overflowY: 'scroll', padding: '0 1em', }}>
            <TextFileEditor editable={false} sectionIndex={sectionIndex} onSectionIndex={setSectionIndex} />
          </div>
          <div style={{ width: '100%', overflowY: 'scroll', padding: '0 1em', }}>
            <TextFileEditor editable={false} sectionIndex={sectionIndex} onSectionIndex={setSectionIndex} />
          </div>
          <div style={{ width: '100%', overflowY: 'scroll', padding: '0 1em', }}>
            <TextFileEditor sectionIndex={sectionIndex} onSectionIndex={setSectionIndex} />
          </div>
       </div>
      </div>
      <div style={lowerStyle}>[Alignment Workspace]</div>
    </div>
  );
}

export default Layout;
