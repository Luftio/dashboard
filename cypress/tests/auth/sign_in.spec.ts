describe("Sign in", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should redirect unauthenticated user to sign in page", function () {
    cy.visit("/suggestions");
    cy.location("pathname").should("equal", "/");

    cy.visualSnapshot("Redirect to Sign In");
  });

  it("User with role manager can sign in", () => {
    cy.signIn("schinzel.adam@gmail.com", "iGj5Rax1vcU8");
    cy.wait(5000);

    cy.location("pathname").should("eq", "/dashboard/all");
    cy.visualSnapshot("Page Is Loading");
  });

  it("User with role user can sign in", () => {
    cy.signIn("adam@luftio.cz", "j4X31POkpJ9r");
    cy.wait(5000);

    cy.location("pathname").should("eq", "/invite/download-app");
    cy.visualSnapshot("Page Is Loading");
  });

  it("Should display sign in errors", function () {
    cy.getBySel("email").type("martin.fresh{enter}");
    cy.getBySel("email-invalid")
      .should("be.visible")
      .and("contain", "Email is invalid")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display Email is Invalid Error");

    cy.getBySel("email").type("martin.fresh@company.com{enter}").clear();
    cy.getBySel("email-required")
      .should("be.visible")
      .and("contain", "This field is required")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display Email is Required Error");

    cy.getBySel("password").type("ezT]L582jXTGlig{enter}").clear();
    cy.getBySel("password-required")
      .should("be.visible")
      .and("contain", "This field is required")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display Password is Required Error");
  });

  it("User can reset password", () => {
    cy.getBySel("forgot-password").click();

    cy.location("pathname").should("eq", "/password/request-change");
    cy.getBySel("email").type("adam@luftio.cz");
    cy.getBySel("submit").click();

    cy.location("pathname").should("eq", "/password/send-instructions");
    cy.visualSnapshot("User Received Instructions");
  });

  it("Should display forgot password errors", function () {
    cy.visit("/password/request-change");

    cy.getBySel("email").type("martin{enter}");
    cy.getBySel("email-invalid")
      .should("be.visible")
      .and("contain", "Email is invalid")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display Email is Invalid Error");

    cy.getBySel("email").type("martin.fresh@company.com").clear();
    cy.getBySel("email-required")
      .should("be.visible")
      .and("contain", "This field is required")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display Email is Required Error");
  });

  it("Should error for an invalid user", function () {
    cy.signIn("susan.simpson@company", "m(;93PB~&6~@yi@");

    cy.getBySel("invalid-user").should("be.visible").and("contain", "Username or password is incorrect");
    cy.visualSnapshot("Username or Password is Invalid");
  });

  it("User can hide and show password", function () {
    cy.getBySel("password").invoke("attr", "type").should("eq", "password");
    cy.visualSnapshot("Password is Invisible");

    cy.getBySel("eye").click();

    cy.getBySel("password").invoke("attr", "type").should("eq", "text");
    cy.visualSnapshot("Password is Visible");
  });
});
