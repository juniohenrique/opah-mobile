# 📱 Projeto: Mobile Automation com WebdriverIO + Appium

Automação de testes mobile para o app [native-demo-app](https://github.com/webdriverio/native-demo-app/releases), usando WebdriverIO com Mocha, Appium, integração local e BrowserStack, Allure Reports e Page Object Pattern.

---
## 📛 Badges
[![GitHub Actions](https://github.com/juniohenrique/opah-mobile/actions/workflows/test.yml/badge.svg)](https://github.com/seu-usuario/seu-repositorio/actions)
[![Allure Report](https://img.shields.io/badge/report-Allure-blueviolet)](https://github.com/allure-framework/allure2)
[![BrowserStack](https://img.shields.io/badge/tested%20with-BrowserStack-ff6e42?logo=browserstack)](https://www.browserstack.com)


---

## ✅ Pré-requisitos

- Node.js (v18+)
- Java JDK 11+
- Appium (`npm install -g appium`)
- Android Studio com emulador configurado
- Conta no [BrowserStack](https://www.browserstack.com/)

---

## 📦 Instalação

```bash
npm install
```

---

## ⚙️ Configuração

### 🔐 Variáveis de ambiente (BrowserStack)

Crie um arquivo `.env` ou exporte no terminal:

```bash
export BROWSERSTACK_USERNAME="seu_usuario_browserstack"
export BROWSERSTACK_ACCESS_KEY="sua_chave"
export BS_APP_ANDROID="bs://<id-do-app>"
```

> Para obter o `BS_APP_ANDROID`, suba o app `.apk` pelo painel do BrowserStack ou via terminal:
>
> ```bash
> curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
> -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
> -F "file=@/caminho/para/native-demo-app.apk"
> ```

---

## 🚀 Execução dos Testes

### 🔹 Localmente (Emulador Android)

1. Inicie o Appium:
   ```bash
   appium
   ```

2. Inicie um emulador Android

3. Execute:
   ```bash
   npm run test:local
   ```

### 🔹 Nuvem (BrowserStack)

```bash
npm run test
```

---

## 📊 Relatório de Testes

Após qualquer execução, gere e visualize o relatório Allure:

```bash
npm run report
```

---

## 🧪 Plano de Testes

### 🔐 Login (`login.spec.js`)
- ✅ Login com dados válidos
- ✅ Validação de erro para e-mail inválido
- ✅ Validação de erro para senha com menos de 8 caracteres
- ✅ Cadastro com sucesso com dados válidos

### 📝 Formulário (`form.spec.js`)
- ✅ Preenchimento de texto e verificação do valor exibido
- ✅ Alteração do estado do switch e validação do texto
- ✅ Seleção de itens no dropdown:
  - WebdriverIO is awesome
  - Appium is awesome
  - This app is awesome

### 👆 Swipe (`swipe.spec.js`)
- ✅ Swipe horizontal (verificação de elemento exibido após swipe)

---

## 📁 Estrutura do Projeto

```text
.
├── .github/workflows
│   └── test.yml                  # GitHub Actions
├── logs                          # Logs de execução
├── test
│   ├── pageobjects               # Page Objects
│   │   ├── form.page.js
│   │   ├── login.page.js
│   │   └── swipe.page.js
│   └── specs                     # Casos de teste
│       ├── form.spec.js
│       ├── login.spec.js
│       └── swipe.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── wdio.conf.android.js         # Configuração local (Appium + Emulador)
└── wdio.conf.js                 # Configuração para BrowserStack
```

---

## 🧠 Boas práticas utilizadas

- Page Object Pattern para modularização e reutilização
- Relatórios Allure com evidências visuais
- Separação entre código de teste e lógica de página
- Execução local e em nuvem
- Organização clara por contexto

--