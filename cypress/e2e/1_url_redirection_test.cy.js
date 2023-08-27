//const { defineConfig } = require("cypress");
const user = require("../fixtures/user.json");

//validate status code and url for redirections
describe("Url redirection test ", () => {
  it("verify status code and redirection of home page url ", () => {
    // status code as home page url as 200
    cy.request(user.url.home_url).then((response) => {
      expect(response.status).to.eq(200);
    });
    // validate redirection url of home
    cy.visit(user.url.home_url);
    cy.url().should("eq", user.url.home_url);
  });

  it("verify status code and redirection of login page url", () => {
    // status code of redirection url should be 200
    cy.request(user.url.login_url).then((response) => {
      expect(response.status).to.eq(200);
    });
    //validate redirection url of login page
    cy.visit(user.url.login_url);
    cy.url().should("eq", user.url.login_url);
  });

  it("verify login page redirection with incorrect url", () => {
    cy.visit("http://localhost:3000/login2");
    cy.url().should("not.eq", user.url.shop_url);
  });

  it("verify status code and redirection of shop page url", () => {
    // status code of redirection url should be 200
    cy.request(user.url.shop_url).then((response) => {
      expect(response.status).to.eq(200);
    });
    //validate redirection url of shop page
    cy.visit(user.url.shop_url);
    cy.url().should("eq", user.url.shop_url);
  });

  it("verify shop page redirection with incorrect url", () => {
    cy.visit("http://localhost:3000/shop2");
    cy.url().should("not.eq", user.url.shop_url);
  });

  it("verify status code and redirection of wishlist page url", () => {
    // status code of redirection url should be 200
    cy.request(user.url.wishlist_url).then((response) => {
      expect(response.status).to.eq(200);
    });
    //validate redirection url of wishlist page
    cy.visit(user.url.wishlist_url);
    cy.url().should("eq", user.url.wishlist_url);
  });

  it("verify wishlist page redirection with incorrect url", () => {
    cy.visit("http://localhost:3000/wishlist2");
    cy.url().should("not.eq", user.url.wishlist_url);
  });

  it("verify status code and redirection of cart page url", () => {
    // status code of redirection url should be 200
    cy.request(user.url.cart_url).then((response) => {
      expect(response.status).to.eq(200);
    });
    //validate redirection url of cart page
    cy.visit(user.url.cart_url);
    cy.url().should("eq", user.url.cart_url);
  });

  it("verify cart page redirection with incorrect url", () => {
    cy.visit("http://localhost:3000/cart2");
    cy.url().should("not.eq", user.url.cart_url);
  });

  it("verify status code and redirection of order page url", () => {
    //status code of redirection url should be 200
    cy.request(user.url.order_url).then((response) => {
      expect(response.status).to.eq(200);
    });
    //validate redirection of order page url
    cy.visit(user.url.order_url);
    cy.url().should("eq", user.url.order_url);
  });

  it("verify order page redirection with incorrect url", () => {
    cy.visit("http://localhost:3000/order2");
    cy.url().should("not.eq", user.url.order_url);
  });
});
