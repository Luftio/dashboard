describe("Sign Out", () => {
  it("Sign In and Sign Out for user with role manager", function () {
    cy.visit("/");

    cy.signIn("demo.eit@luftio.cz", "DemoLuftioEIT2021");
    cy.wait(5000);

    cy.location("pathname").should("eq", "/dashboard/all");
    cy.visualSnapshot("Page Is Loading");

    cy.getBySel("log-out").click({ force: true });
    cy.location("pathname").should("eq", "/sign-out");
    cy.visualSnapshot("Redirect to After Sign Out");
  });
});
