
import TextFileEditor from './components/TextFileEditor';

function App() {
  const workspaceStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
  };
  return (
    <div className="App">
      <div style={workspaceStyle}>
        <div style={{ width: '100%', overflowY: 'scroll', padding: '0 1em', }}>
          <TextFileEditor editable={true} />
        </div>
        <div style={{ width: '100%', overflowY: 'scroll', padding: '0 1em', }}>
          <TextFileEditor />
        </div>
      </div>
    </div>
  );
}

export default App;
