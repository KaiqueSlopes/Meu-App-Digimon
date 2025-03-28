import styled from 'styled-components';  

export const Container = styled.div`  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  padding: 20px;  
  min-height: 100vh;  
  font-family: 'Arial', sans-serif;  
  color: black;   
`;  

export const Input = styled.input`  
  padding: 10px;  
  border: none;  
  border-radius: 5px;  
  font-size: 18px;  
  margin: 10px 0;  
`;  

export const Button = styled.button`  
  padding: 10px 15px;  
  background-color: #27ae60;   
  color: white;  
  border: none;  
  border-radius: 5px;  
  cursor: pointer;  
  font-size: 18px;  
  transition: background-color 0.3s;  
  margin: 5px;  

  &:hover {  
    background-color: #219653;  
  }  
`;  

export const Select = styled.select`  
  padding: 10px;  
  border: none;  
  border-radius: 5px;  
  font-size: 18px;  
  margin: 10px 0;  
`;  

export const ImageContainer = styled.div`  
  display: flex;  
  flex-wrap: wrap;  
  justify-content: center;  
  gap: 20px;  
`;  

export const ImageCard = styled.div`  
  position: relative;   
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  cursor: pointer;  
`;  

export const Image = styled.img`  
  width: 150px;   
  height: 150px;   
  border-radius: 5px;  
`;  

export const Modal = styled.div`  
  position: fixed;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  background: rgba(0, 0, 0, 0.5);  
  display: flex;  
  justify-content: center;  
  align-items: center;  
`;  

export const ModalContent = styled.div`  
  background: white;  
  padding: 20px;  
  border-radius: 5px;  
  text-align: center;  
  width: 300px;  
`;  