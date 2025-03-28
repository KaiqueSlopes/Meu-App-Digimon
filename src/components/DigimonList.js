import React, { useState, useEffect } from 'react';  
import { Container, Input, Button, Select, ImageContainer, ImageCard, Image, Modal, ModalContent } from '../styles/styles';  
import { useNavigate } from 'react-router-dom';  

const DigimonList = ({ selectedTheme, setSelectedTheme }) => {  
  const [digimonList, setDigimonList] = useState([]);  
  const [filteredDigimons, setFilteredDigimons] = useState([]);  
  const [inputValue, setInputValue] = useState('');  
  const [selectedLevel, setSelectedLevel] = useState('All');  
  const [currentPage, setCurrentPage] = useState(1);  
  const [modalOpen, setModalOpen] = useState(false);  
  const [selectedDigimon, setSelectedDigimon] = useState(null);  

  const digimonPerPage = 12;  
  const navigate = useNavigate();  

  useEffect(() => {  
    fetch('https://digimon-api.vercel.app/api/digimon')  
      .then(response => response.json())  
      .then(data => {  
        setDigimonList(data);  
        setFilteredDigimons(data);  
      });  
  }, []);  

  useEffect(() => {  
    const filtered = digimonList.filter(digimon => {  
      const matchesName = digimon.name.toLowerCase().includes(inputValue.toLowerCase());  
      const matchesLevel = selectedLevel === 'All' || digimon.level === selectedLevel;  
      return matchesName && matchesLevel;  
    });  
    setFilteredDigimons(filtered);  
  }, [inputValue, selectedLevel, digimonList]);  

  const handleSelectDigimon = (digimon) => {  
    setSelectedDigimon(digimon);  
    setModalOpen(true);  
  };  

  const handleConfirmSelection = () => {  
    setModalOpen(false);  
    alert(`Você escolheu ${selectedDigimon.name}!`);  
  };  

  const totalPages = Math.ceil(filteredDigimons.length / digimonPerPage);  
  const displayedDigimons = filteredDigimons.slice((currentPage - 1) * digimonPerPage, currentPage * digimonPerPage);  

  return (  
    <Container>  
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '10px' }}>  
        <Button onClick={() => navigate('/')}>Home</Button>  
        <Button onClick={() => setSelectedTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>Mudar Tema</Button>  
      </div>  
      <Input  
        type="text"  
        value={inputValue}  
        onChange={(e) => setInputValue(e.target.value)}  
        placeholder="Buscar Digimon"  
      />  
      <Select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>  
        <option value="All">Todos</option>  
        <option value="In Training">Em Treinamento</option>  
        <option value="Rookie">Inicial</option>  
        <option value="Champion">Campeão</option>  
        <option value="Ultimate">Ultimate</option>  
        <option value="Mega">Mega</option>  
        <option value="Fresh">Fresh</option>  
      </Select>  
      <ImageContainer>  
        {displayedDigimons.map((digimon, index) => (  
          <ImageCard key={index} onClick={() => handleSelectDigimon(digimon)}>  
            <Image src={digimon.img} alt={digimon.name} />  
            <div>{digimon.name}</div>  
          </ImageCard>  
        ))}  
      </ImageContainer>  
      <div>  
        {Array.from({ length: totalPages }, (_, index) => (  
          <Button key={index} onClick={() => setCurrentPage(index + 1)}>  
            {index + 1}  
          </Button>  
        ))}  
      </div>  
      {modalOpen && (  
        <Modal onClick={() => setModalOpen(false)}>  
          <ModalContent onClick={e => e.stopPropagation()}>  
            <h2>Confirmação</h2>  
            <p>Você deseja escolher {selectedDigimon.name}?</p>  
            <Button onClick={handleConfirmSelection}>Confirmar</Button>  
            <Button onClick={() => setModalOpen(false)}>Cancelar</Button>  
          </ModalContent>  
        </Modal>  
      )}  
    </Container>  
  );  
};  

export default DigimonList;  