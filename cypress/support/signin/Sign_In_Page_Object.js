const user = require("../../fixtures/user.json");
export default class Sign_In_Page_Object {
  get_email_field() {
    return cy.get(user.sign_in_page_elements.email_field);
  }

  get_password_field() {
    return cy.get(user.sign_in_page_elements.password_field);
  }

  get_sign_in_submit() {
    return cy.get(user.sign_in_page_elements.login_submit);
  }

  validate_user_sign_in_with_valid_credentials(username, password) {
    this.get_email_field().type(username);
    this.get_password_field().type(password);
    this.get_sign_in_submit().click();
  }
}
