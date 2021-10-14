Feature: End to end recast validation

    Scenario Outline: Login test for recast
        Given nevigate to recast page
        When user logged in using <username>
        And Passward as <Passward>
        And Click on login button
        Then Homepage page sholud be displayed

        Examples:
            | username                 | Passward  |
            | kirandudhane49@gmail.com | Kiran123  |
            | jadhavkaran903@gmail.com | Jadhav123 |