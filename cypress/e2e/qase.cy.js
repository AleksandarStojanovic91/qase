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
  it('Create a test suite', () => {

    cy.login(
        'aleksandar.stojanovic@qakursevionline.com',
        'TestPass123!'
    );
    cy.createTestSuite(
        'TP',
        'Test suite',
        'Project root',
        'Test suite description',
        'Test preconditions'
    )

  })
})