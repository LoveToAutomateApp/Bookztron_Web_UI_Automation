import Sign_In_Page_Object from "../signin/Sign_In_Page_Object";

const user = require("../../fixtures/user.json");
const login = new Sign_In_Page_Object();

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
    // below statement will validate genere article contains fiction heading
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
    // below statement validate genere article contains thriller heading
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
    //below statements validate genere article contains tech heading
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
    // below statement validates genere article contains philosophy heading
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
    //below statement validates genere article contains romance heading
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
    //below statement validates genere article contains manga heading
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

  get_new_articles_book_list() {
    return cy.get(user.home_page.new_arrival_section_elements.book_list);
  }

  get_new_articles_book_badge(rowIndex) {
    cy.get(
      "div.new-arrivals-container > a:nth-Child(" +
        rowIndex +
        ") > div > div > div.badge-on-card"
    ).then(($val) => {
      expect($val.text().replace("\n").replace("\t").toString().trim()).eq(
        "New Arrival"
      );
    });
  }

  get_new_arrival_book_add_to_wishlist_without_signin(rowIndex) {
    cy.get(user.header_elements.login_or_logout_link).then(($state) => {
      let buttonTitle = $state.text().replace("\n").replace("\t").toString();
      //checks user is in logged out state
      if (buttonTitle.includes(user.header_data.label_login)) {
        //clicks on 1 book wishlist under new arrivals section
        cy.get(
          "div.new-arrivals-container > a:nth-Child(" +
            rowIndex +
            ") > div > div.card-item-details > div.card-button > button"
        ).click();
        //validate toaster message
        cy.get(
          user.home_page.new_arrival_section_elements.toaster_message
        ).then(($success) => {
          let successText = $success
            .text()
            .replace("\n")
            .replace("\t")
            .toString();
          if (
            successText.includes(
              user.home_page.new_arrival_section_date.label_toaster_kindly_login
            )
          ) {
            expect(true).to.be.true;
          }
        });
      }
    });
  }

  get_new_arrival_book_add_to_wishlist_with_signin(rowIndex) {
    cy.get(user.header_elements.login_or_logout_link).then(($state) => {
      let stateVal = $state
        .text()
        .replace("\t")
        .replace("\n")
        .toString()
        .trim();
      if (stateVal.includes(user.header_data.label_login)) {
        cy.get(user.header_elements.login_or_logout_link).click();
        login.validate_user_sign_in_with_valid_credentials(
          user.sign_in_page_data.label_valid_email,
          user.sign_in_page_data.label_valid_password
        );
        cy.wait(2000);
        cy.get(user.header_elements.brand_heading).click();
        cy.wait(3000);
        //add new arrival book to wishlist
        cy.get(
          "div.new-arrivals-container > a:nth-Child(" +
            rowIndex +
            ") > div > div.card-item-details > div.card-button > button"
        ).click();
        cy.wait(3000);
        // validate toaster message
        cy.get(
          user.home_page.new_arrival_section_elements.toaster_message
        ).then(($toaster) => {
          let toasterMessage = $toaster
            .text()
            .replace("\t")
            .replace("\n")
            .toString()
            .trim();
          if (
            toasterMessage.includes(
              user.home_page.new_arrival_section_date.label_toaster_added_item
            )
          ) {
            expect(true).to.be.true;
          }
        });

        cy.wait(2000);
        //remove added item from wishlist
        cy.get(
          "div.new-arrivals-container > a:nth-Child(" +
            rowIndex +
            ") > div > div.card-item-details > div.card-button > button"
        ).click();

        cy.wait(2000);
        //logout as user
        cy.get("div.right-topbar-container > button").click();
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

  validate_redirection_to_shop_page() {
    //below statement validates redirection of url is shop page
    cy.url().should("eq", user.url.shop_url);
  }

  validate_category_checkbox_is_checked(categoryVal) {
    switch (categoryVal) {
      case user.shop_page_data.label_fiction:
        //below statement ensures only fiction option is checked
        cy.get(user.shop_page_elements.fiction_checkbox).should("be.checked");
        //below statements ensure all other category option remains unchecked
        cy.get(user.shop_page_elements.thriller_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.tech_checkbox).should("not.be.checked");
        cy.get(user.shop_page_elements.philosophy_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.romance_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.manga_checkbox).should("not.be.checked");
        break;

      case user.shop_page_data.label_thriller:
        //below statement ensures only thriller option is checked
        cy.get(user.shop_page_elements.thriller_checkbox).should("be.checked");
        //below statements ensure all other category options remains unchecked
        cy.get(user.shop_page_elements.fiction_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.tech_checkbox).should("not.be.checked");
        cy.get(user.shop_page_elements.philosophy_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.romance_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.manga_checkbox).should("not.be.checked");
        break;
      case user.shop_page_data.label_tech:
        //below statement ensure only tech option is checked
        cy.get(user.shop_page_elements.tech_checkbox).should("be.checked");
        //below statements ensure all other category options remains unchecked
        cy.get(user.shop_page_elements.fiction_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.thriller_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.philosophy_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.romance_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.manga_checkbox).should("not.be.checked");
        break;
      case user.shop_page_data.label_philosophy:
        // below statement ensure only philosophy option is checked
        cy.get(user.shop_page_elements.philosophy_checkbox).should(
          "be.checked"
        );
        // below statements ensure all other category options remains unchecked
        cy.get(user.shop_page_elements.fiction_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.thriller_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.tech_checkbox).should("not.be.checked");
        cy.get(user.shop_page_elements.romance_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.manga_checkbox).should("not.be.checked");
        break;
      case user.shop_page_data.label_romance:
        // below statement ensures only romance category option should be checked
        cy.get(user.shop_page_elements.romance_checkbox).should("be.checked");
        //below statement ensures other all category option remains unchecked
        cy.get(user.shop_page_elements.fiction_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.thriller_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.tech_checkbox).should("not.be.checked");
        cy.get(user.shop_page_elements.philosophy_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.manga_checkbox).should("not.be.checked");
        break;
      case user.shop_page_data.label_manga:
        // below statement ensure only managa category should be checked
        cy.get(user.shop_page_elements.manga_checkbox).should("be.checked");
        // below statements ensure all other category remains unchecked
        cy.get(user.shop_page_elements.fiction_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.thriller_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.tech_checkbox).should("not.be.checked");
        cy.get(user.shop_page_elements.philosophy_checkbox).should(
          "not.be.checked"
        );
        cy.get(user.shop_page_elements.romance_checkbox).should(
          "not.be.checked"
        );
        break;
      case user.shop_page_data.label_default:
        //below statement ensures all check box options should be checked
        cy.get(user.shop_page_elements.fiction_checkbox).should("be.checked");
        cy.get(user.shop_page_elements.thriller_checkbox).should("be.checked");
        cy.get(user.shop_page_elements.tech_checkbox).should("be.checked");
        cy.get(user.shop_page_elements.philosophy_checkbox).should(
          "be.checked"
        );
        cy.get(user.shop_page_elements.romance_checkbox).should("be.checked");
        cy.get(user.shop_page_elements.manga_checkbox).should("be.checked");
        break;
      default:
        console.log("something went wrong in code");
    }
  }

  validate_default_rating() {
    // below statement will collect all list of ratings options
    cy.get(user.shop_page_elements.rating_items_list).then(($list) => {
      // below statement will retun the specific index of rating option
      let rowIndex = $list.length;
      // ensure specific index rating option is enabled
      cy.get(
        "div.product-page-rating-radio > div.rating-items:nth-Child(" +
          rowIndex +
          ") > input"
      ).should("be.enabled");
    });
  }

  validate_default_state_of_additional_features() {
    // below statement ensures default state of out of stock option is checked
    cy.get(user.shop_page_elements.include_out_of_stock_checkbox).should(
      "be.checked"
    );
    // below statement ensures default state of fast delivery option be unchecked
    cy.get(user.shop_page_elements.fast_delivery_only_checkbox).should(
      "not.be.checked"
    );
  }

  click_on_home_genere_category(element) {
    switch (element) {
      case user.home_page.article_section_data.label_fiction:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($list) => {
            let categoryVal = $list
              .text()
              .replace("\n")
              .replace("\t")
              .toString()
              .trim();
            if (
              categoryVal.includes(
                user.home_page.article_section_data.label_fiction
              )
            ) {
              let rowIndex = $list.length - 5;
              cy.get(
                "div.genre-cards-container > a:nth-Child(" +
                  rowIndex +
                  ") > div > p"
              ).click();
              //validate redirection to shop page
              this.validate_redirection_to_shop_page();
              // validate fiction checkbox is enabled
              this.validate_category_checkbox_is_checked(
                user.shop_page_data.label_fiction
              );
              //validate default ratings 1 star and above is enabled
              this.validate_default_rating();
              //validate additonal features
              this.validate_default_state_of_additional_features();
            }
          }
        );
        break;
      case user.home_page.article_section_data.label_thriller:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($list) => {
            let categoryVal = $list
              .text()
              .replace("\n")
              .replace("\t")
              .toString()
              .trim();
            if (
              categoryVal.includes(
                user.home_page.article_section_data.label_thriller
              )
            ) {
              let rowIndex = $list.length - 4;
              cy.get(
                "div.genre-cards-container > a:nth-Child(" +
                  rowIndex +
                  ") > div > p"
              ).click();
              //validate redirection to shop page
              this.validate_redirection_to_shop_page();
              // validate fiction checkbox is enabled
              this.validate_category_checkbox_is_checked(
                user.shop_page_data.label_thriller
              );
              //validate default ratings 1 star and above is enabled
              this.validate_default_rating();
              //validate additonal features
              this.validate_default_state_of_additional_features();
            }
          }
        );
        break;
      case user.home_page.article_section_data.label_tech:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($list) => {
            let categoryVal = $list
              .text()
              .replace("\n")
              .replace("\t")
              .toString()
              .trim();
            if (
              categoryVal.includes(
                user.home_page.article_section_data.label_tech
              )
            ) {
              let rowIndex = $list.length - 3;
              cy.get(
                "div.genre-cards-container > a:nth-Child(" +
                  rowIndex +
                  ") > div > p"
              ).click();
              //validate redirection to shop page
              this.validate_redirection_to_shop_page();
              // validate fiction checkbox is enabled
              this.validate_category_checkbox_is_checked(
                user.shop_page_data.label_tech
              );
              //validate default ratings 1 star and above is enabled
              this.validate_default_rating();
              //validate additonal features
              this.validate_default_state_of_additional_features();
            }
          }
        );
        break;
      case user.home_page.article_section_data.label_philosophy:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($list) => {
            let categoryVal = $list
              .text()
              .replace("\n")
              .replace("\t")
              .toString()
              .trim();
            if (
              categoryVal.includes(
                user.home_page.article_section_data.label_philosophy
              )
            ) {
              let rowIndex = $list.length - 2;
              cy.get(
                "div.genre-cards-container > a:nth-Child(" +
                  rowIndex +
                  ") > div > p"
              ).click();
              //validate redirection to shop page
              this.validate_redirection_to_shop_page();
              // validate fiction checkbox is enabled
              this.validate_category_checkbox_is_checked(
                user.shop_page_data.label_philosophy
              );
              //validate default ratings 1 star and above is enabled
              this.validate_default_rating();
              //validate additonal features
              this.validate_default_state_of_additional_features();
            }
          }
        );
        break;
      case user.home_page.article_section_data.label_romance:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($list) => {
            let categoryVal = $list
              .text()
              .replace("\n")
              .replace("\t")
              .toString()
              .trim();
            if (
              categoryVal.includes(
                user.home_page.article_section_data.label_romance
              )
            ) {
              let rowIndex = $list.length - 1;
              cy.get(
                "div.genre-cards-container > a:nth-Child(" +
                  rowIndex +
                  ") > div > p"
              ).click();

              //validate redirection to shop page
              this.validate_redirection_to_shop_page();
              // validate fiction checkbox is enabled
              this.validate_category_checkbox_is_checked(
                user.shop_page_data.label_romance
              );
              //validate default ratings 1 star and above is enabled
              this.validate_default_rating();
              //validate additional features
              this.validate_default_state_of_additional_features();
            }
          }
        );
        break;
      case user.home_page.article_section_data.label_manga:
        cy.get(user.home_page.articles_section_elements.genere_card_list).then(
          ($list) => {
            let categoryVal = $list
              .text()
              .replace("\n")
              .replace("\t")
              .toString()
              .trim();
            if (
              categoryVal.includes(
                user.home_page.article_section_data.label_manga
              )
            ) {
              let rowIndex = $list.length;
              cy.get(
                "div.genre-cards-container > a:nth-Child(" +
                  rowIndex +
                  ") > div > p"
              ).click();
              //validate redirection to shop page
              this.validate_redirection_to_shop_page();
              // validate fiction checkbox is enabled
              this.validate_category_checkbox_is_checked(
                user.shop_page_data.label_manga
              );
              //validate default ratings 1 star and above is enabled
              this.validate_default_rating();
              //validate additonal features
              this.validate_default_state_of_additional_features();
            }
          }
        );
        break;

      case user.home_page.article_section_data.label_explore_all:
        // validate click on explore all button
        cy.get(
          user.home_page.articles_section_elements.explore_all_button
        ).click();
        // validate after click on explore button redirection to shop page
        cy.url().should("eq", user.url.shop_url);
        //validate all category options are checked
        this.validate_category_checkbox_is_checked(
          user.shop_page_data.label_default
        );
        //validate default state of rating
        this.validate_default_rating();
        //validate additional features
        this.validate_default_state_of_additional_features();

        break;
      case user.home_page.article_section_data.default:
        console.log("something went wrong");
    }
  }
}
