describe('QASE', () => {
    xit('Create a test project', () => {
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
    xit('Create a test suite', () => {
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
    xit('Create a test case', () => {

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
    it('Iterate through projects', () => {
        cy.login(
            'aleksandar.stojanovic@qakursevionline.com',
            'TestPass123!');

        // cy.get('.project-row > td:nth-child(4)').each(($el, index, $list)=>{
        //     cy.log("Index " + index + " : " + $el.text())
        // })

        cy.get('.project-row > td:nth-child(4)').each(($el, index, $list)=>{
            cy.wrap($el).invoke('text').as('elementText')
            cy.get('@elementText').its('length').should('eq',16)
            // cy.go('back')
            // cy.go('foreward')
            // cy.reload()
            // cy.reload(true)
        })


        //cy.get('link koji otvara novi tab').invoke('removeAttr','target').click()

    })
})