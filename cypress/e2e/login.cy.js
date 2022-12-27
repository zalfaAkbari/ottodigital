import { elementLogin } from "../element/login"

let url = 'https://github.com/'
let username = Cypress.env('username')
let password = Cypress.env('password')

describe('Successfully Sign In', () => {
  it('Sign In with valid Username and Password', () => {
    cy.visit(url).wait(2000)
    cy.get(elementLogin.btnToggle).click()
    cy.get(elementLogin.btnPageSignIn).click().wait(1000)
    cy.get(elementLogin.inputUsername).type(username)
    cy.get(elementLogin.inputPassword).type(password)
    cy.get(elementLogin.btnSignIn).click().wait(2000)
    cy.get(elementLogin.dropDownProfile).click().wait(2000)
    cy.get(elementLogin.btnSignOut).click().wait(3000)
    cy.contains('Sign up')
  })
})