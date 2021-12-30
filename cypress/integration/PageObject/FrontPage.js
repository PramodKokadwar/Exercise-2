class FrontPage {

    visit()
    {
        cy.visit(Cypress.env('url'))
    }

    
    allAutos()
    {
        cy.contains('Alle Autos').click()
    }

    brand(value)
    {
        cy.get('//input[@placeholder="Marke"]').click()
        cy.get('.sc-hAnkBK kLHPfF').contains(value)
        
    }

    modal(value)
    {
        cy.get('//input[@placeholder="Modell"]').click()
        cy.get('.sc-hAnkBK hHjUrV').contains(value)
 
    }   

    hitbutton()
        {
          cy.get('//a[@data-testid="landing-search-butto"]').click()
        }
}

export default FrontPage;