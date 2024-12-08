```mermaid
flowchart TD
    A[Usuário] --> B[Cadastrar]
    A --> C[Fazer Login]
    A --> D[Visualizar Notícias]
    A --> E[Gerenciar Favoritos]
    
    B --> |Criar Conta| B1[Preencher Dados Pessoais]
    B1 --> B2[Validar Cadastro]
    
    C --> |Autenticar| C1[Inserir Credenciais]
    C1 --> C2[Validar Login]
    
    D --> |Navegar| D1[Selecionar Categorias]
    D1 --> D2[Listar Notícias]
    D2 --> D3[Visualizar Detalhes da Notícia]
    D3 --> |Link Externo| D4[Acessar Matéria Completa]
    
    E --> |Gerenciar| E1[Adicionar Notícia aos Favoritos]
    E --> E2[Remover Notícia dos Favoritos]
    E1 --> |Clique na Estrelinha| E3[Salvar em Página de Favoritos]
    ```