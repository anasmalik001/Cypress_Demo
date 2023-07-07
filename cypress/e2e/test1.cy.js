/// <reference types = 'cypress' />

describe('My First Test Suits', () => {

    it('Handle Multiple Checkbox', () => {

        //Handle Checkbox

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.wait(2000)
        cy.get('input[type="checkbox"]').check(['option1', 'option2', 'option3'])

        //Handle Static Dropdown

        cy.get('select').select('option3').should('have.value', 'option3')

        //Handle Dynamic Dropdown

        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($e1) => {
            if ($e1.text() === "India") {
                $e1.trigger("click")
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        //Handle Element Visible or not

        cy.contains('Hide').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.contains('Show').click()
        cy.get('#displayed-text').should('be.visible')

        //Handle Checkboxes

        cy.get("[value='radio1']").check().should('be.checked').and('have.value', 'radio1')
    })

})