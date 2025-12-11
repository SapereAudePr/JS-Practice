// class DOMHelper {
//     static clearEventListeners(element) {
//         const clonedElement = element.cloneNode(true);
//         element.replaceWith(clonedElement);
//         return clonedElement;
//     }
//
//     static moveElement(elementId, newDestinationSelector) {
//         const element = document.getElementById(elementId);
//         const destinationElement = document.querySelector(newDestinationSelector);
//         destinationElement.append(element);
//     }
// }
//
// class Component {
//     constructor(hostElementId, insertBefore = false) {
//         if (hostElementId) {
//             this.hostElement = document.getElementById(hostElementId);
//         } else {
//             this.hostElement = document.body;
//         }
//
//         this.insertBefore = insertBefore;
//     }
//
//     remove() {
//         if (this.element) {
//         this.element.remove();
//         }
//     }
//
//     show() {
//         this.hostElement.insertAdjacentElement(this.insertBefore ? `afterbegin`: `beforeend`, this.element);
//     }
// }
//
// class Tooltip extends Component {
//     constructor(closeNotifierFunction) {
//         super();
//         this.closeNotifier = closeNotifierFunction;
//         this.create();
//     }
//
//     closeTooltip() {
//         this.remove();
//         this.closeNotifier();
//     }
//
//     create() {
//         const tooltipElement = document.createElement('div');
//         tooltipElement.className = `card`;
//         tooltipElement.textContent = `TEEST`
//         tooltipElement.addEventListener(`click`, this.closeTooltip.bind(this));
//         this.element = tooltipElement;
//     }
//
// }
//
// class ProjectItem {
//     hasActiveTooltip = false;
//
//     constructor(id, updateProjectListsFunction, type) {
//         this.id = id;
//         this.updateProjectListsHandler = updateProjectListsFunction;
//         this.connectMoreInfoBtn();
//         this.connectSwitchBtn(type);
//     }
//
//     showMoreInfoHandler() {
//         if (this.hasActiveTooltip) return;
//         const tooltip = new Tooltip(() => {
//             this.hasActiveTooltip = false;
//         });
//         tooltip.show();
//         this.hasActiveTooltip = true;
//     }
//
//     connectMoreInfoBtn() {
//         const projectItemElement = document.getElementById(this.id);
//         const moreInfoBtn = projectItemElement.querySelector(`button:first-of-type`);
//         moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
//     }
//
//     connectSwitchBtn(type) {
//         const projectItemElement = document.getElementById(this.id);
//         let switchBtn = projectItemElement.querySelector(`button:last-of-type`);
//         switchBtn = DOMHelper.clearEventListeners(switchBtn);
//         switchBtn.textContent = type === 'active' ? `Finish`: `Activate`;
//         switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
//     }
//
//     update(updateProjectListsFn, type) {
//         this.updateProjectListsHandler = updateProjectListsFn
//         this.connectSwitchBtn(type);
//     }
// }
//
// class ProjectList {
//     projects = [];
//
//     constructor(type) {
//         this.type = type;
//         const prjItems = document.querySelectorAll(`#${type}-projects li`);
//         for (const prjItem of prjItems) {
//             this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
//         }
//         console.log(this.projects);
//     }
//
//     setSwitchHandler(switchHandlerFunction) {
//         this.switchHandler = switchHandlerFunction;
//     }
//
//     addProject(project) {
//         this.projects.push(project);
//         DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
//         project.update(this.switchProject.bind(this), this.type);
//     }
//
//     switchProject(projectId) {
//         // const projectIndex = this.projects.indexOf(p => p.id === projectId);
//         // this.projects.splice(projectIndex, 1);
//         this.switchHandler(this.projects.find(p => p.id === projectId));
//         this.projects = this.projects.filter(p => p.id !== projectId);
//     }
// }
//
// class App {
//     static init() {
//         const activeProjectList = new ProjectList(`active`);
//         const finishedProjectList = new ProjectList(`finished`);
//         activeProjectList.setSwitchHandler(finishedProjectList.addProject.bind(finishedProjectList));
//         finishedProjectList.setSwitchHandler(activeProjectList.addProject.bind(activeProjectList));
//     }
// }
//
// App.init();