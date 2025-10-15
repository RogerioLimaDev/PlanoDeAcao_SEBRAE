# Plano de Ação SEBRAE

Ferramenta para geração automatizada de planos de ação estratégicos baseados em análise SWOT/FOFA usando IA.

## 🚀 Tecnologias

- HTML5, CSS3, JavaScript (Vanilla)
- OpenAI API (GPT-3.5)
- Vercel (Hospedagem + Serverless Functions)

## 📦 Estrutura do Projeto

```
PlanoDeAcao_SEBRAE/
├── index.html                 # Frontend principal (Português)
├── index-en.html              # Frontend em inglês
├── source/
│   ├── CSS/
│   │   └── Style.css          # Estilos (compartilhado)
│   └── javascript/
│       ├── llm.js             # Lógica do frontend (Português)
│       └── llm-en.js          # Lógica do frontend (Inglês)
├── api/
│   ├── gerar-estrategia.js    # API backend (Português)
│   └── gerar-estrategia-en.js # API backend (Inglês)
├── vercel.json                # Configuração do Vercel
└── README.md                  # Este arquivo
```

## 🔧 Configuração Local (Opcional)

1. Clone o repositório
2. Copie `.env.example` para `.env.local`
3. Adicione sua chave da OpenAI no `.env.local`
4. Instale o Vercel CLI:
   ```bash
   npm i -g vercel
   ```
5. Execute localmente:
   ```bash
   vercel dev
   ```

## 🌐 Deploy no Vercel

### Passo a Passo Completo:

1. **Faça commit e push do código para o GitHub**

   ```bash
   git add .
   git commit -m "Adiciona configuração Vercel e API segura"
   git push origin main
   ```

2. **Acesse o Vercel**

   - Vá para [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub

3. **Importe o Projeto**

   - Clique em **"Add New..." → "Project"**
   - Selecione o repositório **PlanoDeAcao_SEBRAE**
   - Clique em **"Import"**

4. **Configure a Variável de Ambiente** ⚠️ IMPORTANTE

   - Em "Environment Variables", adicione:
     - **Name:** `OPENAI_API_KEY`
     - **Value:** Sua chave da OpenAI (sk-proj-...)
     - **Environment:** Selecione todos (Production, Preview, Development)
   - Clique em **"Add"**

5. **Deploy**
   - Clique em **"Deploy"**
   - Aguarde o build finalizar (1-2 minutos)
   - ✅ Seu site estará no ar!

## 🔐 Segurança

- ✅ A chave da API OpenAI fica **apenas no servidor** (variável de ambiente)
- ✅ Nunca comite arquivos `.env` ou `.env.local`
- ✅ O frontend faz chamadas para `/api/gerar-estrategia` (sua API segura)

## 📝 Funcionalidades

- ✅ Análise SWOT/FOFA interativa
- ✅ Geração de plano de ação com IA
- ✅ Modal responsivo com resultados
- ✅ Proteção contra múltiplos cliques
- ✅ Design responsivo (mobile-friendly)
- ✅ **Versão em português e inglês**

## 🌍 Versões Disponíveis

### Português
- **URL:** `/` ou `/index.html`
- **API:** `/api/gerar-estrategia`
- **Script:** `llm.js`

### English
- **URL:** `/index-en.html`
- **API:** `/api/gerar-estrategia-en`
- **Script:** `llm-en.js`

## 🔄 Atualizações Futuras

Depois do primeiro deploy, qualquer push para o GitHub fará deploy automático!

```bash
git add .
git commit -m "Sua mensagem"
git push origin main
```

O Vercel detecta automaticamente e faz o redeploy! 🚀

## 👨‍💻 Autor

Rogerio Lima Dev

## 📄 Licença

© 2024 - Todos os direitos reservados
