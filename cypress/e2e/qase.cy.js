const { createTestCasePage } = require("../support/pages/createTestCasePage");

describe('QASE', () => {
  xit('Create a project', () => {

    cy.login(
        'aleksandar.stojanovic@qakursevionline.com',
        'TestPass123!'
    );
    cy.createProject(
        'TestProject',
        'TP',
        'Test description',
        'private',
        'all'
    )

  })
  xit('Create a test suite', () => {

    cy.login(
        'aleksandar.stojanovic@qakursevionline.com',
        'TestPass123!'
    );
    cy.createTestSuite(
        'TP',
        'TestingMS123',
        'Project root',
        'Test suite description',
        'Test preconditions'
    )
  
  })
  it('Create a test case', () => {

      cy.login(
          'aleksandar.stojanovic@qakursevionline.com',
          'TestPass123!'
      )
      cy.openTestCaseForm('TP')
      cy.createTestCaseBasic(
          'Verify valid login',
          'Draft',
          'Logging in with valid credentials',
          'TestingMS123',
          'Critical',
          'High',
          'Functional',
          'E2E',
          'Yes',
          'Positive',
          'To be automated'
       )
      cy.createTestCaseConditions(
        'User already signed up',
        'Projects page is displayed'
      )
      cy.addSteps()
      cy.get(createTestCasePage.saveBtn).click()
      cy.get(createTestCasePage.savedToastCreated)
        .should('be.visible')
        .should('have.text', 'Test case was created successfully!')
    })
})
