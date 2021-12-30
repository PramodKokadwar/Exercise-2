Feature: Main Auto Search functionality 
  As a main search functionality, I want to search car as per my choice.
  
  Scenario Outline: Car searches
    Given Car search 
    When the user select "<Brand>" and "<Model>" of car
    And  add another "<filter>" to optimize the result
    Then results for are shown
    
    Examples: 
      |  Brand    |   Model     |  Filter       |
      |   BMW     |     112     | Erstzulassung |      
      
 
  Scenario Outline: quick Car searches
    Given quick Car search 
    When the user select "<Brand>" and "<Model>" of car
    And  click on search button
    Then results are shown on screen
    
    Examples: 
      |  Brand    |   Model     |   
      |   BMW     |    114      |      
      
  