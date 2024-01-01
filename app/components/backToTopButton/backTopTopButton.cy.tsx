import React from "react";
import BackToTopButton from "./backToTopButton";

describe("<Footer />", () => {
  it("renders backToTopButton", () => {
    cy.mount(<BackToTopButton scrollThreshold={400} />);
  });
});
