# README - Projeto Movies

## 📌 Visão Geral

Este projeto foi desenvolvido como parte do processo seletivo para Mytia. Trata-se de um aplicativo web que consome a API do TMDB para exibir filmes populares e permitir buscas.

## 🌐 Demonstração Online

Você pode acessar a versão hospedada do projeto em:  
<https://movies-ten-iota.vercel.app/>

## 🛠 Como Executar Localmente

Siga estes passos para configurar e executar o projeto em sua máquina local:

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Conta no TMDB (para obter a chave de API)

### Passo a Passo

1. **Clonar o repositório**

```bash
git clone [URL do repositório]
```

2. **Acessar a pasta do projeto**

```bash
Copy
cd [nome-da-pasta-do-projeto]
```

3. **Configurar a chave de API do TMDB**

```bash
Copy
npm install
```

4. **Configurar a chave de API do TMDB**

- Acesse <https://www.themoviedb.org/>

- Crie uma conta ou faça login se já tiver uma

- Acesse as configurações da sua conta

- Vá para a seção "API" (ou acesse diretamente <https://www.themoviedb.org/settings/api>)

- Solicite uma chave de API para desenvolvedores

- Após aprovação, copie sua chave de API (v3 auth)

- Configurar variáveis de ambiente

5. **Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:**

```env
Copy
VITE_API_KEY=sua_chave_de_api_aqui
```

6. **Iniciar o servidor de desenvolvimento**

```bash
Copy
npm run dev
```

7. **Acessar o projeto**
Abra seu navegador e acesse:

```Copy
<http://localhost:5173>
```

🚀 Scripts Disponíveis

- npm run dev: Inicia o servidor de desenvolvimento

```Copy
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── store/
│   ├── style/
│   ├── types/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

Desenvolvido com ❤️ por Marcos Lauremiro
<marcoslauremiro@gmail.com> | <https://github.com/MarcosLauremiro>
