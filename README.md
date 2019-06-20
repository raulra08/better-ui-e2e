# Writting Better UI E2E test

The contents of this repository is practical material to learn certain aspects that are good to consider
when crafting good E2E tests for web user interfaces. Although today I am focusing on UI E2E for a website,
many of the concepts can be used to convey other types of user interfaces. 

## Behaviour-Driven Development

Many people tend to think of BDD in terms of frameworks: Cucumber, Protractor, Cypress, Spock, etc or in terms
of the Gherkin template (that famous Given, When, Then).

BDD, like TDD, is a discipline, like playing guitar or dancing. To learn it, you must put it practice over and over again.

It involves communicating with your customers first, so we will focus on this aspect first and we will leave
any implementation details to the end.

There are many resources to understand what BDD is and is not, as a starter I want to leave you 
with this article by Dan North, [read on](https://www.stickyminds.com/better-software-magazine/behavior-modification).  

## Principles

## Constructive Conversation with Customers

### A developer's most important abilities:
1. Communication
2. Change software without breaking it.

### Deliver software that matters

## Examples & Scenarios

The best way to pin down exactly what the customer wants is to use examples.
* Examples help us understand the precise meaning of requirements.
* We can extract data from our customer examples to use in tests.

A scenario is an example of the system's behaviour from one or more user's perspectives.

### Exercises

1. Phrase this in "Given, When, Then" format:"Robinson Crusoe" and "Treasure Island" are both classics. 
    ```
    If I've got "Robinson Crusoe" in my basket and I go to checkout, 
    it should recommend "Treasure Island" to me too.
    ```
2. Rephrase this scenario so that it doesn't make any reference to GUI elements.
    ```
    Given I clicked the buy button for "Robinson Crusoe" at 12.95
    And I'm on the "checkout" page
    And postage is 3.00
    When I click "purchase"
    Then I should see the text "Than You, Your purchase is on its way!"
    And I should see the text "Total cost: 15.95". 
    ```
    Bonus: have a discussion on what could you do that might help you avoid this kind of language?
3. Change the outcomes (Then) so that they include the word "should".
    ```
    Given "Taxi Uno" is the only car available at 12:30pm 
    When Alice books a taxi for 12:30pm
    Then "Taxi Uno" gets an email that he's been booked for 12:30pm
    And Alice must get a confirmation email. 
    ```
    Bonus: Why might that be useful?


# Code

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

node -v
```
12.4.0
```

npm -v
```
6.9.0
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
