# 🔧 TROUBLESHOOTING - CORREÇÕES APLICADAS

## ❌ Problema: Site sem estilo no Vercel

### 🔍 Diagnóstico:

O Vercel não estava carregando os arquivos CSS e JavaScript corretamente devido a caminhos relativos incorretos.

### ✅ Correções Aplicadas:

#### 1. **Caminhos Absolutos no HTML**

- ❌ ANTES: `<link rel="stylesheet" href="./source/CSS/Style.css">`
- ✅ AGORA: `<link rel="stylesheet" href="/source/CSS/Style.css">`

- ❌ ANTES: `<script src="./source/javascript/llm.js">`
- ✅ AGORA: `<script src="/source/javascript/llm.js">`

#### 2. **Removida Duplicação de Script**

- Removido script duplicado no `<head>`
- Mantido apenas no final do `<body>` (melhor performance)

#### 3. **Simplificado vercel.json**

- Removido seção `builds` desnecessária
- Vercel detecta automaticamente arquivos estáticos
- Mantido rotas para API e arquivos

#### 4. **Adicionado Título na Página**

- ✅ `<title>Plano de Ação SEBRAE - Gerador de Estratégias</title>`

---

## 🚀 PRÓXIMOS PASSOS:

### 1. Fazer Commit e Push

```bash
git add .
git commit -m "Corrige caminhos de CSS/JS para deploy Vercel"
git push origin main
```

### 2. Aguarde o Redeploy Automático

- O Vercel detecta o push e faz redeploy automaticamente
- Aguarde 1-2 minutos ☕

### 3. Teste o Site

- Acesse seu domínio Vercel
- Verifique se os estilos carregaram
- Teste a funcionalidade de gerar plano de ação

---

## 🐛 Outros Problemas Comuns:

### Site ainda sem estilo?

1. **Limpe o cache do navegador:**

   - Ctrl + Shift + R (Windows/Linux)
   - Cmd + Shift + R (Mac)

2. **Verifique o Console do navegador:**

   - F12 → Console
   - Procure por erros 404 nos arquivos

3. **Force redeploy no Vercel:**
   - Dashboard → Deployments → ... → Redeploy

### API não funciona?

1. Verifique se a variável `OPENAI_API_KEY` está configurada
2. Settings → Environment Variables
3. Se necessário, adicione e force redeploy

### Erros 404 em arquivos estáticos?

- Verifique se a estrutura de pastas está correta:
  ```
  /source/CSS/Style.css
  /source/javascript/llm.js
  ```

---

## ✅ Checklist Final:

- [ ] Commit das correções
- [ ] Push para GitHub
- [ ] Aguardar redeploy automático
- [ ] Limpar cache do navegador
- [ ] Testar site no Vercel
- [ ] Verificar console (F12) por erros
- [ ] Testar geração de plano de ação

---

**Se tudo funcionou, você está pronto! 🎉**
