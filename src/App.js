import './App.css';
import { useState } from 'react';
import Button from './component/UI/Button/Button';

function App() {
  console.log('The app is running');
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="App">
      <h1>Hi there</h1>
      {showParagraph && <p>This is new</p>}
      <Button onClick={toggleParagraphHandler}>Show the paragraph</Button>
    </div>
  );
}

export default App;
