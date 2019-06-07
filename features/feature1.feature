
@feature1
Feature: Google Search One

    @scenario1_1
    Scenario: Searching Google One One

        Given I open Google's search page
        Then the title is "Google"
        And the Google search form exists

    @scenario1_2
    Scenario: Searching Google One Two

        Given I open Google's search page
        Then the title is "Google"
        And the Google search form exists
