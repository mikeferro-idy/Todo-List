let taskArray = ["Clean room","Go to gym", "Complete TOP", "Get drunk"];

function displayTasks(tasks) {
    
}

export default function main(){
    const element = document.createElement('div');
    element.id = 'main';

    // Main Header
    const mainHeader = document.createElement('div');
    mainHeader.id = 'main-header';

    const listNameContainer = document.createElement('div');
    const listName = document.createElement('div');
    listName.textContent = "Todo";
    
    listNameContainer.appendChild(listName);
    mainHeader.appendChild(listNameContainer);
    
    const itemBtnContainer = document.createElement('div');
    const itemBtn = document.createElement('button');
    itemBtn.textContent = '+';
    
    itemBtnContainer.appendChild(itemBtn);
    mainHeader.appendChild(itemBtnContainer);
    

    // Main Body
    const mainBody = document.createElement('div');
    mainBody.id = 'main-body';

    const task = document.createElement('div');
    const taskName = document.createElement('div');
    taskName.className = 'task-name'
    taskName.textContent = 'Hello';
    task.appendChild(taskName);
    mainBody.appendChild(task);

    element.appendChild(mainHeader);
    element.appendChild(mainBody);

    return element;
}