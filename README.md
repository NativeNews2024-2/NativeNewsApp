# News App - Aplicativo de Notícias Personalizado

## 📋 Descrição do Projeto

Este é um aplicativo fullstack de notícias que permite aos usuários personalizar suas preferências de conteúdo, visualizar notícias e salvar artigos favoritos. Desenvolvido com tecnologias modernas para proporcionar uma experiência de usuário fluida e responsiva.

## 📸 Imagens

1. Login

![Tela de Login](nativenewsdocs\images\login.jpg)

2. Cadastro 

![tela de Cadastro](nativenewsdocs\images\criar-conta.jpg)

3. Home

![Homepage](nativenewsdocs\images\noticias.jpg)

4. Favoritos

![Noticias Favoritas](nativenewsdocs\images\noticias-favoritas.jpg)

5. Categorias diferentes

![Categorias de Noticias](nativenewsdocs\images\categorias.jpg)

## 🚀 Tecnologias Utilizadas

### Frontend
- React Native
- Expo
- React Navigation
- AsyncStorage

### Backend
- Node.js
- Express
- TypeScript
- MySQL

## 📦 Estrutura do Projeto

```

server/         # Servidor Express e lógica de negócio
│   ├── src/          # Código fonte TypeScript
│   ├── dist/         # Código compilado JavaScript
│   └── ...
client/            # Aplicativo React Native
│   ├── screens/      # Telas do aplicativo
│   ├── src/          # Componentes e navegação
│   └── ...
```

## 🔧 Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Docker (opcional, para implantação)
- Expo CLI
- MySQL

## 🛠️ Instalação

### Clonar o Repositório
```bash
git clone https://github.com/NativeNews2024-2/NativeNewsApp.git
cd news-app
```

### Configurar Backend
```bash
cd server
npm install
```

### Configurar Frontend
```bash
cd client
npm install
```

## 🔐 Configuração de Ambiente

1. Crie um arquivo `.env` no diretório `back-end` com as seguintes variáveis:
```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=news_app
JWT_SECRET=sua_chave_secreta
```

2. O seu banco de dados precisa conter as tabelas corretas e deve estar com o nome que você citou no .env:

```
-- Criar o banco de dados
CREATE DATABASE NativeNews_db;

-- Usar o banco de dados criado
USE NativeNews_db;

-- Criar tabela de usuários
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Criar tabela de favoritos
CREATE TABLE favorites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    imageUrl VARCHAR(255),
    newsUrl VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

## 🏃 Rodando a Aplicação

1. No client você só precisa usar esse comando:

```
expo start
```

2. No backend, verifique se seu banco de dados já está configurado da forma correta e rode esse comando:

```
npm run dev
```


## ✨ Funcionalidades

- Registro e autenticação de usuários
- Listagem de notícias
- Personalização de preferências
- Salvar notícias favoritas
- Visualização de detalhes da notícia

## 🤝 Contribuição

- Siga as instruções aqui nessa página: [CONTRIBUTING](CONTRIBUTING.md)
- Verifique o guia prático de como utilizar o Git aqui: [Guia de GIT](nativenewsdocs/GuiadeBoasPraticasGit.pdf)

## 📄 Licença

Este projeto está licenciado sob a Licença CC 1.0 Universal - veja o arquivo [LICENSE.md] para detalhes.

## 🛠️ Problemas Comuns

- Certifique-se de que todas as dependências estão instaladas
- Verifique as configurações do banco de dados
- Consulte a documentação do Expo para problemas de compatibilidade

## Autores  do projeto

- José Roberto
- Francisco Macedo
- Diego Humberto
- João Gabriel ferreira 


## 📞 Contato

Francisco Macedo - macedo270701@gmail.com

Link do projeto: [https://github.com/NativeNews2024-2/NativeNewsApp]

NativeNews by Francisco Macedo is marked with CC0 1.0 

```

## TODO list

Para acessar a lista de tarefas a fazer: [Lista de Tarefas](TODO.md)