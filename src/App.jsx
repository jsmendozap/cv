import { useState } from 'react';
import Public from './layout/Public';
import './styles/App.css';
import { langContext } from './context/Lang';

function App() {

  const [lang, setLang] = useState('es')

  return (
    <div className="App">
      <langContext.Provider value={{lang, setLang}}>
        <Public />
      </langContext.Provider>
    </div>
  );
}

export default App;
