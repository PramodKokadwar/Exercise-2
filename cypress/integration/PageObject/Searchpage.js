class Searchpage
{

    firstCarFavorites()
    {
        cy.get('.sc-htpNat hncGjR').eq(0).click()
    }

    secondCarFavorites()
    {
        cy.get('.sc-htpNat hncGjR').eq(1).click()
    }


    verifyresult()
    {
        cy.get('.sc-gGCbJM cmouYX styled-counter').contains("Audi A1")
    }

    FavoriteButton()
    {
        cy.get('.sc-cjHlYL gZHuqi').first().click()
    }

}

export default Searchpage