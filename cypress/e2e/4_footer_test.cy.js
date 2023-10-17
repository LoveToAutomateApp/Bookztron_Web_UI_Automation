const user = require("../fixtures/user.json");
import Footer_Page_Object from "../support/footer/Footer_Page_Object";
//const { defineConfig } = require("cypress");
describe("Bookztron E2E Test", () => {
  const footer = new Footer_Page_Object();
  beforeEach(() => {
    cy.visit(user.url.home_url);
  });

  it("TID001 - verify links count under about us", () => {
    footer.get_footer_links_list().then(($sections) => {
      let sectionTitle = $sections
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_about)) {
        let rowIndex = $sections.length - 2;

        // ---------------- check footer to have length of 4 elements ------------------>
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li > p"
        ).should("have.length", 4);
      }
    });
  });

  it("TID002 - verify links title under about section as contact us, about us, careers, gift cards", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($links) => {
          let linktitle = $links.text().toString().trim();

          // ------------------ check footer to have contact us, about us, careers, gift cards elements ------------>
          if (
            linktitle.includes(
              user.footer_data.label_about_section_contact_us
            ) &&
            linktitle.includes(user.footer_data.label_about_section_about_us) &&
            linktitle.includes(user.footer_data.label_about_section_careers) &&
            linktitle.includes(user.footer_data.label_about_section_gift_cards)
          ) {
            expect(true).to.be.true;
          }
        });
      }
    });
  });

  it("TID003 - verify contact us footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let titleVal = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (titleVal.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let rowIndex2 = $footerElement.length - 3;

          cy.get(
            "div.footer-container > ul:nth-Child(" +
              rowIndex +
              ") > li:nth-Child(" +
              rowIndex2 +
              ") > a"
          )
            .should("exist")
            .and("have.attr", "href")
            .and("include", "/contact");
        });
      }
    });
  });

  it("TID004 - verify hover effect on contact us, should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let titleVal = $section
        .text()
        .replace("\t")
        .replace("\n")
        .toString()
        .trim();
      if (titleVal.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let rowIndex2 = $footerElement.length - 3;
          // --------------- check for footer element - contact us hover effect, should display cursor as pointer ------------>
          cy.get(
            "div.footer-container > ul:nth-Child(" +
              rowIndex +
              ") > li:nth-Child(" +
              rowIndex2 +
              ") > p"
          ).should("have.css", "cursor", "pointer");
        });
      }
    });
  });

  it("TID005 - verify about us footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let titleVal = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (titleVal.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let rowIndex2 = $footerElement.length - 2;

          cy.get(
            "div.footer-container > ul:nth-Child(" +
              rowIndex +
              ") > li:nth-Child(" +
              rowIndex2 +
              ") > a"
          )
            .should("exist")
            .and("have.attr", "href")
            .and("include", "/about");
        });
      }
    });
  });

  it("TID006 - verify hover effect on about us, should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let titleVal = $section
        .text()
        .replace("\t")
        .replace("\n")
        .toString()
        .trim();
      if (titleVal.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let rowIndex2 = $footerElement.length - 2;

          // ------------------- check for footer element - about us hover effect, should display cursor as pointer -------------->
          cy.get(
            "div.footer-container > ul:nth-Child(" +
              rowIndex +
              ") > li:nth-Child(" +
              rowIndex2 +
              ") > p"
          ).should("have.css", "cursor", "pointer");
        });
      }
    });
  });

  it("TID007 - verify careers footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionHeading = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionHeading.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let rowIndex2 = $footerElement.length - 1;

          cy.get(
            "div.footer-container > ul:nth-Child(" +
              rowIndex +
              ") > li:nth-Child(" +
              rowIndex2 +
              ") > a"
          )
            .should("exist")
            .and("have.attr", "href")
            .and("include", "/careers");
        });
      }
    });
  });

  it("TID008 - verify hover effect on careers, should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitleVal = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitleVal.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let rowIndex2 = $footerElement.length - 1;

          // ----------- check for footer element - careers hover effect should display cursor as pointer ------------------>
          cy.get(
            "div.footer-container > ul:nth-Child(" +
              rowIndex +
              ") > li:nth-Child(" +
              rowIndex2 +
              ") > p"
          ).should("have.css", "cursor", "pointer");
        });
      }
    });
  });

  it("TID009 - verify giftcard footer elements", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitleVal = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitleVal.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let rowIndex2 = $footerElement.length;

          cy.get(
            "div.footer-container > ul:nth-child(" +
              rowIndex +
              ") > li:nth-Child(" +
              rowIndex2 +
              ") > a"
          )
            .should("exist")
            .and("have.attr", "href")
            .and("include", "/giftcard");
        });
      }
    });
  });

  it("TID010 - verify hover effect on giftcard should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitleVal = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitleVal.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;

        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let rowIndex2 = $footerElement.length;

          //------------- check for footer element - gift card hover effect should display cursor as pointer ---------------->
          cy.get(
            "div.footer-container > ul:nth-Child(" +
              rowIndex +
              ") > li:nth-Child(" +
              rowIndex2 +
              ") > p"
          ).should("have.css", "cursor", "pointer");
        });
      }
    });
  });

  it("TID011 - verify click on contact us link", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitleVal = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitleVal.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_about_section_about_us
            )
          ) {
            let rowIndex2 = $footerElement.length - 3;
            // ---------- check for footer element - contact us link should not set attribute target as blank ----------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a "
            ).should("not.have.attr", "target", "_blank");

            // ---------- check for footer element - contact us link should be clickable ----------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a "
            ).click();
          }
        });
      }
    });
  });

  it("TID012 - verify click on about us link", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElemenTitle = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElemenTitle.includes(
              user.footer_data.label_about_section_about_us
            )
          ) {
            let rowIndex2 = $footerElement.length - 2;

            //---------- check for footer element - about us should not set attribute target as blank ----------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("not.have.attr", "target", "_blank");

            //---------- check for footer element - about us link should be clickable ----------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });

  it("TID013 - verify click on careers link", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\t")
            .replace("\n")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_about_section_careers
            )
          ) {
            let rowIndex2 = $footerElement.length - 1;

            //---------------- check for footer element - careers  should not set attribute target as blank ----------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("not.have.attr", "target", "_blank");

            // ------------- check for footer element - careers link should be clickable -------------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });

  it("TID014 - verify click on gift cards link", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_about)) {
        let rowIndex = $section.length - 2;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_about_section_gift_cards
            )
          ) {
            let rowIndex2 = $footerElement.length;
            // ------------------ check for footer element - gift cards should not set attribute target as blank ---------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("not.have.attr", "target", "_blank");

            // ---------------------- check for footer element - gift cards should be clickable --------------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });

  it("TID015 - verify count of links under help section", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;

        // ---------------- check footer to have lenght of 4 elements ----------------->
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li > p"
        ).should("have.length", 4);
      }
    });
  });

  it("TID016 - verify links title under help, should contain payment, shipping, cancellation & returns, faqs", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElements) => {
          let footerElementsText = $footerElements
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();

          // ----------- check footer have payment, shipping, cancellation & return, faqs elements --------------->
          if (
            footerElementsText.includes(
              user.footer_data.label_help_section_payments
            ) &&
            footerElementsText.includes(
              user.footer_data.label_help_section_shipping
            ) &&
            footerElementsText.includes(
              user.footer_data.label_help_section_cancellation_and_return
            ) &&
            footerElementsText.includes(
              user.footer_data.label_help_section_faqs
            )
          ) {
            expect(true).to.be.true;
          }
        });
      }
    });
  });

  it("TID017 - verify  payment footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_help_section_payments
            )
          ) {
            let rowIndex2 = $footerElement.length - 3;
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            )
              .should("exist")
              .and("have.attr", "href")
              .and("include", "/payment");
          }
        });
      }
    });
  });

  it("TID018 - verify hover effect on payment element should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_help_section_payments
            )
          ) {
            let rowIndex2 = $footerElement.length - 3;
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > p"
            ).should("have.css", "cursor", "pointer");
          }
        });
      }
    });
  });

  it("TID019 - verify shipping footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\t")
            .replace("\n")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_help_section_shipping
            )
          ) {
            let rowIndex2 = $footerElement.length - 2;
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            )
              .should("exist")
              .and("have.attr", "href")
              .and("include", "/shipping");
          }
        });
      }
    });
  });

  it("TID020 - verify hover effect on shipping element should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_help_section_shipping
            )
          ) {
            let rowIndex2 = $footerElement.length - 2;

            // ------------ check for footer element - shipping hover effect should display cursor as pointer ---------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > p"
            ).should("have.css", "cursor", "pointer");
          }
        });
      }
    });
  });

  it("TID021 - verify cancellation & returns element footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementTitle = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementTitle.includes(
              user.footer_data.label_help_section_cancellation_and_return
            )
          ) {
            let rowIndex2 = $footerElement.length - 1;
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            )
              .should("exisit")
              .and("have.attr", "href")
              .and("include", "/cancellation");
          }
        });
      }
    });
  });

  it("TID022 - verify hover effect on cancellation & return element should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_help_section_cancellation_and_return
            )
          ) {
            let rowIndex2 = $footerElement.length - 1;
            // --------------------- check for footer element - cancellation and return hover effect should display cursor as pointer -------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > p"
            ).should("have.css", "cursor", "pointer");
          }
        });
      }
    });
  });

  it("TID023 - verify faqs footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(user.footer_data.label_help_section_faqs)
          ) {
            let rowIndex2 = $footerElement.length;
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            )
              .should("exist")
              .and("have.attr", "href")
              .and("include", "/faqs");
          }
        });
      }
    });
  });

  it("TID024 - verify hover effect on faqs element should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(user.footer_data.label_help_section_faqs)
          ) {
            let rowIndex2 = $footerElement.length;
            //------------ check for footer element - faqs hover effect should display cursor as pointer --------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > p"
            ).should("have.css", "cursor", "pointer");
          }
        });
      }
    });
  });

  it("TID025 - verify click on payment link", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_help_section_payments
            )
          ) {
            let rowIndex2 = $footerElement.length - 3;

            // ------ check footer element - payment should not set attribute target as blank ----------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("not.have.attr", "target", "_blank");

            // ------ check footer element - payment link should be clickable ----------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });

  it("TID026 - verify click on shipping link", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_help_section_shipping
            )
          ) {
            let rowIndex2 = $footerElement.length - 2;

            // ----------- check for footer element - shipping should not have set attribute target to blank-->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("not.have.attr", "target", "_blank");

            // ----------- check for footer element - shipping should be clickable-->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });

  it("TID027 - verify click on cancellation & returns link", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\t")
        .replace("\n")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_help_section_cancellation_and_return
            )
          ) {
            let rowIndex2 = $footerElement.length - 1;

            // ------------ check for footer element - cancellation and return should not set attribute target as blank ----->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("not.have.attr", "target", "_blank");

            //------------- check for footer element - cancellation and return link should be clickabled ------------------>
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });

  it("TID028 - verify click on faqs link should redirect to faqs page", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_help)) {
        let rowIndex = $section.length - 1;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(user.footer_data.label_help_section_faqs)
          ) {
            let rowIndex2 = $footerElement.length;

            //----------- check for footer element - faq should not set attribute target as blank ------>
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("not.have.attr", "target", "_blank");

            //----------- check for footer element - faq should be clickable ------>
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });

  it("TID029 - verify count of links under social should contain 4 links", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;

        // ----------------- check for footer section - social should have 4 links ----------------->
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li > a"
        ).should("have.length", 4);
      }
    });
  });

  it("TID030 - verify links title under social, should contain linkedin, github, twitter, instagram", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\t")
            .replace("\n")
            .toString()
            .trim();

          // ---------- check for footer section - social should contain linkedin, github, twitter, instagram link ------>
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_github
            ) ||
            footerElementText.includes(
              user.footer_data.label_social_section_instagram
            ) ||
            footerElementText.includes(
              user.footer_data.label_social_section_linkedin
            ) ||
            footerElementText.includes(
              user.footer_data.label_social_section_twitter
            ) ||
            footerElementText.includes(
              user.footer_data.label_social_section_twitter
            )
          ) {
            expect(true).to.be.true;
          }
        });
      }
    });
  });

  it("TID031 - verify linkedin footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\t")
        .replace("\n")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_linkedin
            )
          ) {
            let rowIndex2 = $footerElement.length - 3;
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            )
              .should("exist")
              .and("have.attr", "href")
              .and("include", "/naman-saxena-5460b3188/");
          }
        });
      }
    });
  });

  it("TID032 - verify hover effect on linkedin link should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_linkedin
            )
          ) {
            let rowIndex2 = $footerElement.length - 3;
            // ----------------- check for footer element - linkedin should display cursor as pointer ---------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("have.css", "cursor", "pointer");
          }
        });
      }
    });
  });

  it("TID033 - verify  github footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\t")
            .replace("\n")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_github
            )
          ) {
            let rowIndex2 = $footerElement.length - 2;
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            )
              .should("exist")
              .and("have.attr", "href")
              .and("include", "/Naman-Saxena1");
          }
        });
      }
    });
  });

  it("TID034 - verify hover effect github link should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\t")
            .replace("\n")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_github
            )
          ) {
            let rowIndex2 = $footerElement.length - 2;

            // -------------- check for footer element - github link should display cursor as pointer ----------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("have.css", "cursor", "pointer");
          }
        });
      }
    });
  });

  it("TID035 - verify twitter  footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\t")
        .replace("\n")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_twitter
            )
          ) {
            let rowIndex2 = $footerElement.length - 1;

            //-------------- check for footer element -
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            )
              .should("exist")
              .and("have.attr", "href")
              .and("include", "/NamanSa83962307");
          }
        });
      }
    });
  });

  it("TID036 - verify hover effect on twitter footer link should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_twitter
            )
          ) {
            let rowIndex2 = $footerElement.length - 1;
            //-------------- check for footer element - twitter should display cursor as pointer --------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("have.css", "cursor", "pointer");
          }
        });
      }
    });
  });

  it("TID037 - verify instagram footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_instagram
            )
          ) {
            let rowIndex2 = $footerElement.length;
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            )
              .should("exist")
              .and("have.attr", "href")
              .and("include", "/naman_saxena98/");
          }
        });
      }
    });
  });

  it("TID038 - verify hover effect on instagram link should display cursor as pointer", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_instagram
            )
          ) {
            let rowIndex2 = $footerElement.length;

            //------------- check for footer element - instagram link should display cursor as pointer ------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("have.css", "cursor", "pointer");
          }
        });
      }
    });
  });

  it("TID039 - verify click on linkedin footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_linkedin
            )
          ) {
            let rowIndex2 = $footerElement.length - 3;

            //-----------check for footer element - linkedin should contain attribute target as blank and should contain valid linkedin link---->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("have.attr", "target", "_blank");

            //-----------check for footer element - linkedin should be clickable ------------------>
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });

  it("TID040 - verify click on github footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_github
            )
          ) {
            let rowIndex2 = $footerElement.length - 2;
            // ------------ check for footer element - github link should have attribute target as blank and should include valid github link ------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("have.attr", "target", "_blank");

            //--------------- check for footer element - github link should be clickable ---------------------->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });

  it("TID041 - verify click on twitter footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_twitter
            )
          ) {
            let rowIndex2 = $footerElement.length - 1;
            // ------------ check for footer element - twitter link should have attribute target as blank ---->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("have.attr", "target", "_blank");

            // ------------ check for footer element - twitter link should be clickable ---->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });

  it("TID042 - verify click on instagram footer element", () => {
    footer.get_footer_links_list().then(($section) => {
      let sectionTitle = $section
        .text()
        .replace("\n")
        .replace("\t")
        .toString()
        .trim();
      if (sectionTitle.includes(user.footer_data.label_social)) {
        let rowIndex = $section.length;
        cy.get(
          "div.footer-container > ul:nth-Child(" + rowIndex + ") > li"
        ).then(($footerElement) => {
          let footerElementText = $footerElement
            .text()
            .replace("\n")
            .replace("\t")
            .toString()
            .trim();
          if (
            footerElementText.includes(
              user.footer_data.label_social_section_instagram
            )
          ) {
            let rowIndex2 = $footerElement.length;
            // ------------ check for footer element - instagram link should have attribute target as blank ---->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).should("have.attr", "target", "_blank");

            // ------------ check for footer element - instagram link should be clickable ---->
            cy.get(
              "div.footer-container > ul:nth-Child(" +
                rowIndex +
                ") > li:nth-Child(" +
                rowIndex2 +
                ") > a"
            ).click();
          }
        });
      }
    });
  });
});
