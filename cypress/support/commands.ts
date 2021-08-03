// @ts-check
///<reference path="../global.d.ts" />

// Import Cypress Percy plugin command (https://docs.percy.io/docs/cypress)
import "@percy/cypress";

Cypress.Commands.add("visualSnapshot", (maybeName) => {
  // @ts-ignore
  let snapshotTitle = cy.state("runnable").fullTitle();
  if (maybeName) {
    snapshotTitle = snapshotTitle + " - " + maybeName;
  }
  cy.percySnapshot(snapshotTitle, {
    // @ts-ignore
    widths: [cy.state("viewportWidth")],
    // @ts-ignore
    minHeight: cy.state("viewportHeight"),
  });
});

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});

Cypress.Commands.add("getBySelLike", (selector, ...args) => {
  return cy.get(`[data-cy*=${selector}]`, ...args);
});

Cypress.Commands.add("signIn", (email, password) => {
  cy.visit("/");
  cy.getBySel("email").type(email);
  cy.getBySel("password").type(password);
  cy.getBySel("submit").click();
});

Cypress.Commands.add("signUp", (firstName, lastName, email, password) => {
  cy.visit("/register");
  cy.getBySel("first-name").type(firstName);
  cy.getBySel("last-name").type(lastName);
  cy.getBySel("email").type(email);
  cy.getBySel("password").type(password);
  cy.getBySel("checkbox").check();
  cy.getBySel("submit").click();
});
