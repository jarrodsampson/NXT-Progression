describe("App spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/superstars");
    cy.window().scrollTo(0, 0);
  });

  it("should navigate to the correct Superstars route", () => {
    cy.url().should("eq", "http://localhost:3000/superstars");
  });

  it("should have top navigation section", () => {
    cy.get("nav").should("be.visible");
  });

  it("should have correct top navigation links", () => {
    const expectedLinks = ["Home", "Superstars", "Services", "About", "FAQs", "Contact"];
    expectedLinks.forEach((link) => {
      cy.get("nav").contains(link);
    });
  });

  it("should not have back to top button", () => {
    cy.get("[data-cy=back-to-top]").should("not.exist");
  });

  it("should have back to top button", () => {
    cy.wait(2000);
    cy.window().scrollTo(0, 400);
    cy.get("[data-cy=back-to-top]").should("be.visible");
  });

  it("should have loading spinner initially", () => {
    cy.get("[data-cy=loading-spinner]").should("be.visible");
  });

  it("should have div with superstars", () => {
    cy.get("[data-cy=superstar-div]").should("be.visible");
  });

  it("should have 24 superstars initially", () => {
    cy.get("[data-cy=superstar-div]").should("be.visible");
    cy.get("[data-cy=superstar-div] .infinite-scroll-component .flex").should("have.length", 25);
    cy.get("[data-cy=loading-spinner]").should("not.exist");
  });

  it("should have agent select dropdown", () => {
    cy.get("[data-cy=agent-selection]").should("exist");
    cy.get("[data-cy=agent-selection]").should("be.visible");
  });

  it("should contain all agent options from the dropdown", () => {
    cy.get("[data-cy=agent-selection]").click();
    cy.get("[data-cy=dropdown-option-Raw]").click();
    cy.get("[data-cy=selected-agent]").should("have.text", "Raw");
  });

  it("should select an agent from the dropdown", () => {
    cy.get("[data-cy=agent-selection]").click();
    const correctOptions = ["NXT", "Raw", "Smackdown", "Free"];
    correctOptions.forEach((option) => {
      cy.log(option);
      cy.get(`[data-cy=dropdown-option-${option}]`).should("exist").and("be.visible");
    });
  });

  it("should have agent search autocomplete", () => {
    cy.get("[data-cy=search-autocomplete]").should("exist");
    cy.get("[data-cy=search-autocomplete]").should("be.visible");
  });

  it("should not contain options from the autocomplete dropdown", () => {
    cy.get("[data-cy=search-autocomplete-input]").should("exist").and("be.visible");
    cy.get("[data-cy=search-autocomplete-input]").type("a");
    cy.get("[data-cy=search-autocomplete-suggestions]").should("not.exist");
  });

  it("should contain options from the autocomplete dropdown", () => {
    cy.get("[data-cy=search-autocomplete-input]").should("exist").and("be.visible");
    cy.get("[data-cy=search-autocomplete-input]").type("le");
    cy.get("[data-cy=search-autocomplete-suggestions]").should("exist").and("be.visible");
  });

  it("should redirect you from the autocomplete dropdown", () => {
    cy.get("[data-cy=search-autocomplete-input]").should("exist").and("be.visible");
    cy.get("[data-cy=search-autocomplete-input]").type("Ax");
    cy.wait(2000);
    const testOption = "Axiom";
    cy.get(`[data-cy=search-autocomplete-option-${testOption}]`).click();
    cy.url().should("eq", "http://localhost:3000/superstars/657a721d346d9a6a451ac3da");
  });

  it("should have footer section", () => {
    cy.get("footer").should("be.visible");
    cy.get("h3").contains("Quick Links");
  });

  it("should have correct footer navigation links", () => {
    const expectedLinks = ["Privacy Policy", "Terms and Conditions", "Services", "Contact"];
    expectedLinks.forEach((link) => {
      cy.get("footer .list-none").contains(link);
    });
  });
});
