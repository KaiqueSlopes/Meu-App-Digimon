import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './components/Home';  
import DigimonList from './components/DigimonList';  
import { useTheme } from './ThemeContext';  
import './App.css'; // Vamos adicionar um arquivo CSS para os temas  

const App = () => {  
  const { theme } = useTheme();  

  return (  
    <Router>  
      <div className={theme}>  
        <Routes>  
          <Route path="/" element={<Home />} />  
          <Route path="/digimons" element={<DigimonList />} />  
        </Routes>  
      </div>  
    </Router>  
  );  
};  

export default App;  