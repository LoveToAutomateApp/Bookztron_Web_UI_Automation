import Home_Articles_Page_Object from "../support/header/Home_Articles_Page_Object";
const user = require("../fixtures/user.json");
//const { defineConfig } = require("cypress");
describe("Bookztron App E2E Test", () => {
  const hapo = new Home_Articles_Page_Object();
  beforeEach(() => {
    cy.visit(user.staging_url);
  });

  it("verify banner image is not broken", () => {
    hapo
      .get_banner_image()
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.gt(0);
      });
  });

  it("verify list count under generes article section", () => {
    hapo.get_articles_list().should("have.length", 6);
  });

  it("verify fiction, thriller, tech, philosophy, romance, managa is present under gener article section", () => {
    let listItems = [
      user.home_page.article_section_data.label_fiction,
      user.home_page.article_section_data.label_thriller,
      user.home_page.article_section_data.label_tech,
      user.home_page.article_section_data.label_philosophy,
      user.home_page.article_section_data.label_romance,
      user.home_page.article_section_data.label_manga,
    ];

    listItems.forEach((listItems) => {
      hapo.articles_list_name(listItems);
    });
  });

  it("verify explore button should be visible, should display cursor as pointer", () => {
    hapo.explore_all_button_ui_validation();
  });
});
