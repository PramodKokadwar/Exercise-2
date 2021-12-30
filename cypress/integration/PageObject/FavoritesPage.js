class FavoritesPage 
{

    favoritesScreen()
    {
        cy.visit(Cypress.env('url')+"/autos/")
    }

    CarAddedInFavorite()
    {
   
        cy.get('.Favourites__ContentSection-sc-1b5ji9z-0 fxYIPB').should('have.value', 'Deine Favoriten (2)')
    }

}

export default Favorites