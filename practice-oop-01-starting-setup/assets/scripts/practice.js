class Tooltip {

}

class ProjectItem {
    constructor(id) {
        this.id = id;
        this.connectSwitchBtn();
        this.connectMoreInfoBtn();
    }

    connectMoreInfoBtn() {

    }

    connectSwitchBtn() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector(`button:last-of-type`)
        // switchBtn.addEventListener("click", )
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id))
        }

    }


    addProject() {

    }

    switchProject() {

    }
}

class App {
    static init() {
        const activeProjects = new ProjectList(`active`)
        const finishedProjects = new ProjectList(`finished`)
    }
}

App.init();