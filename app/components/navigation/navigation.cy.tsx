import React from "react";
import Navigation from "./navigation";

describe("<Navigation />", () => {
  beforeEach(() => {
    cy.mount(<Navigation />);
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
});
