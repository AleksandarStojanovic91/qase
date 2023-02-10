const ProjectPage = {

    createNewProjectBtn: '#createButton',
    projectName: '#project-name',
    projectCode: '#project-code',
    descriptionArea: '#description-area',
    projectAcessType: {
        private: '[value="private"]',
        public: '[value="public"]',

    },
    memberAccess: {
        all: '[value="all"]',
        group: '[value="group"]',
        none: '[value="none"]'
    },
    projects: {
        SMOKE: '.defect-title[href="/project/SMOKE"]'
    },
    
    cancelBtn: '.LzLtDS.HRmKBJ.MBIQEc',
    createBtn: '.MfLTYs > .tscvgR > .UdZcu9'

}

module.exports = {
    ProjectPage
}