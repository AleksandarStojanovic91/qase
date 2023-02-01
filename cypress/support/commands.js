const LoginPage = require('../support/pages/loginPage').LoginPage;
const ProjectsPage = require('../support/pages/projectsPage').ProjectsPage;
const RepositoryPage = require('../support/pages/repositoryPage').RepositoryPage;
const createTestCasePage = require('../support/pages/createTestCasePage').createTestCasePage;
/**
 * @memberOf cy
 * @method login
 * @param email email
 * @param password password
 * @description use to login
 */
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://app.qase.io/login')
    cy.get(LoginPage.emailInput).type(email)
    cy.get(LoginPage.passwordInput).type(password)
    cy.get(LoginPage.loginButton).click()
})

/**
 * @memberOf cy
 * @method createProject
 * @param name Project name
 * @param code Project code
 * @param description Project description
 * @param projectAccess projectAccess
 * @param memberAccess memberAccess
 * @description use to create a project
 */
Cypress.Commands.add('createProject', (name, code, description, projectAccess, memberAccess) => {
    cy.get(ProjectsPage.createNewProjectBtn).click()
    cy.get(ProjectsPage.projectName).type(name)
    cy.get(ProjectsPage.projectCode).clear().type(code)
    cy.get(ProjectsPage.description).type(description)

    if (projectAccess !== 'private') {
        cy.get(ProjectsPage.projectAccessType.public).check()
    } else {
        if (memberAccess === 'all') {
            cy.get(ProjectsPage.memberAccess.all).check()
        } else if (memberAccess === 'group') {
            cy.get(ProjectsPage.memberAccess.group).check()
        } else {
            cy.get(ProjectsPage.memberAccess.none).check()
        }
    }
    cy.get(ProjectsPage.createBtn).click()
})

/**
 * @memberOf cy
 * @method createTestSuite
 * @param project Project code
 * @param name Suite name
 * @param parentSuite Parent Suite
 * @param description Suite description
 * @param preconditions preconditions
 * @description use to create a test suite
 */
Cypress.Commands.add('createTestSuite', (project, name, parentSuite, description, preconditions) => {
    cy.get(ProjectsPage.projects[project]).click()

    cy.get(RepositoryPage.createSuite).click()
    cy.get(RepositoryPage.suiteName).type(name)

    if (parentSuite !== 'Project root') {
        //TODO select an existing suite as parent suite
    }

    cy.get(RepositoryPage.description).eq(0).type(description)
    cy.get(RepositoryPage.preconditions).type(preconditions)

    cy.get(RepositoryPage.createBtn).click()
})

/**
 * @memberOf cy
 * @method openTestCaseForm
 * @param project Project name
 * @description use to create a test suite
 */
Cypress.Commands.add('openTestCaseForm', (project) => {
  cy.get(ProjectsPage.projects[project]).click()
  cy.get(RepositoryPage.createCaseBtn).click()
})

/**
 * @memberOf cy
 * @method createTestCaseBasic
 * @param title Case title
 * @param status Case status
 * @param description Case description
 * @param suite Preconditions
 * @param severity Severity
 * @param priority priority
 * @param type type
 * @param layer layer
 * @param isFlaky yes or no
 * @param behavior behavior
 * @param automationStatus automationStatus
 * @description use to create a test case
 */
Cypress.Commands.add('createTestCaseBasic', (
    title,
    status,
    description,
    suite,
    severity,
    priority,
    type,
    layer,
    isFlaky,
    behavior,
    automationStatus,
    ) => {
    cy.get(createTestCasePage.testCaseTitle).type(title)
    cy.get(createTestCasePage.statusDropdown)
      .click()
      .get(createTestCasePage.dropdownOption)
      .contains(status)
      .click();

    cy.get(createTestCasePage.description).type(description)
    cy.get(createTestCasePage.suiteDropdown)
      .click()
      .get(createTestCasePage.dropdownOption)
      .contains(suite)
      .click();

    cy.get(createTestCasePage.severityDropdown)
      .click()
      .get(createTestCasePage.dropdownOption)
      .contains(severity)
      .click();

    cy.get(createTestCasePage.priorityDropdown)
      .click()
      .get(createTestCasePage.dropdownOption)
      .contains(priority)
      .click();

    cy.get(createTestCasePage.typeDropdown)
      .click()
      .get(createTestCasePage.dropdownOption)
      .contains(type)
      .click();

    cy.get(createTestCasePage.layerDropdown)
      .click()
      .get(createTestCasePage.dropdownOption)
      .contains(layer)
      .click();

    cy.get(createTestCasePage.isFlakyDropdown)
      .click()
      .get(createTestCasePage.dropdownOption)
      .contains(isFlaky)
      .click();

    cy.get(createTestCasePage.behaviorDropdown)
      .click()
      .get(createTestCasePage.dropdownOption)
      .contains(behavior)
      .click();
    
    cy.get(createTestCasePage.automationStatusDropdown)
      .click()
      .get(createTestCasePage.dropdownOption)
      .contains(automationStatus)
      .click();
    // cy.get(createTestCasePage.automationStatusDropdown).click().get(createTestCasePage.dropdownOption).contains(automationStatus)
    // .then(option => {
    //     option.click();
    //   });

    //cy.get(createTestCasePage.saveBtn).click()
})

/**
 * @memberOf cy
 * @method createTestCaseConditions
 * @param preconditions Preconditions
 * @param postconditions Postconditions
 * @description use to enter preconditions/postcontidtions
 */
Cypress.Commands.add('createTestCaseConditions', (
    preconditions,
    postconditions
    ) => {
    cy.get(createTestCasePage.preconditions).type(preconditions)
    cy.get(createTestCasePage.postconditions).type(postconditions)
})

/**
 * @memberOf cy
 * @method createTestCaseSteps
 * @param stepAction step action
 * @param stepData Case title
 * @param expectedResult Case status
 * @description use to enter test steps 
 */
Cypress.Commands.add('createTestCaseSteps', (
    stepAction,
    stepData,
    expectedResult,
    stepNo
    ) => {
    cy.get(createTestCasePage.addStepBtn).click()
    cy.get(createTestCasePage.stepAction).eq(stepNo).type(stepAction)
    cy.get(createTestCasePage.stepData).eq(stepNo).type(stepData)
    cy.get(createTestCasePage.expectedResult).eq(stepNo).type(expectedResult)
})

/**
 * @memberOf cy
 * @method addSteps
 * @description use to loop through testSteps.json file
 */
Cypress.Commands.add('addSteps', () => {
  cy.fixture('testSteps.json')
        .then((testSteps) => {
          //used to iterate input boxes in the loop as elements are not unique
          let stepNo = testSteps.step1[0].startStepIndex 
          return {stepNo, testSteps}
        })
        .then
        (({stepNo, testSteps}) => {
          for (let step in testSteps){
            cy.createTestCaseSteps(
              testSteps[step][0].stepAction, 
              testSteps[step][0].stepData,
              testSteps[step][0].expectedResult,
              stepNo
            )
            stepNo = stepNo + 1
        }})
})
