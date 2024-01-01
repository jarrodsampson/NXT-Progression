import React from "react";
import Autocomplete from "./autocomplete";
import * as NavigationRouter from "next/navigation";

describe("<Autocomplete />", () => {
  beforeEach(() => {
    cy.stub(NavigationRouter, "useRouter").returns({
      push: cy.stub().as("push"),
    });
  });

  it("renders Autocomplete", () => {
    cy.mount(<Autocomplete threshold={2} maxSuggestions={5} />);
  });
});
