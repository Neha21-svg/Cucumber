# Cucumber
# Simple Form Application Test Automation
# Project Overview
This project demonstrates automated testing of the Simple Form Application available at Simple Form Application. The automation is built using the Cucumber Framework integrated with Selenium WebDriver to ensure the application's form functionalities work as expected.

# Features of the Simple Form Application
The Simple Form Application provides a basic form interface with the following fields:

First Name
Last Name
Email
Phone Number
Message
The form also includes a Submit button to process user inputs.


# Key Folders:
features/: Contains .feature files written in Gherkin syntax, defining test scenarios.
stepDefinitions/: Contains the Java classes implementing the steps defined in feature files.
runners/: Includes test runner classes to execute the test suite.
hooks/: Contains setup and teardown methods to initialize or clean up resources before and after test execution.
# Tools and Technologies Used
Cucumber Framework: For Behavior-Driven Development (BDD).
Java: Programming language for step definitions and framework setup.
Maven: Build automation tool for managing dependencies and project builds.
JUnit/TestNG: Test execution framework integrated with Cucumber.
Gherkin: Language for writing feature files.
