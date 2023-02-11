const ProjectsPage = {

    createNewProjectBtn: '#createButton',
    projectName: '#project-name',
    projectCode: '#project-code',
    description: '#description-area',
    projectAccessType: {
        private: '[value="private"]',
        public: '[value="public"]'
    },
    memberAccess: {
        all: '[value="all"]',
        group: '[value="group"]',
        none: '[value="none"]'
    },
    cancelBtn: '.LzLtDS.HRmKBJ.MBIQEc',
    createBtn: '.MfLTYs > .tscvgR',
    projects: {
        SMOKE: '.defect-title[href="/project/SMOKE"]'
    }

}

module.exports = {
    ProjectsPage
}