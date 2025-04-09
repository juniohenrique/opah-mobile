const LoginPage = require('../pageobjects/login.page');
const expect = require('chai').expect;

describe('Login com dados válidos', () => {

  it(`deve logar com sucesso:`, async () => {
    await LoginPage.login("usuario@teste.com", "senhaCerta");
    expect(await LoginPage.androidMessage.getText()).to.equal("You are logged in!");
  });

  afterEach(async () => {
    await LoginPage.btnSuccess.click();
  });
});

describe('Login com dados inválidos', () => {
  it(`deve exibir erro sobre email invalido: `, async () => {
    await LoginPage.login("emailinvalido", "12345688");
    expect(await LoginPage.errorValidEmail.isDisplayed()).to.be.true;
  });

  it(`deve exibir erro sobre quatidade de caracteres : `, async () => {
    await LoginPage.login("emailinvalido", "errado");

    expect(await LoginPage.errorMessageCharacters.isDisplayed()).to.be.true;
  });
});

describe('Cadastro com dados válidos', () => {

  it(`deve cadastrar com sucesso:`, async () => {
    await LoginPage.singUp("usuario@teste.com", "senhaCerta", "senhaCerta");
    expect(await LoginPage.androidMessage.getText()).to.equal("You successfully signed up!");
  });

  afterEach(async () => {
    await LoginPage.btnSuccess.click();
  });
});

