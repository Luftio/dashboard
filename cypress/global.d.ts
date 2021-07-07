/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    visualSnapshot(maybeName?): Chainable<any>;

    getBySel(dataCyAttribute: string, args?: any): Chainable<Element>;
    getBySelLike(dataTestPrefixAttribute: string, args?: any): Chainable<Element>;

    signIn(email: string, password: string): void;

    signUp(firstName: string, lastName: string, email: string, password: string): void;
  }
}
