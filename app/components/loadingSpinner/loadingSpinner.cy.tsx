import React from "react";
import LoadingSpinner from "./loadingSpinner";

describe("<LoadingSpinner />", () => {
  it("renders LoadingSpinner", () => {
    cy.mount(<LoadingSpinner isLoading={true} />);
    cy.get("[data-cy=loading-spinner]").should("be.visible");
  });

  it("should not render LoadingSpinner", () => {
    cy.mount(<LoadingSpinner isLoading={false} />);
    cy.get("[data-cy=loading-spinner]").should("not.exist");
  });
});
