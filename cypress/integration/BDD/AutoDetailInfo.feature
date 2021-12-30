Feature: Auto Detail Info functionality 
  As a detail info of car functionality, I want to see car details.
  
  Scenario Outline: Car details searches
    Given Car detail info screen 
    When  When user see all car info
    And   Click on calculate financing button
    Then  Calculate EMI screen is display
    When user enter <'DownPayment'> and <'Duration'>
    Then Monthy EMI rate will be display on screen
    
    Examples: 
      |  DownPayment    |   Duration  |  
      |    8000         |     60      |     
      |                 |             |    
 