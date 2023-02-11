describe('QASE', () => {
    it('Create a test project', () => {
        cy.login(
            'aleksandar.stojanovic@qakursevionline.com',
            'TestPass123!');
        cy.createProject(
            'TestSmokeProject',
            'SMOKE',
            'Project description',
            'private',
            'all')
    })
    it('Create a test suite', () => {
        cy.login(
            'aleksandar.stojanovic@qakursevionline.com',
            'TestPass123!');

        cy.createTestSuite(
            'SMOKE',
            'Test Smoke Suite',
            'Project root',
            'Test suite description',
            'Test preconditions')
    })
    it('Create a test case', () => {

        cy.login(
            'aleksandar.stojanovic@qakursevionline.com',
            'TestPass123!');

        cy.createTestCase(
            'SMOKE',
            'Test Smoke Suite',
            'Smoke test 1',
            'Draft',
            'This is basic Smoke test',
            'Minor',
            'Low',
            'Smoke',
            'E2E',
            'No',
            'Positive',
            'Automated',
            'pre-condition exampe',
            'post-condition example',
            ['{"stepAction": "step action 1","data": "data 1","expectedResult": "expected result 1"}',
                '{"stepAction": "step action 2","data": "data 2","expectedResult": "expected result 2"}',
                '{"stepAction": "step action 3","data": "data 3","expectedResult": "expected result 3"}'])
    })
})