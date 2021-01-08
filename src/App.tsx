import React from 'react';
import Sidebar from './components/Sidebar';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle/>
      <Sidebar />
    </>
  )
}

export default App;
