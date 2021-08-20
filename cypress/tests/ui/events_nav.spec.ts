describe("Events navigation", () => {
  beforeEach(() => {
    cy.signIn("schinzel.adam@gmail.com", "iGj5Rax1vcU8");
    cy.wait(5000);
  });

  it("Events navigation is functional", function () {
    cy.visit("/events/from-measurement");

    cy.getBySel("button-from-measurement").click();
    cy.location("pathname").should("eq", "/events/from-measurement");
    cy.getBySel("button-from-measurement").should("have.css", "color", "rgb(3, 25, 70)");

    cy.getBySel("button-from-employees").click();
    cy.location("pathname").should("eq", "/events/from-employees");
    cy.getBySel("button-from-employees").should("have.css", "color", "rgb(3, 25, 70)");
  });
});
