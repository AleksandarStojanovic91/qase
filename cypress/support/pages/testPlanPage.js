const TestPlanPage = {

    createTestPlan: '#createButton',
    title: '#title',
    description: '.ProseMirror.toastui-editor-contents',
    addCasesBtn: '#edit-plan-add-cases-button',
    addCasesPage: {
        testSuite: '//*[text()="$"]',
        testCase: '//*[text()="Smoke test 1"]/../../div[1]/div',
        doneBtn: '.MfLTYs > button + button'
    },
    testPlanOnPage: '//*[text()="$"]',
    savePlanBtn: '#save-plan'

}

module.exports = {
    TestPlanPage
}