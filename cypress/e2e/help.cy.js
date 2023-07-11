/// <reference types = 'cypress' />
/// <reference types= 'cypress-iframe' />
import 'cypress-iframe'

describe('Handle cypress multiple iframe', () => {
    it('visit the nykaa and search one product', () => {
        cy.visit('https://www.nykaa.com/');
        cy.wait(2000);
        cy.get('[name="search-suggestions-nykaa"]').type('Facewash{enter}', { delay: 0 });
        cy.wait(2000);
        cy.get('#product-list-wrap').should('be.exist');
        cy.wait(2000);
        cy.get('#product-list-wrap a').eq(0).invoke('removeAttr', 'target').click();
        cy.wait(2000);
        cy.contains("Add to Bag").click();
        cy.wait(2000);
        cy.xpath("//button[@class='css-aesrxy']").click();
        cy.wait(4000);
        cy.get('.css-acpm4k').its('0.contentDocument.body').as('iframeBody');
        cy.get('@iframeBody').find('[data-test-id="footer"] button').should('be.visible');
    })
})