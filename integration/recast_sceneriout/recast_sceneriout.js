import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given ('nevigate to recast page',()=>{
    cy.visit('https://app.recast.studio/auth/login/?next=/')
})
When ('user logged in using {word}',(username)=>{
    cy.get('#login-form_email').type(username)
})
And ('Passward as {word}',(Passward)=>{
    cy.get('#login-form_password').type(Passward)
})
And ('Click on login button',()=>{
    cy.get('#login-form > div:nth-child(5) > div > div > div > button').click()
})
Then ('Homepage page sholud be displayed',()=>{
    cy.get('#root > div > section > section > section > main > div > div:nth-child(1) > h4')
    .should('have.text','Create New Project')
})