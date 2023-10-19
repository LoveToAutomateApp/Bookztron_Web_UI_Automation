const user = require("../../fixtures/user.json");
export default class Sign_Up_Page_Object {
  get_create_an_account_submit_button() {
    return cy.get(user.sign_up_page_elements.create_new_account_button);
  }

  get_name_field() {
    return cy.get(user.sign_up_page_elements.name_field);
  }

  get_email_field() {
    return cy.get(user.sign_up_page_elements.email_field);
  }

  get_password_field() {
    return cy.get(user.sign_up_page_elements.password_field);
  }

  get_accept_terms_checkbox() {
    return cy.get(user.sign_up_page_elements.accept_terms_checkbox);
  }

  get_already_have_an_account_link() {
    return cy.get(user.sign_up_page_elements.already_have_an_account_link);
  }

  get_success_toaster_message() {
    return cy.get(user.sign_up_page_elements.toaster_message);
  }
}
