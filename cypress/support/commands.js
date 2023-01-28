const LoginPage = require('../support/pages/loginPage').LoginPage;
const ProjectsPage = require('../support/pages/projectsPage').ProjectsPage;
const RepositoryPage = require('../support/pages/repositoryPage').RepositoryPage;

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

