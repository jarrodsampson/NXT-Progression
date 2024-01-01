import React from "react";
import SuperstarList from "./superstarList";

describe("<SuperstarList />", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/superstars*", { fixture: "superstars.json" }).as("fetchSuperstars");
    cy.mount(<SuperstarList selectedOption="NXT" />);
    cy.wait("@fetchSuperstars");
  });

  it("should have div with superstars", () => {
    cy.get("[data-cy=superstar-div]").should("be.visible");
  });

  it("should have 24 superstars initially", () => {
    cy.get("[data-cy=superstar-div]").should("be.visible");
    cy.wait(1000);
    cy.get("[data-cy=superstar-div] .infinite-scroll-component .flex").should("have.length", 25);
    cy.get("[data-cy=loading-spinner]").should("not.exist");
  });
});
