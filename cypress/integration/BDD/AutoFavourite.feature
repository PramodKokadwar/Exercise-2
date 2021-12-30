Feature: Auto Favourite cart functionality 
  I want to add my selected car in Favourite cart list
  
  Scenario : Favourite Car in a list
    Given User is on all car list screen 
    When  User click on heart icon on car image 
    And  User click on favorite button  
    Then  Selected car will be display on favourite car page