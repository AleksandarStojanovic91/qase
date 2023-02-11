const CasePage = {

    title: '#title',
    status: '//label[text()="Status"]/..//button',
    dropdownItem: '//div[text()="$"]',
    description: '//label[text()="Description"]/../div[1]/div/div',
    suite: '//label[text()="Suite"]/..//button',
    severity: '//label[text()="Severity"]/..//button',
    priority: '//label[text()="Priority"]/..//button',
    type: '//label[text()="Type"]/..//button',
    layer: '//label[text()="Layer"]/..//button',
    isFlaky: '//label[text()="Is flaky"]/..//button',
    milestone: '//label[text()="Milestone"]/..//button',
    behavior: '//label[text()="Behavior"]/..//button',
    automationStatus: '//label[text()="Automation status"]/..//button',
    preConditions: '[for="0-preconditions"] + div',
    postConditions: '[for="0-postconditions"] + div',
    testCaseStep: {
        addStepBtn: '#application-content > div > div.YUvQsU > form > div.rYnZ8x > div.iFHUaT > div.zeXYJK > button.cdXeQ3.LzLtDS.tscvgR.oqoRHs > span',
        action: ':nth-child(1) > .auto-height > .toastui-editor-defaultUI > .toastui-editor-main > .toastui-editor-main-container > .toastui-editor-ww-container > .toastui-editor > .ProseMirror > .Q9IhIQ',
        data: ':nth-child(2) > .auto-height > .toastui-editor-defaultUI > .toastui-editor-main > .toastui-editor-main-container > .toastui-editor-ww-container > .toastui-editor > .ProseMirror > .Q9IhIQ',
        expectedResult: ':nth-child(3) > .auto-height > .toastui-editor-defaultUI > .toastui-editor-main > .toastui-editor-main-container > .toastui-editor-ww-container > .toastui-editor > .ProseMirror > .Q9IhIQ'
    },
    saveCase: '#save-case'

}

module.exports = {
    CasePage
}