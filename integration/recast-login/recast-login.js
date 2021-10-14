
Given('user navigate to the recast login page',()=>{
    cy.visit('https://app.recast.studio/auth/login/?next=/')
})
When('user entered the username and password and click on login button',()=>{
    cy.get('#login-form_email').type('kirandudhane49@gmail.com')
    cy.get('#login-form_password').type('Kiran123')
    cy.get('#login-form > div:nth-child(5) > div > div > div > button').click()
})
Then('user should navigate to reacast dashboard',()=>{
    cy.get
    ('#root > div > section > section > aside > div > ul > li.ant-menu-item.ant-menu-item-selected > span:nth-child(2)')
    .should('have.text','Dashboard')
}) 

    
Given('user navigate to the recast login page',()=>{
    cy.visit('https://app.recast.studio/auth/login/?next=/')
})
When('user entered the invalid  username and invalid password and click on login button',()=>{
    cy.get('#login-form_email').type('kirandudhane49@gmail.com')
    cy.get('#login-form_password').type('Kiran1234')
    cy.get('#login-form > div:nth-child(5) > div > div > div > button').click()
})
Then('user should not be logged in',()=>{
    cy.url().should('contain','login')
})