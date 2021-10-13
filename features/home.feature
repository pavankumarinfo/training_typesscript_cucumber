Feature: The Internet website homepage

    Scenario Outline: As a user, I opend internet website

        Given I a user i have opened the website <homepageurl>
        Then I should be able to view header text <headermessage>

        Examples:
            | homepageurl                        | headermessage           |
            | https://the-internet.herokuapp.com | Welcome to the-internet |
