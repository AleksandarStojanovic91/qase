const createTestCasePage =  {

    //basic
    testCaseTitle:'#title',
    parentSuite:'.H58xsN',
    description:'[for="0-description"]+div',
    preconditions:':nth-child(4) > .M7GDGt',
    dropdownOption: '.DJXdnf',
    statusDropdown: '[for="0-status"] + div',
    suiteDropdown: '[for="suite"] + div',
    severityDropdown: '[for="0-severity"] + div',
    priorityDropdown: '[for="0-priority"] + div',   
    typeDropdown: '[for="0-type"] + div',
    layerDropdown: '[for="0-layer"] + div',
    isFlakyDropdown: '[for="0-is_flaky"] + div',
    milestoneDropdown: '[for="milestone"] + div',
    behaviorDropdown: '[for="0-behavior"] + div',
    automationStatusDropdown: '[for="0-automation"] + div',
    //conditions
    preconditions: '[for="0-preconditions"] + div',
    postconditions: '[for="0-postconditions"] + div',
    //steps
    addStepBtn: '.cdXeQ3.LzLtDS.tscvgR',
    stepAction: '[data-placeholder="Step Action"]', 
    stepData: '[data-placeholder="Data"]',
    expectedResult: '[data-placeholder="Expected result"]',
    //other
    saveBtn: '#save-case',
    savedToastCreated: '.OL6rtE'
}

module.exports = {
    createTestCasePage
}