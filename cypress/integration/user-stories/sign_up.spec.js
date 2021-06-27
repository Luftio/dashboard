describe("Sign up", () => {
  beforeEach(() => {
    cy.visit("/register");
  });
  it("User can sign up", () => {
    cy.get("[data-cy=first-name]").type("Honza");
    cy.get("[data-cy=last-name]").type("Novák");
    cy.get("[data-cy=e-mail]").type("honza.novak@gmail.com");
    cy.get("[data-cy=password]").type("i4Fa#KP]GK9Bu7{");
    cy.get("[data-cy=checkbox]").check();
    cy.get("[data-cy=submit]").click();

    cy.location("pathname").should("eq", "/register/verify-email");
  });

  it("User can visit sign in page and go back", () => {
    cy.get("[data-cy=sign-in").click();
    cy.location("pathname").should("eq", "/");

    cy.get("[data-cy=sign-up").click();
    cy.location("pathname").should("eq", "/register");
  });
});
