import React from 'react';  
import { Container, Input, Button, Image } from '../styles/styles';  
import { useNavigate } from 'react-router-dom';  
import { useTheme } from '../ThemeContext';  

const Home = () => {  
  const navigate = useNavigate();  
  const [inputValue, setInputValue] = React.useState('');  
  const { toggleTheme } = useTheme();  

  const handleSearch = () => {  
    if (inputValue) {  
      navigate(`/digimons?search=${inputValue}`);  
      setInputValue('');  
    }  
  };  

  const imageArray = [  
    '/Images/home amizade.png',  
    '/Images/home amor.png',  
    '/Images/home confiança.png',  
    '/Images/home coragem.png',  
    '/Images/home esperança.png',  
    '/Images/home luz.png',  
    '/Images/home sabedoria.png',  
    '/Images/home sem tema.png',  
    '/Images/home.png',  
  ];  

  return (  
    <Container>  
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '10px' }}>  
        <Button onClick={() => navigate('/')}>Home</Button>  
        <Button onClick={toggleTheme}>Mudar Tema</Button>  
      </div>  
      <Input  
        type="text"  
        value={inputValue}  
        onChange={(e) => setInputValue(e.target.value)}  
        placeholder="Buscar Digimon"  
      />  
      <Button onClick={handleSearch}>Buscar</Button>  
      <Button onClick={() => navigate('/digimons')}>Ver Todos os Digimons</Button>  
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>  
        {imageArray.map((src, index) => (  
          <Image key={index} src={src} alt={`Home ${index + 1}`} />  
        ))}  
      </div>  
    </Container>  
  );  
};  

export default Home;  