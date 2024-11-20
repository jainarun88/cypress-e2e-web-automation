

describe('OrangeHRM', () => {
    it('Verify Page Title - Positive', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
    })

    it('Verify Page Title - Negative', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM123')
    })
})