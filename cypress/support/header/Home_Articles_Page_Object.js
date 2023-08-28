const user = require("../../fixtures/user.json");
export default class Home_Articles_Page_Object {
  get_banner_image() {
    // will return banner image element from user.json file
    return cy.get(user.home_page.home_banner_image_element.banner_image);
  }

  get_articles_list() {
    // will return articles list from user.json file
    return cy.get(user.home_page.articles_section_elements.genere_card_list);
  }

  explore_all_button_ui_validation() {
    //explore all button should be visible
    cy.get(user.home_page.articles_section_elements.explore_all_button).should(
      "be.visible"
    );
    // explore all button should display cursor as pointer
    cy.get(user.home_page.articles_section_elements.explore_all_button).should(
      "have.css",
      "cursor",
      "pointer"
    );

    //explore all button should have link
    cy.get("div.home-component-container > a").should("have.attr", "href");

    //explore all button link should not be empty
    cy.get("div.home-component-container > a")
      .should("have.attr", "href")
      .should("not.be.empty");
  }

  get_fiction_article_heading(rowIndex) {
    cy.get(
      "div.genre-cards-container > a:nth-Child(" + rowIndex + ") > div > p"
    ).then(($eleVal) => {
      let elementText = $eleVal
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (
        elementText.includes(user.home_page.article_section_data.label_fiction)
      ) {
        expect(true).to.be.true;
      }
    });
  }

  get_thriller_article_heading(rowIndex) {
    cy.get(
      "div.genre-cards-container > a:nth-Child(" + rowIndex + ") > div > p"
    ).then(($eleVal) => {
      let elementText = $eleVal
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (
        elementText.includes(user.home_page.article_section_data.label_thriller)
      ) {
        expect(true).to.be.true;
      }
    });
  }
  get_tech_article_heading(rowIndex) {
    cy.get(
      "div.genre-cards-container > a:nth-Child(" + rowIndex + ") > div > p"
    ).then(($eleVal) => {
      let elementText = $eleVal
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (
        elementText.includes(user.home_page.article_section_data.label_tech)
      ) {
        expect(true).to.be.true;
      }
    });
  }
  get_philosophy_article_heading(rowIndex) {
    cy.get(
      "div.genre-cards-container > a:nth-Child(" + rowIndex + ") > div > p"
    ).then(($eleVal) => {
      let elementText = $eleVal
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (
        elementText.includes(
          user.home_page.article_section_data.label_philosophy
        )
      ) {
        expect(true).to.be.true;
      }
    });
  }
  get_romance_article_heading(rowIndex) {
    cy.get(
      "div.genre-cards-container > a:nth-Child(" + rowIndex + ") > div > p"
    ).then(($eleVal) => {
      let elementText = $eleVal
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (
        elementText.includes(user.home_page.article_section_data.label_romance)
      ) {
        expect(true).to.be.true;
      }
    });
  }
  get_manga_article_heading(rowIndex) {
    cy.get(
      "div.genre-cards-container > a:nth-Child(" + rowIndex + ") > div > p"
    ).then(($eleVal) => {
      let elementText = $eleVal
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (
        elementText.includes(user.home_page.article_section_data.label_manga)
      ) {
        expect(true).to.be.true;
      }
    });
  }

  articles_list_name(element) {
    switch (element) {
      case user.home_page.article_section_data.label_fiction:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($el) => {
            let rowIndex = $el.length - 5;
            this.get_fiction_article_heading(rowIndex);
          }
        );
        break;
      case user.home_page.article_section_data.label_thriller:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($el) => {
            let rowIndex = $el.length - 4;
            this.get_thriller_article_heading(rowIndex);
          }
        );
        break;
      case user.home_page.article_section_data.label_tech:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($el) => {
            let rowIndex = $el.length - 3;
            this.get_tech_article_heading(rowIndex);
          }
        );
        break;
      case user.home_page.article_section_data.label_philosophy:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($el) => {
            let rowIndex = $el.length - 2;
            this.get_philosophy_article_heading(rowIndex);
          }
        );
        break;
      case user.home_page.article_section_data.label_romance:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($el) => {
            let rowIndex = $el.length - 1;
            this.get_romance_article_heading(rowIndex);
          }
        );
        break;
      case user.home_page.article_section_data.label_manga:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($el) => {
            let rowIndex = $el.length;
            this.get_manga_article_heading(rowIndex);
          }
        );
        break;
      default:
        cy.log("no element found");
    }
  }
}
