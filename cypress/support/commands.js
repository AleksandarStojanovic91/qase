const LoginPage = require('../support/pages/loginPage').LoginPage;
const ProjectsPage = require('../support/pages/projectsPage').ProjectsPage;
const RepositoryPage = require('../support/pages/repositoryPage').RepositoryPage;
const CasePage = require('../support/pages/casePage').CasePage;

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
 * @param project Project name
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
 * @memberof cy
 * @method createTestCase
 * @param project project name
 * @param suite suite name
 * @param title case name
 * @param status case status
 * @param severity case severity
 * @param priority case priority
 * @param type case type
 * @param layer case layer
 * @param isFlaky case isFlaky
 * @param behavior case behavior
 * @param automationStatus case automationStatus
 * @param preconditions case preconditions
 * @param postconditions case preconditions
 * @param postconditions case postconditions
 * @param testCaseSteps case steps
 */
Cypress.Commands.add('createTestCase', (project,
                                        suite,
                                        title,
                                        status,
                                        description,
                                        severity,
                                        priority,
                                        type,
                                        layer,
                                        isFlaky,
                                        behavior,
                                        automationStatus,
                                        preconditions,
                                        postconditions,
                                        testCaseSteps) => {

    cy.get(ProjectsPage.projects[project]).click()
    cy.get(RepositoryPage.createCaseBtn).click()

    //test name
    cy.get(CasePage.title).type(title)
    //status
    cy.xpath(CasePage.status).click()
    cy.xpath(CasePage.dropdownItem.replace('$', status)).click()
    //description
    cy.xpath(CasePage.description).type(description)
    //suite
    cy.xpath(CasePage.suite).click()
    cy.xpath(CasePage.dropdownItem.replace('$', suite)).click()
    //severity
    cy.xpath(CasePage.severity).click()
    cy.xpath(CasePage.dropdownItem.replace('$', severity)).click()
    //priority
    cy.xpath(CasePage.priority).click()
    cy.xpath(CasePage.dropdownItem.replace('$', priority)).click()
    //type
    cy.xpath(CasePage.type).click()
    cy.xpath(CasePage.dropdownItem.replace('$', type)).click()
    //layer
    cy.xpath(CasePage.layer).click()
    cy.xpath(CasePage.dropdownItem.replace('$', layer)).click()
    //isFlaky
    cy.xpath(CasePage.isFlaky).click()
    cy.xpath(CasePage.dropdownItem.replace('$', isFlaky)).click()
    //behavior
    cy.xpath(CasePage.behavior).click()
    cy.xpath(CasePage.dropdownItem.replace('$', behavior)).click()
    //automation status
    cy.xpath(CasePage.automationStatus).click()
    cy.xpath(CasePage.dropdownItem.replace('$', automationStatus)).click()
    //preconditions
    cy.get(CasePage.preConditions).type(preconditions)
    //postconditions
    cy.get(CasePage.postConditions).type(postconditions)

    //test case steps
    for (let i = 0; i < testCaseSteps.length; i++) {
        cy.get(CasePage.testCaseStep.addStepBtn).click()
        let steps = JSON.parse(testCaseSteps[i]);
        cy.get(CasePage.testCaseStep.action).type(steps.stepAction)
        cy.get(CasePage.testCaseStep.data).type(steps.data)
        cy.get(CasePage.testCaseStep.expectedResult).type(steps.expectedResult)
    }

    //save test case
    cy.get(CasePage.saveCase).click()

    // Assert test case created under test suite
    cy.xpath(RepositoryPage.testSuite.replace('$', suite)).click()

    cy.xpath(RepositoryPage.testCaseInSuite
        .replace('$', title))
        .should('be.visible')

})