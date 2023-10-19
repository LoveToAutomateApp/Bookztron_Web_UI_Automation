const user = require("../fixtures/user.json");

import Header_Page_Object from "../support/header/Header_Page_Object";
//const { defineConfig } = require("cypress");

describe("Top Header Integration Checklist", () => {
  const header = new Header_Page_Object();

  beforeEach(() => {
    cy.visit(user.staging_url);
  });

  it("TID001 - verify count of navigation menu links", () => {
    header.navigation_menu_list().should("have.length", 5);
  });

  it("TID002 - verify click on brand heading should redirect to home from login page", () => {
    header.login_link().click();
    header.brand_heading_link().click();
    header.home_url_validation();
  });

  it("TID003 - verify click on brand heading should redirect to home from shop page", () => {
    header.shop_link().click();
    header.brand_heading_link().click();
    header.home_url_validation();
  });

  it("TID004 - verify click on brand heading should redirect to home from wishlist page", () => {
    header.wishlist_link().click();
    header.brand_heading_link().click();
    header.home_url_validation();
  });

  it("TID005 - verify click on brand heading should redirect to home from cart page", () => {
    header.cart_link().click();
    header.brand_heading_link().click();
    header.home_url_validation();
  });

  it("TID006 - verify click on brand heading should redirect to home from order page", () => {
    header.order_link().click();
    header.brand_heading_link().click();
    header.home_url_validation();
  });

  it("TID007 - verify brand heading element should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("brand_heading");
  });

  it("TID008 - verify click on login link should redirect to login page from home page", () => {
    header.login_link().click();
    header.login_url_validation();
  });

  it("TID009 - verify click on login link should redirect to login page from shop page", () => {
    header.shop_link().click();
    header.login_link().click();
    header.login_url_validation();
  });

  it("TID010 - verify click on login link should redirect to login page from wishlist page", () => {
    header.wishlist_link().click();
    header.login_link().click();
    header.login_url_validation();
  });

  it("TID011 - verify click on login link should redirect to login page from cart page", () => {
    header.cart_link().click();
    header.login_link().click();
    header.login_url_validation();
  });

  it("TID012 - verify click on login link should redirect to login page from order page", () => {
    header.order_link().click();
    header.login_link().click();
    header.login_url_validation();
  });

  it("TID013 - verify login navbar element, should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("login_link");
  });

  it("TID014 - verify click on shop link should redirect to shop page from home page", () => {
    header.shop_link().click();
    header.shop_url_validation();
  });

  it("TID015 - verify click on shop link should redirect to shop page from login page", () => {
    header.login_link().click();
    header.shop_link().click();
    header.shop_url_validation();
  });

  it("TID016 - verify click on shop link should redirect to shop page from wishlist page", () => {
    header.wishlist_link().click();
    header.shop_link().click();
    header.shop_url_validation();
  });

  it("TID017 - verify click on shop link should redirect to shop page from cart page", () => {
    header.cart_link().click();
    header.shop_link().click();
    header.shop_url_validation();
  });

  it("TID018 - verify click on shop link should redirect to shop page from order page", () => {
    header.order_link().click();
    header.shop_link().click();
    header.shop_url_validation();
  });

  it("TID019 - verify shop navbar element, should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("shop_link");
  });

  it("TID020 - verify click on wishlist link should redirect to wishlist page from home page", () => {
    header.wishlist_link().click();
    header.wishlist_url_validation();
  });

  it("TID021 - verify click on wishlist link should redirect to wishlist page from login page", () => {
    header.login_link().click();
    header.wishlist_link().click();
    header.wishlist_url_validation();
  });

  it("TID022 - verify click on wishlist link should redirect to wishlist page from shop page", () => {
    header.shop_link().click();
    header.wishlist_link().click();
    header.wishlist_url_validation();
  });

  it("TID023 - verify click on wishlist link should redirect to wishlist page from cart page", () => {
    header.cart_link().click();
    header.wishlist_link().click();
    header.wishlist_url_validation();
  });

  it("TID024 - verify click on wishlist link should redirect to wishlist page from order page", () => {
    header.order_link().click();
    header.wishlist_link().click();
    header.wishlist_url_validation();
  });

  it("TID025 - verify wishlist navbar element, should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("wishlist_link");
  });

  it("TID026 - verify click on cart link should redirect to cart page from home page", () => {
    header.cart_link().click();
    header.cart_url_validation();
  });

  it("TID027 - verify click on cart link should redirect to cart page from login page", () => {
    header.login_link().click();
    header.cart_link().click();
    header.cart_url_validation();
  });

  it("TID028 - verify click on cart link should redirect to cart page from shop page", () => {
    header.shop_link().click();
    header.cart_link().click();
    header.cart_url_validation();
  });

  it("TID029 - verify click on cart link should redirect to cart page from wishlist page", () => {
    header.wishlist_link().click();
    header.cart_link().click();
    header.cart_url_validation();
  });

  it("TID030 - verify click on cart link should redirect to cart page from order page", () => {
    header.order_link().click();
    header.cart_link().click();
    header.cart_url_validation();
  });

  it("TID031 - verify cart navbar element, should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("cart_link");
  });

  it("TID032 - verify click on order link should redirect to order page from home page", () => {
    header.order_link().click();
    header.order_url_validation();
  });

  it("TID033 - verify click on order link should redirect to order page from login page", () => {
    header.login_link().click();
    header.order_link().click();
    header.order_url_validation();
  });

  it("TID034 - verify click on order link should redirect to order page from shop page", () => {
    header.shop_link().click();
    header.order_link().click();
    header.order_url_validation();
  });

  it("TID035 - verify click on order link should redirect to order page from wishlist page", () => {
    header.wishlist_link().click();
    header.order_link().click();
    header.order_url_validation();
  });

  it("TID036 - verify click on order link should redirect to order page from cart page", () => {
    header.cart_link().click();
    header.order_link().click();
    header.order_url_validation();
  });

  it("TID037 - verify order link should be visible, should display cursor as pointer, should be an link, link value should not be empty", () => {
    header.element_ui_validation("order_link");
  });

  it("TID038 - verify top header is sticky, should be sticky", () => {
    header.top_header().should("have.css", "position", "sticky");
  });
});
