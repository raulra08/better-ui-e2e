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

1. Phrase this in “Given, When, Then” format:
 
 ```
“Robinson Crusoe” and” Treasure Island” are both classics. If I’ve got “Robinson Crusoe” in my basket and I go to the checkout, it should recommend “Treasure Island” to me too.
 ```
 
2. Rephrase this scenario so that it doesn’t make any reference to GUI elements. 
 
 ```
Given I clicked the buy button for “Robinson Crusoe” at £12.95
And I’m on the “checkout” page
And postage is £3.00
When I click “purchase”
Then I should see the text “Thank you! Your purchase is on its way!”
And I should see the text “Total cost: £15.95”.
 ```
 
 ```
 Discussion: What could you do that might help you avoid this kind of language?
  ```

3. Fix the context (Given) so that it appears in the past tense.
 
 ```
 Given Ann Ambitious books “Meeting with Pat Punctual” at 4:00pm for 1 hour
When she books “Getting haircut” at 3:45pm for 30 minutes
Then we should warn her that her appointments overlap.
 ```
 
4. Change the outcomes (Then) so that they include the word “should”. 
 
 ```
 Given “U1 SKC” is the only car available at 12:30pm
When Laura Londoner books a taxi for 12:30pm
Then “U1 SKC” gets an email that he’s been booked for 12:30pm
And Laura Londoner must get a confirmation email.
 ```
 
  ```
Discussion: Why might it be useful to include the word “should”?
 ```
 
5. Refactor the event (When) so that the context (Given) is in its own step.
 
 ```
When Petunia Picky tells that she didn’t like the “Early Grey Coffee” we sent her
Then we should skip it in her rotation.
 ```
 
6. Refactor the event (When) and create two scenarios.
 
 ``` 
Given customers who bought Imogen Heap’s “Sparks” also bought “Speak for Yourself” and “Ellipse”
When Emma Excited buys “Sparks” or “Ellipse”
Then she should be recommended “Speak for Yourself” too.
 ```
 
 ```
Discussion: why wouldn’t you automate both, if the information you have below is all you’ve got?
 ```


# Dog Sitter App

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

# Links & Resources

## Webs/Articles

Dan North, Behavior Modification. The evolution of behavior-driven development,
[link](https://www.stickyminds.com/better-software-magazine/behavior-modification).

Stickyminds, 2006

---

Dan North & Liz Keogh, Interview with Dan North on Behavior-Driven Development,
[link](https://youtu.be/qWsnmx45734)

YouTube, 2012

---

Liz Keogh, Re: Is it possible to use DDD and BDD together?,
[link](https://stackoverflow.com/a/7152118)

StackOverflow, 2011

---

Liz Keogh, What contexts should we include in a scenario?,
[link](https://stackoverflow.com/a/56002442)

StackOverflow, 2019

---

Dan North, BDD and DDD,
[link](https://www.infoq.com/presentations/bdd-and-ddd/)

QCon, 2009

---

## Books

Jason Gorman, TDD, 
[link](http://codemanship.co.uk/tdd_jasongorman_codemanship.pdf)

Codemanship Ltd, 2016

---
Liz Keogh, Behaviour-Driven Development, Using examples in conversations to illustrate behaviour,
[link](https://leanpub.com/bdd)

Leanpub, 2016

--- 


