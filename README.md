# Sistema de Interfaceamento LIS

Sistema completo para gerenciamento e interfaceamento de equipamentos laboratoriais remotos, com suporte a múltiplos protocolos e formas de comunicação.

## Características

- ✅ Gerenciamento centralizado de equipamentos remotos
- ✅ Suporte a múltiplos protocolos (HL7, ASTM)
- ✅ Múltiplas formas de comunicação:
  - Porta Serial
  - TCP/IP (modo CLIENT ou SERVER)
  - Leitura/Escrita de Arquivos
- ✅ Modos de conexão TCP/IP:
  - **CLIENT**: Equipamento conecta-se ao LIS
  - **SERVER**: LIS conecta-se ao equipamento
- ✅ Painel web para configuração e monitoramento
- ✅ API REST completa
- ✅ Status em tempo real dos equipamentos

## Estrutura do Projeto

```
interface_v2/
├── server/          # Backend (Node.js + Express)
├── client/          # Frontend (React + TypeScript)
└── README.md
```

## Instalação

### Backend (Servidor)

```bash
cd server
npm install
npm run build
npm start
```

Para desenvolvimento:
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

### Frontend (Cliente)

```bash
cd client
npm install
npm run dev
```

O painel estará disponível em `http://localhost:5173`

## Uso

1. Inicie o servidor backend
2. Inicie o frontend
3. Acesse o painel web
4. Configure seus equipamentos:
   - Adicione novos equipamentos
   - Configure transportes (Serial, TCP/IP ou Arquivo)
   - **Para TCP/IP**: Escolha o modo (CLIENT ou SERVER)
   - Selecione protocolos suportados
   - Teste conexões

> 📖 Veja [MODOS_CONEXAO.md](MODOS_CONEXAO.md) para entender a diferença entre os modos CLIENT e SERVER

## API Endpoints

### Equipamentos
- `GET /api/devices` - Listar todos os equipamentos
- `GET /api/devices/:id` - Obter equipamento específico
- `POST /api/devices` - Criar novo equipamento
- `PUT /api/devices/:id` - Atualizar equipamento
- `DELETE /api/devices/:id` - Deletar equipamento
- `POST /api/devices/:id/test-connection` - Testar conexão
- `GET /api/devices/:id/status` - Obter status do equipamento
- `PATCH /api/devices/:id/toggle` - Ativar/Desativar equipamento

### Outros
- `GET /api/manufacturers` - Listar fabricantes
- `GET /api/protocols` - Listar protocolos disponíveis
- `GET /health` - Health check

## Tecnologias

### Backend
- Node.js
- Express
- TypeScript
- SerialPort (para comunicação serial)

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

## Próximos Passos

- [ ] Persistência em banco de dados
- [ ] Autenticação e autorização
- [ ] Logs e auditoria
- [ ] Notificações em tempo real (WebSocket)
- [ ] Suporte a mais protocolos
- [ ] Dashboard com métricas
