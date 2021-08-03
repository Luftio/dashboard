describe("Sign Out", () => {
  it("Sign In and Sign Out", function () {
    cy.visit("/");

    cy.signIn("adam@luftio.cz", "LuftioVyhrajeSaP2021");
    cy.wait(5000);

    cy.location("pathname").should("eq", "/dashboard/all");
    cy.visualSnapshot("Page Is Loading");

    cy.getBySel("log-out").click({ force: true });
    cy.location("pathname").should("eq", "/sign-out");
    cy.visualSnapshot("Redirect to After Sign Out");
  });
});
