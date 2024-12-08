# Contribuindo com o NativeNews

Obrigado por se interessar em contribuir com o **NativeNews**! Sua participação é essencial para o crescimento e a evolução do projeto.

### 🔧 Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Docker (opcional, para implantação)
- Expo CLI
- MySQL


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

## 🛠️ Como Contribuir

### 1. Faça um Fork do Repositório

1. Vá até o repositório principal do projeto: [NativeNewsApp](https://github.com/NativeNews2024-2/NativeNewsApp).
2. Clique no botão "Fork" no canto superior direito para criar uma cópia do repositório em sua conta.
3. Verifique o guia prático de como utilizar o Git aqui: [Guia de GIT](nativenewsdocs/GuiadeBoasPraticasGit.pdf)

### 2. Clone o Repositório do Fork

Use o seguinte comando no terminal para clonar o seu fork localmente:

```bash
git clone https://github.com/<seu-usuario>/NativeNewsApp.git
cd NativeNewsApp
```

### 3. Configure o Repositório Remoto

Adicione o repositório principal como remoto `upstream`:

```bash
git remote add upstream https://github.com/NativeNews2024-2/NativeNewsApp.git
```

### 4. Crie uma Nova Branch

Antes de começar a trabalhar, crie uma branch para sua funcionalidade ou correção de bug a partir da branch `development`:

```bash
git checkout development
git pull upstream development
git checkout -b minha-branch
```

### 5. Faça Suas Alterações

Implemente sua funcionalidade ou correção de bug, seguindo as [boas práticas de Git](#guia-de-boas-práticas-git-para-o-projeto-nativenews) descritas abaixo.

### 6. Commit e Push

Faça commits claros e organizados conforme as [convenções de commits](#convenções-de-commits). Depois, envie suas alterações para o repositório remoto:

```bash
git add .
git commit -m "feat(scope): breve descrição da mudança"
git push origin minha-branch
```

### 7. Crie um Pull Request

1. Acesse seu fork no GitHub.
2. Clique no botão **Compare & Pull Request**.
3. Certifique-se de que o destino é a branch `development` do repositório principal.
4. Adicione uma descrição detalhada sobre suas alterações e clique em **Create Pull Request**.

### 8. Responda ao Feedback

Os mantenedores do projeto revisarão seu Pull Request. Faça os ajustes necessários, caso solicitado, e envie as alterações com:

```bash
git add .
git commit --amend --no-edit
git push origin minha-branch --force
```

---

Contribuições de qualquer tipo são bem-vindas, desde código até relatórios de bugs, documentação ou sugestões! Se tiver dúvidas, entre em contato com a equipe de mantenedores.

✨ **Obrigado por contribuir com o NativeNews!** ✨

