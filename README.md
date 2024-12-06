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

## 🏃 Rodando a Aplicação

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

## 🐳 Implantação com Docker

```bash
docker-compose up --build
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

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.

## 🛠️ Problemas Comuns

- Certifique-se de que todas as dependências estão instaladas
- Verifique as configurações do banco de dados
- Consulte a documentação do Expo para problemas de compatibilidade

## 📞 Contato

Seu Nome - seu-email@exemplo.com

Projeto Link: [https://github.com/seu-usuario/news-app]
```

## 🔍 Próximos Passos

- Implementar testes unitários
- Melhorar a segurança de autenticação
- Adicionar notificações