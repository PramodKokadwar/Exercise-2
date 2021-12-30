 Feature: Auto Payment functionality 
   Auto Payment car method, I want make payment proccess.
  
  Scenario Outline: Auto Payment functionality
    Given Car detail info screen 
    When  Click on Start request
    And   Choose your option payment screen <'cash purchase'>
    And   Click on continue button
    Then  Customer info page display
    When  User fill user information with following data
      |   phone number      | 491234565799     |
      |    First Name       | Pramod           |
      |     SurName         | Kokadwar         |
      |       Email         | pramodkokadwar   |
      | Trade in your car   |      Yes         |
    And Click pn check box and send button

    
    


    