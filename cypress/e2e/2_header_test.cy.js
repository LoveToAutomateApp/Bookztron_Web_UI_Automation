const user = require("../fixtures/user.json");

import Header_Page_Object from "../support/header/Header_Page_Object";
//const { defineConfig } = require("cypress");
describe("Top Header UI Checklist", () => {
  const header = new Header_Page_Object();
  beforeEach(() => {
    cy.visit(user.staging_url);
  });

  it("verify brand heading should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("brand_heading");
  });

  it("verify login link should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("login_link");
  });

  it("verify shop link should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("shop_link");
  });

  it("verify wishlist link should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("wishlist_link");
  });

  it("verify cart link should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("cart_link");
  });

  it("verify order link should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("order_link");
  });

  it("verify top header is sticky", () => {
    header.top_header().should("have.css", "position", "sticky");
  });
});

//----------------------- Integration -------------------------------------->

describe("Top Header Integration Checklist", () => {
  const header = new Header_Page_Object();

  beforeEach(() => {
    cy.visit(user.staging_url);
  });

  it("verify click on brand heading should redirect to home from login page", () => {
    header.login_link().click();
    header.brand_heading_link().click();
    header.home_url_validation();
  });

  it("verify click on brand heading should redirect to home from shop page", () => {
    header.shop_link().click();
    header.brand_heading_link().click();
    header.home_url_validation();
  });

  it("verify click on brand heading should redirect to home from wishlist page", () => {
    header.wishlist_link().click();
    header.brand_heading_link().click();
    header.home_url_validation();
  });

  it("verify click on brand heading should redirect to home from cart page", () => {
    header.cart_link().click();
    header.brand_heading_link().click();
    header.home_url_validation();
  });

  it("verify click on brand heading should redirect to home from order page", () => {
    header.order_link().click();
    header.brand_heading_link().click();
    header.home_url_validation();
  });

  it("verify click on login link should redirect to login page from home page", () => {
    header.login_link().click();
    header.login_url_validation();
  });

  it("verify click on login link should redirect to login page from shop page", () => {
    header.shop_link().click();
    header.login_link().click();
    header.login_url_validation();
  });

  it("verify click on login link should redirect to login page from wishlist page", () => {
    header.wishlist_link().click();
    header.login_link().click();
    header.login_url_validation();
  });

  it("verify click on login link should redirect to login page from cart page", () => {
    header.cart_link().click();
    header.login_link().click();
    header.login_url_validation();
  });

  it("verify click on login link should redirect to login page from order page", () => {
    header.order_link().click();
    header.login_link().click();
    header.login_url_validation();
  });

  it("verify click on shop link should redirect to shop page from home page", () => {
    header.shop_link().click();
    header.shop_url_validation();
  });

  it("verify click on shop link should redirect to shop page from login page", () => {
    header.login_link().click();
    header.shop_link().click();
    header.shop_url_validation();
  });

  it("verify click on shop link should redirect to shop page from wishlist page", () => {
    header.wishlist_link().click();
    header.shop_link().click();
    header.shop_url_validation();
  });

  it("verify click on shop link should redirect to shop page from cart page", () => {
    header.cart_link().click();
    header.shop_link().click();
    header.shop_url_validation();
  });

  it("verify click on shop link should redirect to shop page from order page", () => {
    header.order_link().click();
    header.shop_link().click();
    header.shop_url_validation();
  });

  it("verify click on wishlist link should redirect to wishlist page from home page", () => {
    header.wishlist_link().click();
    header.wishlist_url_validation();
  });

  it("verify click on wishlist link should redirect to wishlist page from login page", () => {
    header.login_link().click();
    header.wishlist_link().click();
    header.wishlist_url_validation();
  });

  it("verify click on wishlist link should redirect to wishlist page from shop page", () => {
    header.shop_link().click();
    header.wishlist_link().click();
    header.wishlist_url_validation();
  });

  it("verify click on wishlist link should redirect to wishlist page from cart page", () => {
    header.cart_link().click();
    header.wishlist_link().click();
    header.wishlist_url_validation();
  });

  it("verify click on wishlist link should redirect to wishlist page from order page", () => {
    header.order_link().click();
    header.wishlist_link().click();
    header.wishlist_url_validation();
  });

  it("verify click on cart link should redirect to cart page from home page", () => {
    header.cart_link().click();
    header.cart_url_validation();
  });

  it("verify click on cart link should redirect to cart page from login page", () => {
    header.login_link().click();
    header.cart_link().click();
    header.cart_url_validation();
  });

  it("verify click on cart link should redirect to cart page from shop page", () => {
    header.shop_link().click();
    header.cart_link().click();
    header.cart_url_validation();
  });

  it("verify click on cart link should redirect to cart page from wishlist page", () => {
    header.wishlist_link().click();
    header.cart_link().click();
    header.cart_url_validation();
  });

  it("verify click on cart link should redirect to cart page from order page", () => {
    header.order_link().click();
    header.cart_link().click();
    header.cart_url_validation();
  });

  it("verify click on order link should redirect to order page from home page", () => {
    header.order_link().click();
    header.order_url_validation();
  });

  it("verify click on order link should redirect to order page from login page", () => {
    header.login_link().click();
    header.order_link().click();
    header.order_url_validation();
  });

  it("verify click on order link should redirect to order page from shop page", () => {
    header.shop_link().click();
    header.order_link().click();
    header.order_url_validation();
  });

  it("verify click on order link should redirect to order page from wishlist page", () => {
    header.wishlist_link().click();
    header.order_link().click();
    header.order_url_validation();
  });

  it("verify click on order link should redirect to order page from cart page", () => {
    header.cart_link().click();
    header.order_link().click();
    header.order_url_validation();
  });
});
