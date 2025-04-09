class FormPage {
  get btnMenuForm() { return $('~Forms'); }

  get textInput() { return $('~text-input'); }
  get inputTextResult() { return $('~input-text-result'); }
  get switchBtn() { return $('~switch'); }
  get switchText() { return $('~switch-text'); }
  get dropdown() { return $('~Dropdown'); }
  get option1() { return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]'); }
  get option2() { return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]'); }
  get option3() { return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]'); }
  async setTextInput(text) {
    await this.btnMenuForm.click();
    await this.textInput.setValue(text);
  }

  async getTextInputResult() {
    return await this.inputTextResult.getText();
  }
  async setSwitchBtn() {
    await this.btnMenuForm.click();
    await this.switchBtn.click();
  }

}

module.exports = new FormPage();
