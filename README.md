# Projeto de Automação Mobile

Automação de testes para app mobile utilizando WebdriverIO, Appium, Mocha, Chai e Allure Report.

## Tecnologias

- WebdriverIO
- Appium
- Mocha
- Chai
- Allure Report
- GitHub Actions (CI/CD)
- BrowserStack

## Estrutura

- `test/specs/` - Cenários de teste
- `test/pageobjects/` - Page Objects
- `test/data/` - Dados de entrada
- `wdio.conf.js` - Configuração do WebdriverIO
- `.github/workflows/ci.yml` - Pipeline CI/CD

## Execução

1. Instale as dependências:
```
npm install
```

2. Execute os testes:
```
npx wdio run wdio.conf.js
```

3. Gere o relatório Allure:
```
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Observação

Configure corretamente o caminho do aplicativo no `wdio.conf.js` e os devices no BrowserStack, se necessário.
