import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
Given('open browser enter simpleform url', () => {
  cy.visit('https://v1.training-support.net/selenium/simple-form');
});
When('user enters firstname, lastname, email, contact', () => {
  cy.get('#firstName').type('John'); // Example first name
  cy.get('#lastName').type('Doe');    // Example last name
  cy.get('#email').type('john.doe@gmail.com'); // Example email
  cy.get('#number').type('7569335977'); // Example contact number
});
And('user clicks on submit', () => {
  cy.get('input[type="submit"]').click();
});
Then('successful alert should be displayed with a message', () => {
  cy.on('window:alert', (text) => {
    expect(text).to.contains('Thank you for your submission'); // Verifies alert message
  });
});