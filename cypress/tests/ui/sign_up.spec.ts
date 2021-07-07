describe("Sign up", () => {
  beforeEach(() => {
    cy.visit("/register");
  });
  it("User can sign up", () => {
    cy.signUp("John", "Doe", "john.doe@company.com", "i4Fa#KP]GK9Bu7{");

    cy.location("pathname").should("eq", "/register/verify-email");
    cy.visualSnapshot("User is Going to Verify Email");
  });

  it("Should display sign up errors", function () {
    cy.getBySel("first-name").type("Martin{enter}").clear();
    cy.getBySel("first-name-required")
      .should("be.visible")
      .and("contain", "This field is required")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display First Name is Required Error");

    cy.getBySel("last-name").type("Fresh{enter}").clear();
    cy.getBySel("last-name-required")
      .should("be.visible")
      .and("contain", "This field is required")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display Last Name is Required Error");

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

    cy.getBySel("password").type("123456{enter}");
    cy.getBySel("password-invalid")
      .should("be.visible")
      .and("contain", "Password must be at least 12 characters long and contain a lowercase and an uppercase letter")
      .should("have.css", "color", "rgb(240, 70, 64)");
    cy.visualSnapshot("Display Password is Invalid Error");

    cy.getBySel("terms-required").should("be.visible");
    cy.visualSnapshot("Display Password is Required Error");
  });

  it("User can visit sign in page and go back", () => {
    cy.getBySel("sign-in").click();
    cy.location("pathname").should("eq", "/");
    cy.visualSnapshot("User is on Sign In Page");

    cy.getBySel("sign-up").click();
    cy.location("pathname").should("eq", "/register");
    cy.visualSnapshot("User is on Back on Sign Up Page");
  });

  it("User can hide and show password", function () {
    cy.getBySel("password").invoke("attr", "type").should("eq", "password");
    cy.visualSnapshot("Password is Invisible");

    cy.getBySel("eye").click();

    cy.getBySel("password").invoke("attr", "type").should("eq", "text");
    cy.visualSnapshot("Password is Visible");
  });
});
