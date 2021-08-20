describe("Sign Out", () => {
  it("Sign In and Sign Out for user with role manager", function () {
    cy.visit("/");

    cy.signIn("schinzel.adam@gmail.com", "iGj5Rax1vcU8");
    cy.wait(5000);

    cy.location("pathname").should("eq", "/dashboard/all");
    cy.visualSnapshot("Page Is Loading");

    cy.getBySel("log-out").click({ force: true });
    cy.location("pathname").should("eq", "/sign-out");
    cy.visualSnapshot("Redirect to After Sign Out");
  });
});
