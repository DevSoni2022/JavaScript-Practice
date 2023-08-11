import React, { useState } from "react";

const App = () => {
  const [value,setValue] = useState('');
  const useCopy = () => {
    const copy = async (text) => {
      if (!navigator?.clipboard) {
        console.log("ClipBoard not available");
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        console.log(`There was error copying text ${text}`,error )
      }
    };
    return copy
  };
  const copy = useCopy()
  return (
    <div style={{textAlign:'center',alignItems:'center', margin:'20px'}} className="App">
      <textarea onChange={(e) => setValue(e.target.value)}></textarea>
      <div>
      <button onClick={()=>copy(value)} >Copy</button>
      </div>
    </div>
  );
};

export default App;
