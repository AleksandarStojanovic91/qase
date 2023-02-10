const LoginPage = require('../support/pages/loginPage').LoginPage
const ProjectPage = require('../support/pages/projectPage').ProjectPage
const RepositoryPage = require('../support/pages/repositoryPage').RepositoryPage
const CasePage = require('../support/pages/casePage').CasePage

/**
 * @memberof cy
 * @method login
 * @param email email
 * @param password password
 * @description use to login
 * 
 */
Cypress.Commands.add('login', (email, password) => { 
    cy.visit('https://app.qase.io/login')
    cy.get(LoginPage.emailInput).type(email)
    cy.get(LoginPage.passwordInput).type(password)
    cy.get(LoginPage.loginButton).click()
})

/**
 * @memberof cy
 * @method createProject
 * @param name project name
 * @param code project code
 * @param description project description
 * @param projectAccess project access
 * @param memberAcccess member access
 * @description create project
 * 
 */
Cypress.Commands.add('createProject', (name, code, description, projectAccess, memberAccess) => { 
    cy.get(ProjectPage.createNewProjectBtn).click()
    cy.get(ProjectPage.projectName).type(name)
    cy.get(ProjectPage.projectCode).clear().type(code)
    cy.get(ProjectPage.descriptionArea).type(description)

    if (projectAccess !== 'private') {
        cy.get(ProjectPage.projectAcessType.public).check()
    } else {
        if (memberAccess === 'all') {
            cy.get(ProjectPage.memberAccess.all).check()
        } else if (memberAccess === 'group') {
            cy.get(ProjectPage.memberAccess.group).check()
        } else {
            cy.get(ProjectPage.memberAccess.none).check()
        }
    }

    cy.get(ProjectPage.createBtn).click()
})

/**
 * @memberof cy
 * @method createTestSuite
 * @param project project name
 * @param name suite name
 * @param parentSuite parent suite
 * @param description suite description
 * @param projectAccess preconditions
 * @description create test suite
 * 
 */
Cypress.Commands.add('createTestSuite', (project, name, parentSuite, description, preconditions) => { 
    cy.get(ProjectPage.projects[project]).click()

    cy.get(RepositoryPage.createSuiteBtn).click()
    cy.get(RepositoryPage.suiteName).type(name)

    if (parentSuite !== 'Project root') {
        //TODO 
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

    cy.get(ProjectPage.projects[project]).click()
    cy.get(RepositoryPage.createCaseBtn).click()

    //test name
    cy.get(CasePage.title).type(title)
    //status
    cy.xpath(CasePage.status).click()
    cy.xpath(CasePage.dropdownitem.replace('$', status)).click()
    //description
    cy.xpath(CasePage.description).type(description)
    //suite
    cy.xpath(CasePage.suite).click()
    cy.xpath(CasePage.dropdownitem.replace('$', suite)).click()
    //severity
    cy.xpath(CasePage.severity).click()
    cy.xpath(CasePage.dropdownitem.replace('$', severity)).click()
    //priority
    cy.xpath(CasePage.priority).click()
    cy.xpath(CasePage.dropdownitem.replace('$', priority)).click()
    //type
    cy.xpath(CasePage.type).click()
    cy.xpath(CasePage.dropdownitem.replace('$', type)).click()
    //layer
    cy.xpath(CasePage.layer).click()
    cy.xpath(CasePage.dropdownitem.replace('$', layer)).click()
    //isFlaky
    cy.xpath(CasePage.isFlaky).click()
    cy.xpath(CasePage.dropdownitem.replace('$', isFlaky)).click()
    //behavior
    cy.xpath(CasePage.behavior).click()
    cy.xpath(CasePage.dropdownitem.replace('$', behavior)).click()
    //automation status
    cy.xpath(CasePage.automationStatus).click()
    cy.xpath(CasePage.dropdownitem.replace('$', automationStatus)).click()
    //preconditions
    cy.get(CasePage.preconditions).type(preconditions)
    //postconditions
    cy.get(CasePage.postconditions).type(postconditions)

    //test case steps
    for (var i=0; i < testCaseSteps.length; i++) {
        cy.get(CasePage.testCaseStep.addStepBtn).click()
        var steps = JSON.parse(testCaseSteps[i]);
        cy.get(CasePage.testCaseStep.action).type(steps.stepAction)
        cy.get(CasePage.testCaseStep.data).type(steps.data)
        cy.get(CasePage.testCaseStep.expectedResult).type(steps.expectedResult)
    }
    
    //save test case
    cy.get(CasePage.savecase).click()


    // Assert test case created under test suite
    cy.xpath(RepositoryPage.testSuite.replace('$', suite)).click()

    cy.xpath(RepositoryPage.testCaseInSuite
        .replace('$', title))
        .should('be.visible')

})

