class LoginPage {
  get btnMenuLogin() { return $('~Login'); }
  get inputEmail() { return $('~input-email'); }
  get inputPassword() { return $('~input-password'); }
  get inputRepeatPassword() { return $('~input-repeat-password'); }
  get btgLoginContainer() { return $('~button-login-container'); }
  get btnSignUpContainer() { return $('~button-sign-up-container'); }
  get btnLogin() { return $('~button-LOGIN'); }
  get btnSignUp() { return $('~button-SIGN UP'); }
  get btnSuccess() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }
  get errorMessageCharacters() { return $('//android.widget.TextView[@text="Please enter at least 8 characters"]'); }
  get errorMessagePassword() { return $('//android.widget.TextView[@text="Please enter the same password"]'); }
  get errorValidEmail() { return $('//android.widget.TextView[@text="Please enter a valid email address"]'); }
  get androidMessage() { return $('//android.widget.TextView[@resource-id="android:id/message"]'); }

  async login(email, password) {
    await this.btnMenuLogin.click();
    await this.btgLoginContainer.click();
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  async singUp(email, password, repeatPassword) {
    await this.btnMenuLogin.click();
    await this.btnSignUpContainer.click();
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.inputRepeatPassword.setValue(repeatPassword);
    await this.btnSignUp.click();
  }

}

module.exports = new LoginPage();
