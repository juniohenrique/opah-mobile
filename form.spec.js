const FormPage = require('../pageobjects/form.page');
const expect = require('chai').expect;

describe('Formulário', () => {
  it('deve preencher text e aparecer valor abaixo', async () => {

    await FormPage.setTextInput('Junio');
    expect(await FormPage.inputTextResult.getText()).to.equal('Junio');
  });


});
describe('Switch', () => {
  it('deve alterar o texto do switch', async () => {
    var valorInicial = FormPage.switchText.getText();
    await FormPage.setSwitchBtn();
    expect(await FormPage.switchText.getText()).to.not.equal(valorInicial);
  });
});

describe('DropDown', () => {
  it('deve alterar item do Dropdown para webdriver.io is awesome', async () => {
    await FormPage.btnMenuForm.click();
    await FormPage.dropdown.click();
    await FormPage.option1.click();
    expect(await FormPage.switchText.getText()).to.not.equal("webdriver.io is awesome");
  });

  it('deve alterar item do Dropdown para Appium is awesome', async () => {
    await FormPage.btnMenuForm.click();
    await FormPage.dropdown.click();
    await FormPage.option2.click();
    expect(await FormPage.switchText.getText()).to.not.equal("Appium is awesome");
  });

  it('deve alterar item do Dropdown para This app is awesome', async () => {
    await FormPage.btnMenuForm.click();
    await FormPage.dropdown.click();
    await FormPage.option3.click();
    expect(await FormPage.switchText.getText()).to.not.equal("This app is awesome");
  });
});