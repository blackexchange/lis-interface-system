# Modos de Conexão TCP/IP

## Visão Geral

Os equipamentos laboratoriais podem se comunicar de duas formas diferentes via TCP/IP:

## 🔵 Modo CLIENT

**O LIS conecta-se ao equipamento**

- O LIS **inicia** a conexão
- O equipamento **aguarda** a conexão (está em modo servidor)
- Você precisa informar o **Host/IP** e **Porta** do equipamento
- O LIS cria um cliente TCP que conecta ao equipamento
- A conexão é estabelecida imediatamente

**Exemplo de uso:**
- Equipamento: `192.168.1.100:5000`
- Modo: `CLIENT`
- O LIS conecta-se ao equipamento em `192.168.1.100:5000`
- O equipamento está escutando na porta 5000

**Quando usar:**
- Equipamentos que ficam sempre disponíveis na rede
- Quando você quer controlar quando iniciar a conexão
- Equipamentos que não iniciam conexões automaticamente

---

## 🟢 Modo SERVER

**O equipamento conecta-se ao servidor LIS**

- O equipamento **inicia** a conexão
- O servidor LIS **aguarda** a conexão do equipamento
- Você precisa informar apenas a **Porta** (Host não é necessário)
- O LIS cria um servidor TCP que escuta na porta especificada
- O equipamento conecta-se ao **IP do servidor LIS** nesta porta
- Quando o equipamento conecta, a comunicação é estabelecida

**Exemplo de uso:**
- Porta: `5000`
- Modo: `SERVER`
- O LIS escuta na porta 5000 (em todas as interfaces - 0.0.0.0)
- O equipamento conecta-se ao IP do servidor LIS (ex: `192.168.1.50:5000`)

**Quando usar:**
- Equipamentos que iniciam conexões automaticamente
- Equipamentos que se conectam periodicamente
- Quando você não controla quando o equipamento conecta

---

## 📋 Resumo

| Característica | Modo CLIENT | Modo SERVER |
|---------------|-------------|-------------|
| **Quem inicia?** | LIS | Equipamento |
| **Quem escuta?** | Equipamento | LIS |
| **Host obrigatório?** | Sim (IP do equipamento) | Não (LIS usa IP próprio) |
| **Porta** | Porta do equipamento | Porta que o LIS escuta |
| **Reconexão** | Manual ou automática | Automática (quando equipamento conecta) |

## 🔍 Como Identificar o Modo?

1. **Consulte a documentação do equipamento**
   - Geralmente especifica se o equipamento é "client" ou "server"

2. **Teste ambos os modos**
   - Configure como CLIENT primeiro
   - Se não funcionar, tente SERVER

3. **Verifique o comportamento**
   - Se o equipamento conecta automaticamente → CLIENT
   - Se o equipamento fica aguardando → SERVER

## ⚙️ Configuração no Painel

Ao adicionar um transporte TCP/IP, você verá:

1. **Modo de Conexão**: Dropdown com CLIENT ou SERVER
2. **Host/IP**: 
   - CLIENT: Obrigatório (IP do equipamento)
   - SERVER: Não necessário (LIS usa seu próprio IP)
3. **Porta**: Sempre obrigatória
   - CLIENT: Porta do equipamento
   - SERVER: Porta que o LIS escutará (equipamento conecta nesta porta)

## 🧪 Teste de Conexão

Use o botão "Testar" no painel para verificar se a conexão está funcionando corretamente com o modo escolhido.

