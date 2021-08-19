describe("Set New Password", () => {
  beforeEach(() => {
    cy.visit("password/reset/token");
  });

  it("User can set new password", function () {
    cy.getBySel("new-password").type("Wa90NIA-!oUB9TZ");
    cy.getBySel("repeat-new-password").type("Wa90NIA-!oUB9TZ");
    cy.getBySel("submit").click();
    cy.visualSnapshot("User created new password");

    cy.location("pathname").should("eq", "/");
  });

  it("Should display forgot set new password errors", function () {
    cy.getBySel("new-password").type("ij,4^@SzKO3H(p]{enter}").clear();
    cy.getBySel("new-password-required")
      .should("be.visible")
      .and("contain", "This field is required")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display New Password is Required Error");

    cy.getBySel("new-password").type("123456{enter}");
    cy.getBySel("new-password-invalid")
      .should("be.visible")
      .and("contain", "Password must be at least 12 characters long and contain a lowercase and an uppercase letter")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display New Password is Invalid Error");

    cy.getBySel("repeat-new-password").type("ij,4^@SzKO3H(p]{enter}").clear();
    cy.getBySel("repeat-new-password-required")
      .should("be.visible")
      .and("contain", "This field is required")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display Repeat New Password is Required Error");
  });

  it("Passwords don't match", function () {
    cy.getBySel("new-password").type("Wa90NIA-!oUB9TZ");
    cy.getBySel("repeat-new-password").type(",Aa9mW(T7TB;V2e");
    cy.getBySel("submit").click();
    cy.visualSnapshot("User Tried to create new password");

    cy.getBySel("password-not-match")
      .should("be.visible")
      .and("contain", "The passwords do not match")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("The Passwords do Not Match");
  });

  it("User can hide and show new password", function () {
    cy.getBySel("new-password").invoke("attr", "type").should("eq", "password");
    cy.visualSnapshot("The Passwords do Not Match");

    cy.getBySel("eye-1").click();

    cy.getBySel("new-password").invoke("attr", "type").should("eq", "text");
    cy.visualSnapshot("The Passwords do Not Match");
  });

  it("User can hide and show repeat password", function () {
    cy.getBySel("repeat-new-password").invoke("attr", "type").should("eq", "password");
    cy.visualSnapshot("Password is Invisible");

    cy.getBySel("eye-2").click();

    cy.getBySel("repeat-new-password").invoke("attr", "type").should("eq", "text");
    cy.visualSnapshot("Password is Visible");
  });
});
