describe("Sidebar", () => {
  beforeEach(() => {
    cy.signIn("demo.eit@luftio.cz", "DemoLuftioEIT2021");
    cy.wait(5000);
  });

  it("Sidebar links are functional", function () {
    cy.getBySel("pie-chart").click({ force: true });
    cy.location("pathname").should("eq", "/dashboard/all");
    cy.getBySel("pie-chart").should("have.css", "color", "rgb(3, 25, 70)");
    cy.visualSnapshot("User is on Dashboard page");

    cy.getBySel("bell").click({ force: true });
    cy.location("pathname").should("eq", "/events");
    cy.getBySel("bell").should("have.css", "color", "rgb(3, 25, 70)");
    cy.visualSnapshot("User is on Events From Measurement page");

    cy.getBySel("file").click({ force: true });
    cy.location("pathname").should("eq", "/suggestions");
    cy.getBySel("file").should("have.css", "color", "rgb(3, 25, 70)");
    cy.visualSnapshot("User is on Suggestions page");

    cy.getBySel("archive").click({ force: true });
    cy.location("pathname").should("eq", "/feedback");
    cy.getBySel("archive").should("have.css", "color", "rgb(3, 25, 70)");
    cy.visualSnapshot("User is on Feedback page");

    cy.getBySel("user").click({ force: true });
    cy.location("pathname").should("eq", "/profile");
    cy.getBySel("user").should("have.css", "color", "rgb(3, 25, 70)");
    cy.visualSnapshot("User is on Profile page");

    cy.getBySel("users").click({ force: true });
    cy.location("pathname").should("eq", "/manage-users");
    cy.getBySel("users").should("have.css", "color", "rgb(3, 25, 70)");
    cy.visualSnapshot("User is on Manage Users page");

    cy.getBySel("settings").click({ force: true });
    cy.location("pathname").should("eq", "/settings");
    cy.getBySel("settings").should("have.css", "color", "rgb(3, 25, 70)");
    cy.visualSnapshot("User is on Settings page");

    cy.getBySel("info").click({ force: true });
    cy.location("pathname").should("eq", "/support");
    cy.getBySel("info").should("have.css", "color", "rgb(3, 25, 70)");
    cy.visualSnapshot("User is on Support page");
  });
});
