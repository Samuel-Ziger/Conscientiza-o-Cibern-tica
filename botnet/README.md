# Demonstração Educacional de Botnet e DDoS

## ⚠️ AVISO LEGAL IMPORTANTE

**Este projeto é APENAS para fins educacionais e demonstração em palestras sobre segurança digital.**

- ❌ **NÃO** use este código para atividades maliciosas
- ❌ **NÃO** use este código para atacar sistemas sem autorização
- ❌ **NÃO** distribua este código sem os avisos legais apropriados
- ✅ **USE** apenas em ambientes controlados e isolados
- ✅ **USE** apenas para fins educacionais e demonstração

O uso deste software para atividades ilegais é estritamente proibido e pode resultar em consequências legais graves.

---

## 📚 Objetivo Educacional

Este projeto demonstra os conceitos de:
- **Botnet**: Rede de dispositivos controlados remotamente
- **Command & Control (C&C)**: Servidor que gerencia os bots
- **DDoS (Distributed Denial of Service)**: Ataque distribuído que sobrecarrega um servidor

**Importante**: Esta é uma simulação controlada que funciona apenas localmente (127.0.0.1) e não representa uma ameaça real quando usado conforme as instruções.

---

## 🏗️ Estrutura do Projeto

```
botnet/
├── cc_server.py      # Servidor Command & Control
├── bot.py            # Cliente bot simulado
├── target_server.py  # Servidor alvo de teste
├── requirements.txt  # Dependências (nenhuma necessária)
└── README.md         # Este arquivo
```

---

## 🚀 Como Usar (Demonstração)

### Pré-requisitos
- Python 3.6 ou superior
- Ambiente isolado (máquina local)

### Passo 1: Iniciar o Servidor Alvo

Em um terminal, execute:
```bash
python target_server.py
```

O servidor iniciará em `127.0.0.1:8080` e mostrará as requisições recebidas.

### Passo 2: Iniciar o Servidor C&C

Em outro terminal, execute:
```bash
python cc_server.py
```

O servidor C&C iniciará em `127.0.0.1:9999` e aguardará conexões de bots.

### Passo 3: Conectar Bots

Em terminais adicionais (quantos quiser para demonstração), execute:
```bash
python bot.py Bot1
python bot.py Bot2
python bot.py Bot3
```

Cada bot se conectará ao servidor C&C.

### Passo 4: Executar Ataque Simulado

No terminal do servidor C&C, digite:
```
CC> attack 127.0.0.1 8080 30
```

Isso iniciará um ataque simulado de 30 segundos contra o servidor alvo.

### Comandos do C&C

- `status` - Ver status dos bots conectados
- `attack <host> <port> <duration>` - Iniciar ataque (ex: `attack 127.0.0.1 8080 30`)
- `stop` - Parar ataque
- `quit` - Sair

---

## 📊 O Que Observar na Demonstração

1. **Conexão dos Bots**: Observe como os bots se conectam ao C&C
2. **Comunicação C&C**: Veja como o servidor envia comandos aos bots
3. **Ataque Coordenado**: Observe como múltiplos bots atacam simultaneamente
4. **Impacto no Servidor**: Veja o aumento de requisições no servidor alvo
5. **Estatísticas**: Monitore requisições por segundo (RPS)

---

## 🛡️ Medidas de Segurança Implementadas

- ✅ Funciona apenas em localhost (127.0.0.1)
- ✅ Não inclui código de infecção real
- ✅ Não persiste no sistema
- ✅ Requer execução manual de cada componente
- ✅ Avisos legais em todos os arquivos

---

## 📖 Conceitos Demonstrados

### Botnet
Uma rede de dispositivos comprometidos (bots) controlados remotamente por um atacante através de um servidor C&C.

### Command & Control (C&C)
O servidor central que:
- Gerencia bots conectados
- Distribui comandos
- Coleta informações
- Coordena ataques

### DDoS (Distributed Denial of Service)
Ataque que sobrecarrega um servidor com requisições de múltiplas fontes simultaneamente, tornando-o indisponível.

---

## ⚖️ Considerações Legais

- Este código é fornecido apenas para fins educacionais
- O uso para atacar sistemas sem autorização é ilegal
- O autor não se responsabiliza pelo uso indevido deste código
- Em muitos países, criar ou usar botnets é crime
- Sempre obtenha autorização escrita antes de testar segurança

---

## 🎓 Uso em Palestras

### Pontos a Enfatizar:

1. **Como funciona**: Demonstre a arquitetura botnet → C&C → alvo
2. **Escala**: Mostre como múltiplos bots amplificam o ataque
3. **Detecção**: Explique como identificar botnets (tráfego suspeito, conexões anômalas)
4. **Prevenção**: Discuta medidas de defesa (firewalls, rate limiting, DDoS protection)
5. **Ética**: Enfatize que isso é apenas para educação

### Slides Sugeridos:

- Arquitetura de botnets
- Ciclo de vida de um bot
- Técnicas de detecção
- Estratégias de mitigação
- Casos reais (sem detalhes técnicos)

---

## 🔒 Boas Práticas de Segurança

Para proteger sistemas reais:

1. **Firewalls**: Configure regras adequadas
2. **Rate Limiting**: Limite requisições por IP
3. **DDoS Protection**: Use serviços como Cloudflare
4. **Monitoramento**: Monitore tráfego anômalo
5. **Atualizações**: Mantenha sistemas atualizados
6. **Backups**: Tenha planos de recuperação

---

## 📝 Notas Finais

Este projeto foi criado para fins educacionais. Use com responsabilidade e sempre enfatize os aspectos legais e éticos em suas palestras.

**Lembre-se**: Conhecimento de segurança deve ser usado para proteger, não para atacar.

---

## 📧 Contato

Se você tem dúvidas sobre o uso educacional deste código ou precisa de esclarecimentos legais, consulte um advogado especializado em direito digital.

---

**Versão**: 1.0  
**Data**: 2024  
**Licença**: Apenas para fins educacionais - Uso comercial ou malicioso proibido

