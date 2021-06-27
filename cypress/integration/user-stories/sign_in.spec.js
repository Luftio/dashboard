describe("Sign in", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User can sign in", () => {
    cy.get("[data-cy=email]").type("adam@luftio.cz");
    cy.get("[data-cy=password]").type("LuftioVyhrajeSaP2021");
    cy.get("[data-cy=submit]").click();
    cy.wait(5000);

    cy.location("pathname").should("eq", "/dashboard/all");
  });

  it("User can reset his password", () => {
    cy.get("[data-cy=forgot-password").click();

    cy.location("pathname").should("eq", "/password/request-change");
    cy.get("[data-cy=email]").type("adam@luftio.cz");
    cy.get("[data-cy=submit]").click();

    cy.location("pathname").should("eq", "/password/send-instructions");
  });

  it("User can visit sign up page and go back", () => {
    cy.get("[data-cy=sign-up").click();
    cy.location("pathname").should("eq", "/register");

    cy.get("[data-cy=sign-in").click();
    cy.location("pathname").should("eq", "/");
  });
});
