# Guia de Instalação

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Para comunicação serial (Windows): drivers da porta serial instalados

## Instalação Passo a Passo

### 1. Instalar Dependências do Backend

```bash
cd server
npm install
```

**Nota importante**: A instalação do pacote `serialport` pode requerer compilação nativa. No Windows, você pode precisar do Visual Studio Build Tools.

### 2. Compilar o Backend

```bash
cd server
npm run build
```

### 3. Instalar Dependências do Frontend

```bash
cd client
npm install
```

### 4. Configurar Variáveis de Ambiente

#### Backend (server/.env)
```
PORT=3000
NODE_ENV=development
```

#### Frontend (client/.env)
```
VITE_API_URL=http://localhost:3000/api
```

## Execução

### Modo Desenvolvimento

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

### Modo Produção

**Backend:**
```bash
cd server
npm run build
npm start
```

**Frontend:**
```bash
cd client
npm run build
npm run preview
```

## Acessar o Sistema

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api
- **Health Check**: http://localhost:3000/health

## Solução de Problemas

### Erro ao instalar serialport

No Windows, instale o Windows Build Tools:
```bash
npm install --global windows-build-tools
```

Ou use o Visual Studio Installer e instale "Desktop development with C++".

### Porta já em uso

Altere a porta no arquivo `.env` ou nas variáveis de ambiente.

### CORS errors

Certifique-se de que o backend está rodando e a URL da API no frontend está correta.

