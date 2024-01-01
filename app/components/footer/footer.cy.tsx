import React from "react";
import Footer from "./footer";

describe("<Footer />", () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });

  it("renders footer", () => {
    cy.get("footer").should("be.visible");
    cy.get("h3").contains("Quick Links");
  });

  it("should have correct footer navigation links", () => {
    const expectedLinks = ["Home", "About", "Services", "Contact"];

    expectedLinks.forEach((link) => {
      cy.get("footer .list-none").contains(link);
    });
  });
});
