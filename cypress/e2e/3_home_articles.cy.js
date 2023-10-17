import Home_Articles_Page_Object from "../support/home/Home_Articles_Page_Object";
const user = require("../fixtures/user.json");
//const { defineConfig } = require("cypress");
describe("Bookztron App E2E Test", () => {
  const hapo = new Home_Articles_Page_Object();
  beforeEach(() => {
    cy.visit(user.staging_url);
  });

  // ------------------- Home page UI checklist ----------------------------->

  it("TID001 - verify banner image is not broken", () => {
    hapo
      .get_banner_image()
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.gt(0);
      });
  });

  it("TID002 - verify list count under generes article section", () => {
    hapo.get_articles_list().should("have.length", 6);
  });

  it("TID003 - verify fiction, thriller, tech, philosophy, romance, managa is present under gener article section", () => {
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

  it("TID004 - verify explore button should be visible, should display cursor as pointer", () => {
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

  it("verify count of new arrival list should be 4", () => {
    hapo.get_new_articles_book_list().should("have.length", 4);
  });

  it("verify books should be new arrival", () => {
    for (let i = 1; i < 5; i++) {
      hapo.get_new_articles_book_badge(i);
    }
  });

  it("verify to add 1 book to wishlist without signin, should display toaster prompting to signin", () => {
    for (let i = 1; i < 2; i++) {
      hapo.get_new_arrival_book_add_to_wishlist_without_signin(i);
    }
  });

  it("verify to add 2 books to wishlist without signin, should display toaster prompting to signin", () => {
    for (let i = 1; i < 3; i++) {
      hapo.get_new_arrival_book_add_to_wishlist_without_signin(i);
    }
  });

  it("verify to add 3 books to wishlist without signin should display toaster prompting to signin", () => {
    for (let i = 1; i < 4; i++) {
      hapo.get_new_arrival_book_add_to_wishlist_without_signin(i);
    }
  });

  it("verify to add all books to wishlist without signin should display toaster prompting to signin", () => {
    for (let i = 1; i < 5; i++) {
      hapo.get_new_arrival_book_add_to_wishlist_without_signin(i);
    }
  });

  it("verify to add 1 book to wishlist with signin  should display 1 book into wishlist", () => {
    for (let i = 1; i < 2; i++) {
      hapo.get_new_arrival_book_add_to_wishlist_with_signin(i);
    }
  });

  it("verify to add 2 book to wishlist with signin should display 2 books into wishlist", () => {
    for (let i = 1; i < 3; i++) {
      hapo.get_new_arrival_book_add_to_wishlist_with_signin(i);
    }
  });

  it("verify to add 3 books to wishlist with signin should display 3 books into wishlist", () => {
    for (let i = 1; i < 4; i++) {
      hapo.get_new_arrival_book_add_to_wishlist_with_signin(i);
    }
  });

  it("verify to add all books into wishlist with signin should display 4 books into wishlist", () => {
    for (let i = 1; i < 5; i++) {
      hapo.get_new_arrival_book_add_to_wishlist_with_signin(i);
    }
  });

  // it("verify new arrival book status not to be out of stock", () => {});

  // it("verify to add the stranger book into wishlist", () => {});

  // it("verify to remove stranger book from wishlist through home page", () => {});
});
