const user = require("../../fixtures/user.json");
export default class Footer_Page_Object {
  get_footer_links_list() {
    return cy.get(user.footer_elements.footer_links_list);
  }

  verify_footer_element_is_clicked(element) {
    cy.get(element).click();
  }
}
