describe("App spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should navigate to the correct Home route", () => {
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should have top navigation section", () => {
    cy.get("nav").should("be.visible");
  });

  it("should have correct top navigation links", () => {
    const expectedLinks = ["Home", "Superstars", "Services", "Contact"];

    expectedLinks.forEach((link) => {
      cy.get("nav").contains(link);
    });
  });

  it("should not have back to top button", () => {
    cy.get("[data-cy=back-to-top]").should("not.exist");
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
