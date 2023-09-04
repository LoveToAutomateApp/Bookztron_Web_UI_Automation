import Home_Articles_Page_Object from "../support/home/Home_Articles_Page_Object";
const user = require("../fixtures/user.json");
//const { defineConfig } = require("cypress");
describe("Bookztron App E2E Test", () => {
  const hapo = new Home_Articles_Page_Object();
  beforeEach(() => {
    cy.visit(user.staging_url);
  });

  // ------------------- Home page UI checklist ----------------------------->

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

  //------------------------- Home page integration checklist ------------------->

  it("verify click on fiction category option should redirect to shop page, fiction category should be checked, one star and above rating should be enabled, include only out of stock product should be checked ", () => {
    hapo.click_on_home_genere_category(
      user.home_page.article_section_data.label_fiction
    );
  });

  it("verify click on thriller category should redirect to shop page, thriller category should be checked, one star and above rating should be enabled, include only out of stock product should be checked", () => {
    hapo.click_on_home_genere_category(
      user.home_page.article_section_data.label_thriller
    );
  });

  it("verify click on tech category should redirect to shop page, tech category should be checked, one star and above rating should be enabled, include only out of stock product should be checked", () => {
    hapo.click_on_home_genere_category(
      user.home_page.article_section_data.label_tech
    );
  });

  it("verify click on philosophy category should redirect to shop page, philosophy category should be checked, one star and above rating should be enabled, include only out of stock product should be checked", () => {
    hapo.click_on_home_genere_category(
      user.home_page.article_section_data.label_philosophy
    );
  });

  it("verify click on romance category should redirect to shop page, romance category should be checked, one star and above rating should be enabled, include only out of stock product should be checked", () => {
    hapo.click_on_home_genere_category(
      user.home_page.article_section_data.label_romance
    );
  });

  it("verify click on manga category should redirect to shop page, manga category should be checked, one star and above rating should be enabled, include only out of stock product should be checked", () => {
    hapo.click_on_home_genere_category(
      user.home_page.article_section_data.label_manga
    );
  });

  it("verify click on explore all button should redirect to shop page, all category options should be checked, one star and above rating should be enabled, include only out of stock product should be checked", () => {
    hapo.click_on_home_genere_category(
      user.home_page.article_section_data.label_explore_all
    );
  });
});
