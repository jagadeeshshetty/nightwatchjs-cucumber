
@feature2
Feature: Google Search Two

    @scenario2_1
    Scenario: Searching Google Two One

        Given I open Google's search page
        Then the title is "Google"
        And the Google search form exists

    @scenario2_2
    Scenario: Searching Google Two Two

        Given I open Google's search page
        Then the title is "Invalid"
        And the Google search form exists

    @scenario2_3
    Scenario: Searching Google Two Three

        Given I open Google's search page
        Then the title is "Google"
        And the Google search form exists
