import Sign_Up_Page_Object from "../support/signup/Sign_Up_Page_Object";
const user = require("../fixtures/user.json");
const signup = new Sign_Up_Page_Object();

//const { defineConfig } = require("cypress");

describe("Bookztron E2E Test", () => {
  beforeEach(() => {
    cy.visit(user.url.sign_up_url);
  });

  it("TID003 - verify background-color of create new account button with uncheck terms option", () => {
    // validate button should be disabled
    signup.get_create_an_account_submit_button().should("be.disabled");

    // validate background-color of create new account button
    signup
      .get_create_an_account_submit_button()
      .should("have.css", "background-color", "rgb(172, 172, 172)");
  });

  it("TID004 - verify background-color of create new account button with check terms option", () => {
    //validate button should be enabled
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().should("be.enabled");

    //validate background-color of create new account button
    signup
      .get_create_an_account_submit_button()
      .should("have.css", "background-color", "rgb(0, 208, 156)");
  });

  it("TID005 - verify hover on create new account button with empty credentials", () => {
    signup.get_name_field().should("not.have.value");
    signup.get_email_field().should("not.have.value");
    signup.get_password_field().should("not.have.value");

    signup.get_create_an_account_submit_button().should("be.disabled");
    signup
      .get_create_an_account_submit_button()
      .should("have.css", "cursor", "pointer");
  });

  it("TID006 - verify hover on create new account button with credentials", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().should("be.enabled");
    signup
      .get_create_an_account_submit_button()
      .should("have.css", "cursor", "pointer");
  });

  it("TID007 - verify hover on already have an account link", () => {
    signup
      .get_already_have_an_account_link()
      .invoke("mouseover")
      .should("have.css", "cursor", "pointer")
      .and("have.css", "text-decoration")
      .should("include", "none solid rgb(41, 81, 124)");
  });

  it("TID008 - verify click on already have an account link", () => {
    signup.get_already_have_an_account_link().should("be.visible");
    signup
      .get_already_have_an_account_link()
      .should("not.have.attr", "target", "_blank");
    signup.get_already_have_an_account_link().click();
    cy.wait(2000);
    cy.url().should("include", "/login");
  });

  it("TID009 - verify submission of form with empty credentials", () => {
    signup.get_name_field().should("not.have.value");
    signup.get_email_field().should("not.have.value");
    signup.get_password_field().should("not.have.value");
    signup.get_accept_terms_checkbox().should("not.be.checked");
    signup.get_create_an_account_submit_button().should("be.disabled");
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID010 - verify submission of form with only name", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().should("not.have.value");
    signup.get_password_field().should("not.have.value");
    signup.get_accept_terms_checkbox().should("not.be.checked");
    signup.get_create_an_account_submit_button().should("be.disabled");
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID011 - verify submission of form with only email", () => {
    signup.get_name_field().should("not.have.value");
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().should("not.have.value");
    signup.get_accept_terms_checkbox().should("not.be.checked");
    signup.get_create_an_account_submit_button().should("be.disabled");
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID012 - verify submission of form with only password", () => {
    signup.get_name_field().should("not.have.value");
    signup.get_email_field().should("not.have.value");
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().should("not.be.checked");
    signup.get_create_an_account_submit_button().should("be.disabled");
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID013 - verify submission of form with only terms option enabled", () => {
    signup.get_name_field().should("not.have.value");
    signup.get_email_field().should("not.have.value");
    signup.get_password_field().should("not.have.value");
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().should("be.enabled");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID014 - verify submission of form with name and email field", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().should("not.have.value");
    signup.get_accept_terms_checkbox().should("not.be.checked");
    signup.get_create_an_account_submit_button().should("not.be.enabled");
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID015 - verify submission of form with name and password field", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().should("not.have.value");
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().should("not.be.checked");
    signup.get_create_an_account_submit_button().should("not.be.enabled");
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID016 - verify submission of form with email and password field", () => {
    signup.get_name_field().should("not.have.value");
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().should("not.be.checked");
    signup.get_create_an_account_submit_button().should("not.be.enabled");
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID017 - verify submission of form with integer as name", () => {
    signup.get_name_field().type("333");
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID018 - verify submission of form with special character as name", () => {
    signup.get_name_field().type("#@#$test@@");
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID019 - verify submission of form with 1 character as name", () => {
    signup.get_name_field().type("v");
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID020 - verify submission of form with 21 characters as name", () => {
    signup.get_name_field().type("abcdefghijklmnopqrstu");
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID021 - verify submission of form with 3 character as email", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().type("tes");
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID022 - verify submission of form with invalid email", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().type("tes@gmail@.com");
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID023 - verify submission of form with 51 characters as email", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup
      .get_email_field()
      .type("test1233451234567890133333333333333333333@gmail.com");
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    signup.get_success_toaster_message().should("not.be.visible");
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID025 - verify submission of form with 1 characters as password", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type("a");
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID026 - verify submission of form with 21 characters as password ", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type("12345678@abcdefgh123");
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID027 - verify submission of form with valid name, valid email and valid password and uncheck terms", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type("12345678@abcdefgh123");
    signup.get_accept_terms_checkbox().should("not.be.checked");
    cy.wait(2000);
    signup.get_create_an_account_submit_button().should("be.disabled");
    cy.url().should("not.include", "/login").and("include", "/signup");
  });

  it("TID028 - verify submission of form with valid name, valid email and valid password check terms option", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().should("be.enabled");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("include", "/login").and("not.include", "/signup");
  });

  it("TID029 - verify submission of form with existing credentials", () => {
    signup.get_name_field().type(user.sign_up_page_data.label_name);
    signup.get_email_field().type(user.sign_up_page_data.label_email);
    signup.get_password_field().type(user.sign_up_page_data.label_password);
    signup.get_accept_terms_checkbox().check().should("be.checked");
    signup.get_create_an_account_submit_button().should("be.enabled");
    signup.get_create_an_account_submit_button().click();
    cy.wait(2000);
    cy.url().should("not.include", "/login").and("include", "/signup");
  });
});
