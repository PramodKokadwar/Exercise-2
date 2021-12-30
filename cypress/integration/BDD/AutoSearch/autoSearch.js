import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
 

import FrontPage from '../../../../cypress/integration/PageObject/FrontPage'
import Searchpage from '../../../../cypress/integration/PageObject/Searchpage'

const frontPage = new FrontPage()
const searchpage = new Searchpage()

Given('quick Car search', ()=>
{
    frontPage.visit()
})

When('the user select {String} and {String} of car', (brand, modal)=>
{
    frontPage.brand(brand)

    frontPage.modal(modal)

})

And('click on search button', ()=>{

    frontPage.hitbutton()

})

Then('results are shown on screen', ()=>{

    searchpage.verifyresult()

})