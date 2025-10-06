# 🚀 GUIA RÁPIDO DE DEPLOY - VERCEL

## ✅ Checklist Pré-Deploy

- [x] Código atualizado no GitHub
- [ ] Chave da OpenAI em mãos (sk-proj-...)
- [ ] Conta no Vercel criada

---

## 📋 PASSO A PASSO

### 1️⃣ Commit e Push para o GitHub

```bash
git add .
git commit -m "Adiciona configuração Vercel e API segura"
git push origin main
```

### 2️⃣ Acesse o Vercel
- Vá para: https://vercel.com
- Faça login com GitHub

### 3️⃣ Crie Novo Projeto
- Clique em **"Add New..." → "Project"**
- Procure por: **PlanoDeAcao_SEBRAE**
- Clique em **"Import"**

### 4️⃣ Configure Variável de Ambiente ⚠️ CRÍTICO

**Antes de fazer deploy, adicione:**

```
Name:  OPENAI_API_KEY
Value: sk-proj-gBjGCKGSaX... (sua chave completa)
```

**Marque todos os ambientes:**
- ✅ Production
- ✅ Preview  
- ✅ Development

Clique em **"Add"**

### 5️⃣ Deploy
- Clique em **"Deploy"**
- Aguarde 1-2 minutos ☕
- ✅ **Pronto!** Seu site está no ar!

---

## 🔗 Após o Deploy

Você receberá um link tipo:
```
https://plano-de-acao-sebrae.vercel.app
```

Teste o site e veja se funciona!

---

## 🐛 Problemas Comuns

### ❌ Erro 500 na API
**Solução:** Verifique se você adicionou a variável `OPENAI_API_KEY`

### ❌ API Key inválida
**Solução:** Vá em Settings → Environment Variables e atualize a chave

### ❌ CORS Error
**Solução:** Já está configurado no código! Deve funcionar automaticamente.

---

## 🔄 Atualizações Futuras

Qualquer push no GitHub = Deploy automático! 🎉

```bash
git add .
git commit -m "Nova feature"
git push
```

---

## 📞 Precisa de Ajuda?

Verifique os logs no painel do Vercel:
- Dashboard → Seu projeto → Deployments → Ver logs

---

**✨ Boa sorte com o deploy!**
