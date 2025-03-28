# Meu App Digimon  

Este é um aplicativo React que permite aos usuários buscar e visualizar Digimons. O projeto utiliza um tema claro e escuro, que os usuários podem alternar conforme o desejo.  

## Tecnologias Utilizadas  

- **React.js**: Biblioteca para construção da interface do usuário.  
- **React Router**: Para navegação entre páginas.  
- **Styled Components**: Para estilização dos componentes.  
- **React Context API**: Para gerenciamento do tema.  

## Arquitetura  

A arquitetura do projeto segue uma estrutura de componentes, facilitando a manutenção e escalabilidade:  

my-digimon-app/
├── public/
│ ├── index.html
│ ├── Images/
├── src/
│ ├── components/
│ │ ├── Home.js
│ │ ├── DigimonList.js
│ ├── styles/
│ │ └── styles.js
│ ├── ThemeContext.js
│ ├── App.js
│ ├── index.js
│ ├── App.css

markdown

- **public**: Contém o HTML principal e as imagens usadas no aplicativo.  
- **src**: Contém todos os arquivos JavaScript e CSS do projeto.  

## Como Executar o Projeto  

1. **Clone o repositório**:  
   ```bash  
   git clone 
Navegue até o diretório do projeto:

bash
cd meu-app-digimon  
Instale as dependências:

bash
npm install  
Inicie o aplicativo:

bash
npm start  
O aplicativo estará disponível em http://localhost:3000.