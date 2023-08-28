const user = require("../../fixtures/user.json");
//const { defineConfig } = require("cypress");

export default class Header_Page_Object {
  brand_heading_validation() {
    // should be visible
    cy.get(user.header_elements.brand_heading).should("be.visible");
    // should display cursor as pointer
    cy.get(user.header_elements.brand_heading).should(
      "have.css",
      "cursor",
      "pointer"
    );
    // should be wrapped within link tag
    cy.get(user.header_elements.brand_heading).should("have.attr", "href");
    // link should not be empty
    cy.get(user.header_elements.brand_heading)
      .should("have.attr", "href")
      .should("not.be.empty");
  }

  login_link_validation() {
    //should be visible
    cy.get(user.header_elements.login_link).should("be.visible");
    //should display cursor as pointer
    cy.get(user.header_elements.login_link).should(
      "have.css",
      "cursor",
      "pointer"
    );
    //should be wrapped within link tag
    cy.get(user.header_elements.login_link).should("have.attr", "href");
    //link should not be empty
    cy.get(user.header_elements.login_link)
      .should("have.attr", "href")
      .should("not.be.empty");
  }

  shop_link_validation() {
    //should be visible
    cy.get(user.header_elements.shop_link).should("be.visible");
    //should display cursor as pointer
    cy.get(user.header_elements.shop_link).should(
      "have.css",
      "cursor",
      "pointer"
    );
    //should be wrapped within link tag
    cy.get(user.header_elements.login_link).should("have.attr", "href");
    //link value should not be empty
    cy.get(user.header_elements.login_link)
      .should("have.attr", "href")
      .should("not.be.empty");
  }

  wishlist_link_validation() {
    //should be visible
    cy.get(user.header_elements.wishlist_link).should("be.visible");
    //should display cursor as pointer
    cy.get(user.header_elements.wishlist_link).should(
      "have.css",
      "cursor",
      "pointer"
    );
    //should be wrapped within link tag
    cy.get(user.header_elements.wishlist_link).should("have.attr", "href");
    //link value should not be empty
    cy.get(user.header_elements.wishlist_link)
      .should("have.attr", "href")
      .should("not.be.empty");
  }

  cart_link_validation() {
    //should be visible
    cy.get(user.header_elements.cart_link).should("be.visible");
    //should display cursor as pointer
    cy.get(user.header_elements.cart_link).should(
      "have.css",
      "cursor",
      "pointer"
    );
    //should be wrapped within link tag
    cy.get(user.header_elements.cart_link).should("have.attr", "href");
    //link value should not be empty
    cy.get(user.header_elements.cart_link)
      .should("have.attr", "href")
      .should("not.be.empty");
  }

  order_link_validation() {
    //should be visible
    cy.get(user.header_elements.order_link).should("be.visible");
    //should display cursor as pointer
    cy.get(user.header_elements.order_link).should(
      "have.css",
      "cursor",
      "pointer"
    );
    //should be wrapped within link tag
    cy.get(user.header_elements.order_link).should("have.attr", "href");
    //link value should not be empty
    cy.get(user.header_elements.order_link)
      .should("have.attr", "href")
      .should("not.be.empty");
  }

  top_header() {
    return cy.get(user.header_elements.top_header);
  }

  brand_heading_link() {
    return cy.get(user.header_elements.brand_heading);
  }

  home_url_validation() {
    cy.url().should("eq", user.url.home_url);
  }

  login_link() {
    return cy.get(user.header_elements.login_link);
  }

  login_url_validation() {
    cy.url().should("eq", user.url.login_url);
  }

  shop_link() {
    return cy.get(user.header_elements.shop_link);
  }

  shop_url_validation() {
    cy.url().should("eq", user.url.shop_url);
  }

  wishlist_link() {
    return cy.get(user.header_elements.wishlist_link);
  }

  wishlist_url_validation() {
    cy.url().should("eq", user.url.wishlist_url);
  }

  cart_link() {
    return cy.get(user.header_elements.cart_link);
  }

  cart_url_validation() {
    cy.url().should("eq", user.url.cart_url);
  }

  order_link() {
    return cy.get(user.header_elements.order_link);
  }

  order_url_validation() {
    cy.url().should("eq", user.url.order_url);
  }

  navigation_menu_list() {
    cy.get(user.header_elements.navigation_menu_count_list, {
      timeout: 1000,
    });
    return cy.get(user.header_elements.navigation_menu_count_list);
  }

  element_ui_validation(element) {
    switch (element) {
      case "brand_heading":
        this.brand_heading_validation();
        break;
      case "login_link":
        this.login_link_validation();
        break;
      case "shop_link":
        this.shop_link_validation();
        break;
      case "wishlist_link":
        this.wishlist_link_validation();
        break;
      case "cart_link":
        this.cart_link_validation();
        break;
      case "order_link":
        this.order_link_validation();
        break;
      default:
        cy.log("wrong switch case option");
    }
  }
}
