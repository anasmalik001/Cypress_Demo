/// <reference types = 'cypress' />

describe('My Second Test Suits', () => {

    it('My First Test Case', () => {

        //Check Boxes

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get("[value='Confirm']").click()

        //Window Alert

        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Handle Child Tab

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')

        //Handle Mouse hower

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')


    })
})