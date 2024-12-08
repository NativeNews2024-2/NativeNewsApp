- **Frontend (newsapp-frontend):**
    - **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma
    (Android e iOS), usando JavaScript (e possivelmente TypeScript,
    considerando as dependências).
    - **Expo:** Framework que simplifica o desenvolvimento e a construção de aplicativos React Native.
    - **React Navigation:** Biblioteca para gerenciamento de navegação entre telas do aplicativo.
    - **Axios:** Biblioteca para fazer requisições HTTP (para comunicação com o backend).
    - **React Native Safe Area Context:** Para gerenciar o espaço seguro da tela, evitando sobreposição com elementos do sistema.
    - **React Native Screens:** Para uma melhor otimização de desempenho de tela no React Native.
- **Backend (newsapp-backend):**
    - **Node.js:** Ambiente de execução JavaScript para o lado servidor.
    - **TypeScript:** Superconjunto de JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e a detecção de erros.
    - **Express.js:** Framework web para Node.js, usado para construir a API REST.
    - **MySQL:** Sistema de gerenciamento de banco de dados relacional (RDBMS)
    provavelmente usado para armazenar dados de notícias ou usuários (se o
    app tiver essa funcionalidade).
    - **bcrypt.js (bcryptjs):** Biblioteca para criptografar senhas (presumivelmente, se o aplicativo tiver autenticação de usuários).
    - **jsonwebtoken:** Biblioteca para geração e validação de JSON Web Tokens (JWTs), provavelmente usada para autenticação.
- **Ferramentas de Desenvolvimento:**
    - **concurrently:** Permite executar múltiplos comandos simultaneamente (frontend e backend em paralelo).
    - **eslint e prettier:** Ferramentas para garantir a qualidade do código, linting e formatação.
    - **ts-node-dev:** Para executar e monitorar mudanças no código TypeScript durante o desenvolvimento.
    - IDE: VisualStudioCode