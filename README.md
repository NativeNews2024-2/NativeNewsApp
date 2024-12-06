# News App - Aplicativo de Notícias Personalizado

## 📋 Descrição do Projeto

Este é um aplicativo fullstack de notícias que permite aos usuários personalizar suas preferências de conteúdo, visualizar notícias e salvar artigos favoritos. Desenvolvido com tecnologias modernas para proporcionar uma experiência de usuário fluida e responsiva.

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

### Desenvolvimento Backend
```bash
cd back-end
npm run dev
```

### Desenvolvimento Frontend
```bash
cd front/newsapp
expo start
```

## ✨ Funcionalidades

- Registro e autenticação de usuários
- Listagem de notícias
- Personalização de preferências
- Salvar notícias favoritas
- Visualização de detalhes da notícia

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença GNU - veja o arquivo LICENSE.md para detalhes.

## 🛠️ Problemas Comuns

- Certifique-se de que todas as dependências estão instaladas
- Verifique as configurações do banco de dados
- Consulte a documentação do Expo para problemas de compatibilidade

## 📞 Contato

Seu Nome - macedo270701@gmail.com

Projeto Link: [https://github.com/seu-usuario/news-app]

```

## 🔍 Próximos Passos

- Implementar testes unitários
- Melhorar a segurança de autenticação
- Adicionar notificações