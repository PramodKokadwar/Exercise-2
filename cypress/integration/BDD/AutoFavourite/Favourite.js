import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

import FavoritesPage from '../../../../cypress/integration/PageObject/FavoritesPage'
import Searchpage from '../../../../cypress/integration/PageObject/Searchpage'


const favoritesPage = new FavoritesPage()
const searchpage = new Searchpage()

Given('User is on all car list screen', ()=>
{
    searchpage.favoritesScreen()
})

When('User click on heart icon on car image', ()=>{
    searchpage.firstCarFavorites()
    searchpage.secondCarFavorites()

})

And('User click on favorite button', ()=>{

    searchpage.FavoriteButton()
})

Then('Selected car will be display on favourite car page', ()=>{

    favoritesPage.CarAddedInFavorite()
})